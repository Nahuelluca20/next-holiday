import { chromium } from 'playwright';
export async function scrapeHolidays() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.argentina.gob.ar/interior/feriados-nacionales-2023");

  const monthContainers = await page.$$('div.month');
  const holidayContainers = await page.$$('div.holidays.js-holidays.list-unstyled');

  const HOLIDAYS = [];

  for (let i = 0; i < monthContainers.length; i++) {
    const monthContainer = monthContainers[i];
    const monthName = await monthContainer.$eval('h2', (h2) => h2.textContent.trim());

    const holidayContainer = holidayContainers[i];
    if (holidayContainer) {
      const holidayParagraphs = await holidayContainer.$$('p');
      for (let j = 0; j < holidayParagraphs.length; j++) {
        const holidayParagraph = holidayParagraphs[j];
        const holidayText = await holidayParagraph.textContent();
        const holidayLines = holidayText.split('\n');

        for (let k = 0; k < holidayLines.length; k++) {
          const line = holidayLines[k];
          const match = line.match(/(\d+(?:, \d+)?)(?:\.|\s)(.+)/);

          if (match) {
            const days = match[1].split(', ').map(d => parseInt(d));
            const name = match[2];

            for (let day of days) {
              const holidayDate = new Date(`2023-${i + 1}-${day}`);
              HOLIDAYS.push({
                month: monthName,
                date: holidayDate,
                name: name,
              });
            }
          }
        }
      }
    } else {
      console.log("No hay festividades para este mes.");
    }
  }

  await browser.close();

  return HOLIDAYS;
}