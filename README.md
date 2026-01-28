## 📝 Gerenciador de Tarefas - React Query & Axios
Este é um Gerenciador de Tarefas moderno construído para demonstrar o poder do TanStack Query (React Query) e Axios no gerenciamento de estados assíncronos e requisições HTTP.

## 🚀 Tecnologias

React (Vite)
TanStack Query v5 (Gerenciamento de cache e estados de requisição)
Axios (Cliente HTTP)
CSS3 (Estilização customizada)
JSONPlaceholder API (Simulação de backend)

## ✨ Funcionalidades

Listagem Automática: Busca tarefas da API assim que o componente é montado.
Criação de Tarefas: Adiciona novas tarefas com feedback visual de carregamento.
Status em Tempo Real: Altera o status entre concluído (✅) e pendente (❌).
Exclusão: Remove itens da lista com sincronização de cache.
Gerenciamento de Cache: Invalidação de queries para manter a interface sempre atualizada após mutações.

## 🧠 O que eu aprendi

Neste projeto, foquei em aprender:
Hooks do React Query: Diferença entre useQuery (leitura) e useMutation (escrita).
Sincronização: Como usar o queryClient.invalidateQueries para atualizar a UI sem recarregar a página.
Tratamento de Erros: Exibição de estados de Loading e Error de forma amigável para o usuário.
