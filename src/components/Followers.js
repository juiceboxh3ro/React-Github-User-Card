import React from 'react'

const Followers = (props) => {
  return (
    <div onClick={props.clickEvent} className="card">
      <h3 className="username">{props.data.login}</h3>
      <img alt="follower" className="user-ava" src={props.data.avatar_url} />
    </div>
  )
}

export default Followers;