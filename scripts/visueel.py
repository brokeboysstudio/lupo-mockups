# Visuele laag voor de app-mockups: grafieken, kaarten en beelden als inline SVG.
# Wordt ingeladen door genereer-app-mockups.py en vervangt de schermen met dezelfde id.
# Lessen uit Strava, WHOOP, Runna en TrainingPeaks: eerst een beeld, dan het getal, dan pas tekst.
# Geen Strava-data: kaarten en grafieken komen uit de eigen import van de atleet.

import math

ACC = "#c8f135"
ZONE_KLEUR = {1: "#4a4a4a", 2: "#7d9400", 3: "#c8f135", 4: "#ffb020", 5: "#ff4d4d"}


def _pad(punten):
    return " ".join(f"{x:.1f},{y:.1f}" for x, y in punten)


def ring(pct, kleur, groot, klein, maat=132):
    r = maat / 2 - 9
    omtrek = 2 * math.pi * r
    return (f'<svg width="{maat}" height="{maat}" viewBox="0 0 {maat} {maat}">'
            f'<circle cx="{maat/2}" cy="{maat/2}" r="{r}" fill="none" stroke="#1d1d1d" stroke-width="10"/>'
            f'<circle cx="{maat/2}" cy="{maat/2}" r="{r}" fill="none" stroke="{kleur}" stroke-width="10" stroke-linecap="round" '
            f'stroke-dasharray="{omtrek*pct:.1f} {omtrek:.1f}" transform="rotate(-90 {maat/2} {maat/2})"/>'
            f'<text x="50%" y="48%" text-anchor="middle" fill="#ededeb" font-family="Bebas Neue" font-size="{maat*0.25:.0f}">{groot}</text>'
            f'<text x="50%" y="66%" text-anchor="middle" fill="rgba(237,237,235,0.5)" font-family="DM Sans" font-size="9" letter-spacing="1.5">{klein}</text></svg>')


def lijn(waarden, band=None, b=300, h=90, kleur=ACC, labels=None, laatste_kleur=None):
    lo, hi = min(waarden + (list(band) if band else [])) - 3, max(waarden + (list(band) if band else [])) + 3
    sx = lambda i: 4 + i * (b - 8) / (len(waarden) - 1)
    sy = lambda v: h - 14 - (v - lo) / (hi - lo) * (h - 22)
    pts = [(sx(i), sy(v)) for i, v in enumerate(waarden)]
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    if band:
        s += f'<rect x="0" y="{sy(band[1]):.1f}" width="{b}" height="{sy(band[0]) - sy(band[1]):.1f}" fill="rgba(200,241,53,0.08)"/>'
    s += f'<polygon fill="url(#g{len(waarden)})" points="{_pad(pts)} {pts[-1][0]:.1f},{h-14} {pts[0][0]:.1f},{h-14}"/>'
    s += f'<defs><linearGradient id="g{len(waarden)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{kleur}" stop-opacity="0.25"/><stop offset="1" stop-color="{kleur}" stop-opacity="0"/></linearGradient></defs>'
    s += f'<polyline fill="none" stroke="{kleur}" stroke-width="2" stroke-linejoin="round" points="{_pad(pts)}"/>'
    lx, ly = pts[-1]
    s += f'<circle cx="{lx:.1f}" cy="{ly:.1f}" r="4" fill="{laatste_kleur or kleur}" stroke="#050505" stroke-width="2"/>'
    if labels:
        for i, t in labels:
            s += f'<text x="{sx(i):.1f}" y="{h-2}" text-anchor="middle" fill="rgba(237,237,235,0.35)" font-family="DM Sans" font-size="8">{t}</text>'
    return s + "</svg>"


def workout(blokken, h=56, b=300):
    """Workoutprofiel zoals TrainingPeaks: breedte = duur, hoogte = zone."""
    tot = sum(m for m, _ in blokken)
    x, s = 0.0, f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}" preserveAspectRatio="none">'
    for m, z in blokken:
        w = m / tot * b
        hh = h * (0.22 + 0.155 * z)
        s += f'<rect x="{x+0.6:.1f}" y="{h-hh:.1f}" width="{max(w-1.2, 1):.1f}" height="{hh:.1f}" rx="2" fill="{ZONE_KLEUR[z]}"/>'
        x += w
    return s + "</svg>"


def zoneverdeling(aandelen):
    """Tijd in zone als gestapelde balk met legende."""
    balk = "".join(f'<i style="width:{p}%;background:{ZONE_KLEUR[z]}"></i>' for z, p in aandelen)
    leg = "".join(f'<span><b style="background:{ZONE_KLEUR[z]}"></b>Z{z} {p}%</span>' for z, p in aandelen)
    return f'<div class="zbar">{balk}</div><div class="zleg">{leg}</div>'


ROUTE_ANTWERPEN = "M120.4 49.9L119.3 49L122.2 41.8L124.3 42.6L127.1 34.7L130.5 29.5L130.8 23L133 16.1L140.7 15.8L140.7 9.8L140.7 16.1L144.6 16.4L147 17.2L157.9 17.2L158.5 17.6L160.1 15.3L160.8 15L171.7 15.1L172.5 16.2L175 16.7L176.3 17.4L177.9 17.5L180.1 18.5L181.2 18.4L184.2 20.1L188.1 20.6L190.4 22.5L193.1 22.2L196.6 22.9L199.4 18.1L202.9 19.8L203.5 19.6L204.6 17.7L203.5 19.6L202.9 19.8L199.4 18.1L196.8 22.7L193.1 22.2L190.9 22.7L190.2 23.1L189.7 25.1L189.3 24.9L189.1 25.6L185.2 24.7L183.2 28.5L183.4 29L182.1 29.5L181.6 31.3L180.3 33L179.2 46.7L176.7 47.1L176.7 48.2L174.6 48.7L168.4 74.6L170.5 91.5L168.6 91.8L169.8 95.4L167.8 95.6L168.7 95.8L169 97.3L168.7 97.9L166.8 98.3L152.2 94.9L148.9 98.9L146.4 100.6L123.3 113.6L118.1 118.5L116.4 120.7L110.2 130.4L109.2 132.7L107.5 131.7L103.5 137.9L100.3 137.2L99.8 139L98.6 138.9L98.2 140L97.5 140.2L95.4 138.8L97.5 140.2L98.2 140L98.6 138.9L99.8 139L100.3 137.2L101.5 137.5L101.9 134.7L101.1 129.1L99.3 125.6L100 122.6L98.8 119.8L97.6 118.6L99.2 107.8L98.4 107.4L98.4 106.4L106.3 95.7L103.9 87.5L104.4 86.8L103.8 86.4L108.6 76.9L109.5 74.1L110.7 74.7L120.6 51.7L120.2 51.4L120.4 49.9"


def kaart_antwerpen(label=""):
    """Echte kaart: OpenStreetMap-data van Antwerpen, route Steenplein, Eilandje, Park Spoor Noord, Stadspark, Zuid."""
    s = ('<svg viewBox="0 0 300 150" width="100%" height="150" class="map">'
         '<image href="kaart-antwerpen.jpg" width="300" height="150" preserveAspectRatio="xMidYMid slice"/>'
         f'<path d="{ROUTE_ANTWERPEN}" fill="none" stroke="rgba(200,241,53,0.22)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>'
         f'<path d="{ROUTE_ANTWERPEN}" fill="none" stroke="{ACC}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'
         f'<circle cx="120.4" cy="49.9" r="4" fill="#050505" stroke="{ACC}" stroke-width="2"/>'
         '<text x="294" y="145" text-anchor="end" fill="rgba(237,237,235,0.45)" font-family="DM Sans" font-size="6">© OpenStreetMap-bijdragers</text>')
    if label:
        s += f'<text x="10" y="18" fill="rgba(237,237,235,0.6)" font-family="DM Sans" font-size="9" letter-spacing="1">{label}</text>'
    return s + "</svg>"


def kaart(h=170, route="thun", label=""):
    """Gestileerde kaart met route, uit de eigen import (GPX of FIT)."""
    if route == "thun":
        pad = [(30, 140), (52, 120), (70, 118), (92, 100), (118, 96), (140, 80), (160, 82), (186, 64), (210, 60), (236, 44), (262, 40), (282, 52), (270, 72), (246, 84), (220, 100), (196, 116), (170, 122), (140, 132), (110, 138), (78, 146), (46, 150), (30, 140)]
        water = "M0,170 L0,120 C40,110 70,150 120,150 C170,150 200,128 250,110 C280,100 300,104 300,104 L300,170 Z"
    elif route == "rit":
        pad = [(20, 100), (44, 76), (70, 70), (96, 52), (128, 46), (150, 28), (184, 24), (214, 36), (246, 30), (276, 50), (266, 78), (236, 92), (206, 104), (170, 98), (136, 108), (100, 112), (64, 110), (38, 108), (20, 100)]
        water = "M0,170 L0,150 C80,140 160,160 300,150 L300,170 Z"
    else:
        pad = [(40, 130), (60, 100), (90, 92), (120, 70), (160, 66), (200, 50), (240, 60), (262, 90), (230, 116), (190, 124), (150, 130), (100, 140), (60, 142), (40, 130)]
        water = "M0,170 L0,150 C60,140 120,165 300,140 L300,170 Z"
    straten = "".join(f'<line x1="{x}" y1="0" x2="{x-40}" y2="{h}" stroke="#141414" stroke-width="1"/>' for x in range(0, 360, 26))
    straten += "".join(f'<line x1="0" y1="{y}" x2="300" y2="{y+18}" stroke="#141414" stroke-width="1"/>' for y in range(0, h, 22))
    s = (f'<svg viewBox="0 0 300 {h}" width="100%" height="{h}" class="map"><rect width="300" height="{h}" fill="#0b0d0c"/>{straten}'
         f'<path d="{water}" fill="#0d1b22"/>'
         f'<polyline fill="none" stroke="rgba(200,241,53,0.25)" stroke-width="7" stroke-linejoin="round" points="{_pad(pad)}"/>'
         f'<polyline fill="none" stroke="{ACC}" stroke-width="2.5" stroke-linejoin="round" points="{_pad(pad)}"/>'
         f'<circle cx="{pad[0][0]}" cy="{pad[0][1]}" r="5" fill="#050505" stroke="{ACC}" stroke-width="2.5"/>')
    if label:
        s += f'<text x="10" y="18" fill="rgba(237,237,235,0.6)" font-family="DM Sans" font-size="9" letter-spacing="1">{label}</text>'
    return s + "</svg>"


def hoogte(punten, h=46, b=300, kleur="#ededeb"):
    lo, hi = min(punten), max(punten)
    pts = [(i * b / (len(punten) - 1), h - 4 - (v - lo) / (hi - lo or 1) * (h - 10)) for i, v in enumerate(punten)]
    return (f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}" preserveAspectRatio="none">'
            f'<polygon fill="rgba(237,237,235,0.08)" points="{_pad(pts)} {b},{h} 0,{h}"/>'
            f'<polyline fill="none" stroke="{kleur}" stroke-opacity="0.6" stroke-width="1.5" points="{_pad(pts)}"/></svg>')


def beeld(scene="thun", h=150, titel="", sub="", tag=""):
    """Sfeerbeeld als SVG-illustratie: de plek waar de foto van de race komt."""
    if scene == "thun":
        lucht = ("#1a2a3a", "#c98b5a")
        lagen = ('<path d="M0,95 L40,55 L70,80 L110,30 L150,75 L190,40 L230,70 L270,35 L300,60 L300,150 L0,150Z" fill="#2a3440"/>'
                 '<path d="M110,30 L122,44 L100,46Z M270,35 L280,46 L262,47Z" fill="#e8e4dc" opacity="0.8"/>'
                 '<path d="M0,110 L60,90 L120,105 L180,88 L240,104 L300,92 L300,150 L0,150Z" fill="#18212a"/>'
                 '<rect y="118" width="300" height="32" fill="#1d3a4a"/><rect y="118" width="300" height="2" fill="#c98b5a" opacity="0.4"/>')
    elif scene == "weg":
        lucht = ("#10141a", "#3a4a58")
        lagen = ('<path d="M0,100 L80,80 L160,92 L240,74 L300,86 L300,150 L0,150Z" fill="#161c22"/>'
                 '<path d="M130,150 L148,96 L152,96 L170,150Z" fill="#2a2f35"/><path d="M149,150 L150,98 L151,150Z" fill="#c8f135" opacity="0.5"/>')
    else:  # baan
        lucht = ("#0e1012", "#1e2a1e")
        lagen = ('<ellipse cx="150" cy="128" rx="170" ry="46" fill="#3a1e18"/><ellipse cx="150" cy="128" rx="130" ry="30" fill="#1d3320"/>'
                 '<ellipse cx="150" cy="128" rx="150" ry="38" fill="none" stroke="#e8e4dc" stroke-opacity="0.25" stroke-dasharray="3 5"/>')
    # Echte foto (Unsplash) over de illustratie; laadt die niet, dan blijft de illustratie staan.
    foto = {"thun": "photo-1627156399021-721b0f720f8d", "weg": "photo-1679769177248-727f4d1047a5", "baan": "photo-1474546652694-a33dd8161d66"}.get(scene)
    if foto:
        lagen += f'<image href="https://images.unsplash.com/{foto}?w=900&amp;q=75&amp;auto=format&amp;fit=crop" width="300" height="{h}" preserveAspectRatio="xMidYMid slice"/>'
    tekst = ""
    if tag:
        tekst += f'<text x="14" y="22" fill="{ACC}" font-family="DM Sans" font-size="9" letter-spacing="1.5">{tag}</text>'
    if titel:
        tekst += f'<text x="14" y="{h-28}" fill="#ededeb" font-family="Bebas Neue" font-size="22">{titel}</text>'
    if sub:
        tekst += f'<text x="14" y="{h-12}" fill="rgba(237,237,235,0.7)" font-family="DM Sans" font-size="11">{sub}</text>'
    return (f'<svg viewBox="0 0 300 {h}" width="100%" height="{h}" class="beeld" preserveAspectRatio="xMinYMid slice">'
            f'<defs><linearGradient id="l{scene}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{lucht[0]}"/><stop offset="1" stop-color="{lucht[1]}"/></linearGradient>'
            f'<linearGradient id="v{scene}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0.45"/><stop offset="0.3" stop-color="#000" stop-opacity="0"/><stop offset="0.5" stop-color="#000" stop-opacity="0.1"/><stop offset="1" stop-color="#0a0a0a" stop-opacity="0.92"/></linearGradient></defs>'
            f'<rect width="300" height="{h}" fill="url(#l{scene})"/>{lagen}<rect width="300" height="{h}" fill="url(#v{scene})"/>{tekst}</svg>')


def staven(waarden, labels, h=70, b=300, markeer=None, gepland=None):
    m = max(waarden + (gepland or [])) or 1
    w = b / len(waarden)
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    for i, v in enumerate(waarden):
        x = i * w + w * 0.2
        if gepland:
            gh = gepland[i] / m * (h - 16)
            s += f'<rect x="{x:.1f}" y="{h-12-gh:.1f}" width="{w*0.6:.1f}" height="{gh:.1f}" rx="3" fill="none" stroke="rgba(237,237,235,0.18)" stroke-dasharray="2 2"/>'
        vh = v / m * (h - 16)
        kleur = ACC if markeer is None or i == markeer else "#3a3a3a"
        s += f'<rect x="{x:.1f}" y="{h-12-vh:.1f}" width="{w*0.6:.1f}" height="{vh:.1f}" rx="3" fill="{kleur}"/>'
        s += f'<text x="{x + w*0.3:.1f}" y="{h-1}" text-anchor="middle" fill="rgba(237,237,235,0.4)" font-family="DM Sans" font-size="8">{labels[i]}</text>'
    return s + "</svg>"


def verdeling(pct, h=80, b=300, label="jij"):
    """Klokcurve met jouw plek: de ladder als beeld."""
    pts = [(x, h - 14 - 56 * math.exp(-((x - 150) / 55) ** 2)) for x in range(0, b + 1, 6)]
    xj = b * pct
    yj = h - 14 - 56 * math.exp(-((xj - 150) / 55) ** 2)
    return (f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
            f'<polygon fill="rgba(237,237,235,0.07)" points="{_pad(pts)} {b},{h-14} 0,{h-14}"/>'
            f'<polygon fill="rgba(200,241,53,0.18)" points="{_pad([p for p in pts if p[0] >= xj])} {b},{h-14} {xj:.1f},{h-14}"/>'
            f'<polyline fill="none" stroke="rgba(237,237,235,0.4)" stroke-width="1.5" points="{_pad(pts)}"/>'
            f'<line x1="{xj:.1f}" y1="{yj-6:.1f}" x2="{xj:.1f}" y2="{h-14}" stroke="{ACC}" stroke-width="2"/>'
            f'<circle cx="{xj:.1f}" cy="{yj-6:.1f}" r="4" fill="{ACC}"/>'
            f'<text x="{xj:.1f}" y="{yj-14:.1f}" text-anchor="middle" fill="{ACC}" font-family="DM Sans" font-size="9">{label}</text>'
            f'<line x1="0" y1="{h-14}" x2="{b}" y2="{h-14}" stroke="#1d1d1d"/></svg>')


def spreiding(punten, ik, top_y, b=300, h=170):
    """Progressie tegen volume: wie wint met het minste uren, staat linksboven."""
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}"><rect x="24" y="8" width="{b-30}" height="{top_y-8}" fill="rgba(200,241,53,0.07)"/>'
    s += f'<text x="{b-8}" y="20" text-anchor="end" fill="{ACC}" font-family="DM Sans" font-size="8">TOP 5%</text>'
    s += f'<line x1="24" y1="{h-20}" x2="{b}" y2="{h-20}" stroke="#2a2a2a"/><line x1="24" y1="8" x2="24" y2="{h-20}" stroke="#2a2a2a"/>'
    s += f'<text x="{b-4}" y="{h-6}" text-anchor="end" fill="rgba(237,237,235,0.4)" font-family="DM Sans" font-size="8">UUR PER WEEK →</text>'
    s += f'<text x="10" y="{h/2}" fill="rgba(237,237,235,0.4)" font-family="DM Sans" font-size="8" transform="rotate(-90 10 {h/2})" text-anchor="middle">PROGRESSIE →</text>'
    for x, y in punten:
        s += f'<circle cx="{x}" cy="{y}" r="2.6" fill="rgba(237,237,235,0.28)"/>'
    s += f'<circle cx="{ik[0]}" cy="{ik[1]}" r="6" fill="{ACC}" stroke="#050505" stroke-width="2"/><text x="{ik[0]+10}" y="{ik[1]+4}" fill="{ACC}" font-family="DM Sans" font-size="9">jij</text>'
    return s + "</svg>"


def radar(voor, na, labels, maat=210):
    c, r = maat / 2, maat / 2 - 30
    n = len(labels)
    hoek = lambda i: -math.pi / 2 + i * 2 * math.pi / n
    p = lambda i, v: (c + r * v * math.cos(hoek(i)), c + r * v * math.sin(hoek(i)))
    s = f'<svg viewBox="0 0 {maat} {maat}" width="{maat}" height="{maat}">'
    for k in (0.33, 0.66, 1):
        s += f'<polygon fill="none" stroke="#1f1f1f" points="{_pad([p(i, k) for i in range(n)])}"/>'
    for i, t in enumerate(labels):
        x, y = p(i, 1.22)
        s += f'<text x="{x:.1f}" y="{y+3:.1f}" text-anchor="middle" fill="rgba(237,237,235,0.55)" font-family="DM Sans" font-size="9">{t}</text>'
    s += f'<polygon fill="rgba(237,237,235,0.08)" stroke="rgba(237,237,235,0.4)" stroke-dasharray="3 3" points="{_pad([p(i, v) for i, v in enumerate(voor)])}"/>'
    s += f'<polygon fill="rgba(200,241,53,0.2)" stroke="{ACC}" stroke-width="2" points="{_pad([p(i, v) for i, v in enumerate(na)])}"/>'
    return s + "</svg>"


def avatar(initialen, kleur, rand=None):
    r = f'box-shadow:0 0 0 2px {rand};' if rand else ""
    return f'<span class="av" style="background:{kleur};{r}">{initialen}</span>'


def periodisering(b=300, h=110, nu=0.42):
    """Blokken richting de race met fitheidslijn (CTL) en taper."""
    blokken = [("BASIS", 0, 0.34, "#2a2a2a"), ("OPBOUW", 0.34, 0.7, "#4b5a00"), ("PIEK", 0.7, 0.92, "#7d9400"), ("TAPER", 0.92, 1, ACC)]
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    for t, a, z, k in blokken:
        s += f'<rect x="{a*b:.1f}" y="{h-26}" width="{(z-a)*b-2:.1f}" height="10" rx="2" fill="{k}"/>'
        s += f'<text x="{a*b+2:.1f}" y="{h-4}" fill="rgba(237,237,235,0.45)" font-family="DM Sans" font-size="7.5">{t}</text>'
    ctl = [(x * b / 40, h - 34 - 60 * (min(x / 37, 1) ** 0.9) + (6 if x > 37 else 0)) for x in range(41)]
    s += f'<polyline fill="none" stroke="{ACC}" stroke-width="2" points="{_pad(ctl)}"/>'
    s += f'<line x1="{nu*b:.1f}" y1="6" x2="{nu*b:.1f}" y2="{h-26}" stroke="#ededeb" stroke-opacity="0.5" stroke-dasharray="2 3"/>'
    s += f'<text x="{nu*b+4:.1f}" y="14" fill="#ededeb" font-family="DM Sans" font-size="8">NU</text>'
    s += f'<text x="{b-2}" y="14" text-anchor="end" fill="{ACC}" font-family="DM Sans" font-size="8">THUN</text>'
    return s + "</svg>"


CSS_EXTRA = """
.beeld, .map { display:block; border-radius: 14px; }
.media { border-radius: 14px; overflow: hidden; border: 1px solid var(--line); margin-bottom: 8px; background: var(--card); }
.media .in { padding: 10px 12px 12px; }
.hero { display: flex; align-items: center; gap: 14px; margin: 6px 0 4px; }
.zbar { display: flex; height: 10px; border-radius: 5px; overflow: hidden; gap: 2px; margin-top: 6px; }
.zbar i { display: block; height: 100%; }
.zleg { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; font-family: 'DM Sans', sans-serif; font-size: 9px; color: var(--muted-2); }
.zleg b { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px 6px; margin: 10px 0; }
.stats .k { font-family: 'DM Sans', sans-serif; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.stats .v { font-family: 'Bebas Neue', sans-serif; font-size: 20px; }
.av { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; font-size: 11px; font-weight: 600; color: #050505; flex-shrink: 0; }
.avs { display: flex; } .avs .av { margin-left: -8px; border: 2px solid var(--bg); } .avs .av:first-child { margin-left: 0; }
.legend { display:flex; gap:12px; font-family:'DM Sans',monospace; font-size:9px; color:var(--muted-2); margin-top:4px; }
.legend b { display:inline-block; width:10px; height:3px; margin-right:4px; vertical-align:2px; }
.scroll-x { display: flex; gap: 8px; overflow-x: auto; margin: 0 -18px; padding: 0 18px 4px; scrollbar-width: none; }
.scroll-x > * { flex: 0 0 78%; }
.fab { width: 44px; height: 44px; padding: 0 !important; border-radius: 50% !important; font-size: 0 !important; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(0,0,0,0.5); }
.fab::after { content: ""; width: 16px; height: 14px; border: 2px solid #050505; border-radius: 4px 4px 4px 0; }
.daycol { display:grid; grid-template-columns: 34px 1fr auto; gap:10px; align-items:center; padding:8px 10px; background:var(--card); border:1px solid var(--line); border-radius:12px; margin-bottom:6px; font-size:12px; text-decoration:none; color:inherit; }
.daycol.on { border-color: var(--accent); }
.daycol .d { font-family:'DM Sans',monospace; font-size:10px; color:var(--muted); line-height:1.2; }
.daycol .d b { display:block; font-family:Bebas Neue; font-size:16px; color:var(--text); font-weight:400; }
.speed { display:grid; grid-template-columns: 1fr 120px; gap:10px; align-items:center; }
"""

_INDEX = {s["id"]: i for i, s in enumerate(SCHERMEN)}


def vervang(id, **kw):
    s = SCHERMEN[_INDEX[id]]
    s.update(kw)


HRV = [61, 60, 62, 59, 61, 63, 60, 62, 61, 59, 58, 56, 54, 52]
HRV_LABELS = [(0, "24 okt"), (6, "30 okt"), (13, "vandaag")]
DREMPEL = [(10, 1), (8, 2), (6, 2), (8, 4), (3, 1), (8, 4), (3, 1), (8, 4), (3, 1), (8, 4), (10, 1)]
ZONE2 = [(8, 1), (32, 2), (5, 1)]

# ── ONBOARDING ───────────────────────────────────────────────────────────────
vervang("o1", body=f"""
<div class="lbl acc">1 van 3</div>
<div class="h-l">WAAR TRAIN JE <span class="acc">NAARTOE?</span></div>
<div class="card" style="padding:10px 12px;margin:10px 0"><span>thu</span><span class="mut">|</span></div>
<a class="media" href="o2.html" style="display:block;text-decoration:none;color:inherit;border-color:var(--accent)">
  {beeld("thun", 130, "IRONMAN SWITZERLAND THUN", "4 juli 2027 • 34 weken", "A-RACE · TRIATLON")}
  <div class="in">{hoogte([560,560,600,720,840,1010,760,620,560,600,700,640,560], 34)}
  <div class="legend"><span>3,8 km zwem</span><span>180 km fiets · 2.100 hm</span><span>42,2 km loop</span></div></div>
</a>
<div class="lbl">Populair in België</div>
<div class="scroll-x">
  <a class="media" href="o2.html" style="text-decoration:none;color:inherit">{beeld("weg", 96, "ANTWERP 10 MILES", "~15 apr 2027", "LOPEN")}</a>
  <a class="media" href="o2.html" style="text-decoration:none;color:inherit">{beeld("weg", 96, "BRUSSELS MARATHON", "~3 okt 2027", "LOPEN")}</a>
</div>
<a class="btn-text" href="o2.html">Nog geen race — gewoon fitter worden</a>
""")

vervang("o2", body="""
<div class="lbl acc">2 van 3</div>
<div class="h-l">HOEVEEL TRAIN JE <span class="acc">NU?</span></div>
<p class="p" style="margin:8px 0 12px">IRONMAN Switzerland Thun • 34 weken</p>
""" + "".join(
    f'<a class="card{" hl" if i == 1 else ""}" href="o3.html" style="display:grid;grid-template-columns:1fr 92px;gap:10px;align-items:center">'
    f'<div><div class="h-m">{t}</div><div class="p">{d}</div></div>'
    f'<div class="zbar" style="height:28px;align-items:flex-end;background:none;gap:3px">' + "".join(
        f'<i style="flex:1;height:{min(100, 18 + n*12 + (j % 3) * 8)}%;background:{ACC if i == 1 else "#3a3a3a"};border-radius:2px"></i>' for j in range(7)) + '</div></a>'
    for i, (n, t, d) in enumerate([(0, "Tot 4 uur", "Opbouwen naar de basis"), (2, "4 tot 8 uur", "Regelmatig, nog geen structuur"),
                                   (4, "8 tot 12 uur", "Gestructureerd, eerdere races"), (6, "Meer dan 12 uur", "Competitief")])))

WEEK1 = [("MA", "2", "Rust", None, "—"), ("DI", "3", "Loop · zone 2", [(5, 1), (40, 2), (5, 1)], "50 min"),
         ("WO", "4", "Zwem · techniek", [(10, 1), (8, 2), (4, 3), (8, 2), (4, 3), (8, 2), (3, 1)], "45 min"),
         ("DO", "5", "Fiets · 3×10 tempo", [(15, 1), (10, 3), (5, 1), (10, 3), (5, 1), (10, 3), (20, 2)], "75 min"),
         ("VR", "6", "Rust", None, "—"), ("ZA", "7", "Lange rit", [(10, 1), (100, 2), (10, 1)], "2u"), ("ZO", "8", "Lange loop", [(5, 1), (60, 2), (5, 1)], "1u10")]
def daglijst(week, link="d1.html", on=None):
    return "".join(f'<a class="daycol{" on" if d == on else ""}" href="{link}"><div class="d">{d}<b>{n}</b></div>'
                   f'<div><div style="font-size:12px;margin-bottom:4px">{t}</div>{workout(w, 18) if w else "<div class=mut style=font-size:11px>herstel</div>"}</div>'
                   f'<span class="r" style="font-family:DM Sans;font-size:10px;color:var(--muted-2)">{m}</span></a>' for d, n, t, w, m in week)

vervang("o3", body=f"""
<div class="lbl acc">3 van 3</div>
<div class="h-l">JE EERSTE <span class="acc">WEEK</span></div>
<p class="p" style="margin:4px 0 6px">Basisfase • 7u20 • 34 weken tot Thun</p>
<div class="card" style="padding:8px 10px">{periodisering(h=84, nu=0.0)}</div>
{daglijst(WEEK1)}
<a class="btn-primary" href="d1.html" style="margin-top:6px">Start — koppel je horloge</a>
""")

# ── VANDAAG ──────────────────────────────────────────────────────────────────
def ochtend(met_waarom):
    waarom = ('<div class="why">HRV staat <b>15% onder je 7-daagse gemiddelde</b>. De drempel voor afbouwen is −5%.</div>' if met_waarom else "")
    return f"""
<div class="lbl">Donderdag 5 november</div>
<div class="hero">{ring(0.42, "#ffb020", "42", "PARAAT")}
  <div><div class="h-l">AFBOUWEN</div><div class="p" style="margin-top:4px">Intensiteit eruit.<br/>Duur naar 60%.</div></div></div>
{waarom}
<a class="card" href="d2.html" style="padding:10px 12px 6px">
  <div style="display:flex;justify-content:space-between"><span class="k lbl" style="margin:0">HRV · 14 dagen</span><span class="warn" style="font-family:Bebas Neue;font-size:18px">52 ms</span></div>
  {lijn(HRV, (58, 64), h=78, labels=HRV_LABELS, laatste_kleur="#ffb020")}
</a>
<div class="tiles t2">
  <a class="tile" href="d2.html"><div class="k">Slaap</div><div class="v">6u10</div><div class="bar"><i style="width:72%"></i></div></a>
  <a class="tile" href="d2.html"><div class="k">Belasting</div><div class="v">1.12</div><div class="bar"><i style="width:56%"></i></div></a>
</div>
<div class="lbl">Training · aangepast</div>
<a class="card hl" href="d5.html">
  <div style="display:flex;justify-content:space-between;align-items:baseline"><div class="h-m">Zone 2 · 45 min</div><span class="pill acc">Aangepast</span></div>
  <div style="margin:8px 0 2px">{workout(ZONE2, 34)}</div>
  <div style="opacity:0.35;margin-top:6px">{workout(DREMPEL, 22)}</div>
  <div class="p" style="font-size:11px">Was: drempel 4×8 min, 70 min</div>
</a>
<a class="btn-primary" href="d5.html">Gedaan</a>
<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>
"""

vervang("d1", body=ochtend(True) + '<a class="btn-text" href="d2.html">Waarom deze beslissing →</a>')
vervang("d1z", body=ochtend(False))

vervang("d1b", body=f"""
<div class="lbl">Vrijdag 6 november</div>
<div class="hero">{ring(0.86, ACC, "86", "PARAAT")}<div><div class="h-l acc">VOLUIT</div><div class="p" style="margin-top:4px">Alles binnen je<br/>eigen band.</div></div></div>
<a class="card" href="d2.html" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">HRV · 14 dagen</span>{lijn(HRV[:-3] + [57, 59, 61], (58, 64), h=70, labels=HRV_LABELS)}</a>
<div class="lbl">Training</div>
<a class="card" href="d5.html"><div class="h-m">Fiets · 2×20 min drempel</div><div style="margin:8px 0 4px">{workout([(15, 1), (10, 2), (20, 4), (5, 1), (20, 4), (20, 2)], 34)}</div><div class="p" style="font-size:11px">90 min • TSS 95 • blok 2 van 4</div></a>
<a class="btn-primary" href="d5.html">Gedaan</a>
<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>
""")

vervang("d2", body=f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="d1.html">← Vandaag</a>
<div class="h-l">WAAROM <span class="acc">AFBOUWEN</span></div>
<p class="p" style="margin:6px 0 10px">Drie signalen, vaste drempels. Eén regel kantelde.</p>
<div class="card warnc" style="padding:10px 12px 6px"><div style="display:flex;justify-content:space-between"><span>HRV vs 7-daags gemiddelde</span><span class="warn" style="font-family:DM Sans;font-size:11px">−15% · grens −5%</span></div>
{lijn(HRV, (58, 64), h=90, labels=HRV_LABELS, laatste_kleur="#ffb020")}<div class="legend"><span><b style="background:rgba(200,241,53,0.3)"></b>jouw band</span><span><b style="background:{ACC}"></b>HRV per nacht</span></div></div>
<div class="card" style="padding:10px 12px 6px"><div style="display:flex;justify-content:space-between"><span>Slaap</span><span class="r">6u10 · grens 6u</span></div>
{staven([7.4, 7.1, 7.8, 6.9, 7.2, 6.5, 6.2], ["V", "Z", "Z", "M", "D", "W", "D"], h=60, markeer=6)}</div>
<div class="card" style="padding:10px 12px 6px"><div style="display:flex;justify-content:space-between"><span>Belasting 7 vs 28 dagen</span><span class="r">1.12 · band 0,8–1,3</span></div>
<div class="bar" style="height:8px;position:relative"><i style="width:56%"></i></div></div>
<div class="demo">Drempels wachten op de sportarts vóór echte gebruikers</div>
""")

def snelheid(t, d, dagen, hl=False):
    blok = "".join(f'<i style="flex:1;height:{h}%;background:{c};border-radius:2px"></i>' for h, c in dagen)
    return (f'<a class="card{" hl" if hl else ""} speed" href="d4.html"><div><div class="h-m">{t}</div><div class="p">{d}</div></div>'
            f'<div class="zbar" style="height:40px;align-items:flex-end;background:none;gap:3px">{blok}</div></a>')
R, L, N = (14, "transparent;border:1.5px solid " + ACC), (40, "#7d9400"), (85, ACC)
vervang("d3", body=f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="d1.html">← Vandaag</a>
<div class="h-l">NIET <span class="acc">100%</span></div>
<p class="p" style="margin:6px 0 12px">Vandaag wordt rust. Kies hoe snel je terugkomt.</p>
{snelheid("Snel", "Morgen licht, dan het schema.", [R, L, N, N, N])}
{snelheid("Gewoon", "Twee lichte dagen.", [R, L, L, N, N], True)}
{snelheid("Rustig", "Drie dagen licht.", [R, L, L, L, N])}
<div class="legend" style="margin:4px 0 10px"><span><b style="background:{ACC};height:8px;width:8px;border-radius:2px"></b>schema</span><span><b style="background:#7d9400;height:8px;width:8px;border-radius:2px"></b>licht</span><span><b style="border:1.5px solid {ACC};height:8px;width:8px;border-radius:2px"></b>rust van LUPO</span></div>
<div class="p">Rust die LUPO oplegt telt als nagekomen, in je score en in je proefperiode.</div>
""")

# Na de training: activiteit zoals Strava, maar uit de eigen import.
vervang("d5", titel="Na de training", uitleg="Eerst de sessie zelf: kaart, hoogte, hartslagzones, gepland tegen gedaan. Daarna één vraag. Uit de eigen import, nooit uit Strava.", body=f"""
<div class="lbl acc">Donderdag · 07:40 · ✓ Gedaan</div>
<div class="h-m" style="margin-bottom:8px">Zone 2 langs het meer</div>
<div class="media">{kaart(150, "thun", "8,4 KM")}<div class="in">{hoogte([560, 562, 570, 590, 600, 588, 575, 568, 566, 580, 595, 572, 560], 30)}</div></div>
<div class="stats"><div><div class="k">Afstand</div><div class="v">8,4 km</div></div><div><div class="k">Tijd</div><div class="v">46:12</div></div><div><div class="k">Tempo</div><div class="v">5:30</div></div>
<div><div class="k">Hartslag</div><div class="v">138</div></div><div><div class="k">TSS</div><div class="v">41</div></div><div><div class="k">Plan</div><div class="v acc">98%</div></div></div>
<div class="card" style="padding:10px 12px"><span class="lbl" style="margin:0">Tijd in zone</span>{zoneverdeling([(1, 12), (2, 81), (3, 7)])}</div>
<div class="lbl">Eén vraag: hoe voelde dit?</div>
<div class="tiles"><a class="tile" href="d6.html" style="text-align:center"><div class="v" style="font-size:16px">Te licht</div></a><a class="tile" href="d6.html" style="text-align:center;border-color:var(--accent)"><div class="v acc" style="font-size:16px">Goed</div></a><a class="tile" href="d6.html" style="text-align:center"><div class="v" style="font-size:16px">Te zwaar</div></a></div>
""")

vervang("d6", body=f"""
<div class="h-l">GENOTEERD.</div>
<div class="why">Twee keer <b>te zwaar</b> in 7 dagen. Het volgende blok gaat 10% lichter.</div>
<div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">Gevoel na de training · 7 dagen</span>
<svg viewBox="0 0 300 70" width="100%" height="70">{"".join(f'<circle cx="{20+i*43}" cy="{ {"l":56,"g":35,"z":14}[c] }" r="7" fill="{ {"l":"#4a4a4a","g":ACC,"z":"#ffb020"}[c] }"/>' for i, c in enumerate("zgg" + "zg" + "gg"))}
<text x="296" y="17" text-anchor="end" fill="#ffb020" font-family="DM Sans" font-size="8">TE ZWAAR</text><text x="296" y="38" text-anchor="end" fill="{ACC}" font-family="DM Sans" font-size="8">GOED</text><text x="296" y="59" text-anchor="end" fill="#888" font-family="DM Sans" font-size="8">TE LICHT</text></svg></div>
<div class="lbl">Volgend blok</div>
<div class="card"><div style="opacity:0.35">{workout(DREMPEL, 22)}</div><div style="margin-top:6px">{workout([(10, 1), (8, 2), (6, 2), (7, 4), (4, 1), (7, 4), (4, 1), (7, 4), (12, 1)], 30)}</div><div class="p" style="font-size:11px">4×8 → 3×7 min drempel</div></div>
<div class="spacer"></div>
<a class="btn-primary" href="d1b.html">Naar morgen</a>
""")

# ── DFRNT ────────────────────────────────────────────────────────────────────
import random
random.seed(7)
WOLK = [(random.uniform(40, 290), min(146, max(30, random.gauss(108, 20)))) for _ in range(120)]

vervang("t1", body=f"""
<div class="media">{beeld("baan", 170, "TOON WAT JE KAN.", "Golf maart 2027 • 10 weken • gratis", "DFRNT TRYOUT")}</div>
<div style="display:flex;align-items:center;gap:10px;margin:4px 0 10px"><div class="avs">{avatar("JW", "#c8f135")}{avatar("BV", "#7d9400")}{avatar("AM", "#ffb020")}{avatar("+", "#2a2a2a")}</div><span class="p">1.240 ingeschreven</span></div>
<div class="card" style="padding:10px 12px"><svg viewBox="0 0 300 50" width="100%" height="50">
<line x1="10" y1="20" x2="290" y2="20" stroke="#2a2a2a" stroke-width="2"/><rect x="10" y="17" width="34" height="6" rx="3" fill="{ACC}"/><rect x="250" y="17" width="40" height="6" rx="3" fill="{ACC}"/><rect x="44" y="18" width="206" height="4" fill="#4b5a00"/>
<text x="10" y="42" fill="#ededeb" font-family="DM Sans" font-size="8">NULMETING</text><text x="150" y="42" text-anchor="middle" fill="rgba(237,237,235,0.5)" font-family="DM Sans" font-size="8">10 WEKEN SCHEMA</text><text x="290" y="42" text-anchor="end" fill="#ededeb" font-family="DM Sans" font-size="8">HERTEST</text>
<text x="10" y="10" fill="rgba(237,237,235,0.5)" font-family="DM Sans" font-size="8">1 MRT</text><text x="290" y="10" text-anchor="end" fill="rgba(237,237,235,0.5)" font-family="DM Sans" font-size="8">23 MEI</text></svg></div>
<p class="p" style="margin:6px 0 10px">Wie het meest vooruitgaat met het minste volume, krijgt een uitnodiging voor de fysieke Combine.</p>
<a class="btn-primary" href="t2.html">Schrijf me in</a>
<p class="p" style="text-align:center;font-size:11px">Onder 18: met toestemming van een ouder.</p>
""")

def test(t, s, waarde, icoon):
    return f'<div class="row"><span style="display:flex;gap:10px;align-items:center">{icoon}<span>{t}<br/><span class="mut" style="font-size:11px">{s}</span></span></span><span class="r">{waarde}</span></div>'
IC = lambda p: f'<svg width="28" height="28" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#1a1a1a"/><path d="{p}" fill="none" stroke="{ACC}" stroke-width="1.8" stroke-linecap="round"/></svg>'
vervang("t2", body=f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="t1.html">← DFRNT</a>
<div class="h-l">NUL<span class="acc">METING</span></div>
<div class="seg"><a class="on" href="t2.html">Duur</a><a href="t2.html">Hybrid</a></div>
{test("3 km loop", "volle inzet, vlak parcours", "11:42 ✓", IC("M6 20 L11 12 L16 16 L22 7"))}
{test("20 min FTP", "× 95%", "248 W ✓", IC("M5 18 a9 9 0 1 1 18 0 M14 18 L19 11"))}
{test("400 m zwemmen", "25 of 50 m bad", "nog doen", IC("M4 16 q5 -4 10 0 t10 0 M4 21 q5 -4 10 0 t10 0"))}
<div class="card" style="margin-top:6px;display:flex;justify-content:center">{radar([0.55, 0.5, 0.0, 0.45], [0.55, 0.5, 0.0, 0.45], ["3 KM", "FTP", "ZWEM", "VOLUME"], 180)}</div>
<a class="btn-primary" href="t3.html">400 m invoeren</a>
""")

vervang("t3", body=ochtend(False).replace("Donderdag 5 november", "DFRNT · week 6 van 10").replace('<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>', '<a class="btn-secondary" href="t4.html">Ladder van deze golf →</a>').replace('href="d5.html">Gedaan', 'href="t4.html">Gedaan'))

vervang("t4", body=f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="t3.html">← Vandaag</a>
<div class="h-l">GOLF <span class="acc">MRT 27</span></div>
<p class="p" style="margin:4px 0 8px">Progressie tegen volume. Linksboven wint.</p>
<div class="card" style="padding:8px">{spreiding(WOLK, (96, 52), 46)}</div>
<div class="demo">Voorbeelddata</div>
<div class="tiles"><div class="tile"><div class="k">Plaats</div><div class="v acc">48</div><div class="s">van 1.240</div></div><div class="tile"><div class="k">Progressie</div><div class="v">+8,2%</div></div><div class="tile"><div class="k">Uur/week</div><div class="v">5u20</div></div></div>
<a class="btn-primary" href="t5.html">Naar de hertest</a>
""")

vervang("t5", body=f"""
<div class="lbl acc">Hertest · 23 mei</div>
<div class="h-xl">TOP <span class="acc">4%.</span></div>
<div class="card" style="display:flex;flex-direction:column;align-items:center;padding:8px">{radar([0.55, 0.5, 0.42, 0.45], [0.74, 0.68, 0.6, 0.45], ["3 KM", "FTP", "ZWEM", "VOLUME"], 200)}
<div class="legend"><span><b style="background:rgba(237,237,235,0.5)"></b>nulmeting</span><span><b style="background:{ACC}"></b>hertest</span></div></div>
<div class="tiles"><div class="tile"><div class="k">3 km</div><div class="v">10:58</div><div class="s good">−44 s</div></div><div class="tile"><div class="k">FTP</div><div class="v">268</div><div class="s good">+20 W</div></div><div class="tile"><div class="k">400 m</div><div class="v">6:41</div><div class="s good">−24 s</div></div></div>
<div class="card hl"><div class="h-m">Uitnodiging: fysieke Combine</div><div class="p">Zaterdag 14 juni. Bevestigt je resultaat onder toezicht. Daarna: Pack Talent.</div></div>
<a class="btn-primary" href="t5.html">Bevestig je plaats</a>
<a class="btn-text" href="t6.html">Buiten de top 5% →</a>
""")

vervang("t6", body=f"""
<div class="lbl acc">Hertest · 23 mei</div>
<div class="h-l">+5,1% IN <span class="acc">10 WEKEN</span></div>
<div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">FTP over de golf</span>{lijn([210, 211, 213, 212, 215, 217, 216, 219, 220, 221], h=70, labels=[(0, "mrt"), (9, "mei")])}</div>
<p class="p" style="margin:4px 0 10px">Plaats 310 van 1.240. Nakomen 91%: het schema werkte, het volume was de grens.</p>
<div class="card hl"><div class="h-m">Premium</div><div class="p">Verder richting een race, met coachgesprek en uitleg bij elke beslissing. €19 per maand of €169 per jaar.</div></div>
<a class="btn-primary" href="d1.html">Ga verder met Premium</a>
<a class="btn-text" href="t1.html">Volgende golf: september</a>
""")

# ── AANBOD ───────────────────────────────────────────────────────────────────
vervang("a1", body=f"""
<div class="media">{beeld("thun", 150, "THUN, TOT AAN DE STARTLIJN", "34 weken • basis, opbouw, piek en taper", "RACEBLOK")}</div>
<div class="card" style="padding:8px 10px">{periodisering(h=96)}</div>
<div style="display:flex;align-items:baseline;gap:10px;margin:6px 0"><div class="h-xl">€49</div><div class="p">eenmalig,<br/>voor deze race</div></div>
<div class="row"><span>Elke ochtend één beslissing met de reden</span><span class="r acc">✓</span></div>
<div class="row"><span>Taper en raceplan voor Thun</span><span class="r acc">✓</span></div>
<div class="row"><span>Coachgesprek over het schema</span><span class="r acc">✓</span></div>
<a class="btn-primary" href="d1.html" style="margin-top:6px">Kies het raceblok</a>
<a class="btn-text" href="a1.html">Of Premium: €19 per maand, €169 per jaar</a>
""")

# ── PLAN, LADDER, CREW ───────────────────────────────────────────────────────
WEEK45 = [("MA", "2", "Rust", None, "—"), ("DI", "3", "Loop · drempel 4×8", DREMPEL, "70 min"), ("WO", "4", "Zwem · techniek", [(10, 1), (8, 2), (4, 3), (8, 2), (4, 3), (8, 2), (3, 1)], "50 min"),
          ("DO", "5", "Fiets · 2×20 drempel", [(15, 1), (10, 2), (20, 4), (5, 1), (20, 4), (20, 2)], "90 min"), ("VR", "6", "Loop · zone 2", ZONE2, "45 min"),
          ("ZA", "7", "Lange rit", [(10, 1), (160, 2), (10, 1)], "3u"), ("ZO", "8", "Lange loop", [(5, 1), (90, 2), (5, 1)], "1u40")]
vervang("p1", body=f"""
<div class="lbl">Plan</div>
<div class="seg"><a class="on" href="p1.html">Week</a><a href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>
<div style="display:flex;justify-content:space-between;align-items:baseline"><div class="h-l">WEEK <span class="acc">45</span></div><span class="r" style="font-family:DM Sans;font-size:11px;color:var(--muted-2)">TSS 520 • 9u35</span></div>
<div class="card" style="padding:8px 10px">{staven([0, 82, 40, 95, 38, 150, 115], ["M", "D", "W", "D", "V", "Z", "Z"], h=64, markeer=3, gepland=[0, 82, 40, 95, 38, 150, 115])}</div>
{daglijst(WEEK45, "p2.html", on="DO")}
""")

vervang("p3", body=f"""
<div class="lbl">Plan</div>
<div class="seg"><a href="p1.html">Week</a><a class="on" href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>
<div class="media">{beeld("thun", 110, "THUN · 34 WEKEN", "4 juli 2027 • doel sub 9u30", "A-RACE")}</div>
<div class="card" style="padding:8px 10px"><span class="lbl" style="margin:0">Fitheid richting de race</span>{periodisering(h=110)}</div>
<a class="card warnc" href="p4.html"><div class="h-m">Pre-mortem →</div><div class="p">Drie risico's uit je eigen data. Zwemmen ontbreekt.</div></a>
""")

vervang("l1", body=f"""
<div class="lbl">Ladder</div>
<div class="seg"><a class="on" href="l1.html">Score</a><a href="l3.html">Treden</a><a href="l4.html">Combine</a><a href="l5.html">Proef</a></div>
<div class="hero">{ring(0.642, ACC, "642", "LUPO-SCORE", 120)}<div><div class="h-l">TOP <span class="acc">31%</span></div><div class="p">+18 in 4 weken</div></div></div>
<div class="card" style="padding:8px 10px">{verdeling(0.69)}</div>
<div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">Score · 12 weken</span>{lijn([590, 596, 601, 605, 603, 612, 618, 620, 624, 631, 636, 642], h=64, labels=[(0, "aug"), (11, "nu")])}</div>
<a class="btn-text" href="l2.html">Hoe je score werkt →</a>
""")

KLEUREN = ["#c8f135", "#7d9400", "#ffb020", "#4ade80"]
CREW2 = [("JIJ", "Jij", "g g r g . . .", "4/7"), ("A", "Atleet A", "g m g g . . .", "3/7"), ("B", "Atleet B", "r g g m . . .", "3/7"), ("C", "Atleet C", "g g g g . . .", "4/7")]
crewrijen = "".join(
    f'<div class="row"><span style="display:flex;gap:10px;align-items:center">{avatar(i, KLEUREN[n])}<span>{naam}{dots(d)}</span></span>'
    f'<span class="r">{x} &nbsp; <span class="pill{" acc" if naam == "Atleet B" else ""}">{"2× gezien" if naam == "Jij" else ("✓ Gezien" if naam == "Atleet B" else "Gezien")}</span></span></div>'
    for n, (i, naam, d, x) in enumerate(CREW2))
vervang("s1", body=f"""
<div class="lbl">Samen</div>{SEG_S("Crew")}
<div class="demo">Voorbeelddata</div>
<div class="hero">{ring(0.79, ACC, "79%", "CREWRITME", 104)}<div><div class="h-m">Je crew</div><div class="p">Wie trainde. Geen scores, geen HRV, geen feed.</div></div></div>
{crewrijen}
<p class="p">Omlijnd = rust van LUPO, telt als nagekomen.</p>
""")

# Webversie Vandaag: zelfde grafieken in de panelen.
vervang("w1", body=desk("Vandaag", "VANDAAG", "Donderdag 5 november", [
    ("Beslissing", f'<div class="hero">{ring(0.42, "#ffb020", "42", "PARAAT")}<div class="h-l">AFBOUWEN</div></div><div class="why">HRV <b>15% onder</b> je 7-daagse gemiddelde. Drempel −5%.</div><div class="card hl"><div class="h-m">Zone 2 · 45 min</div><div style="margin-top:8px">{workout(ZONE2, 30)}</div></div>'),
    ("Waarom", f'<div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">HRV · 14 dagen</span>{lijn(HRV, (58, 64), h=110, labels=HRV_LABELS, laatste_kleur="#ffb020")}</div><div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">Slaap</span>{staven([7.4, 7.1, 7.8, 6.9, 7.2, 6.5, 6.2], ["V", "Z", "Z", "M", "D", "W", "D"], h=70, markeer=6)}</div>'),
    ("Laatste sessie", f'<div class="media">{kaart(160, "thun", "8,4 KM · DINSDAG")}</div><div class="card" style="padding:10px 12px">{zoneverdeling([(1, 12), (2, 81), (3, 7)])}</div><a class="btn-text" href="w1.html">Exporteer tabel</a>'),
]))

# ── VERGELIJKEN ──────────────────────────────────────────────────────────────
# Wat klanten willen: "waar sta ik", "ben ik op schema voor mijn doel", "hoe doe ik het naast mijn maat".
# Regels: alleen wat de atleet zelf deelt; nooit HRV, slaap of scorecomponenten; nooit Strava-data.
# Wie anoniem bijdraagt aan de vergelijking, krijgt de vergelijking te zien.

def plaats(label, waarde, pct, sub=""):
    return (f'<div class="row" style="display:block;padding:10px 12px"><div style="display:flex;justify-content:space-between;align-items:baseline">'
            f'<span>{label} <span class="mut" style="font-size:11px">{sub}</span></span><span style="font-family:Bebas Neue;font-size:17px">{waarde}</span></div>'
            f'<div style="position:relative;height:16px;margin-top:8px"><div style="position:absolute;inset:6px 0;border-radius:3px;background:linear-gradient(90deg,#1d1d1d,#3a3a3a 50%,#1d1d1d)"></div>'
            f'<div style="position:absolute;left:{pct}%;top:0;width:3px;height:16px;background:{ACC};border-radius:2px;transform:translateX(-1px)"></div>'
            f'<div style="position:absolute;left:50%;top:4px;width:1px;height:8px;background:rgba(237,237,235,0.3)"></div></div>'
            f'<div style="display:flex;justify-content:space-between;font-family:DM Sans;font-size:9px;color:var(--muted)"><span>trager</span><span class="acc">beter dan {pct}%</span><span>sneller</span></div></div>')

def pad_naar_doel(b=300, h=160):
    """Fitheid per week voor de race: band van wie het doel haalde, en jouw lijn tot nu."""
    x = lambda w: 24 + (w + 52) / 52 * (b - 30)
    y = lambda v: h - 20 - v / 120 * (h - 34)
    boven = [(x(w), y(40 + 75 * ((w + 52) / 52) ** 1.1 + 8)) for w in range(-52, 1, 2)]
    onder = [(x(w), y(28 + 62 * ((w + 52) / 52) ** 1.1)) for w in range(-52, 1, 2)]
    mid = [(x(w), y(34 + 69 * ((w + 52) / 52) ** 1.1 + 4)) for w in range(-52, 1, 2)]
    jij = [(x(w), y(30 + 60 * ((w + 52) / 52) ** 1.05 + 3 * math.sin(w / 2))) for w in range(-52, -33)]
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    s += f'<polygon fill="rgba(200,241,53,0.10)" points="{_pad(boven)} {_pad(list(reversed(onder)))}"/>'
    s += f'<polyline fill="none" stroke="rgba(200,241,53,0.35)" stroke-dasharray="3 3" points="{_pad(mid)}"/>'
    s += f'<polyline fill="none" stroke="#ededeb" stroke-width="2.2" points="{_pad(jij)}"/>'
    jx, jy = jij[-1]
    s += f'<circle cx="{jx:.1f}" cy="{jy:.1f}" r="5" fill="{ACC}" stroke="#050505" stroke-width="2"/><text x="{jx+8:.1f}" y="{jy+14:.1f}" fill="{ACC}" font-family="DM Sans" font-size="9">jij, nu</text>'
    s += f'<line x1="24" y1="{h-20}" x2="{b}" y2="{h-20}" stroke="#2a2a2a"/>'
    for w, t in [(-52, "−52 wk"), (-34, "−34"), (-12, "−12"), (0, "THUN")]:
        s += f'<text x="{x(w):.1f}" y="{h-6}" text-anchor="{'end' if w == 0 else 'middle'}" fill="{ACC if w == 0 else "rgba(237,237,235,0.4)"}" font-family="DM Sans" font-size="8">{t}</text>'
    s += f'<text x="{b-4}" y="{y(120)+12:.1f}" text-anchor="end" fill="rgba(237,237,235,0.5)" font-family="DM Sans" font-size="8">FITHEID (CTL)</text>'
    return s + "</svg>"

def duo(label, ik, hij, verschil, beter):
    kleur = "good" if beter else "warn"
    return (f'<div class="row" style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px"><span style="font-family:Bebas Neue;font-size:16px">{ik}</span>'
            f'<span class="mut" style="font-size:11px;text-align:center">{label}<br/><span class="{kleur}" style="font-family:DM Sans">{verschil}</span></span>'
            f'<span style="font-family:Bebas Neue;font-size:16px;text-align:right">{hij}</span></div>')

SEG_V = SEG_S("Vergelijk")

scherm("v1", "V", "Waar sta je", "Tegen atleten zoals jij: zelfde leeftijd, zelfde soort race, zelfde volume. Anoniem, alleen van wie zelf bijdraagt.", f"""
<div class="lbl">Samen</div>{SEG_V}
<div class="demo">Voorbeelddata</div>
<div class="h-l">WAAR <span class="acc">STA JE?</span></div>
<div class="chips" style="margin:8px 0"><span style="border-color:var(--accent);color:var(--accent)">M 40–44</span><span style="border-color:var(--accent);color:var(--accent)">Ironman</span><span style="border-color:var(--accent);color:var(--accent)">6–9 u/week</span><span>+ filter</span></div>
<p class="p" style="margin-bottom:8px">1.860 atleten zoals jij</p>
{plaats("3 km", "11:42", 62)}
{plaats("FTP", "3,6 W/kg", 71, "268 W")}
{plaats("Nakomen", "86%", 80, "12 weken")}
{plaats("Volume", "7u20", 48, "per week")}
<div class="row dim"><span>400 m zwemmen</span><span class="r">nog niet getest</span></div>
<div class="tiles t2" style="margin-top:6px">
  <a class="tile" href="v2.html"><div class="k">Naast een vriend</div><div class="avs" style="margin-top:6px">{avatar("JIJ", ACC)}{avatar("B", "#7d9400")}</div></a>
  <a class="tile" href="v3.html"><div class="k">Wie sub 9u30 haalde</div><div class="v acc" style="font-size:18px">Op schema?</div></a>
</div>
<a class="btn-text" href="v5.html">Wat deel ik? →</a>
""", tab="Samen")

scherm("v2", "V", "Naast een vriend", "Twee atleten naast elkaar, alleen op wat beiden delen. Een vriend vraagt en de ander bevestigt; er zijn geen volgers.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="v1.html">← Waar sta je</a>
<div style="display:flex;justify-content:space-between;align-items:center;margin:4px 0 8px">
  <div style="display:flex;gap:8px;align-items:center">{avatar("JIJ", ACC)}<span>Jij</span></div><span class="mut" style="font-family:DM Sans;font-size:10px">VS</span>
  <div style="display:flex;gap:8px;align-items:center"><span>Bob</span>{avatar("B", "#5a5a58")}</div></div>
<div class="demo">Voorbeelddata</div>
<div class="card" style="display:flex;flex-direction:column;align-items:center;padding:6px">{radar([0.7, 0.58, 0.66, 0.74, 0.6], [0.62, 0.71, 0.3, 0.8, 0.48], ["3 KM", "FTP", "ZWEM", "NAKOMEN", "VOLUME"], 196)}
<div class="legend"><span><b style="background:{ACC}"></b>jij</span><span><b style="background:rgba(237,237,235,0.5)"></b>Bob</span></div></div>
{duo("3 km", "11:42", "11:20", "Bob −22 s", False)}
{duo("FTP", "3,6 W/kg", "3,3 W/kg", "jij +0,3", True)}
{duo("Nakomen", "86%", "81%", "jij +5%", True)}
<div class="card hl"><div class="p">Allebei Thun. Bob stond 34 weken voor zijn eerste ironman op dezelfde fitheid als jij nu, en finishte in 10u05.</div></div>
""", tab="Samen")

scherm("v3", "V", "Het pad van wie je doel haalde", "Jouw fitheid per week voor de race, naast de band van atleten die sub 9u30 haalden. Een vergelijking, geen voorspelling.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="v1.html">← Waar sta je</a>
<div class="h-l">OP SCHEMA VOOR <span class="acc">SUB 9U30?</span></div>
<div class="demo">Voorbeelddata · 140 openbare profielen</div>
<div class="card" style="padding:8px">{pad_naar_doel()}
<div class="legend"><span><b style="background:rgba(200,241,53,0.4)"></b>wie sub 9u30 haalde</span><span><b style="background:#ededeb"></b>jij</span></div></div>
<div class="why">Je zit <b>in de band, onderste helft</b>. Wie vanaf hier in de onderste helft zat en het haalde, trainde de 20 weken erna gemiddeld <b>1u10 meer per week</b>, vooral op de fiets.</div>
<div class="tiles"><div class="tile"><div class="k">Jouw fitheid</div><div class="v">58</div></div><div class="tile"><div class="k">Midden band</div><div class="v acc">64</div></div><div class="tile"><div class="k">Achterstand</div><div class="v warn">−6</div></div></div>
<p class="p" style="font-size:11px">Een vergelijking met wie het al deed, geen voorspelling. Data van atleten die hun profiel openbaar zetten.</p>
""", tab="Samen")

scherm("v4", "V", "Openbaar profiel", "Wie zijn profiel openbaar zet, wordt vindbaar en vergelijkbaar. Voor een potential is dit de plek om op te vallen.", f"""
<div class="media" style="margin-top:4px">{beeld("baan", 120, "ATLEET R · 21", "Leuven • DFRNT golf sep 26: top 2%", "OPENBAAR PROFIEL")}</div>
<div class="tiles"><div class="tile"><div class="k">LUPO-score</div><div class="v acc">812</div><div class="s">top 6%</div></div><div class="tile"><div class="k">Trede</div><div class="v">05</div><div class="s">Pack Talent</div></div><div class="tile"><div class="k">Races</div><div class="v">7</div><div class="s">geclaimd</div></div></div>
<div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">Score · 12 maanden</span>{lijn([520, 548, 575, 590, 620, 655, 690, 712, 735, 770, 795, 812], h=62, labels=[(0, "nov"), (11, "nu")])}</div>
<div class="row"><span>Antwerp 10 Miles 2026</span><span class="r">56:40 · M20 #3</span></div>
<div class="row"><span>Combine Q3 · 3 km</span><span class="r">9:12</span></div>
<a class="btn-primary" href="v2.html">Vraag om te vergelijken</a>
<p class="p" style="text-align:center;font-size:11px">Geen volgers. Atleet R ziet je vraag en beslist.</p>
""", tab="Samen")

def deel(t, v, o, a, slot=False):
    cel = lambda x: f'<span class="pill{" acc" if x == "aan" else ""}" style="min-width:46px;text-align:center">{x}</span>'
    if slot:
        return f'<div class="row dim" style="display:grid;grid-template-columns:1fr 150px;gap:6px"><span>{t}</span><span class="r" style="text-align:right">nooit gedeeld</span></div>'
    return f'<div class="row" style="display:grid;grid-template-columns:1fr 50px 50px 50px;gap:4px"><span style="font-size:12px">{t}</span>{cel(v)}{cel(o)}{cel(a)}</div>'

scherm("v5", "V", "Wat je deelt", "Per onderdeel kies je met wie: vrienden, openbaar, of anoniem in de vergelijking. Wie anoniem bijdraagt, ziet de vergelijking.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="v1.html">← Waar sta je</a>
<div class="h-l">WAT JE <span class="acc">DEELT</span></div>
<div style="display:grid;grid-template-columns:1fr 50px 50px 50px;gap:4px;font-family:DM Sans;font-size:8px;color:var(--muted);letter-spacing:0.08em;margin:10px 12px 4px"><span></span><span>VRIENDEN</span><span>OPENBAAR</span><span>ANONIEM</span></div>
{deel("LUPO-score en percentiel", "aan", "uit", "aan")}
{deel("Combine-resultaten", "aan", "uit", "aan")}
{deel("Geclaimde uitslagen", "aan", "uit", "aan")}
{deel("Volume en nakomen per week", "aan", "uit", "aan")}
{deel("Fitheidslijn naar je race", "uit", "uit", "aan")}
{deel("HRV en slaap", "", "", "", True)}
{deel("Scorecomponenten", "", "", "", True)}
<div class="card hl" style="margin-top:6px"><div class="p">Je profiel staat standaard op privé. Zet je "anoniem" uit, dan zie je zelf ook geen vergelijking met atleten zoals jij.</div></div>
<p class="p" style="font-size:11px">Data uit Strava wordt nooit gedeeld of vergeleken.</p>
""", tab="Samen")

# Crew: matcher blijft bereikbaar vanuit de crew.
SCHERMEN[_INDEX["s1"]]["body"] = SCHERMEN[_INDEX["s1"]]["body"].replace(SEG_S("Crew").replace("Vergelijk", "Vergelijk"), SEG_S("Crew")) + '<a class="btn-text" href="s2.html">Zoek een trainingsmaatje →</a>'


# ── TRAININGEN EN INZICHTEN ─────────────────────────────────────────────────
# Zoals Strava een activiteit toont (kaart, getallen, grafiek, splits), plus wat LUPO ziet:
# gepland tegen gedaan, drift, dezelfde sessie van vroeger, en wat dat betekent voor het plan.
# Alles uit de eigen import (Garmin, FIT, TrainingPeaks-export). Nooit Strava-data.

HR_KLEUR = "#ff6b5a"


def _drempelrit():
    """Minuut per minuut: (tempo s/km, hartslag) voor 15 opwarmen, 3×10 drempel met 3 rust, 10 uitlopen."""
    t, uit = [], []
    for m in range(15):
        t.append((340 - m, 128 + m * 1.1))
    for r in range(3):
        for m in range(10):
            t.append((261 - r - (m % 3), 158 + r * 2 + min(m, 6) * 1.2))
        if r < 2:
            for m in range(3):
                t.append((365, 150 - m * 4))
    for m in range(10):
        t.append((345 + m, 140 - m * 1.2))
    return t


def analyse(b=300, h=130):
    d = _drempelrit()
    n = len(d)
    sx = lambda i: 26 + i * (b - 30) / (n - 1)
    sp = lambda v: 10 + (v - 250) / (380 - 250) * (h - 40)     # sneller = hoger
    sh = lambda v: h - 22 - (v - 110) / (180 - 110) * (h - 40)
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    for r in range(3):
        a = 15 + r * 13
        s += f'<rect x="{sx(a):.1f}" y="6" width="{sx(a+10)-sx(a):.1f}" height="{h-26}" fill="rgba(200,241,53,0.07)"/>'
        s += f'<text x="{(sx(a)+sx(a+10))/2:.1f}" y="16" text-anchor="middle" fill="rgba(200,241,53,0.7)" font-family="DM Sans" font-size="8">{r+1}</text>'
    s += f'<polyline fill="none" stroke="{HR_KLEUR}" stroke-width="1.6" stroke-opacity="0.85" points="{_pad([(sx(i), sh(v[1])) for i, v in enumerate(d)])}"/>'
    s += f'<polyline fill="none" stroke="{ACC}" stroke-width="2" points="{_pad([(sx(i), sp(v[0])) for i, v in enumerate(d)])}"/>'
    s += f'<line x1="26" y1="{h-16}" x2="{b}" y2="{h-16}" stroke="#2a2a2a"/>'
    for m in (0, 15, 30, 45, 60):
        s += f'<text x="{sx(min(m, n-1)):.1f}" y="{h-4}" text-anchor="middle" fill="rgba(237,237,235,0.4)" font-family="DM Sans" font-size="8">{m}′</text>'
    s += f'<text x="0" y="{sp(260)+3:.1f}" fill="{ACC}" font-family="DM Sans" font-size="8">4:20</text>'
    s += f'<text x="0" y="{sp(360)+3:.1f}" fill="{ACC}" font-family="DM Sans" font-size="8" opacity="0.6">6:00</text>'
    return s + "</svg>"


def splits(rijen):
    """Splits per km als Strava: tempo, balk, hartslag."""
    snel = min(sec for _, sec, _ in rijen)
    traag = max(sec for _, sec, _ in rijen)
    uit = '<div class="spl"><div class="spl-h"><span>km</span><span>tempo</span><span></span><span>hs</span></div>'
    for km, sec, hs in rijen:
        w = 35 + 65 * (traag - sec) / (traag - snel or 1)
        drempel = sec < 280
        uit += (f'<div class="spl-r"><span>{km}</span><span>{sec//60}:{sec%60:02d}</span>'
                f'<span><i style="width:{w:.0f}%;background:{ACC if drempel else "#4b5a00"}"></i></span><span>{hs}</span></div>')
    return uit + "</div>"


def vermogenscurve(b=300, h=120):
    duur = [5, 15, 60, 300, 1200, 3600, 7200]
    nu = [820, 610, 410, 300, 262, 228, 205]
    toen = [760, 540, 360, 268, 246, 200, 172]
    lx = lambda d: 28 + (math.log(d) - math.log(5)) / (math.log(7200) - math.log(5)) * (b - 34)
    ly = lambda w: h - 18 - (w - 150) / (850 - 150) * (h - 28)
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    s += f'<polyline fill="none" stroke="rgba(237,237,235,0.35)" stroke-dasharray="3 3" stroke-width="1.5" points="{_pad([(lx(d), ly(w)) for d, w in zip(duur, toen)])}"/>'
    s += f'<polyline fill="none" stroke="{ACC}" stroke-width="2.2" points="{_pad([(lx(d), ly(w)) for d, w in zip(duur, nu)])}"/>'
    s += f'<line x1="28" y1="{h-18}" x2="{b}" y2="{h-18}" stroke="#2a2a2a"/>'
    for d, t in zip(duur, ["5s", "15s", "1′", "5′", "20′", "1u", "2u"]):
        s += f'<text x="{lx(d):.1f}" y="{h-5}" text-anchor="middle" fill="rgba(237,237,235,0.4)" font-family="DM Sans" font-size="8">{t}</text>'
    s += f'<circle cx="{lx(1200):.1f}" cy="{ly(262):.1f}" r="4" fill="{ACC}" stroke="#0a0a0a" stroke-width="2"/>'
    s += f'<text x="{lx(1200)+6:.1f}" y="{ly(262)-8:.1f}" fill="{ACC}" font-family="DM Sans" font-size="9">262 W</text>'
    for w in (300, 600):
        s += f'<text x="0" y="{ly(w)+3:.1f}" fill="rgba(237,237,235,0.35)" font-family="DM Sans" font-size="8">{w}</text>'
    return s + "</svg>"


def fitheid_vorm(b=300, h=130):
    """Fitheid (CTL), vermoeidheid (ATL) en vorm (TSB) over 12 weken."""
    ctl, atl, tsb = [], [], []
    c, a = 38.0, 40.0
    for d in range(84):
        week = d // 7
        tss = 0 if d % 7 == 0 else (55 + week * 2.2) * (0.6 if week in (3, 7) else 1) * (1.6 if d % 7 == 6 else 1)
        c += (tss - c) / 42
        a += (tss - a) / 7
        ctl.append(c); atl.append(a); tsb.append(c - a)
    sx = lambda i: 4 + i * (b - 8) / 83
    sy = lambda v: 10 + (95 - v) / (95 - 20) * (h - 60)
    st = lambda v: h - 30 - v * 1.1
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    s += f'<line x1="0" y1="{h-30}" x2="{b}" y2="{h-30}" stroke="#2a2a2a"/>'
    for i in range(0, 84, 2):
        v = tsb[i]
        y0, y1 = sorted((st(0), st(v)))
        s += f'<rect x="{sx(i)-1:.1f}" y="{y0:.1f}" width="2.4" height="{max(y1-y0, 0.5):.1f}" fill="{"#7d9400" if v > 0 else "#5a3a2a"}"/>'
    s += f'<polyline fill="none" stroke="#ff6b5a" stroke-opacity="0.6" stroke-width="1.3" points="{_pad([(sx(i), sy(v)) for i, v in enumerate(atl)])}"/>'
    s += f'<polyline fill="none" stroke="{ACC}" stroke-width="2.2" points="{_pad([(sx(i), sy(v)) for i, v in enumerate(ctl)])}"/>'
    s += f'<circle cx="{sx(83):.1f}" cy="{sy(ctl[-1]):.1f}" r="4" fill="{ACC}" stroke="#0a0a0a" stroke-width="2"/>'
    for i, t in [(0, "aug"), (31, "sep"), (61, "okt"), (83, "nu")]:
        s += f'<text x="{sx(i):.1f}" y="{h-2}" text-anchor="{"end" if i == 83 else "start" if i == 0 else "middle"}" fill="rgba(237,237,235,0.4)" font-family="DM Sans" font-size="8">{t}</text>'
    return s + "</svg>"


def inzicht(icoon, titel, tekst, kleur="acc"):
    return (f'<div class="inz"><span class="inz-i {kleur}">{icoon}</span><div><div class="inz-t">{titel}</div>'
            f'<div class="inz-p">{tekst}</div></div></div>')


def activiteit(href, dag, titel, sport, getallen, beeldje, label, regel, labelkleur="acc"):
    return (f'<a class="act" href="{href}"><div class="act-top"><span class="act-d">{dag} · {sport}</span>'
            f'<span class="pill {labelkleur}">{label}</span></div><div class="act-t">{titel}</div>'
            f'<div class="act-g">{getallen}</div><div class="act-b">{beeldje}</div>'
            f'<div class="act-r">{regel}</div></a>')


SEG_P = lambda a: '<div class="seg">' + "".join(
    f'<a class="{"on" if k == a else ""}" href="{h}.html">{k}</a>'
    for k, h in [("Week", "p1"), ("Kalender", "k1"), ("Logboek", "r1"), ("Seizoen", "p3"), ("Races", "p5")]) + "</div>"

for s in SCHERMEN:
    for oud in ('<div class="seg"><a class="on" href="p1.html">Week</a><a href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>',
                '<div class="seg"><a href="p1.html">Week</a><a class="on" href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>',
                '<div class="seg"><a href="p1.html">Week</a><a href="p3.html">Seizoen</a><a class="on" href="p5.html">Races</a></div>'):
        if oud in s["body"]:
            actief = "Week" if 'class="on" href="p1' in oud else ("Seizoen" if 'class="on" href="p3' in oud else "Races")
            s["body"] = s["body"].replace(oud, SEG_P(actief))
    if s["id"] == "d5":
        s["body"] += '<a class="btn-text" href="r1.html">Naar je logboek →</a>'

scherm("r1", "R", "Logboek", "Elke afgewerkte training als kaart, met wat LUPO erin zag. Bovenaan de week: gepland tegen gedaan.", f"""
<div class="lbl">Plan</div>
{SEG_P("Logboek")}
<div class="h-l">WEEK 44</div>
<p class="p" style="margin:2px 0 6px">26 oktober – 1 november · fase opbouw</p>
<div class="card" style="padding:12px 12px 6px">{staven([0.8, 3.1, 0, 1.04, 0.75, 1.5, 0], ["M", "D", "W", "D", "V", "Z", "Z"], 74, gepland=[1.0, 3.0, 0.8, 1.0, 0.75, 1.5, 0], markeer=None)}</div>
<div class="tiles t4"><div class="tile"><div class="k">Uren</div><div class="v">7u10</div></div><div class="tile"><div class="k">TSS</div><div class="v">412</div></div><div class="tile"><div class="k">Afstand</div><div class="v">138</div><div class="s">km</div></div><div class="tile"><div class="k">Nagekomen</div><div class="v acc">7/7</div></div></div>
{activiteit("r2.html", "Donderdag 07:10", "Drempel 3×10 min", "Lopen", "<b>12,4</b> km · <b>1:02:18</b> · <b>5:01</b> /km", workout(DREMPEL, 26), "✓ zoals gepland", "Zelfde tempo als 6 weken geleden, 3 slagen lager.")}
{activiteit("r1.html", "Woensdag", "Rust van LUPO", "Rust", "HRV 9% onder je band", "", "telt mee", "Opgelegde rust telt als nagekomen.", "")}
{activiteit("r3.html", "Dinsdag", "Lange rit zone 2", "Fietsen", "<b>92</b> km · <b>3:05:40</b> · <b>212</b> W NP", workout([(15, 1), (150, 2), (15, 1)], 26), "✓ zoals gepland", "Ontkoppeling 3,8% over drie uur: de basis draagt.")}
{activiteit("r1.html", "Maandag", "Zwemmen CSS 10×100", "Zwemmen", "<b>2,4</b> km · <b>48:20</b> · <b>1:38</b> /100 m", workout([(6, 1), (2, 3), (1, 1), (2, 3), (1, 1), (2, 3), (1, 1), (2, 3), (1, 1), (2, 3), (6, 1)], 26), "aangepast", "Na 6×100 gestopt: schouder. Het schema schoof de rest.", "")}
<a class="btn-text" href="r4.html">Inzichten over weken →</a>
<p class="p" style="font-size:11px">Uit je Garmin-import. Strava-data blijft bij Strava.</p>
""", tab="Plan", fab=False)

scherm("r2", "R", "Een training, volledig", "Zoals Strava: kaart, getallen, grafiek en splits. Daarbovenop wat LUPO ziet: gepland tegen gedaan, drift, dezelfde sessie van vroeger, en wat dat voor het plan betekent.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="r1.html">← Logboek</a>
<div class="lbl" style="margin-top:0">Donderdag 29 oktober · 07:10 · Lopen · Antwerpen</div>
<div class="h-l">DREMPEL 3×10 MIN</div>
<div class="media" style="margin-top:10px">{kaart_antwerpen()}<div class="in">{hoogte([12, 14, 18, 22, 19, 15, 13, 16, 24, 28, 21, 15, 12], 28)}</div></div>
<div class="stats"><div><div class="k">Afstand</div><div class="v">12,4 km</div></div><div><div class="k">Tijd</div><div class="v">1:02:18</div></div><div><div class="k">Tempo</div><div class="v">5:01</div></div>
<div><div class="k">Hartslag</div><div class="v">151</div></div><div><div class="k">Hoogte</div><div class="v">64 m</div></div><div><div class="k">TSS</div><div class="v">78</div></div></div>
<div class="lbl acc">Wat LUPO ziet</div>
<div class="card">
{inzicht("✓", "Uitgevoerd zoals gepland", "3×10 min op 4:18 tot 4:21. Het plan vroeg 4:20.")}
{inzicht("↗", "Sneller bij dezelfde hartslag", "Zelfde sessie op 18 september: 4:26 bij 168. Nu 4:20 bij 165.")}
{inzicht("—", "Drift 2,1%", "Hartslag liep in blok 3 niet weg. Onder 5% betekent: dit tempo is houdbaar.")}
{inzicht("→", "Wat dit verandert", "Het schema zet de drempel vanaf volgende week op 4:16.", "acc")}
</div>
<div class="card" style="padding:12px"><div style="display:flex;justify-content:space-between"><span class="lbl" style="margin:0">Tempo en hartslag</span><span class="legend" style="margin:0"><span><b style="background:{ACC}"></b>tempo</span><span><b style="background:{HR_KLEUR}"></b>hartslag</span></span></div>{analyse()}</div>
<div class="lbl">Intervallen</div>
<table class="t"><tr><th>#</th><th>Tempo</th><th>Plan</th><th>Hs</th></tr>
<tr><td>1</td><td>4:21</td><td class="acc">4:20 ✓</td><td>163</td></tr><tr><td>2</td><td>4:20</td><td class="acc">4:20 ✓</td><td>165</td></tr><tr><td>3</td><td>4:18</td><td class="acc">4:20 ✓</td><td>167</td></tr></table>
<div class="lbl">Splits</div>
{splits([(1, 338, 131), (2, 329, 138), (3, 312, 146), (4, 262, 160), (5, 260, 163), (6, 300, 156), (7, 261, 165), (8, 259, 166), (9, 295, 158), (10, 258, 167), (11, 330, 150), (12, 344, 141)])}
<div class="card" style="padding:10px 12px;margin-top:8px"><span class="lbl" style="margin:0">Tijd in zone</span>{zoneverdeling([(1, 18), (2, 34), (3, 10), (4, 38)])}</div>
<div class="lbl">Beste prestaties</div>
<div class="row"><span>5 km</span><span class="r acc">21:24 · beste sinds maart</span></div>
<div class="row"><span>10 km</span><span class="r">45:02</span></div>
<div class="lbl">Je antwoord en notitie</div>
<div class="card"><span class="pill acc">Goed</span><div class="p" style="margin-top:6px">"Linkerkuit trok even bij km 9, daarna weg." Bij de volgende loop vraagt LUPO ernaar.</div></div>
<p class="p" style="font-size:11px">Uit je Garmin-import. Strava-data blijft bij Strava.</p>
""", tab="Plan", fab=False)

scherm("r3", "R", "Fietsrit met vermogen", "Voor fietsers: vermogenscurve tegen zes weken geleden, NP en IF, ontkoppeling, en voeding naar de race toe.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="r1.html">← Logboek</a>
<div class="lbl" style="margin-top:0">Dinsdag 27 oktober · Fietsen · Kempen</div>
<div class="h-l">LANGE RIT ZONE 2</div>
<div class="media" style="margin-top:10px">{kaart(130, "rit", "")}<div class="in">{hoogte([20, 24, 30, 28, 26, 34, 40, 36, 30, 26, 24, 22, 20], 28)}</div></div>
<div class="stats"><div><div class="k">Afstand</div><div class="v">92 km</div></div><div><div class="k">Tijd</div><div class="v">3:05:40</div></div><div><div class="k">NP</div><div class="v">212 W</div></div>
<div><div class="k">IF</div><div class="v">0,71</div></div><div><div class="k">TSS</div><div class="v">156</div></div><div><div class="k">Plan</div><div class="v acc">102%</div></div></div>
<div class="lbl acc">Wat LUPO ziet</div>
<div class="card">
{inzicht("✓", "Ontkoppeling 3,8%", "Vermogen en hartslag bleven drie uur samen. De rit van vier uur in week 48 blijft staan.")}
{inzicht("↗", "Beste 20 minuten: 262 W", "16 W meer dan zes weken geleden. Een nieuwe FTP-test staat in de Combine.")}
{inzicht("!", "Voeding: 55 g per uur", "Thun vraagt 80 tot 90. De volgende lange rit vraagt 70 g per uur.", "warn")}
</div>
<div class="card" style="padding:12px"><div style="display:flex;justify-content:space-between"><span class="lbl" style="margin:0">Vermogenscurve</span><span class="legend" style="margin:0"><span><b style="background:{ACC}"></b>nu</span><span><b style="background:rgba(237,237,235,0.4)"></b>6 wk geleden</span></span></div>{vermogenscurve()}</div>
<div class="card" style="padding:10px 12px"><span class="lbl" style="margin:0">Tijd in zone</span>{zoneverdeling([(1, 22), (2, 71), (3, 7)])}</div>
""", tab="Plan", fab=False)

scherm("r4", "R", "Inzichten over weken", "Fitheid en vorm over twaalf weken, efficiëntie, records. Elk inzicht met de reden en wat het plan ermee doet.", f"""
<div class="lbl">Plan</div>
{SEG_P("Logboek")}
<div class="h-l">FITHEID <span class="acc">EN VORM</span></div>
<div class="card" style="padding:12px;margin-top:10px">{fitheid_vorm()}
<div class="legend"><span><b style="background:{ACC}"></b>fitheid 58</span><span><b style="background:#ff6b5a"></b>vermoeidheid</span><span><b style="background:#7d9400"></b>vorm</span></div></div>
<div class="why">Je fitheid steeg van 38 naar 58 in twaalf weken, met twee rustweken. <b>Op koers voor de opbouw</b>; de piek valt in mei.</div>
<div class="lbl">Wat beter wordt</div>
<div class="card" style="padding:12px"><div style="display:flex;justify-content:space-between;align-items:baseline"><span>Tempo bij hartslag 145</span><span class="h-m acc">5:18</span></div>
{lijn([342, 340, 337, 336, 333, 331, 330, 327, 325, 322, 320, 318], b=300, h=70, labels=[(0, "aug"), (11, "nu")])}<div class="p" style="font-size:11px">Was 5:42. Zelfde moeite, 24 seconden per km sneller.</div></div>
<div class="lbl">Records uit je eigen data</div>
<div class="row"><span>5 km</span><span class="r acc">21:24 · 30 okt</span></div>
<div class="row"><span>FTP (20 min × 0,95)</span><span class="r">249 W · 28 okt</span></div>
<div class="row"><span>CSS zwemmen</span><span class="r">1:38 /100 m · okt</span></div>
<a class="btn-text" href="v3.html">Op schema voor sub 9u30? →</a>
""", tab="Plan", fab=False)

CSS_EXTRA += """
.act { display:block; background:var(--card); border:1px solid var(--line); border-radius:14px; padding:12px; margin-bottom:8px; color:inherit; text-decoration:none; }
a.act:hover { border-color: var(--accent); }
.act-top { display:flex; justify-content:space-between; align-items:center; }
.act-d { font-size:11px; color:var(--muted-2); }
.act-t { font-weight:600; font-size:15px; margin:4px 0 2px; }
.act-g { font-size:12px; color:var(--muted-2); } .act-g b { color:var(--text); font-weight:600; }
.act-b { margin:8px 0 4px; border-radius:8px; overflow:hidden; } .act-b:empty { display:none; }
.act-r { font-size:12px; color:var(--text); border-top:1px solid var(--line); padding-top:8px; margin-top:6px; }
.inz { display:grid; grid-template-columns:26px 1fr; gap:10px; padding:8px 0; border-top:1px solid var(--line); }
.inz:first-child { border-top:0; padding-top:0; }
.inz-i { width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; background:rgba(200,241,53,0.12); }
.inz-i.warn { background:rgba(255,176,32,0.14); }
.inz-t { font-weight:600; font-size:13px; } .inz-p { font-size:12px; color:var(--muted-2); line-height:1.45; margin-top:2px; }
.spl { font-size:12px; }
.spl-h, .spl-r { display:grid; grid-template-columns:26px 40px 1fr 30px; gap:8px; align-items:center; padding:5px 0; }
.spl-h { font-size:10px; color:var(--muted); letter-spacing:0.08em; text-transform:uppercase; }
.spl-r { border-top:1px solid var(--line); }
.spl-r i { display:block; height:8px; border-radius:4px; }
.spl-r span:last-child, .spl-h span:last-child { text-align:right; color:var(--muted-2); }
"""

# ── HUISSTIJL VAN HET PRODUCTBEELD ──────────────────────────────────────────
# Rustiger: leesbare labels zonder monospace, koppen in Bebas Neue, tabbalk in gewone woorden
# met een streepje boven de actieve tab, kaarten met iets meer lucht.
THEMA = """
:root { --bg:#0a0a0a; --card:#161616; --line:rgba(255,255,255,0.08); --line-strong:rgba(255,255,255,0.14); --accent:#c8f135; --muted:rgba(240,237,230,0.5); --muted-2:rgba(240,237,230,0.68); --text:#f0ede6; }
body { font-family:'DM Sans', sans-serif; }
.screen > * { flex-shrink:0; }
.h-xl { font-size:56px; line-height:0.9; letter-spacing:0; }
.h-l { font-size:36px; line-height:0.92; letter-spacing:0; }
.h-m { font-size:22px; letter-spacing:0.01em; }
.lbl, .tile .k, .stats .k, .pill, .demo, .legend, .zleg, table.t th { font-weight:500; letter-spacing:0.12em; }
.lbl { font-size:10.5px; }
.p { font-weight:400; font-size:13.5px; }
.row { padding:13px 14px; font-size:13.5px; }
.row .r { font-size:12px; }
.card { padding:16px; border-radius:16px; }
.tile .v, .stats .v { font-size:26px; letter-spacing:0.01em; }
.tabbar { padding:0 8px 20px; }
.tabbar a { font-size:11px; letter-spacing:0; text-transform:none; padding:14px 6px 0; position:relative; color:var(--muted-2); }
.tabbar a.on::before { content:""; position:absolute; top:0; left:50%; transform:translateX(-50%); width:18px; height:3px; border-radius:2px; background:var(--accent); }
.btn-primary { font-family:'DM Sans', sans-serif; font-weight:600; letter-spacing:0; }
"""


# ── WORKOUT UITVOEREN ───────────────────────────────────────────────────────
# Voor, tijdens en na de sessie. Het doel staat groot, de band eromheen, de volgende stap eronder.
# Bijsturen tijdens de sessie volgt vaste regels (hartslagdrift), net als de ochtendbeslissing.

def workout_voortgang(blokken, pos, h=46, b=300):
    """Workoutprofiel met een markering waar je nu zit (pos in minuten)."""
    tot = sum(m for m, _ in blokken)
    s = workout(blokken, h, b).replace("</svg>", "")
    x = pos / tot * b
    s += f'<rect x="0" y="0" width="{x:.1f}" height="{h}" fill="rgba(10,10,10,0.55)"/>'
    s += f'<line x1="{x:.1f}" y1="0" x2="{x:.1f}" y2="{h}" stroke="#f0ede6" stroke-width="2"/>'
    return s + "</svg>"


STAPPEN = [("Opwarmen", "10 min", "zone 1", "6:00 /km"), ("Strides", "4 × 20 s", "vlot", "—"),
           ("Drempel 1", "8 min", "zone 4", "4:20 /km"), ("Herstel", "3 min", "zone 1", "6:00 /km"),
           ("Drempel 2", "8 min", "zone 4", "4:20 /km"), ("Herstel", "3 min", "zone 1", "6:00 /km"),
           ("Drempel 3", "8 min", "zone 4", "4:20 /km"), ("Herstel", "3 min", "zone 1", "6:00 /km"),
           ("Drempel 4", "8 min", "zone 4", "4:20 /km"), ("Uitlopen", "10 min", "zone 1", "6:00 /km")]

stap_rijen = "".join(
    f'<div class="row{" on" if "Drempel" in n else ""}" style="padding:10px 12px"><span>{n}<br/><span class="mut" style="font-size:11px">{d} · {z}</span></span><span class="r">{t}</span></div>'
    for n, d, z, t in STAPPEN)

scherm("x1", "X", "Voor de start", "De sessie als profiel en als stappen. Naar je horloge sturen of in de app volgen.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="d1b.html">← Vandaag</a>
<div class="lbl" style="margin-top:0">Vrijdag · Lopen · 70 min</div>
<div class="h-l">DREMPEL <span class="acc">4×8 MIN</span></div>
<div class="card" style="margin-top:10px">{workout(DREMPEL, 56)}<div style="display:flex;justify-content:space-between;margin-top:8px" class="p"><span>70 min · 12,6 km</span><span>TSS 82</span></div></div>
<div class="why">Vandaag voluit: HRV binnen je band. Doel van het blok: <b>4:20 houden met een hartslag die niet wegloopt.</b></div>
<div class="lbl">Stappen</div>
{stap_rijen}
<div class="spacer"></div>
<a class="btn-primary" href="x2.html">Start in de app</a>
<a class="btn-text" href="x2.html">Stuur naar je horloge</a>
""", tab="Vandaag", fab=False)

scherm("x2", "X", "Bezig", "Eén getal groot: het doeltempo en of je erin zit. De tijd die rest, en wat hierna komt. Leesbaar in het voorbijgaan.", f"""
<div class="lbl acc" style="margin-top:4px">Drempel 2 van 4</div>
<div style="display:flex;justify-content:space-between;align-items:flex-end;margin:6px 0 4px">
  <div><div class="mut" style="font-size:12px">Tempo nu</div><div style="font-family:Bebas Neue;font-size:88px;line-height:0.85">4:22</div></div>
  <div style="text-align:right"><div class="mut" style="font-size:12px">Nog</div><div style="font-family:Bebas Neue;font-size:52px;line-height:0.9">05:12</div></div>
</div>
<div class="band"><span style="left:30%;width:40%"></span><i style="left:55%"></i></div>
<div style="display:flex;justify-content:space-between" class="mut"><span style="font-size:11px">4:28</span><span class="acc" style="font-size:12px">doel 4:16 – 4:24 · erin</span><span style="font-size:11px">4:12</span></div>
<div class="tiles" style="margin-top:14px"><div class="tile"><div class="k">Hartslag</div><div class="v">164</div><div class="s">grens 170</div></div><div class="tile"><div class="k">Afstand</div><div class="v">5,8</div><div class="s">km</div></div><div class="tile"><div class="k">Totaal</div><div class="v">31:40</div><div class="s">van 70 min</div></div></div>
<div class="card" style="padding:12px">{workout_voortgang(DREMPEL, 30)}</div>
<div class="row"><span>Hierna<br/><span class="mut" style="font-size:11px">Herstel 3 min · rustig dribbelen</span></span><span class="r">6:00 /km</span></div>
<div class="spacer"></div>
<div class="tiles t2"><a class="tile" href="x3.html" style="text-align:center"><div class="v" style="font-size:18px">Pauze</div></a><a class="tile" href="x4.html" style="text-align:center"><div class="v" style="font-size:18px">Stop</div></a></div>
""", fab=False)

scherm("x3", "X", "Bijsturen tijdens", "Loopt de hartslag weg bij hetzelfde tempo, dan stelt het schema een kortere laatste herhaling voor. Een vaste regel, geen gevoel. Jij beslist.", f"""
<div class="lbl acc" style="margin-top:4px">Drempel 4 van 4</div>
<div class="card warnc" style="margin-top:8px">
  <div class="h-m warn">HARTSLAG LOOPT WEG</div>
  <p class="p" style="margin:6px 0 0">Herhaling 3 eindigde op 172 bij 4:21. Herhaling 1 was 164 bij hetzelfde tempo. Dat is 5% drift, boven de grens van 4%.</p>
</div>
<div class="card" style="padding:12px"><span class="lbl" style="margin:0">Hartslag per herhaling</span>{staven([164, 168, 172, 0], ["1", "2", "3", "4"], 70, markeer=2)}</div>
<div class="why">Het schema stelt voor: <b>herhaling 4 op 5 minuten in plaats van 8.</b> Wat je vandaag laat liggen, haal je niet in.</div>
<div class="spacer"></div>
<a class="btn-primary" href="x4.html">Neem 5 minuten</a>
<a class="btn-text" href="x4.html">Doe de volle 8</a>
""", fab=False)

scherm("x4", "X", "Klaar", "Meteen na de sessie: gepland tegen gedaan in één beeld, dan de analyse en de ene vraag.", f"""
<div class="lbl acc" style="margin-top:4px">✓ Gedaan · 67 min</div>
<div class="h-l">DREMPEL <span class="acc">4×8</span></div>
<div class="card" style="margin-top:10px"><div class="lbl" style="margin:0 0 6px">Gepland</div><div style="opacity:0.4">{workout(DREMPEL, 26)}</div>
<div class="lbl" style="margin:10px 0 6px">Gedaan</div>{workout([(10, 1), (8, 2), (6, 2), (8, 4), (3, 1), (8, 4), (3, 1), (8, 4), (3, 1), (5, 4), (10, 1)], 26)}</div>
<div class="stats"><div><div class="k">Afstand</div><div class="v">12,1 km</div></div><div><div class="k">Drempel</div><div class="v">4:20</div></div><div><div class="k">Plan</div><div class="v acc">94%</div></div></div>
<div class="why">Laatste herhaling ingekort zoals het schema voorstelde. <b>Telt als nagekomen.</b></div>
<a class="btn-primary" href="d5.html">Naar de analyse</a>
""", fab=False)


# ── RACEDAY ─────────────────────────────────────────────────────────────────
# De laatste tien dagen, het raceplan uit eigen data, de ochtend zelf, de uitslag claimen, en wat daarna komt.

def taper(b=300, h=110):
    dagen = 14
    belasting = [70, 64, 72, 60, 0, 55, 48, 40, 0, 35, 28, 0, 20, 0]
    vorm = [-14, -12, -15, -10, -2, -5, -1, 3, 8, 9, 12, 15, 16, 19]
    sx = lambda i: 10 + i * (b - 20) / (dagen - 1)
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    for i, v in enumerate(belasting):
        bh = v / 75 * (h - 50)
        s += f'<rect x="{sx(i)-6:.1f}" y="{h-18-bh:.1f}" width="12" height="{bh:.1f}" rx="2" fill="#3a3a3a"/>'
    pts = [(sx(i), 46 - v * 1.6) for i, v in enumerate(vorm)]
    s += f'<polyline fill="none" stroke="{ACC}" stroke-width="2.2" points="{_pad(pts)}"/>'
    s += f'<circle cx="{pts[-1][0]:.1f}" cy="{pts[-1][1]:.1f}" r="4" fill="{ACC}" stroke="#0a0a0a" stroke-width="2"/>'
    s += f'<text x="{b-4}" y="{pts[-1][1]-8:.1f}" text-anchor="end" fill="{ACC}" font-family="DM Sans" font-size="9">vorm +19</text>'
    for i, t in [(0, "−14 d"), (7, "−7 d"), (13, "race")]:
        s += f'<text x="{sx(i):.1f}" y="{h-4}" text-anchor="{"end" if i == 13 else "start" if i == 0 else "middle"}" fill="rgba(240,237,230,0.4)" font-family="DM Sans" font-size="8">{t}</text>'
    return s + "</svg>"


scherm("y1", "Y", "Taper", "De laatste twee weken: belasting omlaag, vorm omhoog. Het schema laat zien waarom je je soms traag voelt, en dat dat hoort.", f"""
<div class="media">{beeld("thun", 120, "THUN · NOG 9 DAGEN", "4 juli 2027 • doel sub 9u30", "TAPER")}</div>
<div class="card" style="padding:12px"><div style="display:flex;justify-content:space-between"><span class="lbl" style="margin:0">Belasting en vorm</span><span class="legend" style="margin:0"><span><b style="background:#3a3a3a"></b>belasting</span><span><b style="background:{ACC}"></b>vorm</span></span></div>{taper()}</div>
<div class="why">Volume <b>−45%</b>, intensiteit blijft. Zware benen deze week horen bij een taper: je lichaam bouwt op wat je trainde.</div>
<div class="lbl">Nog te doen</div>
<div class="row"><span>Raceplan nakijken</span><a class="r acc" href="y2.html">open →</a></div>
<div class="row"><span>Voeding testen op de laatste lange rit</span><span class="r">✓</span></div>
<div class="row"><span>Fiets nagekeken</span><span class="r">zaterdag</span></div>
<div class="row dim"><span>Inchecken en briefing</span><span class="r">3 juli</span></div>
""", tab="Plan", fab=False)

scherm("y2", "Y", "Raceplan", "Per onderdeel een doel en een grens, uit je eigen trainingsdata. Voeding per uur. Splits om op te letten.", f"""
<a class="btn-text" style="text-align:left;padding-left:0" href="y1.html">← Taper</a>
<div class="h-l">RACEPLAN <span class="acc">SUB 9U30</span></div>
<p class="p" style="margin:4px 0 10px">IRONMAN Switzerland Thun · 4 juli 2027 · start 06:50</p>
<div class="card" style="padding:12px">
<div class="segbar"><span style="flex:65;background:#4a6a7a">ZWEM</span><span style="flex:4;background:#2a2a2a"></span><span style="flex:305;background:#7d9400">FIETS</span><span style="flex:3;background:#2a2a2a"></span><span style="flex:190;background:{ACC};color:#0a0a0a">LOOP</span></div>
<div style="display:flex;justify-content:space-between" class="mut"><span style="font-size:11px">06:50</span><span style="font-size:11px">~ 16:17</span></div></div>
<table class="t"><tr><th>Onderdeel</th><th>Doel</th><th>Grens</th><th>Tijd</th></tr>
<tr><td>Zwem 3,8 km</td><td>1:42 /100 m</td><td>—</td><td>1:05</td></tr>
<tr><td>Fiets 180 km</td><td>205 W NP</td><td>&lt; 230 W op klim</td><td>5:05</td></tr>
<tr><td>Loop 42,2 km</td><td>4:30 /km</td><td>hs &lt; 150 tot km 30</td><td>3:10</td></tr>
<tr><td>Wissels</td><td>—</td><td>—</td><td>0:07</td></tr></table>
<div class="lbl">Voeding</div>
<div class="tiles"><div class="tile"><div class="k">Fiets</div><div class="v">85 g</div><div class="s">koolhydraten per uur</div></div><div class="tile"><div class="k">Loop</div><div class="v">60 g</div><div class="s">per uur</div></div><div class="tile"><div class="k">Vocht</div><div class="v">750 ml</div><div class="s">per uur, warm</div></div></div>
<div class="why">Je lange ritten op 205 W gaven <b>ontkoppeling onder 4%</b> over vier uur. Hoger dan 215 W zag je drift na drie uur.</div>
""", tab="Plan", fab=False)

scherm("y3", "Y", "De ochtend van de race", "Op racedag geen beslissing. Alleen het plan, de tijd en wat nog moet.", f"""
<div class="lbl acc" style="margin-top:4px">Zondag 4 juli · 04:45</div>
<div class="h-xl">RACE<span class="acc">DAG.</span></div>
<p class="p" style="margin:8px 0 12px">Vandaag beslist LUPO niets. Het plan staat. Jij voert uit.</p>
<div class="tiles"><div class="tile"><div class="k">Start</div><div class="v">06:50</div><div class="s">golf 3</div></div><div class="tile"><div class="k">Water</div><div class="v">19°</div><div class="s">wetsuit ok</div></div><div class="tile"><div class="k">Wind</div><div class="v">12</div><div class="s">km/u, ZW</div></div></div>
<div class="lbl">Tot de start</div>
<div class="row"><span>Ontbijt, 3 uur voor de start</span><span class="r">✓ 03:50</span></div>
<div class="row on"><span>Wisselzone open</span><span class="r acc">05:15</span></div>
<div class="row"><span>Bidons en voeding op de fiets</span><span class="r">05:30</span></div>
<div class="row"><span>Inzwemmen</span><span class="r">06:20</span></div>
<div class="card hl" style="margin-top:8px"><div class="p" style="color:var(--text)">Fiets: 205 watt, ook als ze je voorbij rijden. Loop: hartslag onder 150 tot km 30.</div></div>
""", tab="Vandaag", fab=False)

scherm("y4", "Y", "Uitslag claimen", "De officiële uitslag koppelen aan je profiel. Dat telt voor je Ladder en, als je wil, voor het Race Board.", f"""
<div class="lbl acc" style="margin-top:4px">IRONMAN Switzerland Thun · uitslag</div>
<div class="h-l">IS DIT <span class="acc">JOUW TIJD?</span></div>
<div class="card hl" style="margin-top:12px"><div style="display:flex;justify-content:space-between;align-items:baseline"><span>Jan V. · M40–44 · #1182</span><span class="h-m acc">9:24:51</span></div>
<div class="tiles t4" style="margin:10px 0 0"><div class="tile"><div class="k">Zwem</div><div class="v" style="font-size:18px">1:04</div></div><div class="tile"><div class="k">Fiets</div><div class="v" style="font-size:18px">5:03</div></div><div class="tile"><div class="k">Loop</div><div class="v" style="font-size:18px">3:11</div></div><div class="tile"><div class="k">Plaats</div><div class="v" style="font-size:18px">41</div><div class="s">van 412</div></div></div></div>
<div class="row"><span>Tegenover je plan</span><span class="r acc">−2:09 · sub 9u30 ✓</span></div>
<div class="row"><span>Leeftijdsgecorrigeerd</span><span class="r">8:58:12</span></div>
<label class="row" style="cursor:pointer"><span>Toon op het Race Board van Thun</span><span class="pill acc">aan</span></label>
<div class="spacer"></div>
<a class="btn-primary" href="y5.html">Claim deze uitslag</a>
<a class="btn-text" href="y4.html">Dit ben ik niet</a>
""", fab=False)

scherm("y5", "Y", "Na de race", "Eerst herstel, dan de volgende datum. Het schema bouwt geen nieuwe belasting op tot je lichaam daar klaar voor is.", f"""
<div class="h-l">GEFINISHT. <span class="acc">9:24:51</span></div>
<div class="why">Sub 9u30 gehaald, 2 minuten onder plan. Fiets en loop binnen de grens: <b>het plan klopte voor jouw lichaam.</b></div>
<div class="lbl">Volgende twee weken</div>
<div class="card" style="padding:12px">{staven([0, 0, 0.5, 0, 0.6, 0, 0.8, 0, 0.7, 0.9, 0, 1.0, 0.8, 1.2], ["", "", "", "", "", "", "W1", "", "", "", "", "", "", "W2"], 70)}<p class="p" style="font-size:11px;margin:4px 0 0">Alleen rustig, kort, zonder intensiteit. HRV moet eerst terug in je band.</p></div>
<div class="lbl">Volgende race</div>
<a class="row" href="p5.html"><span>IRONMAN 70.3 Zell am See<br/><span class="mut" style="font-size:11px">8 weken · B-race</span></span><span class="r">datum volgt</span></a>
<a class="row" href="p5.html"><span>Of een andere race kiezen</span><span class="r">→</span></a>
<div class="row"><span>Ladder</span><span class="r acc">02 → 03 · je valt op</span></div>
""", tab="Plan", fab=False)

for s in SCHERMEN:
    if s["id"] in ("d1", "d1z"):
        s["body"] += '<a class="btn-text" href="x1.html">Bekijk de training →</a>'

CSS_EXTRA += """
.band { position:relative; height:14px; background:#1f1f1f; border-radius:7px; margin:10px 0 6px; }
.band span { position:absolute; top:0; bottom:0; background:rgba(200,241,53,0.28); border-radius:7px; }
.band i { position:absolute; top:-4px; width:4px; height:22px; background:var(--accent); border-radius:2px; transform:translateX(-2px); }
.segbar { display:flex; gap:2px; height:26px; border-radius:6px; overflow:hidden; margin-bottom:6px; }
.segbar span { display:flex; align-items:center; justify-content:center; font-size:9px; letter-spacing:0.1em; font-weight:600; color:#f0ede6; }
"""


# ── KALENDER ─────────────────────────────────────────────────────────────────
# November 2026 met echte weekdagen: week 44 begint op maandag 26 oktober, vandaag is donderdag 5 november.
import datetime as _dt

SPORT_KLEUR = {"loop": ACC, "fiets": "#4fc3c3", "zwem": "#6b8cff", "kracht": "#b0a99a"}
LANGE_RIT = [(10, 1), (160, 2), (10, 1)]
LANGE_LOOP = [(5, 1), (90, 2), (5, 1)]
ZWEM_T = [(10, 1), (8, 2), (4, 3), (8, 2), (4, 3), (8, 2), (3, 1)]
FIETS_DR = [(15, 1), (10, 2), (20, 4), (5, 1), (20, 4), (20, 2)]
KRACHT = [(40, 2)]

def _normaal(st="gepland", za=180, zo=100):
    return [[], [("loop", "Drempel 4×8", 70, 82, DREMPEL, st)], [("zwem", "Techniek", 50, 35, ZWEM_T, st), ("kracht", "Kracht", 40, 5, KRACHT, st)],
            [("fiets", "2×20 drempel", 90, 95, FIETS_DR, st)], [("loop", "Zone 2", 45, 38, ZONE2, st)],
            [("fiets", "Lange rit", za, round(za * 5 / 6), LANGE_RIT, st)], [("loop", "Lange loop", zo, round(zo * 1.15), LANGE_LOOP, st)]]

KAL = {
    44: [[("zwem", "CSS 10×100", 48, 30, ZWEM_T, "aangepast")], [("fiets", "Lange rit", 186, 156, LANGE_RIT, "gedaan")], "rust",
         [("loop", "Drempel 3×10", 62, 78, DREMPEL, "gedaan")], [("loop", "Zone 2", 45, 38, ZONE2, "gedaan")], [("fiets", "Duurrit", 89, 110, LANGE_RIT, "gedaan")], []],
    46: _normaal(), 48: _normaal(za=240, zo=110), 49: _normaal(),
    47: [[], [("loop", "Zone 2", 40, 30, ZONE2, "gepland")], [("zwem", "Techniek", 40, 25, ZWEM_T, "gepland")], [("fiets", "Zone 2", 60, 45, LANGE_RIT, "gepland")],
         [], [("fiets", "Duurrit", 90, 70, LANGE_RIT, "gepland")], [("loop", "Duurloop", 60, 55, LANGE_LOOP, "gepland")]],
}
_w45 = _normaal()
_w45[1] = [(*_w45[1][0][:5], "gedaan")]
_w45[2] = [(*x[:5], "gedaan") for x in _w45[2]]
_w45[3] = [("fiets", "Zone 2 · afgebouwd", 45, 30, [(8, 1), (32, 2), (5, 1)], "vandaag")]
KAL[45] = _w45
KAL[49][5] = [("fiets", "Combine: FTP-test", 75, 85, [(20, 1), (5, 3), (10, 1), (20, 5), (20, 1)], "gepland")]
VANDAAG = _dt.date(2026, 11, 5)
SEL = _dt.date(2026, 11, 7)

def _dag(wk, i):
    return _dt.date(2026, 10, 26) + _dt.timedelta(days=(wk - 44) * 7 + i)

def _uren(m):
    return f"{m // 60}u{m % 60:02d}"

def _link(d, sessies):
    if d == VANDAAG: return "d1.html"
    if d == _dt.date(2026, 10, 29): return "r2.html"
    if d == _dt.date(2026, 10, 27): return "r3.html"
    if d < VANDAAG: return "r1.html"
    return "x1.html" if d == SEL else "k1.html"

def _cel(wk, i):
    d, inh = _dag(wk, i), KAL[wk][i]
    kl = ["kd"] + (["vorig"] if d.month != 11 else []) + (["vandaag"] if d == VANDAAG else []) + (["sel"] if d == SEL else [])
    binnen = f'<span class="kn">{d.day}</span>'
    if inh == "rust":
        binnen += '<span class="kr">rust</span>'
    else:
        for sp, t, m, tss, bl, st in inh:
            binnen += f'<i class="ks {st}" style="--k:{SPORT_KLEUR[sp]};width:{max(28, min(100, m / 180 * 100)):.0f}%"></i>'
    return f'<a class="{" ".join(kl)}" href="{_link(d, inh)}">{binnen}</a>'

def _weektot(wk):
    ss = [x for dag in KAL[wk] if dag != "rust" for x in dag]
    tot = sum(x[2] for x in ss)
    gedaan = sum(x[2] for x in ss if x[5] in ("gedaan", "aangepast"))
    return ss, tot, gedaan

def _weekkol(wk):
    ss, tot, gedaan = _weektot(wk)
    if wk == 44: s, pct = '<span class="acc">7/7 ✓</span>', 100
    elif wk == 45: s, pct = f"{_uren(gedaan)} gedaan", round(gedaan / tot * 100)
    elif wk == 47: s, pct = '<span class="tag-r">rustweek</span>', 0
    else: s, pct = "gepland", 0
    return f'<div class="kw"><b>{_uren(tot)}</b><span>{s}</span><span class="kwb"><i style="width:{pct}%"></i></span></div>'

KOP = "".join(f'<div class="kh">{d}</div>' for d in ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"]) + '<div class="kh" style="text-align:right">Uren</div>'
RASTER = KOP + "".join("".join(_cel(wk, i) for i in range(7)) + _weekkol(wk) for wk in range(44, 50))

NOV_UREN = f"{sum(x[2] for wk in KAL for i, dag in enumerate(KAL[wk]) if dag != 'rust' and _dag(wk, i).month == 11 for x in dag) // 60}u"
scherm("k1", "P", "Kalender", "De maand in één beeld: per dag de sport en of hij gedaan is, rust die LUPO oplegde, de rustweek en per week je uren. Tik een dag om hem te openen.", f"""
<div class="lbl">Plan</div>
{SEG_P("Kalender")}
<div style="display:flex;justify-content:space-between;align-items:center;margin:2px 0 4px"><a class="mut" href="k1.html" style="font-size:18px;text-decoration:none">‹</a><div class="h-l">NOVEMBER <span class="acc">2026</span></div><a class="mut" href="k1.html" style="font-size:18px;text-decoration:none">›</a></div>
<div class="fase"><span class="on">Opbouw 1 · wk 44–46</span><span>Rust · wk 47</span><span>Opbouw 2 · wk 48–51</span></div>
<div class="kal">{RASTER}</div>
<div class="kleg"><span><i class="ks gedaan" style="--k:#f0ede6"></i>gedaan</span><span><i class="ks aangepast" style="--k:#f0ede6"></i>aangepast</span><span><i class="ks gepland" style="--k:#f0ede6"></i>gepland</span><span><i class="ks gemist"></i>gemist</span><span><b class="kr">rust</b>van LUPO</span></div>
<div class="kleg"><span><i class="dot" style="background:{SPORT_KLEUR['zwem']}"></i>zwemmen</span><span><i class="dot" style="background:{SPORT_KLEUR['fiets']}"></i>fietsen</span><span><i class="dot" style="background:{ACC}"></i>lopen</span><span><i class="dot" style="background:{SPORT_KLEUR['kracht']}"></i>kracht</span></div>
<div class="card hl" style="margin-top:10px">
<div style="display:flex;justify-content:space-between;align-items:baseline"><span class="lbl" style="margin:0">Zaterdag 7 november</span><span class="pill">gepland</span></div>
<div class="h-m" style="margin:6px 0 2px">Lange rit · 3u · zone 2</div>
<div class="p" style="margin:0 0 8px">200 tot 215 watt, 70 g koolhydraten per uur. TSS 150.</div>
{workout(LANGE_RIT, 30)}
<div style="display:flex;gap:16px;margin-top:8px"><a class="btn-text" style="padding:0;white-space:nowrap" href="x1.html">Bekijk de training →</a><a class="btn-text" style="padding:0" href="p2.html">Verplaats</a></div>
</div>
<div class="tiles t4"><div class="tile"><div class="k">November</div><div class="v">{NOV_UREN}</div><div class="s">gepland</div></div><div class="tile"><div class="k">Nagekomen</div><div class="v acc">100%</div><div class="s">tot vandaag</div></div><div class="tile"><div class="k">Rustweek</div><div class="v">47</div><div class="s">16–22 nov</div></div><div class="tile"><div class="k">Thun</div><div class="v">34</div><div class="s">weken</div></div></div>
<p class="p" style="font-size:11px">De rustweek staat vast in het plan. Rust die LUPO oplegt telt als nagekomen.</p>
""", tab="Plan", fab=False)

# Web: weekraster zoals TrainingPeaks, weken 44 tot 47, met een training die versleept wordt.
def _wk(sp, t, m, tss, bl, st, extra=""):
    return (f'<div class="wk {st} {extra}" style="--k:{SPORT_KLEUR[sp]}"><div class="t">{t}</div>'
            f'<div class="m">{_uren(m) if m >= 60 else f"{m} min"} · TSS {tss}</div>{workout(bl, 14)}</div>')

def _wcel(wk, i):
    d, inh = _dag(wk, i), KAL[wk][i]
    kl = "kc" + (" vandaag" if d == VANDAAG else "")
    binnen = f'<span class="kn">{d.day} {"okt" if d.month == 10 else ("nov" if d.day == 1 or (wk == 44 and i == 6) else "")}{" · vandaag" if d == VANDAAG else ""}</span>'
    if inh == "rust":
        binnen += '<div class="wk rustl"><div class="t">Rust van LUPO</div><div class="m">HRV 9% onder je band · telt als nagekomen</div></div>'
    elif wk == 45 and i == 5:
        binnen += _wk(*inh[0][:5], "gepland", "ghost")
    elif wk == 45 and i == 6:
        binnen += _wk(*KAL[45][5][0][:5], "gepland", "drag") + '<div class="wk drop">Neerzetten op zondag</div>'
    else:
        binnen += "".join(_wk(*x) for x in inh) or '<span class="mut" style="font-size:11px">rustdag</span>'
    return f'<div class="{kl}">{binnen}</div>'

def _wtot(wk):
    ss, tot, gedaan = _weektot(wk)
    tss = sum(x[3] for x in ss)
    per = {sp: sum(x[2] for x in ss if x[0] == sp) for sp in SPORT_KLEUR}
    balk = "".join(f'<i style="flex:{m};background:{SPORT_KLEUR[sp]}"></i>' for sp, m in per.items() if m)
    st = {44: '<span class="acc">7/7 nagekomen ✓</span>', 45: f"{_uren(gedaan)} van {_uren(tot)} gedaan", 47: '<span class="tag-r">rustweek</span>'}.get(wk, "gepland")
    return (f'<div class="kweek"><span class="lbl" style="margin:0">Week {wk}</span><span class="h">{_uren(tot)}</span><span>TSS {tss}</span>'
            f'<span class="sbar">{balk}</span><span>{st}</span></div>')

W6 = (f'<div class="desk">{side("Plan")}<div class="main">'
      f'<div class="mhead"><span class="h-l">KALENDER</span><span class="mut">November 2026 · opbouw 1, week 3 van 4 · sleep een training naar een andere dag</span>'
      f'<span class="seg" style="margin:0 0 0 auto;width:210px"><a class="on" href="w6.html">Weken</a><a href="k1.html">Maand</a><a href="w2.html">Seizoen</a></span></div>'
      f'<div class="kgrid">' + "".join(f'<div class="kh">{d}</div>' for d in ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag", "Week"])
      + "".join("".join(_wcel(wk, i) for i in range(7)) + _wtot(wk) for wk in range(44, 48)) + '</div>'
      f'<div class="ktoast"><b>Lange rit naar zondag.</b> De lange loop schuift naar zaterdag. Regels ✓ geen twee zware dagen na elkaar ✓ weektotaal blijft 8u50. <span class="acc">Loslaten om op te slaan.</span></div>'
      f'</div></div>')
scherm("w6", "W", "Web: Kalender", "Weekraster zoals TrainingPeaks: dagen als kolommen, elke training als kaart met profiel, per week de uren, TSS en verdeling per sport. Slepen verplaatst, LUPO controleert de regels voor het opslaat.", W6, desk=True)

CSS_EXTRA += """
.fase { display:flex; gap:3px; margin:6px 0 8px; }
.fase span { flex:1; justify-content:center; height:18px; border-radius:5px; background:#1a1a1a; font-size:9.5px; color:var(--muted-2); display:flex; align-items:center; padding:0 7px; white-space:nowrap; overflow:hidden; }
.fase span.on { background:rgba(200,241,53,0.16); color:var(--accent); }
.kal { display:grid; grid-template-columns:repeat(7, minmax(0,1fr)) 48px; gap:3px; }
.kal .kh { font-size:10px; color:var(--muted-2); text-align:center; padding:0 0 3px; }
.kd { min-height:54px; background:#131313; border-radius:8px; padding:4px 4px 5px; display:flex; flex-direction:column; gap:3px; text-decoration:none; color:var(--text); border:1px solid transparent; min-width:0; }
.kd .kn { font-size:11px; color:var(--muted-2); line-height:1.1; }
.kd.vorig { opacity:0.5; }
.kd.vandaag { border-color:var(--accent); }
.kd.vandaag .kn { color:var(--accent); font-weight:600; }
.kd.sel { border-color:rgba(240,237,230,0.75); background:#1d1d1d; }
.ks { display:block; height:7px; border-radius:4px; background:var(--k); }
.ks.gepland { background:transparent; box-shadow:inset 0 0 0 1px var(--k); }
.ks.vandaag { background:transparent; box-shadow:inset 0 0 0 1.5px var(--k); }
.ks.aangepast { background:linear-gradient(90deg, var(--k) 0 60%, transparent 60%); box-shadow:inset 0 0 0 1px var(--k); }
.ks.gemist { background:repeating-linear-gradient(45deg, #ff6b5a 0 2px, transparent 2px 4px); box-shadow:inset 0 0 0 1px #ff6b5a; }
.kr { font-size:9px; color:var(--accent); border:1px solid var(--accent); border-radius:6px; padding:0 4px; align-self:flex-start; line-height:1.4; font-weight:500; }
.kw { display:flex; flex-direction:column; justify-content:center; align-items:flex-end; gap:2px; font-size:9.5px; color:var(--muted-2); min-width:0; }
.kw b { color:var(--text); font-weight:600; font-size:12px; }
.kw span { white-space:nowrap; }
.kwb { width:100%; height:3px; background:#222; border-radius:2px; overflow:hidden; display:block; }
.kwb i { display:block; height:100%; background:var(--accent); }
.tag-r { color:var(--text); background:#262626; border-radius:5px; padding:0 4px; }
.kleg { display:flex; flex-wrap:wrap; gap:6px 12px; margin-top:8px; font-size:10.5px; color:var(--muted-2); align-items:center; }
.kleg span { display:inline-flex; align-items:center; gap:5px; }
.kleg .ks { width:16px; }
.kleg .dot { width:8px; height:8px; border-radius:50%; display:inline-block; }
.kgrid { flex:1; display:grid; grid-template-columns:repeat(7, minmax(0,1fr)) 128px; grid-template-rows:30px repeat(4, minmax(0,1fr)); min-height:0; }
.kgrid .kh { border-bottom:1px solid var(--line); border-right:1px solid var(--line); font-size:11px; color:var(--muted-2); padding:8px 10px; }
.kc { border-right:1px solid var(--line); border-bottom:1px solid var(--line); padding:6px 7px; display:flex; flex-direction:column; gap:5px; min-width:0; position:relative; }
.kc .kn { font-size:11px; color:var(--muted-2); }
.kc.vandaag { background:rgba(200,241,53,0.035); }
.kc.vandaag .kn { color:var(--accent); font-weight:600; }
.wk { background:#171717; border:1px solid var(--line); border-left:3px solid var(--k); border-radius:8px; padding:5px 7px 6px; line-height:1.3; }
.wk .t { font-weight:600; font-size:11.5px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.wk .m { color:var(--muted-2); font-size:10px; margin-bottom:3px; }
.wk.gedaan .t::after, .wk.aangepast .t::after { content:" ✓"; color:var(--accent); }
.wk.aangepast .t::after { content:" ✓"; color:#ffb020; }
.wk.gepland { background:#101010; border-style:dashed; border-left-style:solid; }
.wk.vandaag { border-color:rgba(200,241,53,0.5); border-left-color:var(--k); }
.wk.rustl { --k:var(--accent); background:rgba(200,241,53,0.05); }
.wk.ghost { opacity:0.22; }
.wk.drag { transform:rotate(-2.5deg) translate(-10px,-2px); box-shadow:0 18px 34px rgba(0,0,0,0.7); border-color:var(--accent); border-style:solid; background:#1d1d1d; z-index:3; }
.wk.drop { border:1px dashed var(--accent); color:var(--accent); text-align:center; padding:12px 6px; background:rgba(200,241,53,0.05); font-size:11px; }
.kweek { padding:8px 12px; border-bottom:1px solid var(--line); font-size:10.5px; color:var(--muted-2); display:flex; flex-direction:column; gap:4px; background:#0e0e0e; }
.kweek .h { font-family:Bebas Neue; font-size:26px; color:var(--text); line-height:1; }
.sbar { display:flex; height:5px; border-radius:3px; overflow:hidden; gap:1px; }
.sbar i { display:block; }
.ktoast { position:absolute; right:150px; bottom:16px; width:600px; background:#141a08 !important; box-shadow:0 20px 40px rgba(0,0,0,0.6); border:1px solid rgba(200,241,53,0.4); background:rgba(200,241,53,0.06); border-radius:10px; padding:10px 14px; font-size:12px; }
"""


# ── UIT TRAININGPEAKS (6 nov): band per signaal, impact van een training, gepland tegen gedaan, vorm per week ──
def _scherm(id):
    return next(s for s in SCHERMEN if s["id"] == id)

def bandrij(naam, waarde, lo, hi, gem, s_lo, s_hi, pos, status, kl=""):
    """Eén signaal tegenover je eigen band: balk = band, streep = vannacht, punt = gemiddelde 7 dagen."""
    x = lambda v: (v - s_lo) / (s_hi - s_lo) * 100
    return (f'<div class="brij"><div class="brij-k"><span>{naam}</span><b class="{kl}">{waarde}</b></div>'
            f'<div class="band"><span style="left:{x(lo):.0f}%;width:{x(hi) - x(lo):.0f}%"></span><em style="left:{x(gem):.0f}%"></em><i style="left:{x(pos):.0f}%;{"background:#ffb020" if kl == "warn" else ""}"></i></div>'
            f'<div class="brij-s">{status}</div></div>')

BANDEN = f"""<a class="card" href="d2.html" style="padding:12px">
<div style="display:flex;justify-content:space-between;align-items:baseline"><span class="lbl" style="margin:0">Vannacht tegen je band</span><span class="legend" style="margin:0"><span><b style="background:rgba(200,241,53,0.3)"></b>band</span><span><b style="background:#f0ede6;border-radius:50%"></b>7 dagen</span></span></div>
{bandrij("HRV", "52 ms", 58, 64, 61, 45, 70, 52, "15% onder je gemiddelde van 61 · grens −5%", "warn")}
{bandrij("Rusthartslag", "50", 46, 52, 49, 40, 60, 50, "binnen je band")}
{bandrij("Slaap", "6u10", 6.8, 7.8, 7.1, 5, 9, 6.17, "onder je band, boven de grens van 6u")}
</a>"""

d = _scherm("d1")
d["body"] = d["body"].replace(d["body"][d["body"].index('<div class="tiles t2">'):d["body"].index('<div class="lbl">Training · aangepast</div>')], BANDEN + "\n")

def impact(fit, verm, vorm_woord, pos, zin):
    """Wat de training deed met fitheid en vermoeidheid, en waar je vorm nu staat."""
    rij = lambda n, a, b, kl: f'<div class="row"><span>{n}</span><span class="r">{a} → <b class="{kl}">{b}</b> <span class="mut">({b - a:+d})</span></span></div>'
    return (f'<div class="lbl">Wat deze training deed</div><div class="card" style="padding:12px">'
            f'{rij("Fitheid", *fit, "acc")}{rij("Vermoeidheid", *verm, "")}'
            f'<div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:10px"><span class="lbl" style="margin:0">Vorm</span><span class="h-m">{vorm_woord}</span></div>'
            f'<div class="vorm"><span>Zwaar</span><span>Opbouwen</span><span>In balans</span><span>Fris</span><i style="left:{pos}%"></i></div>'
            f'<div class="p" style="margin:8px 0 0">{zin}</div></div>')

def gepland_gedaan(rijen):
    return ('<div class="lbl">Gepland tegen gedaan</div><table class="t"><tr><th></th><th>Gepland</th><th>Gedaan</th><th></th></tr>'
            + "".join(f'<tr><td>{n}</td><td class="mut">{p}</td><td>{g}</td><td class="{"acc" if ok else "warn"}">{"✓" if ok else "!"}</td></tr>' for n, p, g, ok in rijen) + "</table>")

r2 = _scherm("r2")
r2["body"] = r2["body"].replace('<div class="lbl">Intervallen</div>',
    gepland_gedaan([("Duur", "1:00:00", "1:02:18", True), ("Afstand", "12,0 km", "12,4 km", True), ("Drempeltempo", "4:20", "4:18–4:21", True), ("Hartslag", "&lt; 168", "165", True), ("TSS", "75", "78", True)])
    + impact((56, 57), (61, 69), "Opbouwen", 34, "Zoals gepland voor een opbouwweek. Vrijdag blijft rustig, dan sta je zaterdag weer in balans.")
    + '\n<div class="lbl">Intervallen</div>', 1)

r3 = _scherm("r3")
r3["body"] = r3["body"].replace('<div class="card" style="padding:12px"><div style="display:flex;justify-content:space-between"><span class="lbl" style="margin:0">Vermogenscurve',
    gepland_gedaan([("Duur", "3:00:00", "3:05:40", True), ("Afstand", "90 km", "92 km", True), ("Vermogen", "205–215 W", "212 W NP", True), ("Voeding", "70 g/u", "55 g/u", False), ("TSS", "150", "156", True)])
    + impact((55, 57), (54, 70), "Zwaar", 12, "De zwaarste dag van de week, bewust. Je vermoeidheid zakt pas na een rustige dag.")
    + '\n<div class="card" style="padding:12px"><div style="display:flex;justify-content:space-between"><span class="lbl" style="margin:0">Vermogenscurve', 1)

x4 = _scherm("x4")
x4["body"] = x4["body"].replace('<a class="btn-primary" href="d5.html">Naar de analyse</a>',
    impact((58, 59), (63, 71), "Opbouwen", 30, "Morgen staat een rustige loop. Je vorm blijft in de opbouwzone, zoals deze week vraagt.")
    + '\n<a class="btn-primary" href="d5.html">Naar de analyse</a>')

# Vorm per week in de kalender
VORM = {44: (55, 60, "opbouwen"), 45: (58, 64, "opbouwen"), 46: (59, 66, "opbouwen"), 47: (56, 44, "fris"), 48: (60, 71, "zwaar"), 49: (61, 64, "in balans")}
k1 = _scherm("k1")
for wk, (f, v, w) in VORM.items():
    k1["body"] = k1["body"].replace(_weekkol(wk), _weekkol(wk).replace("<b>", f'<span class="vw {w.replace(" ", "")}">{w}</span><b>', 1), 1)
k1["body"] = k1["body"].replace('<div class="kh" style="text-align:right">Uren</div>', '<div class="kh" style="text-align:right">Week</div>', 1)
w6 = _scherm("w6")
for wk, (f, v, w) in VORM.items():
    if wk <= 47:
        w6["body"] = w6["body"].replace(f'<span class="lbl" style="margin:0">Week {wk}</span>',
            f'<span class="lbl" style="margin:0">Week {wk}</span><span class="vw {w.replace(" ", "")}">{w}</span><span class="fvv">Fitheid <b>{f}</b> · Vermoeid <b>{v}</b> · Vorm <b>{f - v:+d}</b></span>', 1)

CSS_EXTRA += """
.brij { margin-top:10px; }
.brij-k { display:flex; justify-content:space-between; align-items:baseline; font-size:13px; }
.brij-k b { font-family:Bebas Neue; font-size:20px; font-weight:400; }
.brij .band { margin:4px 0 3px; height:10px; }
.brij .band em { position:absolute; top:2px; width:6px; height:6px; border-radius:50%; background:#f0ede6; transform:translateX(-3px); }
.brij .band i { top:-3px; height:16px; }
.brij-s { font-size:10.5px; color:var(--muted-2); }
.vorm { position:relative; display:flex; gap:2px; margin-top:6px; }
.vorm span { flex:1; text-align:center; font-size:9.5px; color:var(--muted-2); padding:12px 0 0; border-top:6px solid #2a2a2a; }
.vorm span:nth-child(1) { border-top-color:#ff6b5a; } .vorm span:nth-child(2) { border-top-color:#7d9400; } .vorm span:nth-child(3) { border-top-color:var(--accent); } .vorm span:nth-child(4) { border-top-color:#4fc3c3; }
.vorm i { position:absolute; top:-5px; width:4px; height:16px; background:#f0ede6; border-radius:2px; transform:translateX(-2px); }
.vw { font-size:9px; letter-spacing:0.06em; text-transform:uppercase; font-weight:600; color:#7d9400; }
.vw.zwaar { color:#ff6b5a; } .vw.inbalans { color:var(--accent); } .vw.fris { color:#4fc3c3; } .vw.opbouwen { color:#9db82a; }
.fvv { font-size:10px; color:var(--muted-2); } .fvv b { color:var(--text); font-weight:600; }
"""
