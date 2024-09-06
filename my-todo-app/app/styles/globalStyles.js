import { StyleSheet } from 'react-native';

export const lightColors = {
  background: ['#4c669f', '#3b5998', '#192f6a'],
  text: 'white',
  todoBackground: 'rgba(255, 255, 255, 0.1)',
  inputBackground: 'rgba(255, 255, 255, 0.2)',
};

export const darkColors = {
  background: ['#1a1a1a', '#2a2a2a', '#3a3a3a'],
  text: '#e0e0e0',
  todoBackground: 'rgba(255, 255, 255, 0.05)',
  inputBackground: 'rgba(255, 255, 255, 0.1)',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 100, // Adjust this based on your needs
  },
  todoListContainer: {
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addTodoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#4caf50',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  completedTodoText: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  clearButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  themeToggle: {
    position: 'absolute',
    top: 25,
    right: 25,
    padding: 0,
    //backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional: to make the button more visible
    borderRadius: 5,
  },
  themeToggleText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'inherit', // Inherits color from the parent (theme context)
  },
  spacer: {
    height: 150, // Adjust the height to control the amount of empty space
  },
});

export default styles;
