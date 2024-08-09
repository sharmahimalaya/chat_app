import { useState } from "react";
import Message from "./Message";
import classes from "./MessageBox.module.css";

function MessageBox(props) {
    // const[msgs, setMsgs] = useState([]);

    // function addMsgHandler(msgData) {
    //     setMsgs([...msgs, msgData]);
    // }

    return (    
        <div className={classes.box}>
            <ul className={classes.messageList} id="msgList">
                <Message type = 'recieved' message = 'Helloooo Friend!!!'/>
                <Message type = 'sent' message='Hey There'/>
                {props.messages.map((msg) => (
                    // console.log(msg);
                    <Message key={msg.body} type = 'sent' message={msg.body}/>
                ))}
            </ul>
        </div>
    );
}

export default MessageBox;