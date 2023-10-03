// import React from 'react'

// export const IncompleteTodos = (props) => {
//     const {incompleteTodos, onClickComplete, onClickDelete} = props
//   return (
//     <div className="incomplete-area">
//       <p className="title">未完了のTODO</p>
//       <ul>
//         {incompleteTodos.map((todo, index) => {
//           return(

//         <div key={todo} className="list-row">
//         <li>{todo}</li>
//         <button onClick={() => onClickComplete(index)}>完了</button>
//         <button onClick={() => onClickDelete(index)}>削除</button>
//         </div>
//           )
//         })}
       
//       </ul>
//     </div>
//   )
// }

import React from 'react'

export const IncompleteTodos = (props) => {
    const {incompleteTodos, onClickComplete, onClickDelete, onClickToggleLike, liked} = props
  return (
    <div className='incomplete-area'>
      <p className='title'>タスク</p>
      <ul>
                {incompleteTodos.map((todo,index) => {
                  return(

                <div key={todo} className='list-row'>
        <li>{todo}
        </li>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
          <button onClick={() => onClickToggleLike(index)}>
      {liked ? '★' : '☆'}
    </button>
        </div>
                  )

                })}
      </ul>
    </div>
  )
}
