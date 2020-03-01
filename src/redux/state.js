let rerenderEntireTree = () => {
};

let state = {

    profilePage: {
        postData: [
            {id: 1, message: '1st', likes: 5},
            {id: 2, message: '2nd', likes: 8},
            {id: 3, message: '3nd', likes: 9},
            {id: 4, message: '4nd', likes: 2},
        ],
        newPostText: 'other text'
    },

    dialogsPage: {
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
        ],
    },

    sideBar: [
        {id: 1, name: 'Dasha'},
        {id: 2, name: 'Pasha'},
        {id: 3, name: 'Glasha'},
    ]
};

export const addPost = () => {
   let newPost ={
       id: 6,
       message: state.profilePage.newPostText,
       likes: 0,
   };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostChange = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;