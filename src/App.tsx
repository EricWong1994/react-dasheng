import React, { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'

interface ITodos {
  title: string;
  done: boolean;
}
type inputEvent = React.ChangeEvent<HTMLInputElement>
// type checkEvent = React.ChangeEvent<chek>

function App() {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodos []>([
    {
      title: '吃饭',
      done: false
    },
    {
      title: '睡觉',
      done: false
    },
    {
      title: '玩游戏',
      done: false
    }
  ]);
  const [allDone, setAllDone] = useState(false);
  const addBtnClick = () => {
    const newTodos = [...todos];
    newTodos.push({
      title: value,
      done: false
    })
    setTodos(newTodos)
  }
  const active = todos.filter(item => item.done).length
  const inputHandler = (e: inputEvent) => {
    setValue(e.target.value);
  }

  const checkBoxClick = (index: number) => {
    const arr = [...todos]
    arr[index].done = !arr[index].done;
    setTodos(arr)
  }

  // const handleToggleAll = (e: React.MouseEvent) => {
  const handleToggleAll = e => {
    console.log('e: ', e);
    const nextTodos = [...todos]
    nextTodos.forEach(item => item.done = e.target.checked)
    setTodos(nextTodos)
    setAllDone(!allDone)
  }

  useEffect(() => {
    setAllDone(!!(todos.length && todos.length === active))
  }, [todos])

  const removeHandler = (index: number) => {
    const nextTodos = [...todos]
    nextTodos.splice(index, 1)
    setTodos(nextTodos)
  }

  const handlerClear = () => {
    setTodos([])
  }
  
  return (
    <div className="App">
      <input type="text" value={value} onChange={inputHandler} />
      <button onClick={addBtnClick}>添加</button>
      <button onClick={handlerClear}>清空</button>
      {todos.length ? 
      <ul>
      {
        todos.map((todo, index) => <li key={todo.title}>
          <input type="checkbox" onClick={() => checkBoxClick(index)} value={todo.title} checked={todo.done} />
          <span>{todo.title}</span>
          <span onClick={() => removeHandler(index)} >❌</span>
        </li>)
      }
    </ul> : <div>暂无数据~</div>}
      <div>
      全选
        <input checked={allDone} type="checkbox" name="" id=""  onClick={e => handleToggleAll(e)}/>
        <span>{active}/ {todos.length}</span>
      </div>
    </div>
  )
}

export default App
