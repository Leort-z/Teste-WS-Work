import axios from 'axios'
import { useQuery } from 'react-query'

import styles from './styles.module.scss'

function formatData(data) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  // Formatação do valor da tabela FIPE
  data.forEach((car) => {
    const num = car.valor_fipe
    if (num % 1 != 0) {
      car.valor_fipe = formatter.format(Number.parseInt(car.valor_fipe.toString().replace('.', '') + '00'))
    } else {
      car.valor_fipe = formatter.format(Number.parseInt(car.valor_fipe.toString().replace('.', '') + '000'))
    }
  })

  data.sort((firstElement, secondElement) => {
    const textA = firstElement.marca_nome
    const textB = secondElement.marca_nome
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
  return data
}

export default function Table() {
  let { isLoading, error, data } = useQuery(['carsData'], () => axios.get('http://demo0566678.mockable.io/test-ws-front'), { refetchOnWindowFocus: false })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occured: ' + error.message

  let carsData

  if (data) {
    carsData = formatData(data.data.cars)
  }

  return (
    <table id={styles.mainTable}>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Ano</th>
          <th>Cor</th>
          <th>Combustível</th>
          <th>Nº de portas</th>
          <th>Valor FIPE</th>
        </tr>
      </thead>
      <tbody>
        {carsData.map((car) => (
          <tr key={car.id}>
            <td>{car.nome_modelo}</td>
            <td>{car.marca_nome}</td>
            <td>{car.ano}</td>
            <td>{car.cor}</td>
            <td>{car.combustivel}</td>
            <td>{car.num_portas}</td>
            <td>{car.valor_fipe}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
