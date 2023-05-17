const HOLIDAYS = [
  {
    date: new Date("2023-01-01"),
    name: "Año Nuevo",
  },
  {
    date: new Date("2023-02-21"),
    name: "Carnaval",
  },
  {
    date: new Date("2023-02-22"),
    name: "Carnaval",
  },
  {
    date: new Date("2023-03-24"),
    name: "Día Nacional de la Memoria por la Verdad y la Justicia",
  },
  {
    date: new Date("2023-04-02"),
    name: "Domingo de Pascua",
  },
  {
    date: new Date("2023-05-01"),
    name: "Día del Trabajador",
  },
  {
    date: new Date("2023-05-25"),
    name: "Día de la Revolución de Mayo",
  },
  {
    date: new Date("2023-06-17"),
    name: "Paso a la Inmortalidad del Gral. Güemes",
  },
  {
    date: new Date("2023-06-20"),
    name: "Paso a la Inmortalidad del Gral. Manuel Belgrano",
  },
  {
    date: new Date("2023-07-09"),
    name: "Día de la Independencia",
  },
  {
    date: new Date("2023-08-21"),
    name: "Paso a la Inmortalidad del Gral. San Martín",
  },
  {
    date: new Date("2023-10-08"),
    name: "Día del Respeto a la Diversidad Cultural",
  },
  {
    date: new Date("2023-11-27"),
    name: "Día de la Soberanía Nacional",
  },
  {
    date: new Date("2023-12-08"),
    name: "Inmaculada Concepción de María",
  },
  {
    date: new Date("2023-12-25"),
    name: "Navidad",
  },
];


const today = new Date();
const nextHoliday = HOLIDAYS.find((holiday) => new Date(holiday.date) > today) || {
  ...HOLIDAYS[0],
  date: new Date(
    new Date(HOLIDAYS[0].date).getFullYear() + 1,
    new Date(HOLIDAYS[0].date).getMonth(),
    new Date(HOLIDAYS[0].date).getDate() + 1,
  ),
};


const msDiff = nextHoliday.date.getTime() - today.getTime();


const dayDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));


const relativeTimeFormat = new Intl.RelativeTimeFormat("es-AR", {numeric: "auto"});


function App() {
  return (
    <main>
      <h1>
        El próximo feriado ({nextHoliday.name}) es {relativeTimeFormat.format(dayDiff, "day")}
      </h1>
    </main>
  );
}


export default App;



