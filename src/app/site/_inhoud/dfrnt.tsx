import Link from "next/link";
import { type Taal, beeld, pad } from "../_ui/bedrijf";

export const TITEL_DFRNT: Record<Taal, string> = { en: "DFRNT tryouts", nl: "DFRNT tryouts", fr: "Tryouts DFRNT" };

const T = {
  en: {
    lbl: "DFRNT · tryouts by LUPO", kop: "Show what you can do.",
    lead: "Twice a year LUPO opens a free tryout for athletes between 15 and 25. No selection on who is already fast, but on who improves most.",
    knop: "Sign up for the next wave", alt: "DFRNT tryout in the app",
    golfKop: "How a wave works",
    golf: [["Baseline test", "A fixed protocol: a 3 km run, 20 minutes cycling on power or a 400 m swim."],
           ["8 to 12 weeks", "A plan in the app, free. You train as you like, LUPO tracks what you do."],
           ["Retest", "The same protocol. What counts is your progress relative to your volume."],
           ["Invitation", "The top 5% get an invitation to a physical test, with the same equipment for everyone."]],
    eerlijkKop: "Measured fairly",
    eerlijk: ["Everyone the same protocol, at the same time", "Progress counts, not who was already fastest", "Low volume and big progress stands out", "Two categories: Talent (up to 23) and Open (23+)"],
    onderKop: "Under 18", onder: "You can take part from 16, with a parent’s consent. For athletes under 18, HRV and sleep never count towards the score, and the profile stays private.",
  },
  nl: {
    lbl: "DFRNT · tryouts van LUPO", kop: "Toon wat je kan.",
    lead: "Twee keer per jaar opent LUPO een gratis tryout voor atleten tussen 15 en 25. Geen selectie op wie al snel is, wel op wie het meest vooruitgaat.",
    knop: "Meld je aan voor de volgende golf", alt: "DFRNT tryout in de app",
    golfKop: "Zo werkt een golf",
    golf: [["Nulmeting", "Een vast protocol: 3 km lopen, 20 minuten fietsen op vermogen of 400 m zwemmen."],
           ["8 tot 12 weken", "Een schema in de app, gratis. Je traint zoals je wil, LUPO houdt bij wat je doet."],
           ["Hertest", "Hetzelfde protocol. Wat telt is je vooruitgang tegenover je volume."],
           ["Uitnodiging", "De beste 5% krijgt een uitnodiging voor een fysieke test, met hetzelfde materiaal voor iedereen."]],
    eerlijkKop: "Eerlijk gemeten",
    eerlijk: ["Iedereen hetzelfde protocol, op hetzelfde moment", "Vooruitgang telt, niet wie al het snelst was", "Weinig volume en veel vooruitgang valt op", "Twee categorieën: Talent (tot 23) en Open (23+)"],
    onderKop: "Onder 18", onder: "Meedoen kan vanaf 16 jaar, met toestemming van een ouder. Voor atleten onder 18 tellen HRV en slaap nooit mee in de score, en het profiel blijft privé.",
  },
  fr: {
    lbl: "DFRNT · tryouts de LUPO", kop: "Montrez ce que vous valez.",
    lead: "Deux fois par an, LUPO ouvre un tryout gratuit pour les athlètes de 15 à 25 ans. Pas de sélection sur qui est déjà rapide, mais sur qui progresse le plus.",
    knop: "S’inscrire à la prochaine vague", alt: "Tryout DFRNT dans l’application",
    golfKop: "Comment se déroule une vague",
    golf: [["Test de référence", "Un protocole fixe : 3 km de course, 20 minutes de vélo à la puissance ou 400 m de natation."],
           ["8 à 12 semaines", "Un plan dans l’application, gratuit. Vous vous entraînez comme vous voulez, LUPO suit ce que vous faites."],
           ["Nouveau test", "Le même protocole. Ce qui compte, c’est votre progrès par rapport à votre volume."],
           ["Invitation", "Les 5 % meilleurs sont invités à un test physique, avec le même matériel pour tous."]],
    eerlijkKop: "Une mesure équitable",
    eerlijk: ["Le même protocole pour tous, au même moment", "Le progrès compte, pas qui était déjà le plus rapide", "Peu de volume et beaucoup de progrès, ça se remarque", "Deux catégories : Talent (jusqu’à 23 ans) et Open (23 ans et plus)"],
    onderKop: "Moins de 18 ans", onder: "La participation est possible dès 16 ans, avec l’accord d’un parent. Pour les athlètes de moins de 18 ans, la VFC et le sommeil ne comptent jamais dans le score, et le profil reste privé.",
  },
};

export function Dfrnt({ taal }: { taal: Taal }) {
  const t = T[taal];
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap held">
          <div>
            <div className="lbl acc">{t.lbl}</div>
            <h1 style={{ margin: "16px 0 22px" }}>{t.kop}</h1>
            <p className="lead">{t.lead}</p>
            <Link href={pad(taal, "/pricing#wachtlijst")} className="knop" style={{ marginTop: 24 }}>{t.knop}</Link>
          </div>
          <div className="telefoon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={beeld(taal, "t1")} alt={t.alt} />
          </div>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>{t.golfKop}</h2>
          <div className="raster r4">
            {t.golf.map(([kop, p], i) => <div key={kop} className="kaart"><div className="nr">0{i + 1}</div><h3>{kop}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap duo">
          <div>
            <h2 style={{ marginBottom: 20 }}>{t.eerlijkKop}</h2>
            <ul className="lijst">{t.eerlijk.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="kaart">
            <h3>{t.onderKop}</h3>
            <p>{t.onder}</p>
          </div>
        </div>
      </section>
    </>
  );
}
