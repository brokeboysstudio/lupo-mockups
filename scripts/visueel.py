# Visuele laag voor de app-mockups: grafieken, kaarten en beelden als inline SVG.
# Wordt ingeladen door genereer-app-mockups.py en vervangt de schermen met dezelfde id.
# Lessen uit Strava, WHOOP, Runna en TrainingPeaks: eerst een beeld, dan het getal, dan pas tekst.
# Geen Strava-data: kaarten en grafieken komen uit de eigen import van de atleet.

import math

ACC = "#d8ff00"
ZONE_KLEUR = {1: "#4a4a4a", 2: "#7d9400", 3: "#d8ff00", 4: "#ffb020", 5: "#ff4d4d"}


def _pad(punten):
    return " ".join(f"{x:.1f},{y:.1f}" for x, y in punten)


def ring(pct, kleur, groot, klein, maat=132):
    r = maat / 2 - 9
    omtrek = 2 * math.pi * r
    return (f'<svg width="{maat}" height="{maat}" viewBox="0 0 {maat} {maat}">'
            f'<circle cx="{maat/2}" cy="{maat/2}" r="{r}" fill="none" stroke="#1d1d1d" stroke-width="10"/>'
            f'<circle cx="{maat/2}" cy="{maat/2}" r="{r}" fill="none" stroke="{kleur}" stroke-width="10" stroke-linecap="round" '
            f'stroke-dasharray="{omtrek*pct:.1f} {omtrek:.1f}" transform="rotate(-90 {maat/2} {maat/2})"/>'
            f'<text x="50%" y="48%" text-anchor="middle" fill="#ededeb" font-family="Anton" font-size="{maat*0.25:.0f}">{groot}</text>'
            f'<text x="50%" y="66%" text-anchor="middle" fill="rgba(237,237,235,0.5)" font-family="JetBrains Mono" font-size="9" letter-spacing="1.5">{klein}</text></svg>')


def lijn(waarden, band=None, b=300, h=90, kleur=ACC, labels=None, laatste_kleur=None):
    lo, hi = min(waarden + (list(band) if band else [])) - 3, max(waarden + (list(band) if band else [])) + 3
    sx = lambda i: 4 + i * (b - 8) / (len(waarden) - 1)
    sy = lambda v: h - 14 - (v - lo) / (hi - lo) * (h - 22)
    pts = [(sx(i), sy(v)) for i, v in enumerate(waarden)]
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
    if band:
        s += f'<rect x="0" y="{sy(band[1]):.1f}" width="{b}" height="{sy(band[0]) - sy(band[1]):.1f}" fill="rgba(216,255,0,0.08)"/>'
    s += f'<polygon fill="url(#g{len(waarden)})" points="{_pad(pts)} {pts[-1][0]:.1f},{h-14} {pts[0][0]:.1f},{h-14}"/>'
    s += f'<defs><linearGradient id="g{len(waarden)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{kleur}" stop-opacity="0.25"/><stop offset="1" stop-color="{kleur}" stop-opacity="0"/></linearGradient></defs>'
    s += f'<polyline fill="none" stroke="{kleur}" stroke-width="2" stroke-linejoin="round" points="{_pad(pts)}"/>'
    lx, ly = pts[-1]
    s += f'<circle cx="{lx:.1f}" cy="{ly:.1f}" r="4" fill="{laatste_kleur or kleur}" stroke="#050505" stroke-width="2"/>'
    if labels:
        for i, t in labels:
            s += f'<text x="{sx(i):.1f}" y="{h-2}" text-anchor="middle" fill="rgba(237,237,235,0.35)" font-family="JetBrains Mono" font-size="8">{t}</text>'
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


def kaart(h=170, route="thun", label=""):
    """Gestileerde kaart met route, uit de eigen import (GPX of FIT)."""
    if route == "thun":
        pad = [(30, 140), (52, 120), (70, 118), (92, 100), (118, 96), (140, 80), (160, 82), (186, 64), (210, 60), (236, 44), (262, 40), (282, 52), (270, 72), (246, 84), (220, 100), (196, 116), (170, 122), (140, 132), (110, 138), (78, 146), (46, 150), (30, 140)]
        water = "M0,170 L0,120 C40,110 70,150 120,150 C170,150 200,128 250,110 C280,100 300,104 300,104 L300,170 Z"
    else:
        pad = [(40, 130), (60, 100), (90, 92), (120, 70), (160, 66), (200, 50), (240, 60), (262, 90), (230, 116), (190, 124), (150, 130), (100, 140), (60, 142), (40, 130)]
        water = "M0,170 L0,150 C60,140 120,165 300,140 L300,170 Z"
    straten = "".join(f'<line x1="{x}" y1="0" x2="{x-40}" y2="{h}" stroke="#141414" stroke-width="1"/>' for x in range(0, 360, 26))
    straten += "".join(f'<line x1="0" y1="{y}" x2="300" y2="{y+18}" stroke="#141414" stroke-width="1"/>' for y in range(0, h, 22))
    s = (f'<svg viewBox="0 0 300 {h}" width="100%" height="{h}" class="map"><rect width="300" height="{h}" fill="#0b0d0c"/>{straten}'
         f'<path d="{water}" fill="#0d1b22"/>'
         f'<polyline fill="none" stroke="rgba(216,255,0,0.25)" stroke-width="7" stroke-linejoin="round" points="{_pad(pad)}"/>'
         f'<polyline fill="none" stroke="{ACC}" stroke-width="2.5" stroke-linejoin="round" points="{_pad(pad)}"/>'
         f'<circle cx="{pad[0][0]}" cy="{pad[0][1]}" r="5" fill="#050505" stroke="{ACC}" stroke-width="2.5"/>')
    if label:
        s += f'<text x="10" y="18" fill="rgba(237,237,235,0.6)" font-family="JetBrains Mono" font-size="9" letter-spacing="1">{label}</text>'
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
                 '<path d="M130,150 L148,96 L152,96 L170,150Z" fill="#2a2f35"/><path d="M149,150 L150,98 L151,150Z" fill="#d8ff00" opacity="0.5"/>')
    else:  # baan
        lucht = ("#0e1012", "#1e2a1e")
        lagen = ('<ellipse cx="150" cy="128" rx="170" ry="46" fill="#3a1e18"/><ellipse cx="150" cy="128" rx="130" ry="30" fill="#1d3320"/>'
                 '<ellipse cx="150" cy="128" rx="150" ry="38" fill="none" stroke="#e8e4dc" stroke-opacity="0.25" stroke-dasharray="3 5"/>')
    tekst = ""
    if tag:
        tekst += f'<text x="14" y="22" fill="{ACC}" font-family="JetBrains Mono" font-size="9" letter-spacing="1.5">{tag}</text>'
    if titel:
        tekst += f'<text x="14" y="{h-28}" fill="#ededeb" font-family="Anton" font-size="22">{titel}</text>'
    if sub:
        tekst += f'<text x="14" y="{h-12}" fill="rgba(237,237,235,0.7)" font-family="Bricolage Grotesque" font-size="11">{sub}</text>'
    return (f'<svg viewBox="0 0 300 {h}" width="100%" height="{h}" class="beeld" preserveAspectRatio="xMinYMid slice">'
            f'<defs><linearGradient id="l{scene}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{lucht[0]}"/><stop offset="1" stop-color="{lucht[1]}"/></linearGradient>'
            f'<linearGradient id="v{scene}" x1="0" y1="0" x2="0" y2="1"><stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.75"/></linearGradient></defs>'
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
        s += f'<text x="{x + w*0.3:.1f}" y="{h-1}" text-anchor="middle" fill="rgba(237,237,235,0.4)" font-family="JetBrains Mono" font-size="8">{labels[i]}</text>'
    return s + "</svg>"


def verdeling(pct, h=80, b=300, label="jij"):
    """Klokcurve met jouw plek: de ladder als beeld."""
    pts = [(x, h - 14 - 56 * math.exp(-((x - 150) / 55) ** 2)) for x in range(0, b + 1, 6)]
    xj = b * pct
    yj = h - 14 - 56 * math.exp(-((xj - 150) / 55) ** 2)
    return (f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}">'
            f'<polygon fill="rgba(237,237,235,0.07)" points="{_pad(pts)} {b},{h-14} 0,{h-14}"/>'
            f'<polygon fill="rgba(216,255,0,0.18)" points="{_pad([p for p in pts if p[0] >= xj])} {b},{h-14} {xj:.1f},{h-14}"/>'
            f'<polyline fill="none" stroke="rgba(237,237,235,0.4)" stroke-width="1.5" points="{_pad(pts)}"/>'
            f'<line x1="{xj:.1f}" y1="{yj-6:.1f}" x2="{xj:.1f}" y2="{h-14}" stroke="{ACC}" stroke-width="2"/>'
            f'<circle cx="{xj:.1f}" cy="{yj-6:.1f}" r="4" fill="{ACC}"/>'
            f'<text x="{xj:.1f}" y="{yj-14:.1f}" text-anchor="middle" fill="{ACC}" font-family="JetBrains Mono" font-size="9">{label}</text>'
            f'<line x1="0" y1="{h-14}" x2="{b}" y2="{h-14}" stroke="#1d1d1d"/></svg>')


def spreiding(punten, ik, top_y, b=300, h=170):
    """Progressie tegen volume: wie wint met het minste uren, staat linksboven."""
    s = f'<svg viewBox="0 0 {b} {h}" width="100%" height="{h}"><rect x="24" y="8" width="{b-30}" height="{top_y-8}" fill="rgba(216,255,0,0.07)"/>'
    s += f'<text x="{b-8}" y="20" text-anchor="end" fill="{ACC}" font-family="JetBrains Mono" font-size="8">TOP 5%</text>'
    s += f'<line x1="24" y1="{h-20}" x2="{b}" y2="{h-20}" stroke="#2a2a2a"/><line x1="24" y1="8" x2="24" y2="{h-20}" stroke="#2a2a2a"/>'
    s += f'<text x="{b-4}" y="{h-6}" text-anchor="end" fill="rgba(237,237,235,0.4)" font-family="JetBrains Mono" font-size="8">UUR PER WEEK →</text>'
    s += f'<text x="10" y="{h/2}" fill="rgba(237,237,235,0.4)" font-family="JetBrains Mono" font-size="8" transform="rotate(-90 10 {h/2})" text-anchor="middle">PROGRESSIE →</text>'
    for x, y in punten:
        s += f'<circle cx="{x}" cy="{y}" r="2.6" fill="rgba(237,237,235,0.28)"/>'
    s += f'<circle cx="{ik[0]}" cy="{ik[1]}" r="6" fill="{ACC}" stroke="#050505" stroke-width="2"/><text x="{ik[0]+10}" y="{ik[1]+4}" fill="{ACC}" font-family="JetBrains Mono" font-size="9">jij</text>'
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
        s += f'<text x="{x:.1f}" y="{y+3:.1f}" text-anchor="middle" fill="rgba(237,237,235,0.55)" font-family="JetBrains Mono" font-size="9">{t}</text>'
    s += f'<polygon fill="rgba(237,237,235,0.08)" stroke="rgba(237,237,235,0.4)" stroke-dasharray="3 3" points="{_pad([p(i, v) for i, v in enumerate(voor)])}"/>'
    s += f'<polygon fill="rgba(216,255,0,0.2)" stroke="{ACC}" stroke-width="2" points="{_pad([p(i, v) for i, v in enumerate(na)])}"/>'
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
        s += f'<text x="{a*b+2:.1f}" y="{h-4}" fill="rgba(237,237,235,0.45)" font-family="JetBrains Mono" font-size="7.5">{t}</text>'
    ctl = [(x * b / 40, h - 34 - 60 * (min(x / 37, 1) ** 0.9) + (6 if x > 37 else 0)) for x in range(41)]
    s += f'<polyline fill="none" stroke="{ACC}" stroke-width="2" points="{_pad(ctl)}"/>'
    s += f'<line x1="{nu*b:.1f}" y1="6" x2="{nu*b:.1f}" y2="{h-26}" stroke="#ededeb" stroke-opacity="0.5" stroke-dasharray="2 3"/>'
    s += f'<text x="{nu*b+4:.1f}" y="14" fill="#ededeb" font-family="JetBrains Mono" font-size="8">NU</text>'
    s += f'<text x="{b-2}" y="14" text-anchor="end" fill="{ACC}" font-family="JetBrains Mono" font-size="8">THUN</text>'
    return s + "</svg>"


CSS_EXTRA = """
.beeld, .map { display:block; border-radius: 14px; }
.media { border-radius: 14px; overflow: hidden; border: 1px solid var(--line); margin-bottom: 8px; background: var(--card); }
.media .in { padding: 10px 12px 12px; }
.hero { display: flex; align-items: center; gap: 14px; margin: 6px 0 4px; }
.zbar { display: flex; height: 10px; border-radius: 5px; overflow: hidden; gap: 2px; margin-top: 6px; }
.zbar i { display: block; height: 100%; }
.zleg { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--muted-2); }
.zleg b { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px 6px; margin: 10px 0; }
.stats .k { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.stats .v { font-family: 'Anton', sans-serif; font-size: 20px; }
.av { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; font-size: 11px; font-weight: 600; color: #050505; flex-shrink: 0; }
.avs { display: flex; } .avs .av { margin-left: -8px; border: 2px solid var(--bg); } .avs .av:first-child { margin-left: 0; }
.legend { display:flex; gap:12px; font-family:'JetBrains Mono',monospace; font-size:9px; color:var(--muted-2); margin-top:4px; }
.legend b { display:inline-block; width:10px; height:3px; margin-right:4px; vertical-align:2px; }
.scroll-x { display: flex; gap: 8px; overflow-x: auto; margin: 0 -18px; padding: 0 18px 4px; scrollbar-width: none; }
.scroll-x > * { flex: 0 0 78%; }
.fab { width: 44px; height: 44px; padding: 0 !important; border-radius: 50% !important; font-size: 0 !important; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(0,0,0,0.5); }
.fab::after { content: ""; width: 16px; height: 14px; border: 2px solid #050505; border-radius: 4px 4px 4px 0; }
.daycol { display:grid; grid-template-columns: 34px 1fr auto; gap:10px; align-items:center; padding:8px 10px; background:var(--card); border:1px solid var(--line); border-radius:12px; margin-bottom:6px; font-size:12px; text-decoration:none; color:inherit; }
.daycol.on { border-color: var(--accent); }
.daycol .d { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--muted); line-height:1.2; }
.daycol .d b { display:block; font-family:'Anton'; font-size:16px; color:var(--text); font-weight:400; }
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

WEEK1 = [("MA", "3", "Rust", None, "—"), ("DI", "4", "Loop · zone 2", [(5, 1), (40, 2), (5, 1)], "50 min"),
         ("WO", "5", "Zwem · techniek", [(10, 1), (8, 2), (4, 3), (8, 2), (4, 3), (8, 2), (3, 1)], "45 min"),
         ("DO", "6", "Fiets · 3×10 tempo", [(15, 1), (10, 3), (5, 1), (10, 3), (5, 1), (10, 3), (20, 2)], "75 min"),
         ("VR", "7", "Rust", None, "—"), ("ZA", "8", "Lange rit", [(10, 1), (100, 2), (10, 1)], "2u"), ("ZO", "9", "Lange loop", [(5, 1), (60, 2), (5, 1)], "1u10")]
def daglijst(week, link="d1.html", on=None):
    return "".join(f'<a class="daycol{" on" if d == on else ""}" href="{link}"><div class="d">{d}<b>{n}</b></div>'
                   f'<div><div style="font-size:12px;margin-bottom:4px">{t}</div>{workout(w, 18) if w else "<div class=mut style=font-size:11px>herstel</div>"}</div>'
                   f'<span class="r" style="font-family:JetBrains Mono;font-size:10px;color:var(--muted-2)">{m}</span></a>' for d, n, t, w, m in week)

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
<div class="lbl">Donderdag 6 november</div>
<div class="hero">{ring(0.42, "#ffb020", "42", "PARAAT")}
  <div><div class="h-l">AFBOUWEN</div><div class="p" style="margin-top:4px">Intensiteit eruit.<br/>Duur naar 60%.</div></div></div>
{waarom}
<a class="card" href="d2.html" style="padding:10px 12px 6px">
  <div style="display:flex;justify-content:space-between"><span class="k lbl" style="margin:0">HRV · 14 dagen</span><span class="warn" style="font-family:Anton;font-size:18px">52 ms</span></div>
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
<div class="lbl">Vrijdag 7 november</div>
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
<div class="card warnc" style="padding:10px 12px 6px"><div style="display:flex;justify-content:space-between"><span>HRV vs 7-daags gemiddelde</span><span class="warn" style="font-family:JetBrains Mono;font-size:11px">−15% · grens −5%</span></div>
{lijn(HRV, (58, 64), h=90, labels=HRV_LABELS, laatste_kleur="#ffb020")}<div class="legend"><span><b style="background:rgba(216,255,0,0.3)"></b>jouw band</span><span><b style="background:{ACC}"></b>HRV per nacht</span></div></div>
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
<text x="296" y="17" text-anchor="end" fill="#ffb020" font-family="JetBrains Mono" font-size="8">TE ZWAAR</text><text x="296" y="38" text-anchor="end" fill="{ACC}" font-family="JetBrains Mono" font-size="8">GOED</text><text x="296" y="59" text-anchor="end" fill="#888" font-family="JetBrains Mono" font-size="8">TE LICHT</text></svg></div>
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
<div style="display:flex;align-items:center;gap:10px;margin:4px 0 10px"><div class="avs">{avatar("JW", "#d8ff00")}{avatar("BV", "#7d9400")}{avatar("AM", "#ffb020")}{avatar("+", "#2a2a2a")}</div><span class="p">1.240 ingeschreven</span></div>
<div class="card" style="padding:10px 12px"><svg viewBox="0 0 300 50" width="100%" height="50">
<line x1="10" y1="20" x2="290" y2="20" stroke="#2a2a2a" stroke-width="2"/><rect x="10" y="17" width="34" height="6" rx="3" fill="{ACC}"/><rect x="250" y="17" width="40" height="6" rx="3" fill="{ACC}"/><rect x="44" y="18" width="206" height="4" fill="#4b5a00"/>
<text x="10" y="42" fill="#ededeb" font-family="JetBrains Mono" font-size="8">NULMETING</text><text x="150" y="42" text-anchor="middle" fill="rgba(237,237,235,0.5)" font-family="JetBrains Mono" font-size="8">10 WEKEN SCHEMA</text><text x="290" y="42" text-anchor="end" fill="#ededeb" font-family="JetBrains Mono" font-size="8">HERTEST</text>
<text x="10" y="10" fill="rgba(237,237,235,0.5)" font-family="JetBrains Mono" font-size="8">1 MRT</text><text x="290" y="10" text-anchor="end" fill="rgba(237,237,235,0.5)" font-family="JetBrains Mono" font-size="8">23 MEI</text></svg></div>
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

vervang("t3", body=ochtend(False).replace("Donderdag 6 november", "DFRNT · week 6 van 10").replace('<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>', '<a class="btn-secondary" href="t4.html">Ladder van deze golf →</a>').replace('href="d5.html">Gedaan', 'href="t4.html">Gedaan'))

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
WEEK45 = [("MA", "3", "Rust", None, "—"), ("DI", "4", "Loop · drempel 4×8", DREMPEL, "70 min"), ("WO", "5", "Zwem · techniek", [(10, 1), (8, 2), (4, 3), (8, 2), (4, 3), (8, 2), (3, 1)], "50 min"),
          ("DO", "6", "Fiets · 2×20 drempel", [(15, 1), (10, 2), (20, 4), (5, 1), (20, 4), (20, 2)], "90 min"), ("VR", "7", "Loop · zone 2", ZONE2, "45 min"),
          ("ZA", "8", "Lange rit", [(10, 1), (160, 2), (10, 1)], "3u"), ("ZO", "9", "Lange loop", [(5, 1), (90, 2), (5, 1)], "1u40")]
vervang("p1", body=f"""
<div class="lbl">Plan</div>
<div class="seg"><a class="on" href="p1.html">Week</a><a href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>
<div style="display:flex;justify-content:space-between;align-items:baseline"><div class="h-l">WEEK <span class="acc">45</span></div><span class="r" style="font-family:JetBrains Mono;font-size:11px;color:var(--muted-2)">TSS 520 • 9u35</span></div>
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

KLEUREN = ["#d8ff00", "#7d9400", "#ffb020", "#4ade80"]
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
vervang("w1", body=desk("Vandaag", "VANDAAG", "Donderdag 6 november", [
    ("Beslissing", f'<div class="hero">{ring(0.42, "#ffb020", "42", "PARAAT")}<div class="h-l">AFBOUWEN</div></div><div class="why">HRV <b>15% onder</b> je 7-daagse gemiddelde. Drempel −5%.</div><div class="card hl"><div class="h-m">Zone 2 · 45 min</div><div style="margin-top:8px">{workout(ZONE2, 30)}</div></div>'),
    ("Waarom", f'<div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">HRV · 14 dagen</span>{lijn(HRV, (58, 64), h=110, labels=HRV_LABELS, laatste_kleur="#ffb020")}</div><div class="card" style="padding:10px 12px 6px"><span class="lbl" style="margin:0">Slaap</span>{staven([7.4, 7.1, 7.8, 6.9, 7.2, 6.5, 6.2], ["V", "Z", "Z", "M", "D", "W", "D"], h=70, markeer=6)}</div>'),
    ("Laatste sessie", f'<div class="media">{kaart(160, "thun", "8,4 KM · DINSDAG")}</div><div class="card" style="padding:10px 12px">{zoneverdeling([(1, 12), (2, 81), (3, 7)])}</div><a class="btn-text" href="w1.html">Exporteer tabel</a>'),
]))
