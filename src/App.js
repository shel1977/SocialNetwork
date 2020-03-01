import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sideBar={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPostChange={props.updateNewPostChange}
                    />}/>
                    <Route path='/dialogs' render={()=> <Dialogs dialogData={props.state.dialogsPage.dialogData}
                                                                 messageData={props.state.dialogsPage.messageData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/setting' component={Setting}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;
