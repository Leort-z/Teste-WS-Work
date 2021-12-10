export function formatData(data, isFromAPI) {
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

export function groupByBrand(data) {
  const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key].toUpperCase()
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {})

  const groupByBrand = groupBy('marca_nome')

  return groupByBrand(data)
}
