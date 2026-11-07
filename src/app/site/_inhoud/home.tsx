import Link from "next/link";
import { SLOGAN, type Taal, beeld, pad } from "../_ui/bedrijf";

const FOTO = (id: string, w = 2000) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

function Band({ id, pos = "center", kop, tekst }: { id: string; pos?: string; kop: string; tekst?: string }) {
  return (
    <section className="band" style={{ backgroundImage: `url(${FOTO(id)})`, backgroundPosition: pos }}>
      <div className="wrap band-in">
        <h2>{kop}</h2>
        {tekst && <p className="lead">{tekst}</p>}
      </div>
    </section>
  );
}

function Telefoon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="telefoon">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  );
}

const T = {
  en: {
    lbl: "Training coach for triathlon, running and hybrid",
    lead: "Every morning LUPO reads your recovery and your plan, and tells you what to do today: go, ease off or rest. With the reason. You bring the discipline, LUPO makes it count. All the way to your start line.",
    wacht: "Join the waitlist", hoe: "How it works", test: "LUPO is in testing with a small group of athletes.",
    altD1: "LUPO on a morning: ease off, with the reason",
    ochtendLbl: "A morning with LUPO", ochtendKop: "Three steps, the same every day",
    stappen: [
      ["Your watch delivers the night", "Heart rate variability, sleep and resting heart rate come in from your watch. LUPO compares them with your own average, not with someone else’s."],
      ["One decision", "Go, ease off or rest. Fixed rules make the decision, not a guess or a mood. The same situation always gives the same outcome."],
      ["The reason with it", "Every decision comes with the why, in one sentence. You can always deviate, and rest prescribed by LUPO counts as done."],
    ],
    band1: ["Every session counts.", "Running, cycling, swimming, strength. Everything you do comes back in one plan."],
    naLbl: "After the session", naKop: "See what you did, and what it changes",
    naLead: "Map, splits and chart of your session. On top of that, what LUPO sees in it: as planned or not, the same session six weeks ago, and what the plan does with it.",
    naWaarom: "Same session on 18 September: 4:26 at heart rate 168. Now 4:20 at 165. From next week the plan sets threshold at 4:16.",
    altR2: "Analysis of a threshold session in LUPO",
    seizLbl: "Your season", seizKop: "A plan that lives towards your race",
    seizLead: "You pick your race from the race calendar. LUPO builds the phases towards that date: base, build, peak and taper. Miss a day or shift your week, and the plan adapts and tells you what changes.",
    seizLijst: ["Move a week with a rule check: never two hard days in a row", "Taper to your A race, based on your own load", "One question after every session: too easy, right or too hard"],
    altP3: "Season plan towards the A race",
    band2: ["Up early. In November too.", "The plan does not ask for motivation. It asks you to start."],
    wieLbl: "Who it is for", wieKop: "For those who train with a date in the calendar",
    wie1: ["Age groupers with an A race", "You train next to work and family, you have picked a race and you want to be sure every session counts. LUPO gives you that certainty every morning, without reading charts yourself."],
    wie2: ["Talent between 15 and 25", "Twice a year LUPO opens a free tryout: DFRNT. A baseline test, eight to twelve weeks of training and a retest. Those who improve most on the least volume get an invitation to a physical test."],
    wieLink: "More about DFRNT →",
    band3: ["Talent can be measured.", "DFRNT: a baseline test, eight to twelve weeks of training, a retest. Those who improve most get an invitation."],
    dataLbl: "Your data", dataKop: "Your data stays yours",
    dataLijst: ["Health data such as HRV and sleep is only used for your plan", "Never sold, never shared with advertisers", "Stored in the European Union", "Disconnect and delete everything at any time", "Your profile is private by default"],
    dataLink: "Which data and why",
    koppLbl: "Connections",
    kopp: [["Garmin", "Activities, sleep, HRV, resting heart rate", "applied for"], ["FIT files", "Every session from your watch or bike computer", "available"], ["TrainingPeaks export", "Your history in one go", "available"]],
    slotLead: "Premium from €19 per month, or €49 for one race goal. The tryouts are free.",
    prijzen: "See pricing", wachtKort: "Waitlist",
  },
  nl: {
    lbl: "Trainingscoach voor triatlon, lopen en hybride",
    lead: "Elke ochtend leest LUPO je herstel en je plan, en zegt wat je vandaag doet: voluit, afbouwen of rusten. Met de reden erbij. Jij levert de discipline, LUPO zorgt dat ze telt. Tot aan je startlijn.",
    wacht: "Zet je op de wachtlijst", hoe: "Hoe het werkt", test: "LUPO is in testfase met een kleine groep atleten.",
    altD1: "LUPO op een ochtend: afbouwen, met de reden erbij",
    ochtendLbl: "Een ochtend met LUPO", ochtendKop: "Drie stappen, elke dag dezelfde",
    stappen: [
      ["Je horloge levert de nacht", "Hartslagvariabiliteit, slaap en rusthartslag komen binnen via je horloge. LUPO vergelijkt ze met je eigen gemiddelde, niet met dat van iemand anders."],
      ["Eén beslissing", "Voluit, afbouwen of rusten. Vaste regels bepalen de beslissing, geen gok en geen stemming. Dezelfde situatie geeft altijd dezelfde uitkomst."],
      ["De reden erbij", "Bij elke beslissing staat waarom, in één zin. Afwijken kan altijd, en rust die LUPO oplegt telt mee als nagekomen."],
    ],
    band1: ["Elke sessie telt.", "Lopen, fietsen, zwemmen, kracht. Alles wat je doet, komt terug in één plan."],
    naLbl: "Na de training", naKop: "Zien wat je deed, en wat het verandert",
    naLead: "Kaart, splits en grafiek van je sessie. Daarbovenop wat LUPO erin ziet: zoals gepland of niet, dezelfde sessie van zes weken geleden, en wat het schema ermee doet.",
    naWaarom: "Zelfde sessie op 18 september: 4:26 bij hartslag 168. Nu 4:20 bij 165. Het schema zet de drempel vanaf volgende week op 4:16.",
    altR2: "Analyse van een drempeltraining in LUPO",
    seizLbl: "Je seizoen", seizKop: "Een plan dat naar je race toe leeft",
    seizLead: "Je kiest je race uit de wedstrijdkalender. LUPO bouwt de fases naar die datum: basis, opbouw, piek en taper. Mis je een dag of schuift je week, dan past het plan zich aan en zegt het wat er verandert.",
    seizLijst: ["Week verplaatsen met een regelcontrole: nooit twee zware dagen na elkaar", "Taper naar je A-race, op basis van je eigen belasting", "Eén vraag na elke training: te licht, goed of te zwaar"],
    altP3: "Seizoensplan naar de A-race",
    band2: ["Vroeg op. Ook in november.", "Het schema vraagt geen motivatie. Het vraagt dat je begint."],
    wieLbl: "Voor wie", wieKop: "Voor wie traint met een datum in de agenda",
    wie1: ["Leeftijdsgroepers met een A-race", "Je traint naast werk en gezin, je hebt een race gekozen en je wil er zeker van zijn dat elke sessie telt. LUPO geeft je elke ochtend die zekerheid, zonder dat je zelf grafieken moet lezen."],
    wie2: ["Talent tussen 15 en 25", "Twee keer per jaar opent LUPO een gratis tryout: DFRNT. Een nulmeting, acht tot twaalf weken schema en een hertest. Wie het meest vooruitgaat met het minste volume, krijgt een uitnodiging voor een fysieke test."],
    wieLink: "Meer over DFRNT →",
    band3: ["Talent laat zich meten.", "DFRNT: een nulmeting, acht tot twaalf weken schema, een hertest. Wie het meest vooruitgaat, krijgt een uitnodiging."],
    dataLbl: "Je data", dataKop: "Jouw data blijft van jou",
    dataLijst: ["Gezondheidsgegevens zoals HRV en slaap worden alleen gebruikt voor jouw schema", "Nooit verkocht, nooit gedeeld met adverteerders", "Opgeslagen in de Europese Unie", "Ontkoppelen en alles verwijderen kan op elk moment", "Je profiel staat standaard op privé"],
    dataLink: "Welke data en waarom",
    koppLbl: "Koppelingen",
    kopp: [["Garmin", "Activiteiten, slaap, HRV, rusthartslag", "in aanvraag"], ["FIT-bestanden", "Elke sessie van je horloge of fietscomputer", "beschikbaar"], ["TrainingPeaks-export", "Je historiek in één keer", "beschikbaar"]],
    slotLead: "Premium vanaf €19 per maand, of €49 voor één racedoel. De tryouts zijn gratis.",
    prijzen: "Bekijk de prijzen", wachtKort: "Wachtlijst",
  },
  fr: {
    lbl: "Coach d’entraînement pour le triathlon, la course et l’hybride",
    lead: "Chaque matin, LUPO lit votre récupération et votre plan, et vous dit quoi faire aujourd’hui : à fond, alléger ou repos. Avec la raison. Vous apportez la discipline, LUPO la fait compter. Jusqu’à votre ligne de départ.",
    wacht: "Rejoindre la liste d’attente", hoe: "Fonctionnement", test: "LUPO est en phase de test avec un petit groupe d’athlètes.",
    altD1: "LUPO un matin : alléger, avec la raison",
    ochtendLbl: "Un matin avec LUPO", ochtendKop: "Trois étapes, les mêmes chaque jour",
    stappen: [
      ["Votre montre livre la nuit", "Variabilité de la fréquence cardiaque, sommeil et fréquence cardiaque au repos arrivent depuis votre montre. LUPO les compare à votre propre moyenne, pas à celle de quelqu’un d’autre."],
      ["Une décision", "À fond, alléger ou repos. Des règles fixes prennent la décision, pas une intuition ni une humeur. La même situation donne toujours le même résultat."],
      ["La raison avec", "Chaque décision vient avec le pourquoi, en une phrase. Vous pouvez toujours dévier, et le repos imposé par LUPO compte comme accompli."],
    ],
    band1: ["Chaque séance compte.", "Course, vélo, natation, renforcement. Tout ce que vous faites revient dans un seul plan."],
    naLbl: "Après la séance", naKop: "Voir ce que vous avez fait, et ce que ça change",
    naLead: "Carte, splits et graphique de votre séance. En plus, ce que LUPO y voit : conforme au plan ou non, la même séance il y a six semaines, et ce que le plan en fait.",
    naWaarom: "Même séance le 18 septembre : 4:26 à 168 de fréquence cardiaque. Aujourd’hui 4:20 à 165. Dès la semaine prochaine, le plan fixe le seuil à 4:16.",
    altR2: "Analyse d’une séance au seuil dans LUPO",
    seizLbl: "Votre saison", seizKop: "Un plan qui vit vers votre course",
    seizLead: "Vous choisissez votre course dans le calendrier. LUPO construit les phases jusqu’à cette date : base, développement, pic et affûtage. Vous manquez un jour ou votre semaine bouge, le plan s’adapte et vous dit ce qui change.",
    seizLijst: ["Déplacer une semaine avec contrôle des règles : jamais deux jours durs d’affilée", "Affûtage vers votre course A, selon votre propre charge", "Une question après chaque séance : trop facile, juste ou trop dur"],
    altP3: "Plan de saison vers la course A",
    band2: ["Debout tôt. En novembre aussi.", "Le plan ne demande pas de motivation. Il demande que vous commenciez."],
    wieLbl: "Pour qui", wieKop: "Pour ceux qui s’entraînent avec une date à l’agenda",
    wie1: ["Athlètes amateurs avec une course A", "Vous vous entraînez à côté du travail et de la famille, vous avez choisi une course et vous voulez être sûr que chaque séance compte. LUPO vous donne cette certitude chaque matin, sans devoir lire des graphiques."],
    wie2: ["Talents entre 15 et 25 ans", "Deux fois par an, LUPO ouvre un tryout gratuit : DFRNT. Un test de référence, huit à douze semaines de plan et un nouveau test. Ceux qui progressent le plus avec le moins de volume sont invités à un test physique."],
    wieLink: "En savoir plus sur DFRNT →",
    band3: ["Le talent se mesure.", "DFRNT : un test de référence, huit à douze semaines de plan, un nouveau test. Ceux qui progressent le plus reçoivent une invitation."],
    dataLbl: "Vos données", dataKop: "Vos données restent les vôtres",
    dataLijst: ["Les données de santé comme la VFC et le sommeil servent uniquement à votre plan", "Jamais vendues, jamais partagées avec des annonceurs", "Stockées dans l’Union européenne", "Déconnecter et tout supprimer à tout moment", "Votre profil est privé par défaut"],
    dataLink: "Quelles données et pourquoi",
    koppLbl: "Connexions",
    kopp: [["Garmin", "Activités, sommeil, VFC, fréquence cardiaque au repos", "demande en cours"], ["Fichiers FIT", "Chaque séance de votre montre ou compteur vélo", "disponible"], ["Export TrainingPeaks", "Votre historique en une fois", "disponible"]],
    slotLead: "Premium à partir de 19 € par mois, ou 49 € pour un objectif de course. Les tryouts sont gratuits.",
    prijzen: "Voir les tarifs", wachtKort: "Liste d’attente",
  },
};

export function Home({ taal }: { taal: Taal }) {
  const t = T[taal];
  const s = SLOGAN[taal];
  return (
    <>
      <section className="sectie eerste foto-held" style={{ backgroundImage: `url(${FOTO("photo-1502224562085-639556652f33")})` }}>
        <div className="wrap held">
          <div>
            <div className="lbl acc">{t.lbl}</div>
            <h1 style={{ margin: "18px 0 14px" }}>{s.kop}</h1>
            <p className="lead">{t.lead}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Link href={pad(taal, "/pricing#wachtlijst")} className="knop">{t.wacht}</Link>
              <Link href={pad(taal, "/how-it-works")} className="knop lijn">{t.hoe}</Link>
            </div>
            <p className="dim klein-tekst" style={{ marginTop: 18 }}>{t.test}</p>
          </div>
          <Telefoon src={beeld(taal, "d1")} alt={t.altD1} />
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <div className="lbl">{t.ochtendLbl}</div>
          <h2 style={{ margin: "12px 0 40px" }}>{t.ochtendKop}</h2>
          <div className="raster">
            {t.stappen.map(([kop, p], i) => (
              <div key={kop} className={i === 2 ? "kaart acc-rand" : "kaart"}>
                <div className="nr">0{i + 1}</div>
                <h3>{kop}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Band id="photo-1534787238916-9ba6764efd4f" pos="center 60%" kop={t.band1[0]} tekst={t.band1[1]} />

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <div className="lbl">{t.naLbl}</div>
            <h2 style={{ margin: "12px 0 20px" }}>{t.naKop}</h2>
            <p className="lead">{t.naLead}</p>
            <div className="waarom">{t.naWaarom}</div>
          </div>
          <Telefoon src={beeld(taal, "r2")} alt={t.altR2} />
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo om">
          <div>
            <div className="lbl">{t.seizLbl}</div>
            <h2 style={{ margin: "12px 0 20px" }}>{t.seizKop}</h2>
            <p className="lead">{t.seizLead}</p>
            <ul className="lijst" style={{ marginTop: 20 }}>
              {t.seizLijst.map(l => <li key={l}>{l}</li>)}
            </ul>
          </div>
          <Telefoon src={beeld(taal, "p3")} alt={t.altP3} />
        </div>
      </section>

      <Band id="photo-1438029071396-1e831a7fa6d8" pos="center 45%" kop={t.band2[0]} tekst={t.band2[1]} />

      <section className="sectie">
        <div className="wrap">
          <div className="lbl">{t.wieLbl}</div>
          <h2 style={{ margin: "12px 0 40px" }}>{t.wieKop}</h2>
          <div className="raster r2">
            <div className="kaart">
              <h3 className="groot">{t.wie1[0]}</h3>
              <p style={{ marginTop: 10 }}>{t.wie1[1]}</p>
            </div>
            <div className="kaart">
              <h3 className="groot">{t.wie2[0]}</h3>
              <p style={{ marginTop: 10 }}>{t.wie2[1]}</p>
              <Link href={pad(taal, "/dfrnt")} className="acc" style={{ display: "inline-block", marginTop: 14 }}>{t.wieLink}</Link>
            </div>
          </div>
        </div>
      </section>

      <Band id="photo-1461897104016-0b3b00cc81ee" pos="center 55%" kop={t.band3[0]} tekst={t.band3[1]} />

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <div className="lbl">{t.dataLbl}</div>
            <h2 style={{ margin: "12px 0 20px" }}>{t.dataKop}</h2>
            <ul className="lijst">
              {t.dataLijst.map(l => <li key={l}>{l}</li>)}
            </ul>
            <Link href={pad(taal, "/data")} className="knop lijn" style={{ marginTop: 24 }}>{t.dataLink}</Link>
          </div>
          <div className="kaart">
            <div className="lbl">{t.koppLbl}</div>
            <table className="tab" style={{ marginTop: 12 }}>
              <tbody>
                {t.kopp.map(([naam, wat, status], i) => (
                  <tr key={naam}><td>{naam}</td><td>{wat}</td><td><span className={i === 0 ? "tag" : "tag acc"}>{status}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap smal" style={{ textAlign: "center" }}>
          <h2>{s.kop}</h2>
          <p className="lead" style={{ margin: "18px auto 28px" }}>{t.slotLead}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={pad(taal, "/pricing")} className="knop">{t.prijzen}</Link>
            <Link href={pad(taal, "/pricing#wachtlijst")} className="knop lijn">{t.wachtKort}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
