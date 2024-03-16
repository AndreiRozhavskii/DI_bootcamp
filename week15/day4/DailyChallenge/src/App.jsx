import React, { useReducer, useState, useRef } from 'react';
import './App.css';

const ACTIONS = {
  ADD_TASK: 'add-task',
  TOGGLE_TASK: 'toggle-task',
  EDIT_TASK: 'edit-task',
}

function reducer(tasks, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...tasks, newTask(action.payload.name)]
    case ACTIONS.TOGGLE_TASK:
      return tasks.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, complete: !task.complete }
        }
        return task
      })
    case ACTIONS.EDIT_TASK:
      return tasks.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, name: action.payload.newName }
        }
        return task
      })
    default:
      return tasks
  }
}

function newTask(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  const [filter, setFilter] = useState('all')
  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TASK, payload: { name: name } })
    setName('')
  }

  function editTask(id, newName) {
    dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: id, newName: newName } })
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.complete;
    if (filter === 'completed') return task.complete;
  });

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      {filteredTasks.map(task => {
        return <Task key={task.id} task={task} toggleTask={() => dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } })} editTask={editTask} />
      })}
    </div>
  )
}

function Task({ task, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState('')

  function handleEdit() {
    editTask(task.id, newName)
    setIsEditing(false)
  }

  return (
    <div className="task">
      <input type="checkbox" checked={task.complete} onChange={toggleTask} />
      {isEditing ? (
        <>
          <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <span>{task.complete ? 'Completed' : 'Active'}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  )
}

export default App;