import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/globalStyles';

const AddTodo = ({ addTodo, colors }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text }]}
        placeholder="Add a new todo..."
        placeholderTextColor={colors.text}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddTodo}
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;