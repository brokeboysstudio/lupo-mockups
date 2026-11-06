"""Genereert de doorklikbare app-mockups in public/mockups/app/.

Elk scherm is een HTML-pagina in een telefoonframe (of een desktopframe voor de webversie),
met links naar de volgende stap. Draai opnieuw na een wijziging:  python3 scripts/genereer-app-mockups.py
Inhoud volgt de app (brokeboysstudio/lupo, PR #5) en de copyregels: geen emoji, geen claims over
sneller, herstel of blessurepreventie, geen "AI-coach" als claim.
"""
from pathlib import Path
import html

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "mockups" / "app"
FONTS = '<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet"/>'

TABS = [("Vandaag", "d1"), ("Plan", "p1"), ("Ladder", "l1"), ("Samen", "s1"), ("Ik", "i1")]

SECTIES = {
    "O": ("Onboarding", "Eerst geven, dan vragen. Race kiezen uit de database, drie tikken tot je eerste week."),
    "D": ("Vandaag", "Elke ochtend één beslissing, met de reden erbij. Afwijken kan, en telt eerlijk mee."),
    "P": ("Plan", "Week verslepen met regelcontrole, seizoen richting de A-race, pre-mortem uit eigen data."),
    "R": ("Trainingen en inzichten", "Elke afgewerkte training zoals Strava hem toont, met kaart, splits en grafiek. Daarbovenop wat LUPO erin ziet en wat het plan ermee doet. Uit de eigen import."),
    "L": ("Ladder", "Een absolute score, een percentiel op de ladder, acht treden en een Combine per kwartaal."),
    "T": ("DFRNT tryout", "Werknaam voor de tryouts. Geen permanente gratis laag: gratis meedoen in vaste golven. Nulmeting, 8 tot 12 weken schema, hertest. Top 5% progressie bij weinig volume naar de fysieke Combine en Pack Talent."),
    "V": ("Vergelijken", "Waar sta je? Tegen atleten zoals jij, naast je vrienden, en tegen het pad van wie jouw doel al haalde. Alleen wat je zelf deelt, nooit HRV of slaap."),
    "S": ("Samen", "Een crew zonder feed, een matcher, Race Boards en clubs. Voorbeelddata; later in de roadmap."),
    "C": ("Coach en Ik", "Coachgesprek over het schema, eigen data importeren en privé-instellingen."),
    "X": ("Workout uitvoeren", "Voor de start, tijdens en meteen na de sessie. Het doel groot, de band eromheen, bijsturen volgens een vaste regel."),
    "Y": ("Raceday", "Taper, raceplan uit eigen data, de ochtend van de race, de uitslag claimen en het herstel daarna."),
    "W": ("Webversie", "Mobiel beslist, web verklaart en plant. Zijbalk, panelen naast elkaar, ⌘K."),
}

SCHERMEN = []


def scherm(id, sectie, titel, uitleg, body, tab=None, fab=True, desk=False):
    SCHERMEN.append(dict(id=id, sectie=sectie, titel=titel, uitleg=uitleg, body=body, tab=tab, fab=fab, desk=desk))


def tabbar(actief):
    return '<nav class="tabbar">' + "".join(
        f'<a href="{h}.html" class="{"on" if n == actief else ""}">{n}</a>' for n, h in TABS
    ) + "</nav>"



# ── ONBOARDING (kort) ────────────────────────────────────────────────────────
scherm("o1", "O", "Kies je race", "Tik 1. Eerst de race: daaruit volgen atleettype en periodisering. Uit de database, geen vrij tekstveld.", """
<div class="lbl acc">1 van 3</div>
<div class="h-l">WAAR TRAIN JE <span class="acc">NAARTOE?</span></div>
<div class="card" style="padding:10px 12px;margin-top:12px"><span>thu</span><span class="mut">|</span></div>
<a class="row on" href="o2.html"><span>IRONMAN Switzerland Thun<br/><span class="mut" style="font-size:11px">Triatlon · volle afstand</span></span><span class="r acc">4 jul 2027</span></a>
<div class="lbl">Populair in België</div>
<a class="row" href="o2.html"><span>Antwerp 10 Miles</span><span class="r">~15 apr 2027</span></a>
<a class="row" href="o2.html"><span>Brussels Marathon</span><span class="r">~3 okt 2027</span></a>
<a class="btn-text" href="o2.html">Nog geen race — gewoon fitter worden</a>
""", fab=False)

scherm("o2", "O", "Niveau", "Tik 2. Vier buckets in uren per week. De rest vraagt LUPO later, wanneer het nodig is.", """
<div class="lbl acc">2 van 3</div>
<div class="h-l">HOEVEEL TRAIN JE <span class="acc">NU?</span></div>
<p class="p" style="margin:8px 0 12px">IRONMAN Switzerland Thun • 34 weken</p>
<a class="card" href="o3.html"><div class="h-m">Tot 4 uur per week</div><div class="p">Opbouwen naar de basis</div></a>
<a class="card hl" href="o3.html"><div class="h-m">4 tot 8 uur</div><div class="p">Regelmatig, nog geen vaste structuur</div></a>
<a class="card" href="o3.html"><div class="h-m">8 tot 12 uur</div><div class="p">Gestructureerd, eerdere races</div></a>
<a class="card" href="o3.html"><div class="h-m">Meer dan 12 uur</div><div class="p">Competitief</div></a>
""", fab=False)

scherm("o3", "O", "Je eerste week", "Tik 3. Meteen het resultaat: de eerste week en de lijn naar de race. Account en data koppelen komen daarna.", """
<div class="lbl acc">3 van 3</div>
<div class="h-l">JE EERSTE <span class="acc">WEEK</span></div>
<p class="p" style="margin:6px 0 10px">Basisfase • 7u20 • richting Thun</p>
<div class="row"><span>Ma</span><span class="r">Rust</span></div>
<div class="row"><span>Di</span><span class="r">Loop · zone 2 · 50 min</span></div>
<div class="row"><span>Wo</span><span class="r">Zwem · techniek · 45 min</span></div>
<div class="row"><span>Do</span><span class="r">Fiets · 3×10 tempo · 75 min</span></div>
<div class="row"><span>Vr</span><span class="r">Rust</span></div>
<div class="row"><span>Za</span><span class="r">Lange rit · 2u</span></div>
<div class="row"><span>Zo</span><span class="r">Lange loop · 1u10</span></div>
<div class="card" style="margin-top:6px"><div class="p">Koppel je horloge, dan krijg je elke ochtend één beslissing met de reden erbij.</div></div>
<a class="btn-primary" href="d1.html">Start</a>
""", fab=False)

# Variant zonder waarom-regel, voor test H3 in de validatiegesprekken.
scherm("d1z", "D", "Ochtend: afbouwen, zonder waarom", "Testvariant H3: dezelfde beslissing zonder de reden. Vergelijk met D1 in het gesprek.", """
<div class="lbl">Donderdag 6 november</div>
<div class="h-xl">AFBOUWEN</div>
<div class="tiles" style="margin-top:12px">
  <div class="tile"><div class="k">HRV</div><div class="v warn">52</div></div>
  <div class="tile"><div class="k">Slaap</div><div class="v">6u10</div></div>
  <div class="tile"><div class="k">Belasting</div><div class="v">1.12</div></div>
</div>
<div class="lbl">Training</div>
<a class="card hl" href="d5.html"><div class="pill acc">Aangepast</div><div class="h-m" style="margin-top:8px">Zone 2 · 45 min</div></a>
<a class="btn-primary" href="d5.html">Gedaan</a>
<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>
""", tab="Vandaag")

# ── AANBOD ───────────────────────────────────────────────────────────────────
scherm("a1", "C", "Aanbod: raceblok €49", "Eén race, één prijs: het blok van nu tot de startlijn, met taper en raceplan.", """
<div class="lbl acc">Raceblok</div>
<div class="h-l">THUN, TOT AAN DE <span class="acc">STARTLIJN</span></div>
<p class="p" style="margin:8px 0 12px">34 weken • basis, opbouw, piek en taper</p>
<div class="h-xl">€49</div>
<p class="p">Eenmalig, voor deze race.</p>
<div class="row"><span>Elke ochtend één beslissing met de reden</span><span class="r acc">✓</span></div>
<div class="row"><span>Niet 100% en week verslepen met regelcontrole</span><span class="r acc">✓</span></div>
<div class="row"><span>Taper en raceplan voor Thun</span><span class="r acc">✓</span></div>
<div class="row"><span>Coachgesprek over het schema</span><span class="r acc">✓</span></div>
<div class="spacer"></div>
<a class="btn-primary" href="d1.html">Kies het raceblok</a>
<a class="btn-text" href="a1.html">Of Premium: €19 per maand, €169 per jaar</a>
""", fab=False)

# ── VANDAAG ──────────────────────────────────────────────────────────────────
scherm("d1", "D", "Ochtend: afbouwen", "De beslissing van vandaag, met de regel die kantelde. Tik op een signaal of op Waarom voor de onderbouwing.", """
<div class="lbl">Donderdag 6 november</div>
<div class="h-xl">AFBOUWEN</div>
<div class="why">HRV staat <b>15% onder je 7-daagse gemiddelde</b>. De drempel voor afbouwen is −5%. Slaap 6u10.</div>
<div class="tiles">
  <a class="tile" href="d2.html"><div class="k">HRV</div><div class="v warn">52</div><div class="s">band 58–64</div></a>
  <a class="tile" href="d2.html"><div class="k">Slaap</div><div class="v">6u10</div><div class="s">doel 7u30</div></a>
  <a class="tile" href="d2.html"><div class="k">Belasting</div><div class="v">1.12</div><div class="s">7 vs 28 dagen</div></a>
</div>
<div class="lbl">Training</div>
<a class="card hl" href="d5.html">
  <div class="pill acc">Aangepast</div>
  <div class="h-m" style="margin-top:8px">Zone 2 · 45 min</div>
  <div class="p">Was: drempel 4×8 min, 70 min. Het schema houdt vandaag de intensiteit eruit.</div>
</a>
<a class="btn-primary" href="d5.html">Gedaan</a>
<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>
<a class="btn-text" href="d2.html">Waarom deze beslissing →</a>
""", tab="Vandaag")

scherm("d1b", "D", "Ochtend: voluit", "Dezelfde plek op een goede ochtend. Alles binnen je eigen band.", """
<div class="lbl">Vrijdag 7 november</div>
<div class="h-xl acc">VOLUIT</div>
<div class="why">HRV, slaap en belasting liggen binnen je eigen band. Het schema gaat door zoals gepland.</div>
<div class="tiles">
  <div class="tile"><div class="k">HRV</div><div class="v">61</div><div class="s">band 58–64</div></div>
  <div class="tile"><div class="k">Slaap</div><div class="v">7u40</div><div class="s">doel 7u30</div></div>
  <div class="tile"><div class="k">Belasting</div><div class="v">1.05</div><div class="s">7 vs 28 dagen</div></div>
</div>
<div class="lbl">Training</div>
<a class="card" href="d5.html"><div class="h-m">Fiets · 2×20 min drempel</div><div class="p">90 min • TSS 95 • blok 2 van 4 richting Thun</div></a>
<a class="btn-primary" href="d5.html">Gedaan</a>
<a class="btn-secondary" href="d3.html">Ik voel me niet 100%</a>
""", tab="Vandaag")

scherm("d2", "D", "Waarom deze beslissing", "De regels achter de beslissing. Deterministisch: de coach schrijft alleen de taal.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="d1.html">← Vandaag</a>
<div class="h-l">WAAROM <span class="acc">AFBOUWEN</span></div>
<p class="p" style="margin:8px 0 12px">Drie signalen, vaste drempels. Eén regel kantelde.</p>
<div class="row on"><span>HRV vs 7-daags gemiddelde</span><span class="r warn">−15% · drempel −5%</span></div>
<div class="row"><span>Slaap</span><span class="r">6u10 · drempel 6u</span></div>
<div class="row"><span>Belasting 7 vs 28 dagen</span><span class="r">1.12 · binnen band</span></div>
<div class="lbl">Wat het schema doet</div>
<div class="card"><div class="p">Intensiteit eruit, duur naar 60%, minstens 20 minuten. Rusten pas vanaf −15% én slechte slaap, of op jouw signaal.</div></div>
<div class="lbl">Je HRV, 14 dagen</div>
<div class="card">
  <svg viewBox="0 0 300 70" width="100%" height="70"><rect x="0" y="18" width="300" height="22" fill="rgba(200,241,53,0.07)"/>
  <polyline fill="none" stroke="#c8f135" stroke-width="2" points="0,30 23,26 46,28 69,24 92,29 115,27 138,31 161,25 184,28 207,30 230,33 253,38 276,44 300,52"/></svg>
  <div class="p">Groene band = jouw normale bereik. Vanochtend eronder.</div>
</div>
<div class="demo">Drempels wachten op de sportarts vóór echte gebruikers</div>
""", tab="Vandaag")

scherm("d3", "D", "Ik voel me niet 100%", "Eén tik, drie terugkeersnelheden. Rust die LUPO oplegt telt als nagekomen.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="d1.html">← Vandaag</a>
<div class="h-l">NIET <span class="acc">100%</span></div>
<p class="p" style="margin:8px 0 14px">Vandaag wordt rust. Kies hoe snel je terugkomt.</p>
<a class="card" href="d4.html"><div class="h-m">Snel</div><div class="p">Morgen licht, overmorgen weer volgens plan.</div></a>
<a class="card hl" href="d4.html"><div class="h-m">Gewoon</div><div class="p">Twee lichte dagen, daarna het schema.</div></a>
<a class="card" href="d4.html"><div class="h-m">Rustig</div><div class="p">Drie dagen licht. Voor als het meer is dan moeheid.</div></a>
<div class="p" style="margin-top:10px">Rust die LUPO oplegt telt als nagekomen, in je score en in je proefperiode.</div>
""", tab="Vandaag")

scherm("d4", "D", "Aangepaste dagen", "Wat er verandert na Niet 100%, zichtbaar vóór je bevestigt.", """
<div class="h-l">DE KOMENDE <span class="acc">DAGEN</span></div>
<p class="p" style="margin:8px 0 12px">Terugkeer: gewoon.</p>
<div class="row on"><span>Do · vandaag</span><span class="r acc">Rust van LUPO ✓</span></div>
<div class="row"><span>Vr</span><span class="r">Zone 2 · 40 min</span></div>
<div class="row"><span>Za</span><span class="r">Zone 2 · 60 min (was lange rit 3u)</span></div>
<div class="row"><span>Zo</span><span class="r">Lange rit 2u30 — terug in schema</span></div>
<div class="card" style="margin-top:8px"><div class="p">Weekbelasting: TSS 520 → 380. De lange rit schuift één dag op; de taper naar Thun blijft gelijk.</div></div>
<div class="spacer"></div>
<a class="btn-primary" href="d1.html">Bevestig</a>
<a class="btn-text" href="d3.html">Andere snelheid</a>
""", tab="Vandaag")

scherm("d5", "D", "Na de training: één vraag", "Na elke sessie één vraag. Geen formulier.", """
<div class="lbl acc">Zone 2 · 45 min ✓</div>
<div class="h-l">HOE VOELDE <span class="acc">DIT?</span></div>
<p class="p" style="margin:8px 0 14px">Eén tik. Het schema leert ervan.</p>
<a class="card" href="d6.html"><div class="h-m">Te licht</div></a>
<a class="card hl" href="d6.html"><div class="h-m">Goed</div></a>
<a class="card" href="d6.html"><div class="h-m">Te zwaar</div></a>
""", tab="Vandaag")

scherm("d6", "D", "Bijsturing", "Wat het antwoord doet: na twee keer te zwaar in 7 dagen wordt het volgende blok lichter.", """
<div class="h-l">GENOTEERD.</div>
<div class="why">Twee keer <b>te zwaar</b> in 7 dagen. Het volgende blok gaat 10% lichter.</div>
<div class="row"><span>Ma · te zwaar</span><span class="r">drempel</span></div>
<div class="row"><span>Do · te zwaar</span><span class="r">zone 2</span></div>
<div class="row dim"><span>Drie keer te licht zonder te zwaar</span><span class="r">→ zwaarder</span></div>
<div class="spacer"></div>
<a class="btn-primary" href="d1b.html">Naar morgen</a>
""", tab="Vandaag")

scherm("d7", "D", "Honest Check", "Bij een grote afwijking vraagt LUPO hoe je je voelt. Eerlijk antwoorden telt mee in je score.", """
<div class="lbl">Zaterdag 8 november</div>
<div class="h-l">HONEST <span class="acc">CHECK</span></div>
<div class="why">HRV staat <b>12% onder</b> je gemiddelde. Hoe voel je je echt?</div>
<a class="card" href="d1.html"><div class="h-m">Goed</div><div class="p">Het schema blijft afbouwen; het signaal weegt zwaarder dan gevoel.</div></a>
<a class="card" href="d3.html"><div class="h-m">Niet 100%</div><div class="p">Rust vandaag, telt als nagekomen.</div></a>
<div class="p" style="margin-top:10px">Eerlijkheid is een vaste 15% van je score en wordt nooit herschaald.</div>
""", tab="Vandaag")

# ── PLAN ─────────────────────────────────────────────────────────────────────
WEEK = [("Ma", "Rust", "—"), ("Di", "Loop · drempel 4×8", "Z4 · 70 min"), ("Wo", "Zwem · techniek", "Z2 · 50 min"),
        ("Do", "Fiets · 2×20 drempel", "Z4 · 90 min"), ("Vr", "Loop · zone 2", "Z2 · 45 min"), ("Za", "Lange rit", "Z2 · 3u"), ("Zo", "Lange loop", "Z2 · 1u40")]
rows = "".join(f'<a class="row{" on" if d == "Do" else ""}" href="p2.html"><span><b>{d}</b> · {n}</span><span class="r">{z}</span></a>' for d, n, z in WEEK)
scherm("p1", "P", "Week", "Sleep of tik een training naar een andere dag. LUPO controleert de regels vóór het opslaat.", f"""
<div class="lbl">Plan</div>
<div class="seg"><a class="on" href="p1.html">Week</a><a href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>
<div class="h-l">WEEK <span class="acc">45</span></div>
<p class="p" style="margin:6px 0 10px">TSS 520 • 9u35 • blok opbouw 2</p>
{rows}
<p class="p">Tik op donderdag om hem te verplaatsen.</p>
""", tab="Plan")

scherm("p2", "P", "Wat verandert", "De fietstraining naar woensdag: LUPO toont de botsing en wat er verschuift.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="p1.html">← Week</a>
<div class="h-l">DO → <span class="acc">WO</span></div>
<div class="card warnc"><div class="h-m warn">Twee intensieve dagen na elkaar</div><div class="p">Dinsdag drempel en woensdag drempel. Het schema laat dat niet toe.</div></div>
<div class="lbl">Voorstel</div>
<div class="row"><span>Wo</span><span class="r">Fiets · 2×20 drempel</span></div>
<div class="row on"><span>Di → Do</span><span class="r acc">Loop drempel schuift door</span></div>
<div class="row"><span>Weekbelasting</span><span class="r">TSS 520 → 520</span></div>
<div class="spacer"></div>
<a class="btn-primary" href="p1.html">Bevestig met voorstel</a>
<a class="btn-text" href="p1.html">Zet terug</a>
""", tab="Plan")

scherm("p3", "P", "Seizoen", "Blokken richting de A-race, berekend uit de racedatum.", """
<div class="lbl">Plan</div>
<div class="seg"><a href="p1.html">Week</a><a class="on" href="p3.html">Seizoen</a><a href="p5.html">Races</a></div>
<div class="h-l">THUN <span class="acc">34 WEKEN</span></div>
<p class="p" style="margin:6px 0 12px">IRONMAN Switzerland Thun • 4 juli 2027 • doel sub 9u30</p>
<div class="row"><span>Basis</span><span class="r">tot 2 mrt</span></div>
<div class="row on"><span>Opbouw</span><span class="r acc">nu · tot 5 mei</span></div>
<div class="row"><span>Piek</span><span class="r">5 mei – 20 jun</span></div>
<div class="row"><span>Taper</span><span class="r">laatste 14 dagen</span></div>
<div class="row dim"><span>B-race · 70.3 Zell am See</span><span class="r">datum volgt</span></div>
<a class="card" href="p4.html" style="margin-top:8px"><div class="h-m">Pre-mortem →</div><div class="p">Wat kan Thun doen mislukken, uit je eigen data.</div></a>
""", tab="Plan")

scherm("p4", "P", "Pre-mortem", "Risico's uit de eigen geschiedenis, elk met de regel en het getal erachter.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="p3.html">← Seizoen</a>
<div class="h-l">PRE-<span class="acc">MORTEM</span></div>
<p class="p" style="margin:6px 0 12px">Stel: Thun mislukt. Dit zijn de waarschijnlijkste redenen, uit 12 maanden data.</p>
<div class="card warnc"><div class="h-m">Zwemmen ontbreekt</div><div class="p">Laatste 8 weken 1 zwemsessie. Een ironman vraagt er 2–3 per week.</div></div>
<div class="card"><div class="h-m">Nakomen 74%</div><div class="p">Onder de 80% die het schema nodig heeft. Meest gemist: dinsdag.</div></div>
<div class="card"><div class="h-m">HRV op 68% van de nachten</div><div class="p">De ochtendbeslissing heeft 70% nodig. Draag het horloge 's nachts.</div></div>
<div class="demo">Haalbaarheid en tijdsvoorspelling volgen na validatie</div>
""", tab="Plan")

scherm("p5", "P", "Races", "Race kiezen uit de database. Volgende editie bevestigd of geschat.", """
<div class="lbl">Plan</div>
<div class="seg"><a href="p1.html">Week</a><a href="p3.html">Seizoen</a><a class="on" href="p5.html">Races</a></div>
<div class="card" style="padding:10px 12px"><span class="mut">Zoek race of plaats…</span></div>
<div class="row on"><span>IRONMAN Switzerland Thun</span><span class="r acc">A · 4 jul 2027</span></div>
<div class="row"><span>IRONMAN 70.3 Zell am See</span><span class="r">B · datum volgt</span></div>
<div class="row"><span>Antwerp 10 Miles</span><span class="r">~15 apr 2027</span></div>
<div class="row"><span>NN Rotterdam Marathon</span><span class="r">~4 apr 2027</span></div>
<div class="row"><span>IRONMAN 70.3 Switzerland</span><span class="r">~13 jun 2027</span></div>
<p class="p">~ = geschat op de editie van dit jaar. 48 races in de database.</p>
""", tab="Plan")

# ── LADDER ───────────────────────────────────────────────────────────────────
scherm("l1", "L", "Score", "Absolute score, percentiel op de ladder. Componenten blijven privé.", """
<div class="lbl">Ladder</div>
<div class="seg"><a class="on" href="l1.html">Score</a><a href="l3.html">Treden</a><a href="l4.html">Combine</a><a href="l5.html">Proef</a></div>
<div class="h-xl">642</div>
<p class="p">LUPO-score • top 31% van de ladder</p>
<div class="bar"><i style="width:64%"></i></div>
<div class="lbl">Alleen voor jou</div>
<div class="tiles t2">
  <div class="tile"><div class="k">Consistentie</div><div class="v">78</div><div class="s">nakomen, rust telt mee</div></div>
  <div class="tile"><div class="k">Progressie</div><div class="v">61</div><div class="s">leeftijdsgecorrigeerd</div></div>
  <div class="tile"><div class="k">Prestatie</div><div class="v">55</div><div class="s">Combine en uitslagen</div></div>
  <div class="tile"><div class="k">Eerlijkheid</div><div class="v">90</div><div class="s">vast 15%</div></div>
</div>
<a class="btn-text" href="l2.html">Hoe je score werkt →</a>
""", tab="Ladder")

scherm("l2", "L", "Hoe je score werkt", "De uitleg die bij de score hoort. Geen Strava-data in de score of de ladder.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="l1.html">← Score</a>
<div class="h-l">HOE JE SCORE <span class="acc">WERKT</span></div>
<div class="row"><span>Consistentie</span><span class="r">35%</span></div>
<div class="row"><span>Progressie</span><span class="r">25%</span></div>
<div class="row"><span>Prestatie</span><span class="r">25%</span></div>
<div class="row on"><span>Eerlijkheid</span><span class="r acc">15% · nooit herschaald</span></div>
<div class="card" style="margin-top:8px"><div class="p">De score is absoluut: iemand anders die beter wordt, haalt jouw getal niet omlaag. De ladder toont je percentiel. Alleen het eindgetal en het percentiel zijn zichtbaar voor anderen.</div></div>
<div class="card"><div class="p">Bronnen: afgevinkte LUPO-sessies, je eigen import, geclaimde officiële uitslagen en de Combine. Nooit Strava.</div></div>
""", tab="Ladder")

TREDEN = [("07", "Pack Elite · Tier A", "top 1% met podia op grote races"), ("06", "Pack · Tier B", "top 5% met meerdere PR's"),
          ("05", "Pack Talent · Tier C", "top 10% seizoen of top 5–10 Combine"), ("04", "Je wordt gemeten", "Fysieke Combine · top 25%, 3 maanden actief"),
          ("03", "Je valt op", "top 5% progressie bij ondergemiddeld volume"), ("02", "Je hebt een datum", "een race in de agenda · Premium"),
          ("01", "Je wordt meetbaar", "Digitale Combine, elk kwartaal"), ("00", "Je staat op de kaart", "een account")]
tr = "".join(f'<div class="row{" on" if n == "02" else (" dim" if n > "02" else "")}"><span style="display:flex;gap:12px;align-items:center"><span class="h-m{" acc" if n == "02" else " mut"}">{n}</span><span>{t}<br/><span class="mut" style="font-size:11px">{e}</span></span></span><span class="r">{"<span class=\'pill acc\'>jij</span>" if n == "02" else ("✓" if n < "02" else "")}</span></div>' for n, t, e in TREDEN)
scherm("l3", "L", "Treden", "Acht treden van 00 tot 07. Wat nodig is voor de volgende staat erbij.", f"""
<div class="lbl">Ladder</div>
<div class="seg"><a href="l1.html">Score</a><a class="on" href="l3.html">Treden</a><a href="l4.html">Combine</a><a href="l5.html">Proef</a></div>
{tr}
<div class="p" style="margin-top:6px">Niemand valt van de ladder. Naar 03: top 5% progressie bij ondergemiddeld volume, zoals in een DFRNT-golf.</div>
""", tab="Ladder")

scherm("l4", "L", "Digitale Combine", "Vier tests per kwartaal, in de laatste 14 dagen. Eén meting, één getal.", """
<div class="lbl">Ladder</div>
<div class="seg"><a href="l1.html">Score</a><a href="l3.html">Treden</a><a class="on" href="l4.html">Combine</a><a href="l5.html">Proef</a></div>
<div class="h-l">COMBINE <span class="acc">Q4</span></div>
<p class="p" style="margin:6px 0 10px">Testvenster 18 – 31 december.</p>
<div class="row"><span>3 km loop</span><span class="r">11:42</span></div>
<div class="row"><span>Cooper 12 min</span><span class="r">—</span></div>
<div class="row"><span>FTP (20 min × 95%)</span><span class="r">268 W</span></div>
<div class="row"><span>400 m zwemmen</span><span class="r">—</span></div>
<a class="btn-secondary" href="l4.html" style="margin-top:8px">Resultaat invoeren</a>
""", tab="Ladder")

scherm("l5", "L", "Proefperiode", "Zes weken, verdiend in blokken van twee. Opgelegde rust telt als nagekomen.", """
<div class="lbl">Ladder</div>
<div class="seg"><a href="l1.html">Score</a><a href="l3.html">Treden</a><a href="l4.html">Combine</a><a class="on" href="l5.html">Proef</a></div>
<div class="h-l">PROEF <span class="acc">WEEK 3</span></div>
<div class="row on"><span>Blok 1 · week 1–2</span><span class="r acc">verdiend ✓ 86%</span></div>
<div class="row"><span>Blok 2 · week 3–4</span><span class="r">bezig · 80% nodig</span></div>
<div class="row dim"><span>Blok 3 · week 5–6</span><span class="r">nog niet</span></div>
<div class="card" style="margin-top:8px"><div class="p">Haal je 80% van de sessies in een blok, dan krijg je het volgende blok. Rust van LUPO telt als gehaald.</div></div>
""", tab="Ladder")


# ── TRYOUT ───────────────────────────────────────────────────────────────────
scherm("t1", "T", "DFRNT: meedoen", "De instap: gratis, in een vaste golf. Wie denkt dat hij een potential is, toont het hier.", """
<div class="lbl acc">DFRNT · golf maart 2027</div>
<div class="h-xl">TOON WAT JE <span class="acc">KAN.</span></div>
<p class="p" style="margin:10px 0 14px">Tien weken, gratis. Een nulmeting, het LUPO-schema, een hertest. Wie het meest vooruitgaat met het minste volume, krijgt een uitnodiging.</p>
<div class="row"><span>Inschrijven tot</span><span class="r">28 feb</span></div>
<div class="row"><span>Nulmeting</span><span class="r">1 – 7 mrt</span></div>
<div class="row"><span>Schema</span><span class="r">10 weken</span></div>
<div class="row"><span>Hertest</span><span class="r">17 – 23 mei</span></div>
<div class="spacer"></div>
<a class="btn-primary" href="t2.html">Schrijf me in</a>
<p class="p" style="text-align:center;font-size:11px">Onder 18: met toestemming van een ouder. HRV en slaap tellen dan niet mee.</p>
""", fab=False)

scherm("t2", "T", "DFRNT: nulmeting", "Vast protocol, zodat elke deelnemer op dezelfde manier gemeten wordt.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="t1.html">← DFRNT</a>
<div class="h-l">NUL<span class="acc">METING</span></div>
<p class="p" style="margin:6px 0 10px">Kies je variant. Elke test één keer, binnen de meetweek.</p>
<div class="seg"><a class="on" href="t2.html">Duur</a><a href="t2.html">Hybrid</a></div>
<div class="row"><span>3 km loop</span><span class="r">volle inzet, vlak parcours</span></div>
<div class="row"><span>20 min FTP</span><span class="r">fiets of rollen, × 95%</span></div>
<div class="row"><span>400 m zwemmen</span><span class="r">25 of 50 m bad</span></div>
<div class="row dim"><span>Hybrid: Hyrox-variant</span><span class="r">in plaats van zwemmen</span></div>
<div class="card" style="margin-top:8px"><div class="p">Je resultaat telt pas als het met een horlogebestand of een officiële tijd is vastgelegd.</div></div>
<a class="btn-primary" href="t3.html">Resultaten invoeren</a>
""", fab=False)

scherm("t3", "T", "DFRNT: tijdens de golf", "Het LUPO-schema zonder coachtaal. Beslissing en regel blijven, de uitleg in gewone taal is voor Premium.", """
<div class="lbl acc">DFRNT · week 6 van 10</div>
<div class="h-xl">AFBOUWEN</div>
<div class="why">HRV <b>−15%</b> onder je gemiddelde. Drempel −5%.</div>
<div class="card hl"><div class="h-m">Zone 2 · 45 min</div><div class="p">Was drempel 4×8, 70 min.</div></div>
<div class="row"><span>Nakomen deze golf</span><span class="r acc">88%</span></div>
<div class="row"><span>Volume per week</span><span class="r">5u20 gemiddeld</span></div>
<a class="row" href="t4.html"><span>Ladder van deze golf</span><span class="r">→</span></a>
<div class="card" style="margin-top:4px"><div class="p">Coachgesprek en uitleg in gewone taal zitten in Premium.</div></div>
""", tab="Vandaag", fab=False)

scherm("t4", "T", "DFRNT: ladder per golf", "Een ladder per golf, op progressie ten opzichte van de nulmeting en gecorrigeerd voor volume.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="t3.html">← Vandaag</a>
<div class="h-l">GOLF <span class="acc">MRT 27</span></div>
<p class="p" style="margin:6px 0 10px">1.240 deelnemers. Progressie per uur training, tussentijds op de testsessies.</p>
<div class="demo">Voorbeelddata</div>
<div class="card" style="padding:6px 10px"><table class="t"><tr><th>#</th><th>Atleet</th><th>Progressie</th><th>Uur/wk</th></tr>
<tr><td>1</td><td>Atleet R</td><td class="acc">+11,4%</td><td>4u10</td></tr>
<tr><td>2</td><td>Atleet S</td><td class="acc">+10,9%</td><td>5u00</td></tr>
<tr><td>…</td><td></td><td></td><td></td></tr>
<tr style="outline:1px solid var(--accent)"><td>48</td><td>Jij</td><td class="acc">+8,2%</td><td>5u20</td></tr></table></div>
<div class="row"><span>Top 5% van deze golf</span><span class="r">tot plaats 62</span></div>
<a class="btn-primary" href="t5.html">Naar de hertest</a>
""", fab=False)

scherm("t5", "T", "DFRNT: uitslag top 5%", "Bij top 5% volgt een uitnodiging voor de fysieke Combine. Pas na bevestiging daar: Pack Talent.", """
<div class="lbl acc">Hertest · 23 mei</div>
<div class="h-xl">TOP <span class="acc">4%.</span></div>
<p class="p" style="margin:10px 0 12px">Plaats 48 van 1.240. +8,2% met 5u20 per week.</p>
<div class="row"><span>3 km</span><span class="r">11:42 → 10:58</span></div>
<div class="row"><span>FTP</span><span class="r">248 → 268 W</span></div>
<div class="row"><span>400 m</span><span class="r">7:05 → 6:41</span></div>
<div class="card hl" style="margin-top:8px"><div class="h-m">Uitnodiging: fysieke Combine</div><div class="p">Zaterdag 14 juni. Bevestigt je resultaat onder toezicht. Daarna: Pack Talent.</div></div>
<a class="btn-primary" href="t5.html">Bevestig je plaats</a>
<a class="btn-text" href="t6.html">Zo ziet het eruit buiten de top 5% →</a>
""", fab=False)

scherm("t6", "T", "DFRNT: uitslag en aanbod", "Wie niet in de top 5% zit, ziet zijn eigen vooruitgang en krijgt een Premium-aanbod.", """
<div class="lbl acc">Hertest · 23 mei</div>
<div class="h-l">+5,1% IN <span class="acc">10 WEKEN</span></div>
<p class="p" style="margin:8px 0 12px">Plaats 310 van 1.240. Je nakomen was 91%: het schema werkte, het volume was de grens.</p>
<div class="row"><span>3 km</span><span class="r">12:30 → 12:02</span></div>
<div class="row"><span>FTP</span><span class="r">210 → 221 W</span></div>
<div class="card hl" style="margin-top:8px"><div class="h-m">Premium</div><div class="p">Verder met je schema richting een race, coachgesprek, uitleg bij elke beslissing. €19 per maand of €169 per jaar.</div></div>
<a class="btn-primary" href="d1.html">Ga verder met Premium</a>
<a class="btn-text" href="t1.html">Volgende golf: september</a>
""", fab=False)

# ── SAMEN ────────────────────────────────────────────────────────────────────
CREW = [("Jij", "g g r g . . .", "4/7", "2× gezien"), ("Atleet A", "g m g g . . .", "3/7", "Gezien"),
        ("Atleet B", "r g g m . . .", "3/7", "✓ Gezien"), ("Atleet C", "g g g g . . .", "4/7", "Gezien")]
def dots(s):
    m = {"g": "g", "r": "r", "m": "m", ".": ""}
    return '<div class="dots">' + "".join(f'<i class="{m[c]}"></i>' for c in s.split()) + "</div>"
crew = "".join(f'<div class="row"><span>{n}{dots(d)}</span><span class="r">{x} &nbsp; <span class="pill{" acc" if "✓" in g else ""}">{g}</span></span></div>' for n, d, x, g in CREW)
SEG_S = lambda a: '<div class="seg">' + "".join(f'<a class="{"on" if k == a else ""}" href="{h}.html">{k}</a>' for k, h in [("Vergelijk", "v1"), ("Crew", "s1"), ("Races", "s3"), ("Club", "s4")]) + "</div>"
scherm("s1", "S", "Crew", "Wie trainde. Geen scores, geen HRV, geen feed. Eén reactie: gezien.", f"""
<div class="lbl">Samen</div>{SEG_S("Crew")}
<div class="demo">Voorbeelddata</div>
<div class="h-l">JE <span class="acc">CREW</span></div>
<div class="row"><span>Crewritme deze week</span><span class="r acc">79%</span></div>
{crew}
<p class="p">Omlijnd = rust van LUPO, telt als nagekomen.</p>
""", tab="Samen")

scherm("s2", "S", "Matcher", "Een trainingsmaatje op tempo, afstand en race. Exacte plek nooit zichtbaar.", f"""
<div class="lbl">Samen</div>{SEG_S("Matcher")}
<div class="demo">Voorbeelddata</div>
<div class="row"><span>Je duurlooptempo</span><span class="r">5:00/km ± 0:30</span></div>
<div class="row"><span>Stille partners</span><span class="r">uit</span></div>
<div class="row on"><span>Atleet K<br/><span class="mut" style="font-size:11px">5:05/km • 3 km • Antwerp 10 Miles</span></span><span class="r acc">zelfde race</span></div>
<div class="row"><span>Atleet L<br/><span class="mut" style="font-size:11px">4:50/km • 9 km</span></span><span class="r"></span></div>
<div class="row"><span>Atleet M<br/><span class="mut" style="font-size:11px">5:20/km • 12 km • Thun</span></span><span class="r"></span></div>
""", tab="Samen")

scherm("s3", "S", "Race Boards", "Geclaimde officiële uitslagen, leeftijdsgecorrigeerd, alleen met toestemming.", f"""
<div class="lbl">Samen</div>{SEG_S("Races")}
<div class="demo">Voorbeelddata</div>
<div class="h-m" style="margin-bottom:6px">Antwerp 10 Miles</div>
<div class="card" style="padding:6px 10px"><table class="t"><tr><th>#</th><th>Atleet</th><th>Tijd</th><th>Gecorr.</th></tr>
<tr><td>1</td><td>Atleet B (47)</td><td>1:07:30</td><td class="acc">1:00:16</td></tr>
<tr><td>2</td><td>Atleet C (38)</td><td>1:04:40</td><td class="acc">1:02:47</td></tr>
<tr><td>3</td><td>Atleet E (52)</td><td>1:13:40</td><td class="acc">1:02:58</td></tr>
<tr><td>4</td><td>Atleet A (29)</td><td>1:03:10</td><td class="acc">1:03:10</td></tr></table></div>
<p class="p">1 atleet zonder toestemming staat niet op het bord.</p>
""", tab="Samen")

scherm("s4", "S", "Clubs", "Teamscore = gemiddelde van de leden, zodat een kleine club eerlijk meedoet.", f"""
<div class="lbl">Samen</div>{SEG_S("Club")}
<div class="demo">Voorbeelddata</div>
<div class="card"><div style="display:flex;justify-content:space-between"><span>1. Tri Team Schelde</span><span class="h-m">773</span></div><div class="p">2 leden • record 70.3 4:43:40</div></div>
<div class="card hl"><div style="display:flex;justify-content:space-between"><span>2. Running Club Zuid</span><span class="h-m">685</span></div><div class="p">4 leden • record 10 km 36:12 • jouw club</div></div>
<div class="card"><div style="display:flex;justify-content:space-between"><span>3. Ochtendgroep Park</span><span class="h-m">649</span></div><div class="p">3 leden • record 5 km 18:55</div></div>
""", tab="Samen")

# ── COACH EN IK ──────────────────────────────────────────────────────────────
scherm("c1", "C", "Coachgesprek", "Vragen over het schema. De coach legt uit; de beslissing blijft regelgebaseerd.", """
<div class="lbl">Coach</div>
<div class="chat">
  <div class="msg me">Waarom geen drempel vandaag?</div>
  <div class="msg">Je HRV staat 15% onder je gemiddelde, de grens is −5%. Het schema vraagt vandaag zone 2, 45 minuten. De drempelsessie schuift naar zaterdag.</div>
  <div class="msg me">Mag ik toch fietsen in plaats van lopen?</div>
  <div class="msg">Ja. Zone 2 op de fiets, 55 minuten, telt hetzelfde.</div>
</div>
<div class="spacer"></div>
<div class="chips"><a href="c1.html">Hoe ben ik?</a><a href="c1.html">Vandaag</a><a href="d3.html">Moe</a><a href="c1.html">Kater</a></div>
<div class="card" style="padding:10px 12px;margin-bottom:14px"><span class="mut">Stel een vraag…</span></div>
""", tab="Vandaag", fab=False)

scherm("i1", "C", "Ik: data en import", "Eigen data importeren per atleet, met controle of HRV volstaat. Data blijft op het toestel.", """
<div class="lbl">Ik</div>
<div class="h-l">PROFIEL <span class="acc">EN DATA</span></div>
<div class="row"><span>Atleet</span><span class="r">Jij ▾ &nbsp; + Atleet</span></div>
<div class="card"><div>365 dagen, 8 nov 2025 → 4 nov 2026</div><div class="p">HRV op 312 dagen • 401 uitgevoerde workouts</div><div class="p acc" style="margin-top:6px">✓ Bruikbaar voor de ochtendbeslissing • HRV 89% van 28 dagen</div></div>
<a class="btn-secondary" href="i1.html">Opnieuw importeren</a>
<a class="row" href="i2.html"><span>Privacy en zichtbaarheid</span><span class="r">→</span></a>
<p class="p">De data blijft in deze browser. Niets gaat naar een server.</p>
""", tab="Ik")

scherm("i2", "C", "Privacy en zichtbaarheid", "Alles staat standaard op privé. Delen is opt-in per onderdeel.", """
<a class="btn-text" style="text-align:left;padding-left:0" href="i1.html">← Profiel</a>
<div class="h-l">PRIVACY</div>
<div class="row"><span>Profiel zichtbaar</span><span class="r">privé</span></div>
<div class="row"><span>Score en percentiel op de ladder</span><span class="r">uit</span></div>
<div class="row"><span>Uitslagen op Race Boards</span><span class="r">uit</span></div>
<div class="row"><span>Crew ziet of ik trainde</span><span class="r acc">aan</span></div>
<div class="row dim"><span>Scorecomponenten, HRV, slaap</span><span class="r">nooit gedeeld</span></div>
<a class="btn-secondary" href="i2.html" style="margin-top:8px">Exporteer al mijn data</a>
""", tab="Ik")

# ── WEBVERSIE ────────────────────────────────────────────────────────────────
def side(actief):
    items = [("Vandaag", "Beslissing, training en herstel", "w1"), ("Plan", "Week, seizoen en races", "w2"),
             ("Ladder", "Score, treden, Combine en proef", "w4"), ("Samen", "Crew, matcher, races en club", "w5"), ("Ik", "Profiel, progressie en data", "i1")]
    return ('<aside class="side"><div class="logo">LUP<span class="acc">O</span></div><a class="search" href="w3.html"><span>Zoek of spring naar…</span><span>⌘K</span></a>'
            + "".join(f'<a class="nav{" on" if n == actief else ""}" href="{h}.html">{n}<small>{s}</small></a>' for n, s, h in items) + "</aside>")

def desk(actief, kop, sub, panelen, extra=""):
    ps = "".join(f'<section class="panel"><div class="lbl">{t}</div>{b}</section>' for t, b in panelen)
    return f'<div class="desk">{side(actief)}<div class="main"><div class="mhead"><span class="h-l">{kop}</span><span class="mut">{sub}</span></div><div class="panels">{ps}</div></div>{extra}</div>'

W1 = desk("Vandaag", "VANDAAG", "Donderdag 6 november", [
    ("Beslissing", """<div class="h-xl">AFBOUWEN</div><div class="why">HRV <b>15% onder</b> je 7-daagse gemiddelde. Drempel −5%.</div>
<div class="tiles"><a class="tile" href="d2.html"><div class="k">HRV</div><div class="v warn">52</div></a><div class="tile"><div class="k">Slaap</div><div class="v">6u10</div></div><div class="tile"><div class="k">Belasting</div><div class="v">1.12</div></div></div>
<div class="card hl"><div class="h-m">Zone 2 · 45 min</div><div class="p">Was drempel 4×8, 70 min.</div></div>"""),
    ("Waarom", """<div class="row on"><span>HRV vs gemiddelde</span><span class="r warn">−15%</span></div><div class="row"><span>Slaap</span><span class="r">6u10</span></div><div class="row"><span>Belasting</span><span class="r">1.12</span></div>
<div class="card"><svg viewBox="0 0 300 70" width="100%" height="80"><rect x="0" y="18" width="300" height="22" fill="rgba(200,241,53,0.07)"/><polyline fill="none" stroke="#c8f135" stroke-width="2" points="0,30 23,26 46,28 69,24 92,29 115,27 138,31 161,25 184,28 207,30 230,33 253,38 276,44 300,52"/></svg></div>"""),
    ("Progressie", """<div class="tiles t2"><div class="tile"><div class="k">Nakomen 4 wkn</div><div class="v">86%</div></div><div class="tile"><div class="k">Uren deze week</div><div class="v">6u50</div></div></div>
<div class="row"><span>Week 44</span><span class="r">92% ✓</span></div><div class="row"><span>Week 43</span><span class="r">78%</span></div><div class="row"><span>Week 42</span><span class="r">88% ✓</span></div><a class="btn-text" href="w1.html">Exporteer tabel</a>"""),
])
scherm("w1", "W", "Web: Vandaag", "Beslissing, onderbouwing en progressie naast elkaar. Elk getal klikbaar tot op de sessie.", W1, desk=True)

W2 = desk("Plan", "PLAN", "Week 45 • Thun over 34 weken", [
    ("Week · slepen om te verplaatsen", rows.replace('href="p2.html"', 'href="p2.html"')),
    ("Seizoen", """<div class="row"><span>Basis</span><span class="r">tot 2 mrt</span></div><div class="row on"><span>Opbouw</span><span class="r acc">nu</span></div><div class="row"><span>Piek</span><span class="r">5 mei</span></div><div class="row"><span>Taper</span><span class="r">20 jun</span></div>
<div class="card warnc" style="margin-top:8px"><div class="h-m">Pre-mortem</div><div class="p">Zwemmen ontbreekt • nakomen 74% • HRV 68% van de nachten</div></div>"""),
    ("Races", """<div class="row on"><span>IRONMAN Switzerland Thun</span><span class="r acc">A</span></div><div class="row"><span>70.3 Zell am See</span><span class="r">B</span></div><div class="row"><span>Antwerp 10 Miles</span><span class="r">C</span></div>"""),
])
scherm("w2", "W", "Web: Plan", "Week, seizoen en races als één werkruimte met één periodekiezer.", W2, desk=True)

PAL = """<div class="palette"><div class="box"><input value="thun" readonly/>
<div class="grp">Races</div><a class="it on" href="w2.html"><span>IRONMAN Switzerland Thun</span><span class="mut">Plan · Races</span></a>
<div class="grp">Acties</div><a class="it" href="c1.html"><span>Vraag de coach over Thun</span><span class="mut">↵</span></a><a class="it" href="p4.html"><span>Pre-mortem Thun</span><span class="mut">Plan · Seizoen</span></a>
<div class="grp">Ga naar</div><a class="it" href="w1.html"><span>Vandaag</span><span class="mut">G V</span></a><a class="it" href="w4.html"><span>Ladder</span><span class="mut">G L</span></a></div></div>"""
scherm("w3", "W", "Web: ⌘K", "Commandopalet: springen, zoeken en acties vanaf het toetsenbord.", desk("Vandaag", "VANDAAG", "Donderdag 6 november", [("Beslissing", '<div class="h-xl">AFBOUWEN</div>'), ("Waarom", ""), ("Progressie", "")], PAL), desk=True)

W4 = desk("Ladder", "LADDER", "Q4 2026", [
    ("Jouw score", '<div class="h-xl">642</div><p class="p">top 31%</p><div class="bar"><i style="width:64%"></i></div><div class="tiles t2" style="margin-top:10px"><div class="tile"><div class="k">C</div><div class="v">78</div></div><div class="tile"><div class="k">P</div><div class="v">61</div></div><div class="tile"><div class="k">Pr</div><div class="v">55</div></div><div class="tile"><div class="k">E</div><div class="v">90</div></div></div>'),
    ("Treden en proef", tr),
    ("Combine", '<div class="row"><span>3 km</span><span class="r">11:42</span></div><div class="row"><span>Cooper</span><span class="r">—</span></div><div class="row"><span>FTP</span><span class="r">268 W</span></div><div class="row"><span>400 m zwem</span><span class="r">—</span></div>'),
])
scherm("w4", "W", "Web: Ladder", "Score met uitleg, treden en Combine in één oogopslag.", W4, desk=True)

W5 = desk("Samen", "SAMEN", "Voorbeelddata", [("Crew", crew), ("Race Boards", '<div class="row"><span>1 · Atleet B (47)</span><span class="r acc">1:00:16</span></div><div class="row"><span>2 · Atleet C (38)</span><span class="r acc">1:02:47</span></div><div class="row"><span>3 · Atleet E (52)</span><span class="r acc">1:02:58</span></div>'), ("Club", '<div class="row"><span>Tri Team Schelde</span><span class="r">773</span></div><div class="row on"><span>Running Club Zuid</span><span class="r acc">685</span></div><div class="row"><span>Ochtendgroep Park</span><span class="r">649</span></div>')])
scherm("w5", "W", "Web: Samen", "Crew, Race Boards en clubs naast elkaar.", W5, desk=True)


# Visuele laag: grafieken, kaarten en beelden (vervangt schermen met dezelfde id).
exec((Path(__file__).parent / "visueel.py").read_text())

# ── UITVOER ──────────────────────────────────────────────────────────────────
def pagina(s):
    titel = html.escape(s["titel"])
    terug = '<a href="index.html" class="back-link">← Alle schermen</a>'
    noot = f'<aside class="note"><div class="super">{s["id"].upper()} — {SECTIES[s["sectie"]][0]}</div><b>{titel}</b><br/>{s["uitleg"]}</aside>'
    if s["desk"]:
        inhoud = f'<div class="desk-wrap">{s["body"]}</div>'
    else:
        fab = '<a class="fab" href="c1.html">Vraag de coach</a>' if s["fab"] else ""
        inhoud = (f'<div class="phone-wrapper"><div class="phone"><div class="phone-screen"><div class="phone-notch"></div>'
                  f'<div class="status-bar"><span>07:12</span><span>5G</span></div><div class="screen">{s["body"]}'
                  f'{tabbar(s["tab"]) if s["tab"] else ""}</div>{fab}</div></div></div>')
    return (f'<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>'
            f'<title>{titel} | LUPO</title>{FONTS}<link rel="stylesheet" href="app.css"/></head>'
            f'<body>{terug}{inhoud}{"" if s["desk"] else noot}</body></html>\n')


PAD = [("o1", "Onboarding: race kiezen"), ("o2", "Niveau"), ("o3", "Eerste week"), ("d1", "Ochtend met waarom"),
       ("d1z", "Ochtend zonder waarom (H3)"), ("d3", "Niet 100%"), ("t1", "DFRNT tryout"), ("r2", "Afgewerkte training met inzichten"), ("v1", "Waar sta je (vergelijken)"), ("a1", "Raceblok €49")]
VALIDATIE = ('<div class="super" style="margin-top:8px">⌗ Validatiedemo — volgorde voor de 12 gesprekken</div>'
             '<p class="lead" style="margin-bottom:16px">Toon D1 en D1Z apart en vraag welke de atleet zou volgen. Ladder, Samen en de webversie wachten.</p>'
             '<div class="screen-grid">' + "".join(
                 f'<a href="{i}.html" class="screen-card"><div class="screen-num">{n+1:02d} · {i.upper()}</div><div class="screen-title">{t}</div></a>'
                 for n, (i, t) in enumerate(PAD)) + '</div>')


LES = [
    ("Strava", "Elke sessie is een kaart met route, hoogte en splits.", "Na de training (D5): kaart, hoogteprofiel en zones uit je eigen import, dan één vraag."),
    ("WHOOP", "Eén ring met één getal beslist de dag.", "Paraatheidsring op Vandaag (D1), met de reden eronder."),
    ("TrainingPeaks", "Een workout is een profiel van blokjes per zone.", "Intervalprofiel op elke training, en het oude plan doorgestreept ernaast."),
    ("Runna", "Je ziet de lijn naar de race vanaf dag één.", "Periodiseringsgrafiek in onboarding (O3), seizoen (P3) en raceblok (A1)."),
    ("Zwift", "Vergelijken met anderen als beeld, niet als tabel.", "Spreidingsplot voor de DFRNT-golf (T4) en een verdelingscurve voor de Ladder (L1)."),
    ("Ladder, Garmin", "Racefoto's en avatars maken het menselijk.", "Racebeelden met hoogteprofiel (O1), crew met avatars (S1). Geen feed, geen likes."),
]
LESSEN = ('<div class="super" style="margin-top:8px">⌗ Wat we leren van andere apps</div>'
          '<p class="lead" style="margin-bottom:16px">Eerst een beeld, dan het getal, dan pas tekst. Elke grafiek komt uit eigen data, nooit uit Strava.</p>'
          '<div class="screen-grid">' + "".join(
              f'<div class="screen-card"><div class="screen-num">{a}</div><div class="screen-title" style="font-size:15px">{b}</div><div class="screen-desc">→ {c}</div></div>'
              for a, b, c in LES) + '</div><div style="height:32px"></div>')


def overzicht():
    blokken = []
    for k, (naam, uitleg) in SECTIES.items():
        kaarten = "".join(
            f'<a href="{s["id"]}.html" class="screen-card"><div class="screen-num">{s["id"].upper()}</div>'
            f'<div class="screen-title">{html.escape(s["titel"])}</div><div class="screen-desc">{s["uitleg"]}</div></a>'
            for s in SCHERMEN if s["sectie"] == k)
        blokken.append(f'<div class="super" style="margin-top:40px">⌗ {naam}</div><p class="lead" style="margin-bottom:16px">{uitleg}</p><div class="screen-grid">{kaarten}</div>')
    return (f'<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>'
            f'<title>LUPO Mockups — De app</title>{FONTS}<link rel="stylesheet" href="app.css"/></head><body>'
            f'<div class="overview"><a href="/" class="back-link" style="position:static;display:inline-block;margin-bottom:24px">← Mockups</a>'
            f'<div class="overview-header"><div class="super">⌗ LUPO — De app — {len(SCHERMEN)} schermen</div>'
            f'<h1>Elke ochtend <span class="em">één beslissing.</span></h1>'
            f'<p class="lead">Met de reden erbij. Tot aan je startlijn. Elk scherm is klikbaar: knoppen, tegels en de tabbalk brengen je naar de volgende stap. '
            f'Begin bij <a href="o1.html" style="color:var(--accent)">O1</a> voor de validatiedemo of <a href="w1.html" style="color:var(--accent)">W1</a> voor de webversie.</p></div>'
            + LESSEN + VALIDATIE + "".join(blokken) + "</div></body></html>\n")


OUT.mkdir(parents=True, exist_ok=True)
# Huisstijl van het productbeeld: DM Sans voor tekst en labels, Bebas Neue voor koppen, accent #c8f135.
BASIS = (OUT.parent / "onboarding-fase-1" / "styles.css").read_text()
for oud, nieuw in [("'JetBrains Mono', monospace", "'DM Sans', sans-serif"), ("'Bricolage Grotesque', sans-serif", "'DM Sans', sans-serif"),
                   ("'Anton', sans-serif", "'Bebas Neue', sans-serif"), ("#d8ff00", "#c8f135"), ("216,255,0", "200,241,53"), ("216, 255, 0", "200, 241, 53")]:
    BASIS = BASIS.replace(oud, nieuw)
(OUT / "app.css").write_text(BASIS + (Path(__file__).parent / "app_css.css").read_text() + CSS_EXTRA + THEMA)
for s in SCHERMEN:
    (OUT / f"{s['id']}.html").write_text(pagina(s))
(OUT / "index.html").write_text(overzicht())
print(f"{len(SCHERMEN)} schermen naar {OUT}")
