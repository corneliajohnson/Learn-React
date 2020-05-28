import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    //user from mapStateToProps function
    const { user } = this.props;

    // if no user is found show nothing
    if (!user) {
      return null;
    }
    //everything worked
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //prop passed in from PostList
  //does the user id equal to the current user
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
