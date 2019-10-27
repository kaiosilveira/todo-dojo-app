import React, { useState } from 'react'
import './App.css'

const DateBox = () => {
  const now = new Date()
  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
  ]
  const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terca-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado'
  ]
  return (
    <div className='date-box'>
      <div className='date-info'>
        <p className='day'>{now.getDate()}</p>
        <div className='month-year'>
          <p className='month-name'>{months[now.getMonth()]}</p>
          <p>{now.getFullYear()}</p>
        </div>
      </div>
      <div className='weekday-name'>
        <p>{weekdays[now.getDay()]}</p>
      </div>
    </div>
  )
}

const TodoList = ({ toDos }) => {
  return (
    <ul className='todo-list'>
      {toDos.map(item => {
        return (
          <li className={'todo-list-item' + (item.done ? ' done' : '')}>
            {item.text}
          </li>
        )
      })}
    </ul>
  )
}

const AddItem = ({ onSave }) => {
  const [text, setText] = useState('')
  return (
    <div className='add-item'>
      <input
        className='add-field'
        value={text}
        placeholder='Adicionar um item...'
        onChange={e => {
          setText(e.target.value)
        }}
      />
      <button
        className='add-button'
        onClick={() => {
          onSave({ text: text, done: false })
          setText('')
        }}
      >
        +
      </button>
    </div>
  )
}
const App = () => {
  const [toDos, setTodos] = useState([
    { text: 'texte1', done: true },
    { text: 'texte2', done: false },
    { text: 'texte3', done: false }
  ])

  return (
    <div className='App'>
      <DateBox />
      <TodoList toDos={toDos} />
      <AddItem onSave={item => setTodos([...toDos, item])} />
    </div>
  )
}

export default App
