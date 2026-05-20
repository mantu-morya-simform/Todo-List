Here’s a clean, beginner-friendly **README.md** you can use for your Todo App project 👇

---

# 📝 Todo App (React Practice Project)

A simple Todo App built using React to practice core concepts like state management, event handling, and UI updates.

---

## 🚀 Purpose

This project is designed to strengthen understanding of:

- Handling user events in React
- Managing state with `useState`
- How React updates UI (render & commit phases)
- Why state updates are asynchronous
- Updating arrays and objects in state
- Writing clean, component-based architecture

---

## ✨ Features

- ➕ Add new todos
- ❌ Delete todos
- ✅ Mark todos as completed
- ✏️ Edit existing todos
- 🔍 Filter todos (All / Active / Completed)
- 📊 Show total & completed count
- 💾 (Optional) Persist data using `localStorage`

---

## 🧱 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── TodoInput.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── FilterBar.jsx
│   └── Footer.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚛️ Concepts Covered

### 1. Event Handling

- `onClick` → delete / toggle todo
- `onChange` → input field
- `onSubmit` → add todo

---

### 2. State Management

```js
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
```

---

### 3. Updating Arrays in State

- Add:

```js
setTodos((prev) => [...prev, newTodo]);
```

- Delete:

```js
setTodos((prev) => prev.filter((todo) => todo.id !== id));
```

---

### 4. Updating Objects in State

```js
setTodos((prev) =>
  prev.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  ),
);
```

---

### 5. Functional Updates (Important)

```js
setCount((prev) => prev + 1);
```

Used when new state depends on previous state.

---

### 6. Async State Behavior

```js
setCount(count + 1);
console.log(count); // old value
```

State updates are **not immediate**.

---

### 7. React Rendering Phases

- **Render Phase** → React calculates changes
- **Commit Phase** → Updates DOM

---

## 🎨 UI Overview

```
-------------------------
|     Todo App          |
-------------------------
| [ input box ] [Add]   |
-------------------------
| ☐ Learn React   ❌     |
| ☑ Build project ❌     |
-------------------------
| All | Active | Done   |
-------------------------
| 2 items left          |
-------------------------
```

---

## 🛠️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/todo-app.git

# Go into folder
cd todo-app

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📌 Future Improvements

- Drag & drop todos
- Undo/redo functionality
- Animations (React Transition)
- Backend integration (API)
- Authentication

---

## ⚠️ Common Mistakes to Avoid

❌ Mutating state directly:

```js
todos.push(newTodo); // WRONG
```

❌ Using stale state:

```js
setTodos([...todos, newTodo]); // risky
```

✅ Correct:

```js
setTodos((prev) => [...prev, newTodo]);
```

---

## 📚 What I Learned

- How React re-renders UI
- Proper state management patterns
- Importance of immutability
- Component-based architecture

---

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

---

## 📄 License

This project is open-source and free to use.

---

If you want, I can also:

- Generate a **starter code template**
- Or create a **GitHub-ready version with commits per concept (best for learning)**
