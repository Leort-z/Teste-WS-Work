import { useState } from 'react'

import styles from './styles.module.scss'

export default function Form({ toggleForm }) {
  const [newCar, setNewCar] = useState()

  function updateLocalStorage() {
    const persistedCars = JSON.parse(localStorage.getItem('persistedCars'))
    if (persistedCars) {
      persistedCars.array.push(newCar)
      localStorage.setItem('persistedCars', JSON.stringify(persistedCars))
    } else {
      localStorage.setItem('persistedCars', JSON.stringify({ array: [newCar] }))
    }
  }

  function handleChange(event) {
    setNewCar({
      ...newCar,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    updateLocalStorage()
    toggleForm()
  }

  return (
    <div id={styles.modalBackground}>
      <div id={styles.modal}>
        <h2>Adicionar veículo</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Preencha os campos abaixo para adicionar um veículo</legend>
            <label>
              Modelo
              <input type='text' name='nome_modelo' placeholder='Focus' required onChange={handleChange}></input>
            </label>
            <label>
              Marca
              <input type='text' name='marca_nome' placeholder='Ford' required onChange={handleChange}></input>
            </label>
            <label>
              Ano
              <input type='text' name='ano' placeholder='2021' required onChange={handleChange}></input>
            </label>
            <label>
              Cor
              <input type='text' name='cor' placeholder='Preto' required onChange={handleChange}></input>
            </label>
            <label>
              Combustível
              <input type='text' name='combustivel' placeholder='Gasolina' required onChange={handleChange}></input>
            </label>
            <label>
              Nº de portas
              <input type='text' name='num_portas' placeholder='4' required onChange={handleChange}></input>
            </label>
            <label>
              Valor FIPE
              <input type='text' name='valor_fipe' placeholder='85000' required onChange={handleChange}></input>
            </label>

            <div id={styles.buttonsContainer}>
              <button type='reset' onClick={toggleForm} className={styles.button}>
                Cancelar
              </button>
              <button type='submit' className={styles.button}>
                Adicionar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
