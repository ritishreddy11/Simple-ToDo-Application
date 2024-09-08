Simple Todo App
This is a customizable Todo List application built with React Native and Expo. The app supports both light and dark themes, offers the ability to manage multiple Todo lists, and features smooth UI animations using LinearGradient.

Features
Manage multiple to-do lists (e.g., Work, Personal, Shopping)
Switch between light and dark themes
Add, complete, and delete tasks
Clear all tasks with a single click
Persistent storage of tasks using AsyncStorage
Responsive and animated UI with Expo's LinearGradient

Screenshots
Light Theme
![IMG_0237](https://github.com/user-attachments/assets/fcb3bce7-f177-4e43-8234-78bc406c8009)

Dark Theme
![IMG_0238](https://github.com/user-attachments/assets/18e9e2ba-7643-475c-aa24-5a356e957099)

Installation

1. Clone the repository

git clone https://github.com/ritishreddy11/Simple-ToDo-Application.git

cd simple-todo-app

2. Install the dependencies

npm install

3. Run the app with Expo

npx expo start


Customization

Changing Theme Colors

You can modify the theme colors in the styles/globalStyles.js file:


export const lightColors = {

  background: ['#4c669f', '#3b5998', '#192f6a'],
  
  text: 'white',
  
  todoBackground: 'rgba(255, 255, 255, 0.1)',
  
};


export const darkColors = {

  background: ['#1a1a1a', '#2a2a2a', '#3a3a3a'],
  
  text: '#e0e0e0',
  
  todoBackground: 'rgba(255, 255, 255, 0.05)',
  
};



Adding More Todo Lists

To add more todo lists, simply add more TodoList components in App.js:


<TodoList listId="4" listTitle="Fitness Goals" colors={colors} />


Theme Toggle Button

The theme toggle button is available on the home screen and allows users to switch between light and dark modes. It uses Material Icons and can be customized further in the globalStyles.js file:


themeToggle: {

  position: 'absolute',
  
  top: 10,
  
  right: 10,
  
  flexDirection: 'row',
  
  alignItems: 'center',
  
  justifyContent: 'center',
  
},

