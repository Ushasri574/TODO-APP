import React from 'react';
import TodoList from './components/TodoList';
import { CssBaseline, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Todo List
        </Typography>
        <TodoList />
      </Container>
    </>
  );
};

export default App;
