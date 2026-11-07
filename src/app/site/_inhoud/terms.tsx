import Link from "next/link";
import { BEDRIJF, BIJGEWERKT, type Taal, pad } from "../_ui/bedrijf";

export const TITEL_TERMS: Record<Taal, string> = { en: "Terms of use", nl: "Gebruiksvoorwaarden", fr: "Conditions d’utilisation" };

function TermsEN() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Terms of use</div>
        <h1 style={{ margin: "16px 0 12px" }}>Terms</h1>
        <p className="dim">Last updated on {BIJGEWERKT.en}.</p>
        <div className="concept">Draft. To be reviewed by a lawyer before publication.</div>

        <h2>1. Who</h2>
        <p>These terms apply between you and {B.juridischeNaam}, {B.ondernemingsnummer}, {B.adres}, for the use of the LUPO app and the website {B.domein}.</p>

        <h2>2. What LUPO is</h2>
        <p>LUPO gives training advice based on your training and recovery data: a daily decision, a plan towards your race and analyses of your sessions. <strong>LUPO does not give medical advice</strong> and makes no diagnoses. With pain, illness, an injury or doubts about your health, consult a doctor. You train at your own responsibility, and you decide whether to follow the advice.</p>

        <h2>3. Your account</h2>
        <ul>
          <li>You must be at least 16. Until 18 you need the consent of a parent or guardian.</li>
          <li>You provide accurate details and keep your password to yourself.</li>
          <li>One account is for one person.</li>
        </ul>

        <h2>4. Subscriptions and payment</h2>
        <ul>
          <li>Premium costs €19 per month or €169 per year. A race block costs a one-off €49 and runs until the date of that race. Prices include VAT.</li>
          <li>A monthly subscription can be cancelled monthly and runs until the end of the paid month.</li>
          <li>We only renew an annual subscription after notifying you beforehand, and you can then cancel it monthly.</li>
          <li>We announce price changes at least 30 days in advance. You can cancel before they take effect.</li>
        </ul>

        <h2>5. Right of withdrawal</h2>
        <p>As a consumer you have 14 days to withdraw from a purchase without giving a reason. If you expressly start using the service within that period, you only pay for the part you used when you withdraw.</p>

        <h2>6. DFRNT tryouts</h2>
        <p>Taking part in a tryout is free. An invitation to a physical test is not a right and depends on the results of the wave. Separate arrangements apply to the physical test, which we send you beforehand.</p>

        <h2>7. Connections with other services</h2>
        <p>If you connect a service such as Garmin, that service’s terms also apply. LUPO belongs to no watch brand. If a connection ends because of a decision by that service, you can still upload your data yourself.</p>

        <h2>8. Your data and content</h2>
        <p>Your data stays yours. You only give us the right to use it to provide the service to you. How we do that is set out in the <Link className="acc" href={pad("en", "/privacy")}>privacy policy</Link>.</p>

        <h2>9. What is not allowed</h2>
        <ul>
          <li>Using the service for someone else without their consent.</li>
          <li>Claiming results that are not yours.</li>
          <li>Copying, reverse engineering or scraping the app.</li>
        </ul>

        <h2>10. Liability</h2>
        <p>We do everything we can to keep LUPO accurate and available, but cannot guarantee that the service always works without errors. We are not liable for damage from following or not following training advice, except in case of intent or gross negligence. Statutory consumer rights remain fully in force.</p>

        <h2>11. Ending</h2>
        <p>You can delete your account at any time. We can close an account for serious or repeated breaches of these terms, after prior notice except in case of abuse.</p>

        <h2>12. Law and disputes</h2>
        <p>Belgian law applies to these terms. We first look for a solution together via {B.mail}. If that fails, you can turn to the Consumer Ombudsman Service or the competent court.</p>
      </div>
    </section>
  );
}

function TermsNL() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Gebruiksvoorwaarden</div>
        <h1 style={{ margin: "16px 0 12px" }}>Voorwaarden</h1>
        <p className="dim">Laatst bijgewerkt op {BIJGEWERKT.nl}.</p>
        <div className="concept">Concept. Moet nog juridisch nagekeken worden voor publicatie.</div>

        <h2>1. Wie</h2>
        <p>Deze voorwaarden gelden tussen jou en {B.juridischeNaam}, {B.ondernemingsnummer}, {B.adres}, voor het gebruik van de LUPO-app en de website {B.domein}.</p>

        <h2>2. Wat LUPO is</h2>
        <p>LUPO geeft trainingsadvies op basis van je trainings- en herstelgegevens: een dagelijkse beslissing, een plan naar je race en analyses van je trainingen. <strong>LUPO geeft geen medisch advies</strong> en stelt geen diagnoses. Bij pijn, ziekte, een blessure of twijfel over je gezondheid raadpleeg je een arts. Je traint op eigen verantwoordelijkheid, en je beslist zelf of je het advies volgt.</p>

        <h2>3. Je account</h2>
        <ul>
          <li>Je moet minstens 16 jaar zijn. Tot 18 jaar heb je de toestemming van een ouder of voogd nodig.</li>
          <li>Je geeft juiste gegevens op en houdt je wachtwoord voor jezelf.</li>
          <li>Eén account is voor één persoon.</li>
        </ul>

        <h2>4. Abonnementen en betaling</h2>
        <ul>
          <li>Premium kost €19 per maand of €169 per jaar. Een raceblok kost eenmalig €49 en loopt tot de datum van die race. Prijzen zijn inclusief btw.</li>
          <li>Een maandabonnement is maandelijks opzegbaar en loopt tot het einde van de betaalde maand.</li>
          <li>Een jaarabonnement verlengen we alleen na een bericht vooraf, en je kan het daarna maandelijks opzeggen.</li>
          <li>Prijswijzigingen melden we minstens 30 dagen vooraf. Je kan dan opzeggen voor ze ingaan.</li>
        </ul>

        <h2>5. Herroepingsrecht</h2>
        <p>Als consument heb je 14 dagen om zonder reden af te zien van een aankoop. Begin je in die periode uitdrukkelijk al met de dienst, dan betaal je bij herroeping alleen het deel dat je gebruikte.</p>

        <h2>6. DFRNT-tryouts</h2>
        <p>Meedoen aan een tryout is gratis. Een uitnodiging voor een fysieke test is geen recht en hangt af van de resultaten van de golf. Voor de fysieke test gelden aparte afspraken die we je vooraf bezorgen.</p>

        <h2>7. Koppelingen met andere diensten</h2>
        <p>Koppel je een dienst zoals Garmin, dan gelden ook de voorwaarden van die dienst. LUPO hoort bij geen enkel horlogemerk. Valt een koppeling weg door een beslissing van die dienst, dan kan je je gegevens nog altijd zelf inladen.</p>

        <h2>8. Jouw gegevens en inhoud</h2>
        <p>Je gegevens blijven van jou. Je geeft ons alleen het recht ze te gebruiken om je de dienst te leveren. Hoe we dat doen, staat in de <Link className="acc" href={pad("nl", "/privacy")}>privacyverklaring</Link>.</p>

        <h2>9. Wat niet mag</h2>
        <ul>
          <li>De dienst gebruiken voor iemand anders zonder diens toestemming.</li>
          <li>Uitslagen claimen die niet van jou zijn.</li>
          <li>De app kopiëren, ontleden of geautomatiseerd uitlezen.</li>
        </ul>

        <h2>10. Aansprakelijkheid</h2>
        <p>We doen er alles aan om LUPO juist en beschikbaar te houden, maar kunnen niet garanderen dat de dienst altijd zonder fouten werkt. We zijn niet aansprakelijk voor schade door het volgen of niet volgen van trainingsadvies, behalve bij opzet of grove fout. Wettelijke rechten van consumenten blijven onverkort gelden.</p>

        <h2>11. Stoppen</h2>
        <p>Je kan je account op elk moment verwijderen. Wij kunnen een account afsluiten bij ernstige of herhaalde inbreuk op deze voorwaarden, na een bericht vooraf behalve bij misbruik.</p>

        <h2>12. Recht en geschillen</h2>
        <p>Op deze voorwaarden is het Belgisch recht van toepassing. We zoeken eerst samen een oplossing via {B.mail}. Lukt dat niet, dan kan je terecht bij de Consumentenombudsdienst of de bevoegde rechtbank.</p>
      </div>
    </section>
  );
}

function TermsFR() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Conditions d’utilisation</div>
        <h1 style={{ margin: "16px 0 12px" }}>Conditions</h1>
        <p className="dim">Dernière mise à jour le {BIJGEWERKT.fr}.</p>
        <div className="concept">Projet. À faire vérifier juridiquement avant publication.</div>

        <h2>1. Parties</h2>
        <p>Ces conditions s’appliquent entre vous et {B.juridischeNaam}, {B.ondernemingsnummer}, {B.adres}, pour l’utilisation de l’application LUPO et du site {B.domein}.</p>

        <h2>2. Ce qu’est LUPO</h2>
        <p>LUPO donne des conseils d’entraînement sur la base de vos données d’entraînement et de récupération : une décision quotidienne, un plan vers votre course et des analyses de vos séances. <strong>LUPO ne donne pas de conseils médicaux</strong> et ne pose aucun diagnostic. En cas de douleur, de maladie, de blessure ou de doute sur votre santé, consultez un médecin. Vous vous entraînez sous votre propre responsabilité, et vous décidez de suivre ou non le conseil.</p>

        <h2>3. Votre compte</h2>
        <ul>
          <li>Vous devez avoir au moins 16 ans. Jusqu’à 18 ans, l’accord d’un parent ou tuteur est nécessaire.</li>
          <li>Vous fournissez des informations exactes et gardez votre mot de passe pour vous.</li>
          <li>Un compte est destiné à une seule personne.</li>
        </ul>

        <h2>4. Abonnements et paiement</h2>
        <ul>
          <li>Premium coûte 19 € par mois ou 169 € par an. Un bloc course coûte 49 € en une fois et court jusqu’à la date de cette course. Les prix s’entendent TVA comprise.</li>
          <li>Un abonnement mensuel est résiliable chaque mois et court jusqu’à la fin du mois payé.</li>
          <li>Nous ne renouvelons un abonnement annuel qu’après vous avoir prévenu, et vous pouvez ensuite le résilier chaque mois.</li>
          <li>Nous annonçons les changements de prix au moins 30 jours à l’avance. Vous pouvez résilier avant leur entrée en vigueur.</li>
        </ul>

        <h2>5. Droit de rétractation</h2>
        <p>En tant que consommateur, vous disposez de 14 jours pour renoncer à un achat sans motif. Si vous commencez expressément à utiliser le service pendant cette période, vous ne payez, en cas de rétractation, que la partie utilisée.</p>

        <h2>6. Tryouts DFRNT</h2>
        <p>La participation à un tryout est gratuite. Une invitation à un test physique n’est pas un droit et dépend des résultats de la vague. Le test physique fait l’objet de modalités distinctes, que nous vous communiquons à l’avance.</p>

        <h2>7. Connexions avec d’autres services</h2>
        <p>Si vous connectez un service comme Garmin, les conditions de ce service s’appliquent également. LUPO n’appartient à aucune marque de montres. Si une connexion disparaît suite à une décision de ce service, vous pouvez toujours importer vos données vous-même.</p>

        <h2>8. Vos données et contenus</h2>
        <p>Vos données restent les vôtres. Vous nous accordez uniquement le droit de les utiliser pour vous fournir le service. La manière dont nous le faisons figure dans la <Link className="acc" href={pad("fr", "/privacy")}>politique de confidentialité</Link>.</p>

        <h2>9. Ce qui est interdit</h2>
        <ul>
          <li>Utiliser le service pour quelqu’un d’autre sans son accord.</li>
          <li>Revendiquer des résultats qui ne sont pas les vôtres.</li>
          <li>Copier, décompiler ou extraire automatiquement le contenu de l’application.</li>
        </ul>

        <h2>10. Responsabilité</h2>
        <p>Nous faisons tout pour que LUPO reste exact et disponible, mais ne pouvons garantir que le service fonctionne toujours sans erreur. Nous ne sommes pas responsables des dommages liés au fait de suivre ou non un conseil d’entraînement, sauf en cas de dol ou de faute grave. Les droits légaux des consommateurs restent pleinement applicables.</p>

        <h2>11. Fin</h2>
        <p>Vous pouvez supprimer votre compte à tout moment. Nous pouvons clôturer un compte en cas de manquement grave ou répété à ces conditions, après un message préalable sauf en cas d’abus.</p>

        <h2>12. Droit applicable et litiges</h2>
        <p>Ces conditions sont régies par le droit belge. Nous cherchons d’abord une solution ensemble via {B.mail}. À défaut, vous pouvez vous adresser au Service de médiation pour le consommateur ou au tribunal compétent.</p>
      </div>
    </section>
  );
}

export function Terms({ taal }: { taal: Taal }) {
  if (taal === "nl") return <TermsNL />;
  if (taal === "fr") return <TermsFR />;
  return <TermsEN />;
}
