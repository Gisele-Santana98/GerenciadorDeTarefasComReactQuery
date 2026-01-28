import axios from 'axios';

// 1. Defini a base para não repetir código
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// 2. Função para buscar (GET)
export const fetchTasks = async () => {
  const response = await api.get('/todos');
  return response.data;
};

// 3. Função para criar (POST)
export const createTask = async (newTaskTitle) => {
  const response = await api.post('/todos', {
    title: newTaskTitle,
    completed: false,
    userId: 1 
  });
  return response.data;
};

// 4. Função para Deletar (Delete)
export const deleteTask = async (id) => {
  await api.delete(`/todos/${id}`);
  return id; // Retorna o id para saber o que foi deletado
};

export const toggleTaskStatus = async (task) => {
  const response = await api.patch(`/todos/${task.id}`, {
    completed: !task.completed // Inverte o status atual
  });
  return response.data;
};