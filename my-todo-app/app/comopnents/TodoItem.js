import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/globalStyles';

const TodoItem = ({ todo, toggleTodo, deleteTodo, colors }) => {
  const rightSwipe = () => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo(todo.id)}
      >
        <MaterialIcons name="delete" size={24} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
        <View style={[styles.todoItem, { backgroundColor: colors.todoBackground }]}>
          <MaterialIcons
            name={todo.completed ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={todo.completed ? "#4caf50" : colors.text}
          />
          <Text style={[
            styles.todoText,
            { color: colors.text },
            todo.completed && styles.completedTodoText
          ]}>
            {todo.text}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default TodoItem;