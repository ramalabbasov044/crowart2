import { useState  } from 'react'

function Header() {
    const [message,setMessage] = useState("")
    const [message2,setMessage2] = useState([])
    const inputElement = e => {
        setMessage(e.target.value)
    }
    const addListItem =  e => {
        e.preventDefault()
        setMessage2(state=> [...state, message] )
    }
    const deleteBody = ((e) => {
        console.log(e);
    })
  return (
    <div className='Header'>
            <input className='sendInput'  onChange={inputElement} value={message}  id="message" name="message" autoComplete='off'/>
            <button type='submit' onClick={addListItem} className='addItem'>Add Item</button>
        
        {message2.map((message,index)=> <div className='test' key={index}><p>{message}</p>    <button onClick={deleteBody} className='delete'>x</button></div>)}
    </div>
  )
}

export default Header




