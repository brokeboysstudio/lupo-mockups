# LUPO · het verhaal

Gameplan, financieel plan, doorklikbare renders en de website van LUPO, op één plek. De echte app staat in de repo `Lupo` (live op lupo.coach). Het verhaal mag vooruitlopen op de app; wat gebouwd is, verwijst naar de echte app.

Alles hier gebruikt voorbeelddata. Nooit echte gezondheidsdata of klantgegevens in een mockup.

## Inhoud

| Pad | Wat |
| --- | --- |
| `/` | Start: waar we staan, kerncijfers, links naar alles |
| `/verloop` | Tijdlijn van mei 2026 tot vandaag, en wat volgt |
| `/business` | Positionering, model en prijzen, DFRNT, gameplan, funding, oprichting |
| `/financieel` | Vier scenario's, kost per klant, kostenbeslissingen, Excel om te downloaden |
| `/mockups` | Overzicht van de doorklikbare renders |
| `/mockups/app/` | 61 schermen: app, webversie, workout uitvoeren, racedag |
| `/site` | Website voor lupo.coach in het Engels (`/site`), Nederlands (`/site/nl`) en Frans (`/site/fr`) |
| `/documenten` | Links naar de analyses in Notion en de bestanden in deze repo |

## Login

`src/proxy.ts` zet de hele site achter een login (HTTP Basic Auth). Stel in Vercel > Settings > Environment Variables `MOCKUP_USER` en `MOCKUP_PASSWORD` in. Zonder die twee blijft de site dicht.

## Bijwerken

- **App-schermen:** `python3 scripts/genereer-app-mockups.py` schrijft `public/mockups/app/`.
- **Financieel plan:** vervang `public/financieel/LUPO-financieel-plan.xlsx` en werk de tabellen in `src/app/financieel/page.tsx` bij.
- **Nieuwe stap:** voeg ze toe in `src/app/verloop/page.tsx` en zet de datum in `src/app/_verhaal/kop.tsx` (`BIJGEWERKT`).
- **Website naar lupo.coach:** zet `BASIS` op `""` in `src/app/site/_ui/bedrijf.ts` en kopieer de map naar de Lupo-repo.

Commit en push naar `main`; Vercel zet het meteen online.
