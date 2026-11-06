import { BEDRIJF, type Taal } from "../_ui/bedrijf";

export const TITEL_PRIJZEN: Record<Taal, string> = { en: "Pricing", nl: "Prijzen", fr: "Tarifs" };

const T = {
  en: {
    lbl: "Pricing", kop: "Pay for certainty, not for features.", lead: "One subscription with everything in it. Or pay per race goal.",
    gratis: ["Free · in waves", "DFRNT tryout", "€0", "", ["Baseline test and retest", "8 to 12 weeks of training", "Your place in the wave"]],
    premium: ["Premium", "All the way to your start line", "€19", "per month", "or €169 per year",
      ["Every morning the decision with the reason", "A plan towards your race that adapts", "Log with analysis of every session", "Coach conversation about your plan", "Six-week trial, earned in blocks of two"]],
    race: ["One-off", "Race block", "€49", "per race goal", ["Everything in Premium up to one race", "Taper and race plan", "No subscription"]],
    btw: "Prices include VAT. Pack is by invitation, for athletes from the tryouts.",
    wachtKop: "Waitlist", wachtLead: "Leave your email. You get one message when there is a place, or when the next DFRNT wave opens. Nothing else.",
    placeholder: "you@email.com", opties: ["Premium: I have a race", "DFRNT: I am between 15 and 25"],
    akkoord: "I agree that LUPO keeps my email for this one message.", knop: "Add me to the list",
    vragenKop: "Questions",
    vragen: [["When can I start?", "LUPO is in testing with a small group of athletes. Those on the waitlist are the first to hear when there is a place."],
             ["Which watch do I need?", "A watch that measures HRV and sleep. The Garmin connection has been applied for. Until then you can upload FIT files and a TrainingPeaks export."],
             ["Can I cancel?", "Monthly, with no notice period. An annual subscription runs to the end of the year and is never renewed without notice beforehand."],
             ["How is this different from my watch’s features?", "Your watch gives a score. LUPO gives a decision for your plan towards your race, with the reason, and adjusts the rest of your week."],
             ["Is this medical advice?", "No. LUPO gives training advice. With pain, illness or doubts about your health, see a doctor."]],
  },
  nl: {
    lbl: "Prijzen", kop: "Betaal voor zekerheid, niet voor functies.", lead: "Eén abonnement met alles erin. Of betaal per racedoel.",
    gratis: ["Gratis · in golven", "DFRNT tryout", "€0", "", ["Nulmeting en hertest", "8 tot 12 weken schema", "Je plek in de golf"]],
    premium: ["Premium", "Tot aan je startlijn", "€19", "per maand", "of €169 per jaar",
      ["Elke ochtend de beslissing met de reden", "Plan naar je race, dat zich aanpast", "Logboek met analyse van elke training", "Coachgesprek over je schema", "Proefperiode van zes weken, verdiend in blokken van twee"]],
    race: ["Eenmalig", "Raceblok", "€49", "per racedoel", ["Alles van Premium tot aan één race", "Taper en raceplan", "Geen abonnement"]],
    btw: "Prijzen inclusief btw. Pack is op uitnodiging, voor atleten uit de tryouts.",
    wachtKop: "Wachtlijst", wachtLead: "Laat je e-mail achter. Je krijgt één bericht wanneer er plaats is, of wanneer de volgende DFRNT-golf opent. Niets anders.",
    placeholder: "je@email.be", opties: ["Premium: ik heb een race", "DFRNT: ik ben tussen 15 en 25"],
    akkoord: "Ik ga akkoord dat LUPO mijn e-mail bewaart voor dit ene bericht.", knop: "Zet me op de lijst",
    vragenKop: "Vragen",
    vragen: [["Wanneer kan ik starten?", "LUPO is in testfase met een kleine groep atleten. Wie op de wachtlijst staat, hoort als eerste wanneer er plaats is."],
             ["Welk horloge heb ik nodig?", "Een horloge dat HRV en slaap meet. De Garmin-koppeling is in aanvraag. Tot dan kan je FIT-bestanden en een TrainingPeaks-export inladen."],
             ["Kan ik opzeggen?", "Maandelijks opzegbaar, zonder opzegtermijn. Een jaarabonnement loopt tot het einde van het jaar en wordt niet stilzwijgend verlengd zonder bericht vooraf."],
             ["Wat is het verschil met de functies van mijn horloge?", "Je horloge geeft een score. LUPO geeft een beslissing voor jouw plan naar jouw race, met de reden erbij, en past de rest van je week aan."],
             ["Is dit medisch advies?", "Nee. LUPO geeft trainingsadvies. Bij pijn, ziekte of twijfel over je gezondheid ga je naar een arts."]],
  },
  fr: {
    lbl: "Tarifs", kop: "Payez pour la certitude, pas pour des fonctions.", lead: "Un abonnement avec tout dedans. Ou payez par objectif de course.",
    gratis: ["Gratuit · par vagues", "Tryout DFRNT", "0 €", "", ["Test de référence et nouveau test", "8 à 12 semaines de plan", "Votre place dans la vague"]],
    premium: ["Premium", "Jusqu’à votre ligne de départ", "19 €", "par mois", "ou 169 € par an",
      ["Chaque matin la décision avec la raison", "Un plan vers votre course qui s’adapte", "Journal avec analyse de chaque séance", "Échange avec le coach sur votre plan", "Période d’essai de six semaines, gagnée par blocs de deux"]],
    race: ["Ponctuel", "Bloc course", "49 €", "par objectif de course", ["Tout Premium jusqu’à une course", "Affûtage et plan de course", "Sans abonnement"]],
    btw: "Prix TVA comprise. Pack est sur invitation, pour les athlètes issus des tryouts.",
    wachtKop: "Liste d’attente", wachtLead: "Laissez votre e-mail. Vous recevez un seul message quand une place se libère, ou quand la prochaine vague DFRNT ouvre. Rien d’autre.",
    placeholder: "vous@email.be", opties: ["Premium : j’ai une course", "DFRNT : j’ai entre 15 et 25 ans"],
    akkoord: "J’accepte que LUPO conserve mon e-mail pour ce seul message.", knop: "M’inscrire sur la liste",
    vragenKop: "Questions",
    vragen: [["Quand puis-je commencer ?", "LUPO est en phase de test avec un petit groupe d’athlètes. Les inscrits sur la liste d’attente sont les premiers informés quand une place se libère."],
             ["Quelle montre me faut-il ?", "Une montre qui mesure la VFC et le sommeil. La connexion Garmin est en cours de demande. D’ici là, vous pouvez importer des fichiers FIT et un export TrainingPeaks."],
             ["Puis-je résilier ?", "Chaque mois, sans préavis. Un abonnement annuel court jusqu’à la fin de l’année et n’est jamais renouvelé sans message préalable."],
             ["Quelle différence avec les fonctions de ma montre ?", "Votre montre donne un score. LUPO donne une décision pour votre plan vers votre course, avec la raison, et ajuste le reste de votre semaine."],
             ["Est-ce un avis médical ?", "Non. LUPO donne des conseils d’entraînement. En cas de douleur, de maladie ou de doute sur votre santé, consultez un médecin."]],
  },
};

export function Prijzen({ taal }: { taal: Taal }) {
  const t = T[taal];
  const [gTag, gKop, gPrijs, , gLijst] = t.gratis as [string, string, string, string, string[]];
  const [pTag, pKop, pPrijs, pPer, pJaar, pLijst] = t.premium as [string, string, string, string, string, string[]];
  const [rTag, rKop, rPrijs, rPer, rLijst] = t.race as [string, string, string, string, string[]];
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
        <div className="wrap raster">
          <div className="kaart">
            <span className="tag">{gTag}</span>
            <h3 className="groot" style={{ marginTop: 14 }}>{gKop}</h3>
            <div className="prijs" style={{ margin: "10px 0" }}>{gPrijs}</div>
            <ul className="lijst">{gLijst.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="kaart acc-rand">
            <span className="tag acc">{pTag}</span>
            <h3 className="groot" style={{ marginTop: 14 }}>{pKop}</h3>
            <div className="prijs" style={{ margin: "10px 0" }}>{pPrijs}<small>{pPer}</small></div>
            <p className="dim" style={{ marginBottom: 14 }}>{pJaar}</p>
            <ul className="lijst">{pLijst.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="kaart">
            <span className="tag">{rTag}</span>
            <h3 className="groot" style={{ marginTop: 14 }}>{rKop}</h3>
            <div className="prijs" style={{ margin: "10px 0" }}>{rPrijs}<small>{rPer}</small></div>
            <ul className="lijst">{rLijst.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 16 }}>
          <p className="dim klein-tekst">{t.btw}</p>
        </div>
      </section>

      <section className="sectie" id="wachtlijst">
        <div className="wrap duo">
          <div>
            <h2 style={{ marginBottom: 16 }}>{t.wachtKop}</h2>
            <p className="lead">{t.wachtLead}</p>
          </div>
          <form className="formulier" action={`mailto:${BEDRIJF.mail}`} method="post" encType="text/plain">
            <input className="veld" type="email" name="email" placeholder={t.placeholder} required />
            <select className="veld" name="interesse" defaultValue="premium">
              <option value="premium">{t.opties[0]}</option>
              <option value="dfrnt">{t.opties[1]}</option>
            </select>
            <label className="dim klein-tekst" style={{ display: "flex", gap: 10 }}>
              <input type="checkbox" required /> {t.akkoord}
            </label>
            <button className="knop" type="submit">{t.knop}</button>
          </form>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap smal">
          <h2 style={{ marginBottom: 16 }}>{t.vragenKop}</h2>
          {t.vragen.map(([v, a]) => <details key={v} className="vraag"><summary>{v}</summary><p>{a}</p></details>)}
        </div>
      </section>
    </>
  );
}
