import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({nimi}) => <h1>{nimi}</h1>

const Osa = ({osa}) => <p>{osa.nimi} {osa.tehtavia}</p>

const Sisalto = ({osat}) => (
  <div>
    {osat.map(osa => <Osa key={osa.nimi} osa={osa} />)}
  </div>
)

const Kurssi = ({kurssi}) => (
  <div>
    <Otsikko nimi={kurssi.nimi} />
    <Sisalto osat={kurssi.osat} />
  </div>
)

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)