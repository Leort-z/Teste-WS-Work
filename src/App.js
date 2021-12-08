import { QueryClient, QueryClientProvider } from 'react-query'

import Table from './components/Table'
import Form from './components/Form'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
      <Form />
    </QueryClientProvider>
  )
}
