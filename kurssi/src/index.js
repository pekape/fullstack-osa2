import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({nimi}) => <h2>{nimi}</h2>

const Osa = ({osa}) => <p>{osa.nimi} {osa.tehtavia}</p>

const Sisalto = ({osat}) => {
  const osaKomponentit =
    osat.map(osa => <Osa key={osa.id} osa={osa} />)

  return (
    <div>
      {osaKomponentit}
    </div>
  )
}

const Yhteensa = ({osat}) => {
  const tehtaviaYht =
    osat.map(osa => osa.tehtavia)
        .reduce((summa, n) => summa + n)

  return (
    <p>
      yhteensä {tehtaviaYht} tehtävää
    </p>
  )
}

const Kurssi = ({kurssi}) => (
  <div>
    <Otsikko nimi={kurssi.nimi} />
    <Sisalto osat={kurssi.osat} />
    <Yhteensa osat={kurssi.osat} />
  </div>
)

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  const kurssiKomponentit =
    kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)

  return (
    <div>
      <h1>Opetusohjelma</h1>
      {kurssiKomponentit}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
