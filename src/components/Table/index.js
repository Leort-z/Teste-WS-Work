import axios from 'axios'
import { useQuery } from 'react-query'

import styles from './styles.module.scss'

function formatData(data, isFromAPI) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  data.forEach((car) => {
    const num = car.valor_fipe
    if (isFromAPI) {
      if (num % 1 !== 0) {
        car.valor_fipe = formatter.format(Number.parseInt(car.valor_fipe.toString().replace('.', '') + '00'))
      } else {
        car.valor_fipe = formatter.format(Number.parseInt(car.valor_fipe.toString().replace('.', '') + '000'))
      }
    } else {
      car.valor_fipe = formatter.format(car.valor_fipe)
    }
  })

  return data
}

function groupByBrand(data) {
  const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key]
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {})

  const groupByBrand = groupBy('marca_nome')

  return groupByBrand(data)
}

export default function Table() {
  let carsData = []
  const persistedCars = JSON.parse(localStorage.getItem('persistedCars'))

  let { isLoading, error, data } = useQuery(['carsData'], () => axios.get('http://demo0566678.mockable.io/test-ws-front'), { refetchOnWindowFocus: false })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occured: ' + error.message

  if (data) {
    data = formatData(data.data.cars, true)
    console.log(data)
    if (persistedCars) {
      carsData = formatData(persistedCars.array, false)
      console.log(carsData)
      carsData = carsData.concat(data)
      console.log(carsData)
    }
    carsData = groupByBrand(carsData)
  }

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
                {value.map((car) => (
                  <tr key={car.id}>
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
}
