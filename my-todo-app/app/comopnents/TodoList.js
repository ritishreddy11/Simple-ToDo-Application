import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import TodoItem from './TodoItem'; // Ensure the path is correct
import AddTodo from './AddTodo'; // Ensure the path is correct
import styles from '../styles/globalStyles'; // Ensure the path is correct
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoList = ({ listId, listTitle, colors }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(`todos-${listId}`);
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error(`Error loading todos for list ${listId}:`, error);
    }
  };

  const saveTodos = async (newTodos) => {
    try {
      await AsyncStorage.setItem(`todos-${listId}`, JSON.stringify(newTodos));
    } catch (error) {
      console.error(`Error saving todos for list ${listId}:`, error);
    }
  };

  const addTodo = (text) => {
    const newTodos = [{ id: Date.now().toString(), text, completed: false }, ...todos];
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  return (
    <View style={styles.todoListContainer}>
      <Text style={[styles.title, { color: colors.text }]}>{listTitle}</Text>
      <AddTodo addTodo={addTodo} colors={colors} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            colors={colors}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity 
        style={styles.clearButton} 
        onPress={() => { setTodos([]); saveTodos([]); }}
      >
        <Text style={styles.clearButtonText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;
