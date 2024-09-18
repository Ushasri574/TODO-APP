import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoTableProps {
  todos: Todo[];
  totalTodos: number;
  todosPerPage: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const TodoTable: React.FC<TodoTableProps> = ({ todos, totalTodos, todosPerPage, currentPage, handlePageChange }) => {
  const pageCount = Math.ceil(totalTodos / todosPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default TodoTable;
