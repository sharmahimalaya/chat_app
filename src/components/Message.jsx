import classes from './Message.module.css';

function Message(props) {
    if(props.type == 'sent') {
        return (
            <div className={classes.wrap}>
                <div className={classes.sentwrap}>
                    <div className={classes.sent}>
                        <p className={classes.msgcontent}>{props.message}</p>
                    </div>
                </div>
            </div>  
        );
    } else {
        return (
            <div className={classes.wrap}>
                <div className={classes.receivedwrap}>
                    <div className={classes.received}>
                        <p className={classes.msgcontent}>{props.message}</p>
                    </div>  
                </div>
            </div>
        );
    }
    
}

export default Message; 