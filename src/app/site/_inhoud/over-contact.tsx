import { BEDRIJF, type Taal } from "../_ui/bedrijf";

export const TITEL_OVER: Record<Taal, string> = { en: "About LUPO", nl: "Over LUPO", fr: "À propos de LUPO" };
export const TITEL_CONTACT: Record<Taal, string> = { en: "Contact and support", nl: "Contact en support", fr: "Contact et support" };

const O = {
  en: {
    kop: "The last independent coach.",
    lead: "LUPO is built by an age grouper who trains for an Ironman himself. Out of frustration with watches that give a score but do not tell you what to do with it.",
    blokken: [["Why", ["Most athletes with a watch get a number every morning. What they do not get is a decision for their plan, with the reason. So there are two extremes: those who follow the plan blindly, and those who doubt every day.", "LUPO sits in between. Fixed rules decide, one clear sentence explains. Rest prescribed by LUPO counts, so nobody is penalised for following the advice."]],
              ["Independent", ["LUPO works with your watch, but belongs to no brand. Your data stays yours, and you take it with you whenever you want."]],
              ["Athlete zero", ["The founder trains with LUPO himself, towards IRONMAN Switzerland Thun on 4 July 2027. Every rule in the app is tested on that preparation first."]]],
    onderneming: "Company",
  },
  nl: {
    kop: "De laatste onafhankelijke coach.",
    lead: "LUPO is gebouwd door een leeftijdsgroeper die zelf naar een Ironman traint. Uit frustratie over horloges die een score geven maar niet zeggen wat je ermee moet doen.",
    blokken: [["Waarom", ["De meeste sporters met een horloge krijgen elke ochtend een getal. Wat ze niet krijgen, is een beslissing voor hun plan, met de reden erbij. Daarom zijn er twee uitersten: wie blind het schema volgt, en wie elke dag twijfelt.", "LUPO zit daartussen. Vaste regels beslissen, een duidelijke zin legt uit. Rust die LUPO oplegt telt mee, zodat niemand gestraft wordt voor het opvolgen van het advies."]],
              ["Onafhankelijk", ["LUPO werkt met je horloge, maar hoort bij geen enkel merk. Je data blijft van jou, en je neemt ze mee wanneer je wil."]],
              ["Atleet nul", ["De oprichter traint zelf met LUPO, naar IRONMAN Switzerland Thun op 4 juli 2027. Elke regel in de app wordt eerst op die eigen voorbereiding getest."]]],
    onderneming: "Onderneming",
  },
  fr: {
    kop: "Le dernier coach indépendant.",
    lead: "LUPO est conçu par un athlète amateur qui prépare lui-même un Ironman. Par frustration face aux montres qui donnent un score sans dire quoi en faire.",
    blokken: [["Pourquoi", ["La plupart des sportifs équipés d’une montre reçoivent un chiffre chaque matin. Ce qu’ils ne reçoivent pas, c’est une décision pour leur plan, avec la raison. D’où deux extrêmes : ceux qui suivent le plan à l’aveugle, et ceux qui doutent chaque jour.", "LUPO se place entre les deux. Des règles fixes décident, une phrase claire explique. Le repos imposé par LUPO compte, pour que personne ne soit pénalisé pour avoir suivi le conseil."]],
              ["Indépendant", ["LUPO fonctionne avec votre montre, mais n’appartient à aucune marque. Vos données restent les vôtres, et vous les emportez quand vous voulez."]],
              ["Athlète zéro", ["Le fondateur s’entraîne lui-même avec LUPO, vers l’IRONMAN Switzerland Thun du 4 juillet 2027. Chaque règle de l’application est d’abord testée sur cette préparation."]]],
    onderneming: "Entreprise",
  },
};

export function Over({ taal }: { taal: Taal }) {
  const t = O[taal];
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">{TITEL_OVER[taal]}</div>
          <h1 style={{ margin: "16px 0 22px" }}>{t.kop}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap smal tekst">
          {t.blokken.map(([kop, alineas]) => (
            <div key={kop as string}>
              <h2>{kop}</h2>
              {(alineas as string[]).map(a => <p key={a}>{a}</p>)}
            </div>
          ))}
          <h2>{t.onderneming}</h2>
          <p>{BEDRIJF.juridischeNaam}<br />{BEDRIJF.ondernemingsnummer}<br />{BEDRIJF.adres}<br /><a className="acc" href={`mailto:${BEDRIJF.mail}`}>{BEDRIJF.mail}</a></p>
        </div>
      </section>
    </>
  );
}

const C = {
  en: {
    kop: "A question? Email us.", lead: "We reply within two working days.",
    kaarten: [["Support", "Problems with the app, your connection or your account.", BEDRIJF.supportMail],
              ["Privacy", "Access, correction, deletion or taking your data with you.", BEDRIJF.privacyMail],
              ["Everything else", "Partnerships, clubs, press.", BEDRIJF.mail]],
    los: ["Disconnecting your watch", "In the app: Me → Connections → Disconnect. Or directly in your Garmin Connect account under connected apps. The data flow stops immediately."],
    weg: ["Deleting your account", `In the app: Me → Privacy → Delete account, or by email to ${BEDRIJF.privacyMail}. Everything is gone within 30 days.`],
    onderneming: "Company",
  },
  nl: {
    kop: "Een vraag? Mail ons.", lead: "We antwoorden binnen twee werkdagen.",
    kaarten: [["Support", "Problemen met de app, je koppeling of je account.", BEDRIJF.supportMail],
              ["Privacy", "Inzage, correctie, verwijdering of je data meenemen.", BEDRIJF.privacyMail],
              ["Al het andere", "Samenwerkingen, clubs, pers.", BEDRIJF.mail]],
    los: ["Je koppeling loskoppelen", "In de app: Ik → Koppelingen → Loskoppelen. Of rechtstreeks in je Garmin Connect-account bij de verbonden apps. De gegevensstroom stopt meteen."],
    weg: ["Je account verwijderen", `In de app: Ik → Privacy → Account verwijderen, of per mail naar ${BEDRIJF.privacyMail}. Alles is binnen 30 dagen weg.`],
    onderneming: "Onderneming",
  },
  fr: {
    kop: "Une question ? Écrivez-nous.", lead: "Nous répondons sous deux jours ouvrables.",
    kaarten: [["Support", "Problèmes avec l’application, votre connexion ou votre compte.", BEDRIJF.supportMail],
              ["Confidentialité", "Accès, rectification, suppression ou récupération de vos données.", BEDRIJF.privacyMail],
              ["Tout le reste", "Partenariats, clubs, presse.", BEDRIJF.mail]],
    los: ["Déconnecter votre montre", "Dans l’application : Moi → Connexions → Déconnecter. Ou directement dans votre compte Garmin Connect, parmi les applications connectées. Le flux de données s’arrête immédiatement."],
    weg: ["Supprimer votre compte", `Dans l’application : Moi → Confidentialité → Supprimer le compte, ou par e-mail à ${BEDRIJF.privacyMail}. Tout disparaît sous 30 jours.`],
    onderneming: "Entreprise",
  },
};

export function Contact({ taal }: { taal: Taal }) {
  const t = C[taal];
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">{TITEL_CONTACT[taal]}</div>
          <h1 style={{ margin: "16px 0 22px" }}>{t.kop}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap raster">
          {t.kaarten.map(([kop, p, mail]) => (
            <div key={kop} className="kaart">
              <h3>{kop}</h3>
              <p>{p}</p>
              <a className="acc" href={`mailto:${mail}`} style={{ display: "inline-block", marginTop: 12 }}>{mail}</a>
            </div>
          ))}
        </div>
      </section>
      <section className="sectie">
        <div className="wrap smal tekst">
          <h2>{t.los[0]}</h2>
          <p>{t.los[1]}</p>
          <h2>{t.weg[0]}</h2>
          <p>{t.weg[1]}</p>
          <h2>{t.onderneming}</h2>
          <p>{BEDRIJF.juridischeNaam} · {BEDRIJF.ondernemingsnummer}<br />{BEDRIJF.adres}</p>
        </div>
      </section>
    </>
  );
}
