import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TaskList } from './components/TaskList.jsx'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Gerenciador de Tarefas</h1>
        <TaskList />
      </div>
    </QueryClientProvider>
  )
}

export default App;