import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class UserPage extends Component {
state = {
    users : []
}

async componentDidMount () {
   await axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        const usersList = res.data.data;
        this.setState({ users : usersList });
    })
    console.log(this.state.users)
}

  render() {
    return (
      <>
        <div className="home-container">
            <h5>User</h5>
            <div className="user-list">
            {
                this.state.users.map((user,index)=>
                    <div className="user-item" key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.first_name + user.last_name}</Link>
                        <img alt={user.first_name} src={user.avatar}/>
                    </div>
                )
            }
            </div>
        </div>
      </>
    )
  }
}

export default UserPage
