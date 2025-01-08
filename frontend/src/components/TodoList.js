import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
//import TodoItem from ‘./TodoItem’;
function TodoList() {
    return(
    <Container maxWidth="sm" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>
      
      <TextField label="New Todo" variant="outlined" fullWidth margin="normal" />
      
      <Button variant="contained" color="primary">
        Add Todo
      </Button>
    </Container>
    )
   }
   export default TodoList;