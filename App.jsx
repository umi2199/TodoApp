// import { useState } from "react";
// import "./App.css";
// import { Input } from "./components/Input";
// import { IncompleteTodos } from "./components/IncompleteTodos";
// import { CompleteTodos } from "./components/CompleteTodos";


// function App() {

//   const [completeTodos, setCompleteTodos] = useState([])
//   const [todoText, setTodoText] = useState('')
//   const [incompleteTodos, setIncompleteTodos] = useState([])

//   const onChangeTodoText = (e) => setTodoText(e.target.value)

//   const onClickAdd = () => {
//     if (todoText === '') return
//     const newTodos = [...incompleteTodos, todoText]
//     setIncompleteTodos(newTodos)
//     setTodoText('')
//   }
  

//   const onClickDelete = (index) => {
//     const newTodos = [...incompleteTodos]
//     newTodos.splice(index,1)
//     setIncompleteTodos(newTodos)
//   }

//   const onClickComplete = (index) => {
//     const newIncompleteTodos = [...incompleteTodos]
//     newIncompleteTodos.splice(index,1)
  
//     const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
//     setIncompleteTodos(newIncompleteTodos)
//     setCompleteTodos(newCompleteTodos)
//   }

//   const onClickBack = (index) => {
//     const newCompleteTodos = [...completeTodos]
//     newCompleteTodos.splice(index,1)
  
//     const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
//     setCompleteTodos(newCompleteTodos)
//     setIncompleteTodos(newIncompleteTodos)
//   }
  
//   return (
//     <>
//     <Input todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
//     <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
//     <CompleteTodos completeTodos={completeTodos} onClick={onClickBack}/>
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react'
import "./App.css"
import { Input } from './components/Input'
import { IncompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'

function App () {
  const [todoText, setTodoText] = useState('')

  const onChangeTodoText = (e) => setTodoText(e.target.value)

  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const [liked, setLiked] = useState(false);

  const onClickAdd = () => {
    if (todoText === '') return
      const newTodos = [...incompleteTodos, todoText]
      setIncompleteTodos(newTodos)
      setTodoText('')
    }
    const toggleLike = (index) => {
      
      setLiked(!liked);
    };

const onClickDelete = (index) => {
  const newTodos = [...incompleteTodos]
  newTodos.splice(index, 1)
  setIncompleteTodos(newTodos)
}

const onClickComplete = (index) => {
  const newIncompleteTodos = [...incompleteTodos]
  newIncompleteTodos.splice(index ,1)
  setIncompleteTodos(newIncompleteTodos)

  const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
  setCompleteTodos(newCompleteTodos)
}

const onClickBack = (index) => {
  const newCompleteTodos = [...completeTodos]
  newCompleteTodos.splice(index ,1)
  setCompleteTodos(newCompleteTodos)

  const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
  setIncompleteTodos(newIncompleteTodos)
} 


 

  

  return (
    <>
    <Input todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
    <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} onClickToggleLike={toggleLike} liked={liked}/>
    
    <CompleteTodos completeTodos={completeTodos} onClick={onClickBack} />

    </>
  )
}


export default App
