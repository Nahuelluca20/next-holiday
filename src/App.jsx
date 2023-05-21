import {Stack, Text} from "@chakra-ui/react";

import {HOLIDAYS} from "./data";
import {Card} from "./components/Card";

const today = new Date();
const nextHoliday = HOLIDAYS.filter((holiday) => holiday.date > today).sort(
  (a, b) => a.date - b.date,
)[0] || {
  ...HOLIDAYS[0],
  date: new Date(
    new Date(HOLIDAYS[0].date).getFullYear() + 1,
    new Date(HOLIDAYS[0].date).getMonth(),
    new Date(HOLIDAYS[0].date).getDate() + 1,
  ),
};
const msDiff = nextHoliday.date.getTime() - today.getTime();
const dayDiff = Math.ceil(msDiff / (1000 * 60 * 60 * 24)); // Utilizar Math.ceil para redondear hacia arriba

const relativeTimeFormat = new Intl.RelativeTimeFormat("es-AR", {numeric: "auto"});

function App() {
  return (
    <main>
      <Text fontSize={"2xl"}>
        El próximo feriado ({nextHoliday.name}) es {relativeTimeFormat.format(dayDiff, "days")}
      </Text>
      <Card />
    </main>
  );
}

export default App;
