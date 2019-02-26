import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import User from './User'
import { connect } from 'react-redux'

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      age: '',
      gender: ''
    }
  }
  
  addUser = () => {
    this.props.onAddUser(this.state)
  }
  // updateUser = () => {
  //   this.props.onUpdateUser(this.state)
  //   console.log(this.props.user)
  // }

  render () {
    const { username, age } = this.state
    const { onDeleteUser, users } = this.props

    return (
      <div>
        <div className='add-user'>
          <p>請輸入以下資訊：</p>
          <div className="info">Username: <input type='text' value={username} onChange={e=>{this.setState({username: e.target.value})}} /></div>
          <div className="info">Age: <input type='number' value={age} onChange={e=>{this.setState({age: parseInt(e.target.value)})}} /></div>
          <div className="info">Gender:
            <label><input type='radio' name='gender' value='male' onChange={e=>{this.setState({gender: e.target.value})}} />Male</label>
            <label><input type='radio' name='gender' value='female' onChange={e=>{this.setState({gender: e.target.value})}} />Female</label>
          </div>
          <button onClick={this.addUser}>增加</button>
        </div>
        <div className='users-list'>
          <p>Users List：</p>
          {users.map((user, index)=>
            <User user={user} onDeleteUser={onDeleteUser} index={index} key={index}/>
          )}
        </div>
      </div>
    )
  }
}

//需要注入的props
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (user) => {
      dispatch({type: 'ADD_USER', user})
    },
    onDeleteUser: (index) => {
      dispatch({type: 'DELETE_USER', index: index});
    },
    onUpdateUser: (user) => {
      dispatch({type: 'UPDATE_USER', user});
    }
  }
}

UsersList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList)

export default UsersList
