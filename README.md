### WWPHacks '22 React Bootcamp

# Demo To-Do List 📃

## Features 🤩:

- Add, delete, and check off tasks!
- Persistent state across reloads thanks to `localStorage`

## Background 🤔:

- WWPHacks '22 Bootcamp Project
- Introduces beginners to React.js

## Technologies ⚙️:

- Just React to keep it simple 😃

## How I started 🚀:

- The framework of this project was built using the command `npx create-react-app my-app`
- Learn more about Create React App [here](https://reactjs.org/docs/create-a-new-react-app.html)

## How to build 🏗️:

- Use this [Figma](https://www.figma.com/file/Tpo1tmOipyJ0ILMGYEvuiB/WWPHacks22-To-Do?node-id=0%3A1) for reference
- Look for branches prefixed with 'step', and you'll be able to see the progression of the app along with some notes!

### Implementing add-task component

[Code up to this point](https://github.com/WWPHacks22/to-do-demo-react/tree/step-1-add)

Implement text box

1. Add index.js in './Add'
2. Import Add component from './Add'
3. Add DOM markup
4. Introduce useState hook and controlled inputs

### Implementing item component

Implement component that displays individual tasks

[Code up to this point](https://github.com/WWPHacks22/to-do-demo-react/tree/step-2-item)

1. Steps 1-3 from above but with './Item'

### Dynamic item list

Allow for a dynamic list of components to be displayed

[Code up to this point](https://github.com/WWPHacks22/to-do-demo-react/tree/step-3-mapped-items)

1. Add .map to App.js

### Implementing add item functionality

[Code up to this point](https://github.com/WWPHacks22/to-do-demo-react/tree/step-4-add-item)

1. Implement "add item" function in App.js
2. Add `useLocalStorage` hook and `uuid` packages
3. Pass addHandler to `Add` component

### Implementing item deletion functionality

[Code up to this point](https://github.com/WWPHacks22/to-do-demo-react/tree/step-5-delete-items)

1. Implement "add item" function in App.js
2. Pass deleteHandler to `Item` component

### Implementing item toggle functionality

[Code up to this point](https://github.com/WWPHacks22/to-do-demo-react/tree/step-6-toggle-items)

1. Similar process as above
