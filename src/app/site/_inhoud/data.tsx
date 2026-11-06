import Link from "next/link";
import { type Taal, pad } from "../_ui/bedrijf";

export const TITEL_DATA: Record<Taal, string> = { en: "Your data", nl: "Je data", fr: "Vos données" };

const T = {
  en: {
    lbl: "Your data", kop: "Which data, and why.",
    lead1: "LUPO only uses what it needs to build your plan. Below is what we do with each piece of data. The full rules are in the ", link: "privacy policy", lead2: ".",
    kol: ["Data", "What exactly", "What for"],
    rijen: [["Activities", "Type, duration, distance, heart rate, power, pace, route", "Your log, what you did against the plan, and your load"],
            ["Heart rate variability", "Overnight HRV", "The morning decision: recovery against your own band"],
            ["Sleep", "Duration and stages", "The morning decision"],
            ["Resting heart rate", "Daily value", "The morning decision"],
            ["Your answers", "How the session felt, notes", "Making the next block lighter or harder"],
            ["Account", "Name, email, year of birth, your race", "Building your plan and managing your account"]],
    kaarten: [["Health data", "HRV, sleep and resting heart rate are health data. We only process them with your explicit consent, and you can withdraw it at any time."],
              ["Never in a language model", "The decision comes from fixed rules. For the plain-language explanation, the language model only receives the decision and the plan, never your raw health or watch data."],
              ["Never shared", "Your data is not sold and not shared with advertisers. Comparing with others only happens if you switch it on, and HRV and sleep are never shared."],
              ["In the EU", "Your data is on servers in Frankfurt. Providers outside the EU only get what is strictly necessary, under European contractual clauses."],
              ["Disconnecting means deleting", "Disconnect your watch and the flow stops immediately. Data from that connection is deleted within 30 days, unless you want to keep it."],
              ["Take everything with you", "You can download all your data in a common format, or have your account deleted with everything in it."]],
  },
  nl: {
    lbl: "Je data", kop: "Welke data, en waarom.",
    lead1: "LUPO gebruikt alleen wat nodig is om jouw schema te maken. Hieronder staat per gegeven wat we ermee doen. De volledige regels staan in de ", link: "privacyverklaring", lead2: ".",
    kol: ["Gegeven", "Wat precies", "Waarvoor"],
    rijen: [["Activiteiten", "Type, duur, afstand, hartslag, vermogen, tempo, route", "Je logboek, wat je deed tegenover het plan, en je belasting"],
            ["Hartslagvariabiliteit", "Nachtelijke HRV", "De ochtendbeslissing: herstel tegenover je eigen band"],
            ["Slaap", "Duur en fases", "De ochtendbeslissing"],
            ["Rusthartslag", "Dagwaarde", "De ochtendbeslissing"],
            ["Je antwoorden", "Gevoel na de training, notities", "Het volgende blok lichter of zwaarder maken"],
            ["Account", "Naam, e-mail, geboortejaar, je race", "Je plan opbouwen en je account beheren"]],
    kaarten: [["Gezondheidsgegevens", "HRV, slaap en rusthartslag zijn gezondheidsgegevens. We verwerken ze alleen met je uitdrukkelijke toestemming, en je kan die op elk moment intrekken."],
              ["Nooit in een taalmodel", "De beslissing komt uit vaste regels. Voor de uitleg in gewone taal krijgt het taalmodel alleen de beslissing en het plan, nooit je ruwe gezondheids- of horlogedata."],
              ["Nooit gedeeld", "Je data wordt niet verkocht en niet gedeeld met adverteerders. Vergelijken met anderen gebeurt alleen als jij dat aanzet, en HRV en slaap worden nooit gedeeld."],
              ["In de EU", "Je gegevens staan op servers in Frankfurt. Dienstverleners buiten de EU krijgen alleen wat strikt nodig is, onder Europese contractclausules."],
              ["Ontkoppelen is verwijderen", "Koppel je je horloge los, dan stopt de stroom meteen. Gegevens uit die koppeling worden binnen 30 dagen verwijderd, tenzij je ze zelf wil houden."],
              ["Alles meenemen", "Je kan al je gegevens downloaden in een gangbaar formaat, of je account met alles erin laten verwijderen."]],
  },
  fr: {
    lbl: "Vos données", kop: "Quelles données, et pourquoi.",
    lead1: "LUPO n’utilise que ce qui est nécessaire pour construire votre plan. Voici, donnée par donnée, ce que nous en faisons. Les règles complètes figurent dans la ", link: "politique de confidentialité", lead2: ".",
    kol: ["Donnée", "Quoi exactement", "Pour quoi"],
    rijen: [["Activités", "Type, durée, distance, fréquence cardiaque, puissance, allure, parcours", "Votre journal, ce que vous avez fait face au plan, et votre charge"],
            ["Variabilité de la fréquence cardiaque", "VFC nocturne", "La décision du matin : récupération face à votre propre zone"],
            ["Sommeil", "Durée et phases", "La décision du matin"],
            ["Fréquence cardiaque au repos", "Valeur du jour", "La décision du matin"],
            ["Vos réponses", "Ressenti après la séance, notes", "Rendre le bloc suivant plus léger ou plus dur"],
            ["Compte", "Nom, e-mail, année de naissance, votre course", "Construire votre plan et gérer votre compte"]],
    kaarten: [["Données de santé", "La VFC, le sommeil et la fréquence cardiaque au repos sont des données de santé. Nous ne les traitons qu’avec votre consentement explicite, que vous pouvez retirer à tout moment."],
              ["Jamais dans un modèle de langage", "La décision vient de règles fixes. Pour l’explication en langage courant, le modèle de langage ne reçoit que la décision et le plan, jamais vos données brutes de santé ou de montre."],
              ["Jamais partagées", "Vos données ne sont ni vendues ni partagées avec des annonceurs. La comparaison avec d’autres n’a lieu que si vous l’activez, et la VFC et le sommeil ne sont jamais partagés."],
              ["Dans l’UE", "Vos données sont sur des serveurs à Francfort. Les prestataires hors UE ne reçoivent que le strict nécessaire, sous clauses contractuelles européennes."],
              ["Déconnecter, c’est supprimer", "Déconnectez votre montre et le flux s’arrête immédiatement. Les données de cette connexion sont supprimées sous 30 jours, sauf si vous souhaitez les garder."],
              ["Tout emporter", "Vous pouvez télécharger toutes vos données dans un format courant, ou faire supprimer votre compte avec tout son contenu."]],
  },
};

export function Data({ taal }: { taal: Taal }) {
  const t = T[taal];
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">{t.lbl}</div>
          <h1 style={{ margin: "16px 0 22px" }}>{t.kop}</h1>
          <p className="lead">{t.lead1}<Link href={pad(taal, "/privacy")} className="acc">{t.link}</Link>{t.lead2}</p>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap">
          <table className="tab">
            <thead><tr>{t.kol.map(k => <th key={k}>{k}</th>)}</tr></thead>
            <tbody>{t.rijen.map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap raster">
          {t.kaarten.map(([kop, p]) => <div key={kop} className="kaart"><h3>{kop}</h3><p>{p}</p></div>)}
        </div>
      </section>
    </>
  );
}
