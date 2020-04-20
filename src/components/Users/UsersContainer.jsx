import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/usersReducer";
import Users from "./users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize);  //using Thunk
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pagesSize);  //using Thunk
    };

    render() {


        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pagesSize={this.props.pagesSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
                </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
};

export default compose (
    connect (mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingInProgress,
        getUsers,
    }),
/*
    withAuthRedirect
*/
)(UsersContainer)