import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogItems = props.dialogData
        .map(d => <DialogItem name={d.name}
                              id={d.id}/>);


    let messageItems = props.messageData
        .map(m => <Message message={m.message}
                           id={m.id}
                           incomming={m.incomming}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogItems}
            </div>
            <div className={style.messages}>
                <div>{messageItems}</div>
                <div className={style.sendMessageArea}>
                    <div>
                        <textarea ref={newMessageElement}> </textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;