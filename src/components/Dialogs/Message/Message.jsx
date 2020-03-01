import React from 'react';
import style from './Message.module.css';


const Message = (props) => {

    let dialogStyle = props.incomming === true ? style.message : style.messageIncomming;

    return (
        <div className={dialogStyle}>{props.message}</div>
    )
};
export default Message;