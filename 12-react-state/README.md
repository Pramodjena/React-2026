# React State, Hooks & useState - Quick Revision Notes

---

# React State Flow

```text
User Action
      ↓
Event Handler
      ↓
setState()
      ↓
State Changes
      ↓
Re-render
      ↓
Virtual DOM Update
      ↓
Real DOM Update
```

---

# Frequently Asked Interview Questions

## Q1: What is State?

State is data managed by React that can change over time and trigger UI updates.

---

## Q2: Difference Between State and Props?

| State                | Props                                  |
| -------------------- | -------------------------------------- |
| Mutable              | Immutable                              |
| Managed by component | Passed from parent                     |
| Can change           | Read-only                              |
| Triggers re-render   | Triggers re-render when parent changes |

---

## Q3: What is useState?

`useState` is a React Hook used to create and manage state in functional components.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Example

```jsx
const [count, setCount] = useState(0);
```

---

## Q4: Why Not Use Normal Variables?

React does not track normal JavaScript variables.

```jsx
let count = 0;

count++;
```

Changing a normal variable does not trigger a re-render.

React will not update the UI.

State should be used instead:

```jsx
setCount(count + 1);
```

---

## Q5: What are Hooks?

Hooks are special React functions that allow functional components to use React features such as:

* State
* Lifecycle methods
* Context
* Refs
* Performance optimizations

### Common Hooks

```jsx
useState()
useEffect()
useRef()
useContext()
useMemo()
useCallback()
```

---

## Q6: What Happens When setState is Called?

When `setState()` or a state updater function is called:

1. React schedules a state update.
2. State value changes.
3. Component re-renders.
4. React creates a new Virtual DOM.
5. React compares the new Virtual DOM with the previous one.
6. React updates only the changed parts of the Real DOM.
7. UI gets updated efficiently.

---

# One-Line Revision

```text
State = Dynamic Data

Hook = Special React Function

useState = Hook for Managing State

setState = Updates State

State Change = Re-render

Re-render = Updated UI
```

---

# Interview Definition Cheatsheet

### State

Data managed by React that can change over time and trigger UI updates.

### Hook

A special React function that allows functional components to use React features.

### useState

A Hook used to create and manage state inside functional components.

### Props

Read-only data passed from a parent component to a child component.

### Re-render

The process where React executes the component again and updates the UI based on the latest state and props.

### Virtual DOM

A lightweight copy of the Real DOM used by React to optimize updates.

### Real DOM

The actual DOM displayed in the browser.

---

# Golden Rule

```text
Normal Variable Changes
❌ UI Does Not Update

State Changes
✅ UI Updates Automatically
```
