import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomePage extends Component {

  handleDeleteUser = (user) =>{
    this.props.deleteRedux(user);
  }

  handleCreateUser = () =>{
    this.props.createUser();
  }


  render() {
    let listUser = this.props.dataRedux;
    return (
      <>
        <div className="home-container">
            <h5>Home</h5>
            <span onClick={()=> this.handleCreateUser()}>Tạo mới</span>
            { listUser.length > 0 &&
              listUser.map((item, index)=>
               <div key={index}>
                 {index + 1} - {item.name} <span onClick={()=> this.handleDeleteUser(item)}>X</span>
               </div>
              )
            }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux : state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteRedux : (userDelete) => dispatch({type : "DELETE_USER", payload : userDelete}),
    createUser : () => dispatch({type : "CREATE_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
