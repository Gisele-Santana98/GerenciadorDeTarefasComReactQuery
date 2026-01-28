import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, createTask, deleteTask, toggleTaskStatus } from '../services/Api';
import './TaskList.css';

export function TaskList() {
  const [taskTitle, setTaskTitle] = useState('');
  const queryClient = useQueryClient();

  // 1. Hook de Busca (GET)
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  // 2. Hook de Criação (POST)
  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      setTaskTitle('');
      alert('Tarefa criada!');
    },
  });

  // 3. Hook de Exclusão (DELETE)
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      alert('Tarefa excluída!');
    },
  });

  // 4. Hook de Atualização (PATCH)
  const toggleMutation = useMutation({
    mutationFn: toggleTaskStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    mutation.mutate(taskTitle);
  };

  if (isLoading) return <div className="loading">Carregando tarefas...</div>;
  if (isError) return <div className="error">Erro ao carregar dados.</div>;

  return (
    <div className="container">
      <h1>Minhas Tarefas</h1>

      <form onSubmit={handleSubmit} className="form-tarefa">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="O que precisa ser feito?"
          disabled={mutation.isPending}
        />
        <button type="submit" className="btn-add" disabled={mutation.isPending}>
          {mutation.isPending ? '...' : 'Adicionar'}
        </button>
      </form>

      <ul>
        {tasks?.map((task) => (
          <li key={task.id} className="tarefa-item">
            <span 
              onClick={() => toggleMutation.mutate(task)}
              className={`tarefa-texto ${task.completed ? 'concluida' : ''}`}
            >
              {task.title} {task.completed ? '✅' : '❌'}
            </span>

            <div className="botoes-acao">
              <button 
                onClick={() => toggleMutation.mutate(task)}
                className="btn-toggle"
                disabled={toggleMutation.isPending}
              >
                {task.completed ? '↩️' : '✔️'}
              </button>

              <button 
                onClick={() => deleteMutation.mutate(task.id)}
                className="btn-delete"
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? '...' : '🗑️'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}