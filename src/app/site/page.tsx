import Link from "next/link";
import { pad } from "./_ui/bedrijf";

function Telefoon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="telefoon">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap held">
          <div>
            <div className="lbl acc">Trainingscoach voor triatlon, lopen en hybride</div>
            <h1 style={{ margin: "18px 0 22px" }}>Elke ochtend één beslissing. Met de reden erbij.</h1>
            <p className="lead">
              LUPO leest je herstel en je plan, en zegt wat je vandaag doet: voluit, afbouwen of rusten. Altijd met de
              reden erbij, zodat je weet waarom. Tot aan je startlijn.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Link href={pad("/prijzen#wachtlijst")} className="knop">Zet je op de wachtlijst</Link>
              <Link href={pad("/hoe-het-werkt")} className="knop lijn">Hoe het werkt</Link>
            </div>
            <p className="dim klein-tekst" style={{ marginTop: 18 }}>LUPO is in testfase met een kleine groep atleten.</p>
          </div>
          <Telefoon src="/site/d1.png" alt="LUPO op een ochtend: afbouwen, met de reden erbij" />
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <div className="lbl">Een ochtend met LUPO</div>
          <h2 style={{ margin: "12px 0 40px" }}>Drie stappen, elke dag dezelfde</h2>
          <div className="raster">
            <div className="kaart">
              <div className="nr">01</div>
              <h3>Je horloge levert de nacht</h3>
              <p>Hartslagvariabiliteit, slaap en rusthartslag komen binnen via je horloge. LUPO vergelijkt ze met je eigen gemiddelde, niet met dat van iemand anders.</p>
            </div>
            <div className="kaart">
              <div className="nr">02</div>
              <h3>Eén beslissing</h3>
              <p>Voluit, afbouwen of rusten. Vaste regels bepalen de beslissing, geen gok en geen stemming. Dezelfde situatie geeft altijd dezelfde uitkomst.</p>
            </div>
            <div className="kaart acc-rand">
              <div className="nr">03</div>
              <h3>De reden erbij</h3>
              <p>Bij elke beslissing staat waarom, in één zin. Afwijken kan altijd, en rust die LUPO oplegt telt mee als nagekomen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <div className="lbl">Na de training</div>
            <h2 style={{ margin: "12px 0 20px" }}>Zien wat je deed, en wat het verandert</h2>
            <p className="lead">Kaart, splits en grafiek van je sessie. Daarbovenop wat LUPO erin ziet: zoals gepland of niet, dezelfde sessie van zes weken geleden, en wat het schema ermee doet.</p>
            <div className="waarom">Zelfde sessie op 18 september: 4:26 bij hartslag 168. Nu 4:20 bij 165. Het schema zet de drempel vanaf volgende week op 4:16.</div>
          </div>
          <Telefoon src="/site/r2.png" alt="Analyse van een drempeltraining in LUPO" />
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo om">
          <div>
            <div className="lbl">Je seizoen</div>
            <h2 style={{ margin: "12px 0 20px" }}>Een plan dat naar je race toe leeft</h2>
            <p className="lead">Je kiest je race uit de wedstrijdkalender. LUPO bouwt de fases naar die datum: basis, opbouw, piek en taper. Mis je een dag of schuift je week, dan past het plan zich aan en zegt het wat er verandert.</p>
            <ul className="lijst" style={{ marginTop: 20 }}>
              <li>Week verplaatsen met een regelcontrole: nooit twee zware dagen na elkaar</li>
              <li>Taper naar je A-race, op basis van je eigen belasting</li>
              <li>Eén vraag na elke training: te licht, goed of te zwaar</li>
            </ul>
          </div>
          <Telefoon src="/site/p3.png" alt="Seizoensplan naar de A-race" />
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <div className="lbl">Voor wie</div>
          <h2 style={{ margin: "12px 0 40px" }}>Voor wie traint met een datum in de agenda</h2>
          <div className="raster r2">
            <div className="kaart">
              <h3 className="groot">Leeftijdsgroepers met een A-race</h3>
              <p style={{ marginTop: 10 }}>Je traint naast werk en gezin, je hebt een race gekozen en je wil er zeker van zijn dat elke sessie telt. LUPO geeft je elke ochtend die zekerheid, zonder dat je zelf grafieken moet lezen.</p>
            </div>
            <div className="kaart">
              <h3 className="groot">Talent tussen 15 en 25</h3>
              <p style={{ marginTop: 10 }}>Twee keer per jaar opent LUPO een gratis tryout: DFRNT. Een nulmeting, acht tot twaalf weken schema en een hertest. Wie het meest vooruitgaat met het minste volume, krijgt een uitnodiging voor een fysieke test.</p>
              <Link href={pad("/dfrnt")} className="acc" style={{ display: "inline-block", marginTop: 14 }}>Meer over DFRNT →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <div className="lbl">Je data</div>
            <h2 style={{ margin: "12px 0 20px" }}>Jouw data blijft van jou</h2>
            <ul className="lijst">
              <li>Gezondheidsgegevens zoals HRV en slaap worden alleen gebruikt voor jouw schema</li>
              <li>Nooit verkocht, nooit gedeeld met adverteerders</li>
              <li>Opgeslagen in de Europese Unie</li>
              <li>Ontkoppelen en alles verwijderen kan op elk moment</li>
              <li>Je profiel staat standaard op privé</li>
            </ul>
            <Link href={pad("/data")} className="knop lijn" style={{ marginTop: 24 }}>Welke data en waarom</Link>
          </div>
          <div className="kaart">
            <div className="lbl">Koppelingen</div>
            <table className="tab" style={{ marginTop: 12 }}>
              <tbody>
                <tr><td>Garmin</td><td>Activiteiten, slaap, HRV, rusthartslag</td><td><span className="tag">in aanvraag</span></td></tr>
                <tr><td>FIT-bestanden</td><td>Elke sessie van je horloge of fietscomputer</td><td><span className="tag acc">beschikbaar</span></td></tr>
                <tr><td>TrainingPeaks-export</td><td>Je historiek in één keer</td><td><span className="tag acc">beschikbaar</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap smal" style={{ textAlign: "center" }}>
          <h2>Tot aan je startlijn.</h2>
          <p className="lead" style={{ margin: "18px auto 28px" }}>Premium vanaf €19 per maand, of €49 voor één racedoel. De tryouts zijn gratis.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={pad("/prijzen")} className="knop">Bekijk de prijzen</Link>
            <Link href={pad("/prijzen#wachtlijst")} className="knop lijn">Wachtlijst</Link>
          </div>
        </div>
      </section>
    </>
  );
}
