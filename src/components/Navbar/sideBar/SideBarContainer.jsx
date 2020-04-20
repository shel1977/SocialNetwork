import React from 'react';
import SideBar from './SideBar'
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        sideBar: state.sideBar.sideBar
    }
};


const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;