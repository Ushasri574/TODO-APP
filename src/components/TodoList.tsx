import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService';
import TodoTable from './TodoTable';
import { CircularProgress, Container, Alert } from '@mui/material';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalTodos, setTotalTodos] = useState<number>(200); // Assuming total todos = 200 from API
  const todosPerPage = 10; // Rows per page

  const fetchTodos = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTodos(todosPerPage, page);
      setTodos(data);
    } catch (err) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos(currentPage);
  }, [currentPage]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <TodoTable
          todos={todos}
          totalTodos={totalTodos}
          todosPerPage={todosPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </Container>
  );
};

export default TodoList;
