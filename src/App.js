import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

import Header from './components/Header'
import Table from './components/Table'
import Form from './components/Form'
import Footer from './components/Footer'

import styles from './styles.module.scss'

const queryClient = new QueryClient()

export default function App() {
  const [showFormModal, setShowFormModal] = useState(false)

  function toggleForm() {
    setShowFormModal(!showFormModal)
  }

  return (
    <QueryClientProvider client={queryClient}>
      {showFormModal && <Form toggleForm={toggleForm} />}
      <Header />
      <div id={styles.container}>
        <button type='button' className={styles.button} onClick={toggleForm}>
          Adicionar veículo
        </button>
        <Table key={showFormModal} />
      </div>
      <Footer />
    </QueryClientProvider>
  )
}
