const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Azrail'},
    ],
    messageData: [
        {id: 1, message: 'Hi', incomming: true},
        {id: 2, message: 'Just do it', incomming: false},
        {id: 3, message: 'Common', incomming: true},
        {id: 4, message: 'Alloha', incomming: false},
        {id: 5, message: 'I did It again', incomming: false},
    ]
};

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.newMessageBody,
                incomming: true,
            };
            return {...state,
                messageData: [ ...state.messageData, newMessage],
            };

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;

