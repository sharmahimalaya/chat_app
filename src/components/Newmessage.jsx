// import { useState } from 'react';
import classes from './Newmessage.module.css';

function Newmessage({ onMsgSubmit, onMsgBodyChange}) {
    return (
        <form method='post' onSubmit={onMsgSubmit}>
            <div className={classes.msgtypewrap}>
                <label htmlFor="msgbody"></label>
                <textarea id="msgbody" name='msgbody' placeholder='Type your message here...' className={classes.msgtypearea} rows={2} onChange={onMsgBodyChange}/>
                <button className={classes.sendbtn} type='submit'></button>
            </div>
        </form>
    );
}

export default Newmessage