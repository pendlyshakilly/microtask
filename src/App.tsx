import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App () {
 let [message, setMessage] = useState([
  {message: 'message1'},
  {message: 'message2'},
  {message: 'message3'}
 ])

    let [mess, setMess] = useState('')

  const addMessage = (mess: string) => {
   let newMessage = {message: mess}
   setMessage([newMessage, ...message])
 }

 const callbackButtonHandler = () => {
      addMessage(mess)
     setMess('')

 }

    return (
    <div className={'App'}>
      <Input mess={mess} SetMess={setMess}/>
      <Button name={'+'} callback={callbackButtonHandler}/>
     {message.map((el, index) => {
      return (
          <div key={index}>{el.message}</div>
      )
     })}
    </div>
)

}



export default App;
