const HOLIDAYS = [
  {
    month: 'Enero',
    date: new Date('2023-01-01T03:00:00.000Z'),
    name: 'Año Nuevo'
  },
  {
    month: 'Febrero',
    date: new Date('2023-02-20T03:00:00.000Z'),
    name: 'Carnaval'
  },
  {
    month: 'Febrero',
    date: new Date('2023-02-21T03:00:00.000Z'),
    name: 'Carnaval'
  },
  {
    month: 'Marzo',
    date: new Date('2023-03-24T03:00:00.000Z'),
    name: 'Día Nacional de la Memoria por la Verdad y la Justicia'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-02T03:00:00.000Z'),
    name: 'Día del Veterano y de los Caídos en la Guerra de Malvinas'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-06T03:00:00.000Z'),
    name: 'Jueves Santo Festividad Cristiana'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-07T03:00:00.000Z'),
    name: 'Viernes Santo Festividad Cristiana'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-06T03:00:00.000Z'),
    name: 'Primeros dos días de la Pascua Judía (b)'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-07T03:00:00.000Z'),
    name: 'Primeros dos días de la Pascua Judía (b)'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-12T03:00:00.000Z'),
    name: 'Últimos dos días de la Pascua Judía (b)'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-13T03:00:00.000Z'),
    name: 'Últimos dos días de la Pascua Judía (b)'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-21T03:00:00.000Z'),
    name: 'Fiesta de la Ruptura del Ayuno del Sagrado Mes de Ramadán (Id al-Fitr) (c)'
  },
  {
    month: 'Abril',
    date: new Date('2023-04-24T03:00:00.000Z'),
    name: 'Día de acción por la tolerancia y el respeto entre los pueblos (a)'
  },
  {
    month: 'Mayo',
    date: new Date('2023-05-01T03:00:00.000Z'),
    name: 'Día del Trabajador'
  },
  {
    month: 'Mayo',
    date: new Date('2023-05-25T03:00:00.000Z'),
    name: 'Día de la Revolución de Mayo'
  },
  {
    month: 'Mayo',
    date: new Date('2023-05-26T03:00:00.000Z'),
    name: 'Feriado con fines turísticos'
  },
  {
    month: 'Junio',
    date: new Date('2023-06-17T03:00:00.000Z'),
    name: 'Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes'
  },
  {
    month: 'Junio',
    date: new Date('2023-06-20T03:00:00.000Z'),
    name: 'Paso a la Inmortalidad del Gral. Manuel Belgrano'
  },
  {
    month: 'Junio',
    date: new Date('2023-06-19T03:00:00.000Z'),
    name: 'Feriado con fines turísticos'
  },
  {
    month: 'Junio',
    date: new Date('2023-06-28T03:00:00.000Z'),
    name: 'Fiesta del Sacrificio (c)'
  },
  {
    month: 'Julio',
    date: new Date('2023-07-09T03:00:00.000Z'),
    name: 'Día de la Independencia'
  },
  {
    month: 'Julio',
    date: new Date('2023-07-19T03:00:00.000Z'),
    name: 'Año Nuevo Islámico (c)'
  },
  {
    month: 'Agosto',
    date: new Date('2023-08-21T03:00:00.000Z'),
    name: 'Paso a la Inmortalidad del Gral. José de San Martín (17/8)'
  },
  {
    month: 'Septiembre',
    date: new Date('2023-09-16T03:00:00.000Z'),
    name: 'Año Nuevo Judío (b)'
  },
  {
    month: 'Septiembre',
    date: new Date('2023-09-17T03:00:00.000Z'),
    name: 'Año Nuevo Judío (b)'
  },
  {
    month: 'Septiembre',
    date: new Date('2023-09-25T03:00:00.000Z'),
    name: 'Día del Perdón (b)'
  },
  {
    month: 'Octubre',
    date: new Date('2023-10-13T00:00:00.000Z'),
    name: 'Feriado con fines turísticos'
  },
  {
    month: 'Octubre',
    date: new Date('2023-10-16T00:00:00.000Z'),
    name: 'Día del Respeto a la Diversidad Cultural (12/10)'
  },
  {
    month: 'Noviembre',
    date: new Date('2023-11-20T00:00:00.000Z'),
    name: 'Día de la Soberanía Nacional'
  },
  {
    month: 'Diciembre',
    date: new Date('2023-12-08T03:00:00.000Z'),
    name: 'Inmaculada Concepción de María'
  },
  {
    month: 'Diciembre',
    date: new Date('2023-12-25T00:00:00.000Z'),
    name: 'Navidad'
  }
]


const today = new Date();
const nextHoliday = HOLIDAYS
  .filter(holiday => holiday.date > today) 
  .sort((a, b) => a.date - b.date)[0] || {
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
      <h1>
        El próximo feriado ({nextHoliday.name}) es {relativeTimeFormat.format(dayDiff, "days")}
      </h1>
    </main>
  );
}


export default App;



