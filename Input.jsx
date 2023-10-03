// import React from 'react'

// export const Input = (props) => {
//   const { todoText, onChange, onClick } = props



//   return (
//     <div className="input-area">
//       <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
//       <button onClick={onClick}>追加</button>
//     </div>
    
//   )
// }

import React from 'react'

export const Input = (props) => {
  const {todoText, onChange, onClick} = props
  return(
  <div className='input-area'>
      <input type="text" placeholder='Todoを入力' value={todoText} onChange={onChange}/>
      <button onClick={onClick}>追加</button>
    </div>

  )
}
