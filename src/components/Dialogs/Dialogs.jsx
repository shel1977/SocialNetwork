import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../util/validators/validators";

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {



    return (
        <form  onSubmit={props.handleSubmit} className={style.sendMessageArea}>
            <div>
                <Field
                       placeholder={'enter message'}
                       component={Textarea}
                       validate={[required, maxLength50]}
                       name={'newMessageBody'}
                />
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    )
};

const MessageReduxForm = reduxForm ({
    form: 'dialogAddMessageForm'
})(MessageForm);


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogItems = state.dialogData
        .map(d => <DialogItem name={d.name}
                              id={d.id}
                              key={d.id}
        />);


    let messageItems = state.messageData
        .map(m => <Message message={m.message}
                           id={m.id}
                           incomming={m.incomming}
                           key={m.id}
        />);




    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogItems}
            </div>
            <div className={style.messages}>
                <div>{messageItems}</div>
                <MessageReduxForm onSubmit={addNewMessage} className={style.sendMessageArea}/>
            </div>

        </div>
    )
};

export default Dialogs;