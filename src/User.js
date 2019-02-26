import React, { Component } from 'react'

class User extends Component {
    deleteUser = () => {
        //console.log('in delete', this.props.index)
        this.props.onDeleteUser(this.props.index)
    }

  render () {
    const { user, index} = this.props
    return (
      <div className="item">
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={()=> {this.deleteUser(user, index)}}>删除</button>
      </div>
    )
  }
}


export default User