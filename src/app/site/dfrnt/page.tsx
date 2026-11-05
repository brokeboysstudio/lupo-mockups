import Link from "next/link";
import type { Metadata } from "next";
import { pad } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "DFRNT tryouts" };

export default function Dfrnt() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap held">
          <div>
            <div className="lbl acc">DFRNT · tryouts van LUPO</div>
            <h1 style={{ margin: "16px 0 22px" }}>Toon wat je kan.</h1>
            <p className="lead">Twee keer per jaar opent LUPO een gratis tryout voor atleten tussen 15 en 25. Geen selectie op wie al snel is, wel op wie het meest vooruitgaat.</p>
            <Link href={pad("/prijzen#wachtlijst")} className="knop" style={{ marginTop: 24 }}>Meld je aan voor de volgende golf</Link>
          </div>
          <div className="telefoon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/t1.png" alt="DFRNT tryout in de app" />
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>Zo werkt een golf</h2>
          <div className="raster r4">
            {[
              ["01", "Nulmeting", "Een vast protocol: 3 km lopen, 20 minuten fietsen op vermogen of 400 m zwemmen."],
              ["02", "8 tot 12 weken", "Een schema in de app, gratis. Je traint zoals je wil, LUPO houdt bij wat je doet."],
              ["03", "Hertest", "Hetzelfde protocol. Wat telt is je vooruitgang tegenover je volume."],
              ["04", "Uitnodiging", "De beste 5% krijgt een uitnodiging voor een fysieke test, met hetzelfde materiaal voor iedereen."],
            ].map(([nr, t, p]) => (
              <div key={nr} className="kaart"><div className="nr">{nr}</div><h3>{t}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <h2 style={{ marginBottom: 20 }}>Eerlijk gemeten</h2>
            <ul className="lijst">
              <li>Iedereen hetzelfde protocol, op hetzelfde moment</li>
              <li>Vooruitgang telt, niet wie al het snelst was</li>
              <li>Weinig volume en veel vooruitgang valt op</li>
              <li>Twee categorieën: Talent (tot 23) en Open (23+)</li>
            </ul>
          </div>
          <div className="kaart">
            <h3>Onder 18</h3>
            <p>Meedoen kan vanaf 16 jaar, met toestemming van een ouder. Voor atleten onder 18 tellen HRV en slaap nooit mee in de score, en het profiel blijft privé.</p>
          </div>
        </div>
      </section>
    </>
  );
}
