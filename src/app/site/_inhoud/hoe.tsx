import Link from "next/link";
import { type Taal, pad } from "../_ui/bedrijf";

export const TITEL_HOE: Record<Taal, string> = { en: "How it works", nl: "Hoe het werkt", fr: "Fonctionnement" };

const T = {
  en: {
    lbl: "How it works", kop: "Fixed rules. A clear reason.",
    lead: "Every morning LUPO decides based on fixed rules and your own data. The same situation always gives the same decision, and you always see why.",
    besKop: "The morning decision",
    bes: [["Go", "Everything within your band", "Your recovery is within your own normal range. Today’s session goes ahead as planned."],
          ["Ease off", "Intensity out", "One signal is off. The hard blocks go, the duration comes down. What drops out moves to later in the week."],
          ["Rest", "Nothing today", "Several signals are off. Rest counts as done: you are never penalised for following the advice."]],
    kijktKop: "What LUPO looks at", kol: ["Signal", "How"],
    kijkt: [["Heart rate variability (HRV)", "The 7-day average against your own normal band, not against a general norm."],
            ["Sleep", "Duration and regularity over the last nights."],
            ["Resting heart rate", "Deviation from your own average."],
            ["Load", "What you did in the last week against the four weeks before."],
            ["Your own answer", "One question after every session: too easy, right or too hard."]],
    nietKop: "What LUPO does not do",
    niet: ["No medical advice and no diagnoses", "No promises about getting faster or fewer injuries", "No decisions by a language model: the rules decide, the text explains", "No feed, no likes, no followers"],
    drempel: "The thresholds in the rules are checked against research and reviewed by a sports physician before they apply to everyone.",
    raceKop: "From race to start line",
    race: [["Pick your race", "From the race calendar. Distance, date and phases follow from it."],
           ["Your level", "How many hours you train now. LUPO only asks for more when it is needed."],
           ["Your first week", "A plan right away, before you have to connect anything."],
           ["Connect your watch", "From then on LUPO decides every morning with your data."]],
    wacht: "Join the waitlist",
  },
  nl: {
    lbl: "Hoe het werkt", kop: "Vaste regels. Een duidelijke reden.",
    lead: "LUPO beslist elke ochtend op basis van vaste regels en je eigen gegevens. Dezelfde situatie geeft altijd dezelfde beslissing, en je ziet altijd waarom.",
    besKop: "De ochtendbeslissing",
    bes: [["Voluit", "Alles binnen je band", "Je herstel ligt binnen je eigen normale marge. Het schema van vandaag gaat door zoals gepland."],
          ["Afbouwen", "Intensiteit eruit", "Eén signaal wijkt af. De zware blokken gaan eruit, de duur gaat omlaag. Wat wegvalt, schuift naar later in de week."],
          ["Rusten", "Vandaag niets", "Meerdere signalen wijken af. Rust telt als nagekomen: je wordt nooit gestraft voor het opvolgen van het advies."]],
    kijktKop: "Waar LUPO naar kijkt", kol: ["Signaal", "Hoe"],
    kijkt: [["Hartslagvariabiliteit (HRV)", "Het 7-daagse gemiddelde tegenover je eigen normale band, niet tegenover een algemene norm."],
            ["Slaap", "Duur en regelmaat over de laatste nachten."],
            ["Rusthartslag", "Afwijking van je eigen gemiddelde."],
            ["Belasting", "Wat je de laatste week deed tegenover de vier weken ervoor."],
            ["Je eigen antwoord", "Na elke training één vraag: te licht, goed of te zwaar."]],
    nietKop: "Wat LUPO niet doet",
    niet: ["Geen medisch advies en geen diagnoses", "Geen beloftes over sneller worden of minder blessures", "Geen beslissingen door een taalmodel: de regels beslissen, de tekst legt uit", "Geen feed, geen likes, geen volgers"],
    drempel: "De drempels in de regels worden getoetst aan onderzoek en nagekeken door een sportarts voor ze voor iedereen gelden.",
    raceKop: "Van race tot startlijn",
    race: [["Kies je race", "Uit de wedstrijdkalender. Daaruit volgen de afstand, de datum en de fases."],
           ["Je niveau", "Hoeveel uur je nu traint. Meer vraagt LUPO pas wanneer het nodig is."],
           ["Je eerste week", "Meteen een schema, voor je iets hoeft te koppelen."],
           ["Koppel je horloge", "Vanaf dan beslist LUPO elke ochtend met jouw gegevens."]],
    wacht: "Zet je op de wachtlijst",
  },
  fr: {
    lbl: "Fonctionnement", kop: "Des règles fixes. Une raison claire.",
    lead: "Chaque matin, LUPO décide selon des règles fixes et vos propres données. La même situation donne toujours la même décision, et vous voyez toujours pourquoi.",
    besKop: "La décision du matin",
    bes: [["À fond", "Tout dans votre zone", "Votre récupération est dans votre marge normale. La séance du jour se fait comme prévu."],
          ["Alléger", "Sans intensité", "Un signal s’écarte. Les blocs durs disparaissent, la durée baisse. Ce qui saute est déplacé plus tard dans la semaine."],
          ["Repos", "Rien aujourd’hui", "Plusieurs signaux s’écartent. Le repos compte comme accompli : vous n’êtes jamais pénalisé pour avoir suivi le conseil."]],
    kijktKop: "Ce que LUPO regarde", kol: ["Signal", "Comment"],
    kijkt: [["Variabilité de la fréquence cardiaque (VFC)", "La moyenne sur 7 jours face à votre propre zone normale, pas face à une norme générale."],
            ["Sommeil", "Durée et régularité des dernières nuits."],
            ["Fréquence cardiaque au repos", "Écart par rapport à votre propre moyenne."],
            ["Charge", "Ce que vous avez fait la dernière semaine face aux quatre semaines précédentes."],
            ["Votre propre réponse", "Une question après chaque séance : trop facile, juste ou trop dur."]],
    nietKop: "Ce que LUPO ne fait pas",
    niet: ["Pas de conseil médical ni de diagnostic", "Pas de promesses d’aller plus vite ou de moins se blesser", "Pas de décisions par un modèle de langage : les règles décident, le texte explique", "Pas de fil d’actualité, pas de likes, pas d’abonnés"],
    drempel: "Les seuils des règles sont confrontés à la recherche et vérifiés par un médecin du sport avant de s’appliquer à tous.",
    raceKop: "De la course à la ligne de départ",
    race: [["Choisissez votre course", "Dans le calendrier. La distance, la date et les phases en découlent."],
           ["Votre niveau", "Combien d’heures vous vous entraînez aujourd’hui. LUPO ne demande plus que lorsque c’est nécessaire."],
           ["Votre première semaine", "Un plan tout de suite, avant de devoir connecter quoi que ce soit."],
           ["Connectez votre montre", "Dès lors, LUPO décide chaque matin avec vos données."]],
    wacht: "Rejoindre la liste d’attente",
  },
};

const TAG = ["tag acc", "tag", "tag"];

export function Hoe({ taal }: { taal: Taal }) {
  const t = T[taal];
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">{t.lbl}</div>
          <h1 style={{ margin: "16px 0 22px" }}>{t.kop}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>{t.besKop}</h2>
          <div className="raster">
            {t.bes.map(([tag, kop, p], i) => (
              <div key={tag} className="kaart">
                <span className={TAG[i]} style={i === 1 ? { borderColor: "var(--warn)", color: "var(--warn)" } : undefined}>{tag}</span>
                <h3 style={{ marginTop: 14 }}>{kop}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <h2 style={{ marginBottom: 20 }}>{t.kijktKop}</h2>
            <table className="tab">
              <thead><tr><th>{t.kol[0]}</th><th>{t.kol[1]}</th></tr></thead>
              <tbody>{t.kijkt.map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody>
            </table>
          </div>
          <div>
            <h2 style={{ marginBottom: 20 }}>{t.nietKop}</h2>
            <ul className="lijst nee">{t.niet.map(l => <li key={l}>{l}</li>)}</ul>
            <div className="waarom" style={{ marginTop: 28 }}>{t.drempel}</div>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>{t.raceKop}</h2>
          <div className="raster r4">
            {t.race.map(([kop, p], i) => (
              <div key={kop} className="kaart"><div className="nr">0{i + 1}</div><h3>{kop}</h3><p>{p}</p></div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}><Link href={pad(taal, "/pricing#wachtlijst")} className="knop">{t.wacht}</Link></div>
        </div>
      </section>
    </>
  );
}
