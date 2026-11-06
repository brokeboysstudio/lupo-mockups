# Garmin Connect Developer Program: aanvraag (Starter)

Stand 5 november 2026. Het programma is op 21 oktober heropend. Starter is voor bedrijven, gratis (bronnen spreken van ongeveer 1.000 gebruikers) en push-only, zonder historiek van voor de koppeling. Na goedkeuring volgt toegang tot het Developer Portal en een evaluatieomgeving.

Bronnen:
- [Sahha, "Garmin API Access in 2026"](https://sahha.ai/blog/garmin-connect-api-reopened-fees/)
- [Garmin Rumors over de tiers](https://garminrumors.com/garmin-connect-developer-program-personal-starter-enterprise/)

## Eerst rond voor we indienen

| Wat | Status |
|---|---|
| Juridische naam, ondernemingsnummer en adres | Jan levert aan |
| Website live op lupo.coach (home, product, contact, privacy, voorwaarden) | Klaar als concept in `/site` |
| Privacyverklaring en voorwaarden juridisch nagekeken | Open |
| Mailadressen hallo@, support@ en privacy@lupo.coach werken | Open |
| De app stuurt geen HRV of slaap meer naar het taalmodel | Klaar in Lupo PR #5, nog te mergen |

**Opgelost.** `src/app/api/coach/daily/route.ts` in de Lupo-repo krijgt nu alleen de beslissing, de fase, de race en de training. De server gooit elk ander veld weg. De coachchat neemt geen reden met meetwaarden meer mee.

## Antwoorden voor het formulier (concept)

**Bedrijf.** Vul in uit `src/app/site/_ui/bedrijf.ts`:
- Website: https://lupo.coach
- Privacy: https://lupo.coach/privacy

**Primary business service / industry.** Consumentensoftware voor sporttraining (triatlon, lopen, fietsen) in België en Nederland.

**App overview.** LUPO is een mobiele webapp die elke ochtend één trainingsbeslissing geeft (voluit, afbouwen of rusten) met de reden erbij, en het plan naar de race van de atleet aanpast. Vaste, deterministische regels nemen de beslissing. Daarvoor vergelijkt LUPO HRV, slaap, rusthartslag en recente belasting met de eigen normale band van de atleet.

**User experience.** De atleet kiest een race, krijgt meteen een eerste week en koppelt dan Garmin.
- Elke ochtend opent de app op de beslissing van de dag, met één zin uitleg.
- Na elke activiteit volgt een analyse: gepland tegenover gedaan, splits en zones, en dezelfde sessie van vroeger.
- Garmin-data wordt alleen aan de atleet zelf getoond.

**API usage.**
- Activity API: afgewerkte activiteiten voor het logboek en de belasting.
- Health API: dagelijkse samenvattingen, slaap, HRV en rusthartslag voor de ochtendbeslissing.
- Later eventueel de Training API, om geplande workouts naar het toestel te sturen.

**Business model.** Abonnement:
- €19 per maand of €169 per jaar;
- €49 eenmalig per racedoel;
- gratis tryout-golven voor atleten van 15 tot 25 jaar.

Geen advertenties en geen verkoop van data.

**Third-party processing.**
- Supabase: database, EU Frankfurt.
- Vercel: hosting.
- Anthropic: alleen de tekst van de uitleg. Het model krijgt de beslissing en het plan, nooit Garmin-data.

Garmin-data wordt niet gebruikt om modellen te trainen.

**Expected users, next 12 months.** 100 tot 1.000.

**Prior contact with Garmin.** Nee.

## Intussen voor Jan zelf

Met de gratis Personal-key, aan te maken in de webversie van Garmin Connect, kan je je eigen data ophalen voor atleet nul. Die key is niet bedoeld voor andere gebruikers.
