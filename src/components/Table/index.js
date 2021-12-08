import axios from 'axios'
import { useQuery } from 'react-query'

import { formatData, groupByBrand } from '../../utils/utils'

import styles from './styles.module.scss'

function getData(data) {
  let carsData = []
  let persistedCars = JSON.parse(localStorage.getItem('persistedCars'))

  if (persistedCars && data) {
    persistedCars = formatData(persistedCars.array, false)
    data = formatData(data.data.cars, true)

    carsData = persistedCars.concat(data)
    carsData = groupByBrand(carsData)
  } else if (persistedCars && !data) {
    persistedCars = formatData(persistedCars.array, false)

    carsData = groupByBrand(persistedCars)
  } else if (!persistedCars && data) {
    data = formatData(data.data.cars, true)

    carsData = groupByBrand(data)
  } else {
    return null
  }

  return carsData
}

export default function Table() {
  let { data } = useQuery(['carsData'], () => axios.get('http://demo0566678.mockable.io/test-ws-front'), { refetchOnWindowFocus: false })

  const carsData = getData(data)

  if (carsData) {
    return (
      <main>
        {Object.entries(carsData).map(([key, value], index) => {
          return (
            <div key={index}>
              <h3>{key}</h3>
              <table id={styles.mainTable}>
                <thead>
                  <tr>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Cor</th>
                    <th>Combustível</th>
                    <th>Nº de portas</th>
                    <th>Valor FIPE</th>
                  </tr>
                </thead>
                <tbody>
                  {value.map((car, index) => (
                    <tr key={index}>
                      <td>{car.nome_modelo}</td>
                      <td>{car.ano}</td>
                      <td>{car.cor}</td>
                      <td>{car.combustivel}</td>
                      <td>{car.num_portas}</td>
                      <td>{car.valor_fipe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        })}
      </main>
    )
  } else {
    return <h2>Sem dados no momento, adicione um veículo ou tente novamente mais tarde</h2>
  }
}
