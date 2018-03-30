import React from 'react'

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

export default Kurssi
