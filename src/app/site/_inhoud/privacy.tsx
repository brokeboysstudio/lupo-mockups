import { BEDRIJF, BIJGEWERKT, type Taal } from "../_ui/bedrijf";

export const TITEL_PRIVACY: Record<Taal, string> = { en: "Privacy policy", nl: "Privacyverklaring", fr: "Politique de confidentialité" };

function PrivacyEN() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Privacy policy</div>
        <h1 style={{ margin: "16px 0 12px" }}>Privacy</h1>
        <p className="dim">Last updated on {BIJGEWERKT.en}.</p>
        <div className="concept">Draft. To be reviewed by a lawyer before publication.</div>

        <h2>1. Who we are</h2>
        <p>LUPO is a service of {B.juridischeNaam}, registered under {B.ondernemingsnummer}, with its registered office at {B.adres} (&quot;LUPO&quot;, &quot;we&quot;). We are the controller of the personal data we process through the app and the website. Send privacy questions to <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>.</p>

        <h2>2. Which data we process</h2>
        <ul>
          <li><strong>Account data:</strong> name, email address, year of birth, chosen race and training level.</li>
          <li><strong>Activity data:</strong> type, time, duration, distance, pace, heart rate, power, cadence, elevation and route of your sessions.</li>
          <li><strong>Health data:</strong> heart rate variability (HRV), sleep and resting heart rate. These are special categories of personal data under Article 9 GDPR.</li>
          <li><strong>Your answers:</strong> how a session felt, notes and voice notes you add yourself.</li>
          <li><strong>Payment data:</strong> processed by our payment provider. We do not see full card details.</li>
          <li><strong>Technical data:</strong> log data needed to run the service securely.</li>
        </ul>

        <h2>3. Where the data comes from</h2>
        <p>From you, and from the services you connect yourself. If you connect a Garmin account, we only receive, through the Garmin Connect API, the categories you consented to in the Garmin screen. You can also upload files (FIT, TrainingPeaks export) yourself.</p>

        <h2>4. Purposes and legal basis</h2>
        <table className="tab">
          <thead><tr><th>Purpose</th><th>Data</th><th>Legal basis</th></tr></thead>
          <tbody>
            <tr><td>Your account and your training plan</td><td>Account, activities</td><td>Performance of the contract (Art. 6(1)(b) GDPR)</td></tr>
            <tr><td>The morning decision</td><td>HRV, sleep, resting heart rate, activities</td><td>Your explicit consent (Art. 9(2)(a) GDPR)</td></tr>
            <tr><td>Analysis after the session</td><td>Activities, your answers</td><td>Performance of the contract</td></tr>
            <tr><td>Comparing with others (if you switch it on)</td><td>LUPO score, results, volume; never HRV or sleep</td><td>Your consent (Art. 6(1)(a) GDPR)</td></tr>
            <tr><td>Payment and accounting</td><td>Account, invoice data</td><td>Legal obligation (Art. 6(1)(c) GDPR)</td></tr>
            <tr><td>Security and debugging</td><td>Technical data</td><td>Legitimate interest (Art. 6(1)(f) GDPR)</td></tr>
            <tr><td>Waitlist</td><td>Email address</td><td>Your consent</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>You can withdraw your consent for health data at any time in the app. Without that data the morning decision does not work; the rest of the app does.</p>

        <h2>5. Garmin data</h2>
        <ul>
          <li>We only use data from Garmin to provide the service to you: your decision, your plan and your analyses.</li>
          <li>We do not sell it, do not share it with advertisers and do not use it for marketing.</li>
          <li>We do not show it to other users.</li>
          <li>We do not pass it to artificial intelligence services and do not use it to train models.</li>
          <li>If you disconnect Garmin, in the app or in Garmin Connect, the data flow stops immediately. We delete data from that connection within 30 days.</li>
        </ul>

        <h2>6. How decisions are made</h2>
        <p>The morning decision and the changes to your plan follow from fixed, predefined rules. There is no automated decision-making with legal effects within the meaning of Article 22 GDPR: it is training advice, and you decide. For the plain-language explanation and the coach conversation we use a language model from Anthropic. That model only receives the decision, your plan and your question, never your raw health or watch data, and Anthropic does not use that input to train models.</p>

        <h2>7. Who we share data with</h2>
        <p>Only with providers we need to run LUPO. We have a data processing agreement with each of them.</p>
        <table className="tab">
          <thead><tr><th>Provider</th><th>What for</th><th>Location</th></tr></thead>
          <tbody>
            <tr><td>Supabase</td><td>Database and accounts</td><td>EU (Frankfurt)</td></tr>
            <tr><td>Vercel</td><td>Hosting of app and website</td><td>EU (Frankfurt); managed from the US</td></tr>
            <tr><td>Anthropic</td><td>Plain-language explanation and coach conversation, without health data</td><td>US</td></tr>
            <tr><td>[TO FILL IN] payment provider</td><td>Payments</td><td>[TO FILL IN]</td></tr>
            <tr><td>[TO FILL IN] email service</td><td>Waitlist and account emails</td><td>[TO FILL IN]</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>For transfers outside the European Economic Area we rely on an adequacy decision (EU-US Data Privacy Framework) or on the standard contractual clauses of the European Commission.</p>

        <h2>8. How long we keep data</h2>
        <ul>
          <li>Account, activity and health data: as long as your account exists. If you delete your account, everything is gone within 30 days, and from backups within 90 days.</li>
          <li>Data from a connection you end: deleted within 30 days.</li>
          <li>Invoices: seven years, as the law requires.</li>
          <li>Waitlist: until you sign up or unsubscribe, for at most two years.</li>
        </ul>

        <h2>9. Minors</h2>
        <p>LUPO is available from age 16. Until 18 we ask for the consent of a parent or guardian. For athletes under 18, HRV and sleep never count towards the score, and their profile stays private.</p>

        <h2>10. Your rights</h2>
        <p>You have the right of access, rectification, erasure, restriction, portability and objection, and you can always withdraw your consent. Much of this can be done directly in the app. For the rest, email <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>; we reply within one month. If you are not satisfied, you can lodge a complaint with the Belgian Data Protection Authority, Rue de la Presse 35, 1000 Brussels, <a className="acc" href="https://www.dataprotectionauthority.be">dataprotectionauthority.be</a>.</p>

        <h2>11. Security</h2>
        <p>Data is encrypted in transit and at rest. Access is limited to those who need it for the service. In the event of a data breach that poses a risk to you, we notify you and the supervisory authority as the law requires.</p>

        <h2>12. Changes</h2>
        <p>If we change anything material, we let you know in the app and by email before it takes effect.</p>
      </div>
    </section>
  );
}

function PrivacyNL() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Privacyverklaring</div>
        <h1 style={{ margin: "16px 0 12px" }}>Privacy</h1>
        <p className="dim">Laatst bijgewerkt op {BIJGEWERKT.nl}.</p>
        <div className="concept">Concept. Moet nog juridisch nagekeken worden voor publicatie.</div>

        <h2>1. Wie we zijn</h2>
        <p>LUPO is een dienst van {B.juridischeNaam}, ingeschreven onder {B.ondernemingsnummer}, met zetel op {B.adres} (&quot;LUPO&quot;, &quot;wij&quot;). Wij zijn verwerkingsverantwoordelijke voor de persoonsgegevens die we via de app en de website verwerken. Vragen over privacy stuur je naar <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>.</p>

        <h2>2. Welke gegevens we verwerken</h2>
        <ul>
          <li><strong>Accountgegevens:</strong> naam, e-mailadres, geboortejaar, gekozen race en trainingsniveau.</li>
          <li><strong>Activiteitsgegevens:</strong> type, tijdstip, duur, afstand, tempo, hartslag, vermogen, cadans, hoogte en route van je trainingen.</li>
          <li><strong>Gezondheidsgegevens:</strong> hartslagvariabiliteit (HRV), slaap en rusthartslag. Dit zijn bijzondere categorieën van persoonsgegevens in de zin van artikel 9 AVG.</li>
          <li><strong>Je antwoorden:</strong> hoe een training voelde, notities en spraaknotities die je zelf toevoegt.</li>
          <li><strong>Betaalgegevens:</strong> verwerkt door onze betaalprovider. Wij zien geen volledige kaartgegevens.</li>
          <li><strong>Technische gegevens:</strong> loggegevens die nodig zijn om de dienst veilig te laten werken.</li>
        </ul>

        <h2>3. Waar de gegevens vandaan komen</h2>
        <p>Van jou, en van de diensten die je zelf koppelt. Koppel je een Garmin-account, dan ontvangen we via de Garmin Connect API alleen de categorieën waarvoor je toestemming gaf in het Garmin-scherm. Je kan ook bestanden (FIT, TrainingPeaks-export) zelf inladen.</p>

        <h2>4. Waarvoor en op welke grond</h2>
        <table className="tab">
          <thead><tr><th>Doel</th><th>Gegevens</th><th>Grondslag</th></tr></thead>
          <tbody>
            <tr><td>Je account en je trainingsplan</td><td>Account, activiteiten</td><td>Uitvoering van de overeenkomst (art. 6.1.b AVG)</td></tr>
            <tr><td>De ochtendbeslissing</td><td>HRV, slaap, rusthartslag, activiteiten</td><td>Je uitdrukkelijke toestemming (art. 9.2.a AVG)</td></tr>
            <tr><td>Analyse na de training</td><td>Activiteiten, je antwoorden</td><td>Uitvoering van de overeenkomst</td></tr>
            <tr><td>Vergelijken met anderen (als je het aanzet)</td><td>LUPO-score, uitslagen, volume; nooit HRV of slaap</td><td>Je toestemming (art. 6.1.a AVG)</td></tr>
            <tr><td>Betaling en boekhouding</td><td>Account, factuurgegevens</td><td>Wettelijke verplichting (art. 6.1.c AVG)</td></tr>
            <tr><td>Beveiliging en foutopsporing</td><td>Technische gegevens</td><td>Gerechtvaardigd belang (art. 6.1.f AVG)</td></tr>
            <tr><td>Wachtlijst</td><td>E-mailadres</td><td>Je toestemming</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>Je toestemming voor gezondheidsgegevens kan je op elk moment intrekken in de app. Zonder die gegevens werkt de ochtendbeslissing niet, de rest van de app wel.</p>

        <h2>5. Garmin-gegevens</h2>
        <ul>
          <li>We gebruiken gegevens uit Garmin alleen om jou de dienst te leveren: je beslissing, je plan en je analyses.</li>
          <li>We verkopen ze niet, delen ze niet met adverteerders en gebruiken ze niet voor marketing.</li>
          <li>We tonen ze niet aan andere gebruikers.</li>
          <li>We geven ze niet door aan diensten voor kunstmatige intelligentie en gebruiken ze niet om modellen te trainen.</li>
          <li>Koppel je Garmin los, in de app of in Garmin Connect, dan stopt de gegevensstroom meteen. Gegevens uit die koppeling verwijderen we binnen 30 dagen.</li>
        </ul>

        <h2>6. Hoe beslissingen tot stand komen</h2>
        <p>De ochtendbeslissing en de aanpassingen aan je plan volgen uit vaste, vooraf bepaalde regels. Er is geen geautomatiseerde besluitvorming met rechtsgevolgen in de zin van artikel 22 AVG: het is trainingsadvies, en jij beslist. Voor de uitleg in gewone taal en het coachgesprek gebruiken we een taalmodel van Anthropic. Dat model krijgt alleen de beslissing, je plan en je vraag, nooit je ruwe gezondheids- of horlogegegevens, en Anthropic gebruikt die invoer niet om modellen te trainen.</p>

        <h2>7. Met wie we gegevens delen</h2>
        <p>Alleen met dienstverleners die we nodig hebben om LUPO te laten werken. Met elk van hen hebben we een verwerkersovereenkomst.</p>
        <table className="tab">
          <thead><tr><th>Dienstverlener</th><th>Waarvoor</th><th>Locatie</th></tr></thead>
          <tbody>
            <tr><td>Supabase</td><td>Database en accounts</td><td>EU (Frankfurt)</td></tr>
            <tr><td>Vercel</td><td>Hosting van app en website</td><td>EU (Frankfurt); beheer vanuit de VS</td></tr>
            <tr><td>Anthropic</td><td>Uitleg in gewone taal en coachgesprek, zonder gezondheidsdata</td><td>VS</td></tr>
            <tr><td>[IN TE VULLEN] betaalprovider</td><td>Betalingen</td><td>[IN TE VULLEN]</td></tr>
            <tr><td>[IN TE VULLEN] e-maildienst</td><td>Wachtlijst en accountmails</td><td>[IN TE VULLEN]</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>Bij doorgifte buiten de Europese Economische Ruimte steunen we op een adequaatheidsbesluit (EU-US Data Privacy Framework) of op de standaardcontractbepalingen van de Europese Commissie.</p>

        <h2>8. Hoe lang we gegevens bewaren</h2>
        <ul>
          <li>Account-, activiteits- en gezondheidsgegevens: zolang je account bestaat. Verwijder je je account, dan is alles binnen 30 dagen weg, ook uit back-ups binnen 90 dagen.</li>
          <li>Gegevens uit een koppeling die je verbreekt: binnen 30 dagen verwijderd.</li>
          <li>Facturen: zeven jaar, zoals de wet vraagt.</li>
          <li>Wachtlijst: tot je inschrijft of je afmeldt, maximaal twee jaar.</li>
        </ul>

        <h2>9. Minderjarigen</h2>
        <p>LUPO is er vanaf 16 jaar. Tot 18 jaar vragen we de toestemming van een ouder of voogd. Voor atleten onder 18 tellen HRV en slaap nooit mee in de score, en hun profiel blijft privé.</p>

        <h2>10. Je rechten</h2>
        <p>Je hebt recht op inzage, verbetering, verwijdering, beperking, overdraagbaarheid en bezwaar, en je kan je toestemming altijd intrekken. Veel daarvan kan rechtstreeks in de app. Voor de rest mail je naar <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>; we antwoorden binnen een maand. Ben je niet tevreden, dan kan je klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel, <a className="acc" href="https://www.gegevensbeschermingsautoriteit.be">gegevensbeschermingsautoriteit.be</a>.</p>

        <h2>11. Beveiliging</h2>
        <p>Gegevens zijn versleuteld tijdens transport en in opslag. Toegang is beperkt tot wie ze nodig heeft voor de dienst. Bij een datalek dat risico voor je inhoudt, verwittigen we je en de toezichthouder zoals de wet vraagt.</p>

        <h2>12. Wijzigingen</h2>
        <p>Veranderen we iets wezenlijks, dan laten we het je weten in de app en per mail voor het ingaat.</p>
      </div>
    </section>
  );
}

function PrivacyFR() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Politique de confidentialité</div>
        <h1 style={{ margin: "16px 0 12px" }}>Confidentialité</h1>
        <p className="dim">Dernière mise à jour le {BIJGEWERKT.fr}.</p>
        <div className="concept">Projet. À faire vérifier juridiquement avant publication.</div>

        <h2>1. Qui nous sommes</h2>
        <p>LUPO est un service de {B.juridischeNaam}, inscrite sous le numéro {B.ondernemingsnummer}, dont le siège est situé {B.adres} (« LUPO », « nous »). Nous sommes responsables du traitement des données personnelles que nous traitons via l’application et le site. Envoyez vos questions sur la confidentialité à <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>.</p>

        <h2>2. Quelles données nous traitons</h2>
        <ul>
          <li><strong>Données de compte :</strong> nom, adresse e-mail, année de naissance, course choisie et niveau d’entraînement.</li>
          <li><strong>Données d’activité :</strong> type, moment, durée, distance, allure, fréquence cardiaque, puissance, cadence, dénivelé et parcours de vos séances.</li>
          <li><strong>Données de santé :</strong> variabilité de la fréquence cardiaque (VFC), sommeil et fréquence cardiaque au repos. Ce sont des catégories particulières de données personnelles au sens de l’article 9 du RGPD.</li>
          <li><strong>Vos réponses :</strong> votre ressenti après une séance, les notes et notes vocales que vous ajoutez vous-même.</li>
          <li><strong>Données de paiement :</strong> traitées par notre prestataire de paiement. Nous ne voyons pas les données complètes de votre carte.</li>
          <li><strong>Données techniques :</strong> journaux nécessaires au fonctionnement sécurisé du service.</li>
        </ul>

        <h2>3. D’où viennent les données</h2>
        <p>De vous, et des services que vous connectez vous-même. Si vous connectez un compte Garmin, nous ne recevons via l’API Garmin Connect que les catégories auxquelles vous avez consenti dans l’écran Garmin. Vous pouvez aussi importer vous-même des fichiers (FIT, export TrainingPeaks).</p>

        <h2>4. Finalités et bases juridiques</h2>
        <table className="tab">
          <thead><tr><th>Finalité</th><th>Données</th><th>Base juridique</th></tr></thead>
          <tbody>
            <tr><td>Votre compte et votre plan d’entraînement</td><td>Compte, activités</td><td>Exécution du contrat (art. 6.1.b RGPD)</td></tr>
            <tr><td>La décision du matin</td><td>VFC, sommeil, fréquence cardiaque au repos, activités</td><td>Votre consentement explicite (art. 9.2.a RGPD)</td></tr>
            <tr><td>Analyse après la séance</td><td>Activités, vos réponses</td><td>Exécution du contrat</td></tr>
            <tr><td>Comparaison avec d’autres (si vous l’activez)</td><td>Score LUPO, résultats, volume ; jamais VFC ni sommeil</td><td>Votre consentement (art. 6.1.a RGPD)</td></tr>
            <tr><td>Paiement et comptabilité</td><td>Compte, données de facturation</td><td>Obligation légale (art. 6.1.c RGPD)</td></tr>
            <tr><td>Sécurité et correction d’erreurs</td><td>Données techniques</td><td>Intérêt légitime (art. 6.1.f RGPD)</td></tr>
            <tr><td>Liste d’attente</td><td>Adresse e-mail</td><td>Votre consentement</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>Vous pouvez retirer à tout moment votre consentement pour les données de santé dans l’application. Sans ces données, la décision du matin ne fonctionne pas ; le reste de l’application, si.</p>

        <h2>5. Données Garmin</h2>
        <ul>
          <li>Nous utilisons les données Garmin uniquement pour vous fournir le service : votre décision, votre plan et vos analyses.</li>
          <li>Nous ne les vendons pas, ne les partageons pas avec des annonceurs et ne les utilisons pas à des fins de marketing.</li>
          <li>Nous ne les montrons pas aux autres utilisateurs.</li>
          <li>Nous ne les transmettons pas à des services d’intelligence artificielle et ne les utilisons pas pour entraîner des modèles.</li>
          <li>Si vous déconnectez Garmin, dans l’application ou dans Garmin Connect, le flux de données s’arrête immédiatement. Nous supprimons les données de cette connexion sous 30 jours.</li>
        </ul>

        <h2>6. Comment les décisions sont prises</h2>
        <p>La décision du matin et les ajustements de votre plan découlent de règles fixes, définies à l’avance. Il n’y a pas de décision automatisée produisant des effets juridiques au sens de l’article 22 du RGPD : il s’agit de conseils d’entraînement, et c’est vous qui décidez. Pour l’explication en langage courant et l’échange avec le coach, nous utilisons un modèle de langage d’Anthropic. Ce modèle ne reçoit que la décision, votre plan et votre question, jamais vos données brutes de santé ou de montre, et Anthropic n’utilise pas ces données pour entraîner des modèles.</p>

        <h2>7. Avec qui nous partageons des données</h2>
        <p>Uniquement avec les prestataires nécessaires au fonctionnement de LUPO. Nous avons conclu un accord de sous-traitance avec chacun d’eux.</p>
        <table className="tab">
          <thead><tr><th>Prestataire</th><th>Pour quoi</th><th>Localisation</th></tr></thead>
          <tbody>
            <tr><td>Supabase</td><td>Base de données et comptes</td><td>UE (Francfort)</td></tr>
            <tr><td>Vercel</td><td>Hébergement de l’application et du site</td><td>UE (Francfort) ; gestion depuis les États-Unis</td></tr>
            <tr><td>Anthropic</td><td>Explication en langage courant et échange avec le coach, sans données de santé</td><td>États-Unis</td></tr>
            <tr><td>[À COMPLÉTER] prestataire de paiement</td><td>Paiements</td><td>[À COMPLÉTER]</td></tr>
            <tr><td>[À COMPLÉTER] service d’e-mail</td><td>Liste d’attente et e-mails de compte</td><td>[À COMPLÉTER]</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>Pour les transferts hors de l’Espace économique européen, nous nous appuyons sur une décision d’adéquation (EU-US Data Privacy Framework) ou sur les clauses contractuelles types de la Commission européenne.</p>

        <h2>8. Durée de conservation</h2>
        <ul>
          <li>Données de compte, d’activité et de santé : tant que votre compte existe. Si vous supprimez votre compte, tout disparaît sous 30 jours, et des sauvegardes sous 90 jours.</li>
          <li>Données d’une connexion que vous rompez : supprimées sous 30 jours.</li>
          <li>Factures : sept ans, comme l’exige la loi.</li>
          <li>Liste d’attente : jusqu’à votre inscription ou désinscription, deux ans au maximum.</li>
        </ul>

        <h2>9. Mineurs</h2>
        <p>LUPO est accessible dès 16 ans. Jusqu’à 18 ans, nous demandons l’accord d’un parent ou tuteur. Pour les athlètes de moins de 18 ans, la VFC et le sommeil ne comptent jamais dans le score, et leur profil reste privé.</p>

        <h2>10. Vos droits</h2>
        <p>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition, et vous pouvez toujours retirer votre consentement. Une grande partie se fait directement dans l’application. Pour le reste, écrivez à <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a> ; nous répondons dans un délai d’un mois. Si vous n’êtes pas satisfait, vous pouvez introduire une plainte auprès de l’Autorité de protection des données, rue de la Presse 35, 1000 Bruxelles, <a className="acc" href="https://www.autoriteprotectiondonnees.be">autoriteprotectiondonnees.be</a>.</p>

        <h2>11. Sécurité</h2>
        <p>Les données sont chiffrées pendant le transport et au repos. L’accès est limité aux personnes qui en ont besoin pour le service. En cas de fuite de données présentant un risque pour vous, nous vous informons, ainsi que l’autorité de contrôle, comme l’exige la loi.</p>

        <h2>12. Modifications</h2>
        <p>Si nous modifions quelque chose d’important, nous vous prévenons dans l’application et par e-mail avant l’entrée en vigueur.</p>
      </div>
    </section>
  );
}

export function Privacy({ taal }: { taal: Taal }) {
  if (taal === "nl") return <PrivacyNL />;
  if (taal === "fr") return <PrivacyFR />;
  return <PrivacyEN />;
}
