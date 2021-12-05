import { QueryClient, QueryClientProvider } from 'react-query'

import Table from './components/Table'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  )
}
