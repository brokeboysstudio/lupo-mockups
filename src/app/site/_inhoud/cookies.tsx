import { BIJGEWERKT, type Taal } from "../_ui/bedrijf";

export const TITEL_COOKIES: Record<Taal, string> = { en: "Cookies", nl: "Cookies", fr: "Cookies" };

function CookiesEN() {
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Cookies</div>
        <h1 style={{ margin: "16px 0 12px" }}>Cookies</h1>
        <p className="dim">Last updated on {BIJGEWERKT.en}.</p>
        <div className="concept">Draft. To be reviewed by a lawyer before publication.</div>
        <p>The website and the app only use cookies and local storage that are needed to work: your sign-in, your preferences and security. No consent is needed for that.</p>
        <p>We use no advertising cookies and no social network cookies. If we want to keep visitor statistics later, we will ask your consent first and update this page.</p>
        <table className="tab">
          <thead><tr><th>Name</th><th>What for</th><th>Duration</th></tr></thead>
          <tbody>
            <tr><td>session</td><td>Keeping you signed in</td><td>Until you sign out</td></tr>
            <tr><td>preferences</td><td>Remembering language and display</td><td>1 year</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CookiesNL() {
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Cookies</div>
        <h1 style={{ margin: "16px 0 12px" }}>Cookies</h1>
        <p className="dim">Laatst bijgewerkt op {BIJGEWERKT.nl}.</p>
        <div className="concept">Concept. Moet nog juridisch nagekeken worden voor publicatie.</div>
        <p>De website en de app gebruiken alleen cookies en lokale opslag die nodig zijn om te werken: je aanmelding, je voorkeuren en de beveiliging. Daarvoor is geen toestemming nodig.</p>
        <p>We gebruiken geen advertentiecookies en geen cookies van sociale netwerken. Willen we later bezoekersstatistieken bijhouden, dan vragen we eerst je toestemming en passen we deze pagina aan.</p>
        <table className="tab">
          <thead><tr><th>Naam</th><th>Waarvoor</th><th>Duur</th></tr></thead>
          <tbody>
            <tr><td>sessie</td><td>Je aangemeld houden</td><td>Tot je afmeldt</td></tr>
            <tr><td>voorkeuren</td><td>Taal en weergave onthouden</td><td>1 jaar</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CookiesFR() {
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Cookies</div>
        <h1 style={{ margin: "16px 0 12px" }}>Cookies</h1>
        <p className="dim">Dernière mise à jour le {BIJGEWERKT.fr}.</p>
        <div className="concept">Projet. À faire vérifier juridiquement avant publication.</div>
        <p>Le site et l’application n’utilisent que les cookies et le stockage local nécessaires à leur fonctionnement : votre connexion, vos préférences et la sécurité. Aucun consentement n’est requis pour cela.</p>
        <p>Nous n’utilisons ni cookies publicitaires ni cookies de réseaux sociaux. Si nous souhaitons plus tard mesurer l’audience, nous vous demanderons d’abord votre consentement et mettrons cette page à jour.</p>
        <table className="tab">
          <thead><tr><th>Nom</th><th>Pour quoi</th><th>Durée</th></tr></thead>
          <tbody>
            <tr><td>session</td><td>Vous garder connecté</td><td>Jusqu’à la déconnexion</td></tr>
            <tr><td>préférences</td><td>Mémoriser la langue et l’affichage</td><td>1 an</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Cookies({ taal }: { taal: Taal }) {
  if (taal === "nl") return <CookiesNL />;
  if (taal === "fr") return <CookiesFR />;
  return <CookiesEN />;
}
