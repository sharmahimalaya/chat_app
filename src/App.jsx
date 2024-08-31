import { useState } from 'react';
import './App.css';
import MessageBox from './components/MessageBox';
import Regno from './components/Regno';
import Newmessage from './components/Newmessage';

function App() {
  const [msgBody, setMsgBody] = useState('');
  const [msgs, setMsgs] = useState([]);

  function addMsgHandler(msgData) {
    console.log(msgData.body);
    setMsgs((prevMsgs) => [...prevMsgs, msgData]);
  }

  function msgBodyChangeHandler(event) {
    setMsgBody(event.target.value);
  }

  function uploadMsgHandler(event) {
    event.preventDefault();
    if(msgBody != '') {
      const msgData = {
        type: 'sent',
        body: msgBody,
      };
      addMsgHandler(msgData);
      setMsgBody('');
    }
     // Clear the input field after sending the message
  }

  return (
    <div className='wrap'>
      <Regno />
      <MessageBox messages={msgs} />
      <Newmessage onMsgSubmit={uploadMsgHandler} onMsgBodyChange={msgBodyChangeHandler} />
    </div>
  );
}

export default App;