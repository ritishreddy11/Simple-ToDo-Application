
// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, TouchableOpacity, StatusBar } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialIcons } from '@expo/vector-icons';
// import TodoItem from './comopnents/TodoItem';
// import AddTodo from './comopnents/AddTodo';
// import styles, { lightColors, darkColors } from './styles/globalStyles';
// import { ThemeProvider, useTheme } from './context/ThemeContext';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const { isDarkMode, toggleTheme } = useTheme();
//   const colors = isDarkMode ? darkColors : lightColors;

//   useEffect(() => {
//     loadTodos();
//   }, []);

//   const loadTodos = async () => {
//     try {
//       const storedTodos = await AsyncStorage.getItem('todos');
//       if (storedTodos !== null) {
//         setTodos(JSON.parse(storedTodos));
//       }
//     } catch (error) {
//       console.error('Error loading todos:', error);
//     }
//   };

//   const saveTodos = async (newTodos) => {
//     try {
//       await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
//     } catch (error) {
//       console.error('Error saving todos:', error);
//     }
//   };

//   const addTodo = (text) => {
//     const newTodos = [{ id: Date.now().toString(), text, completed: false }, ...todos];
//     setTodos(newTodos);
//     saveTodos(newTodos);
//   };

//   const toggleTodo = (id) => {
//     const newTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(newTodos);
//     saveTodos(newTodos);
//   };

//   const deleteTodo = (id) => {
//     const newTodos = todos.filter(todo => todo.id !== id);
//     setTodos(newTodos);
//     saveTodos(newTodos);
//   };

//   return (
//     <LinearGradient colors={colors.background} style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
//       <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
//         <MaterialIcons name={isDarkMode ? "wb-sunny" : "nights-stay"} size={24} color={colors.text} />
//       </TouchableOpacity>
//       <Text style={[styles.title, { color: colors.text }]}>Awesome Todo App</Text>
//       <AddTodo addTodo={addTodo} colors={colors} />
//       <FlatList
//         data={todos}
//         renderItem={({ item }) => (
//           <TodoItem
//             todo={item}
//             toggleTodo={toggleTodo}
//             deleteTodo={deleteTodo}
//             colors={colors}
//           />
//         )}
//         keyExtractor={item => item.id}
//       />
//       <TouchableOpacity 
//         style={styles.clearButton} 
//         onPress={() => { setTodos([]); saveTodos([]); }}
//       >
//         <Text style={styles.clearButtonText}>Clear All</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }


import React from 'react';
import { ScrollView, StatusBar, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import TodoList from './comopnents/TodoList'; // Ensure this path is correct
import styles, { lightColors, darkColors } from './styles/globalStyles'; // Ensure this path is correct

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <LinearGradient colors={colors.background} style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentContainer}>
          {/* Add multiple TodoList components here */}
          <TodoList listId="1" listTitle="Work Todos" colors={colors} />
          <TodoList listId="2" listTitle="Personal Todos" colors={colors} />
          <TodoList listId="3" listTitle="Shopping List" colors={colors} />
          {/* Add more TodoList components as needed */}
        </View>

        {/* Spacer to add empty space below content */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Theme Toggle Button */}
      <TouchableOpacity 
        style={styles.themeToggle} 
        onPress={toggleTheme}
      >
        <MaterialIcons 
          name={isDarkMode ? "wb-sunny" : "nights-stay"} 
          size={24} 
          color={colors.text}
        />
        <Text style={[styles.themeToggleText, { color: colors.text }]}>
          
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
