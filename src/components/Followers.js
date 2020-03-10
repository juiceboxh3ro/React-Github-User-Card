import React from 'react'
import { Link } from 'react-router-dom'

const Followers = ({ data }) => {
  console.log(data);

  return (
    <div className="card">
      <h3 className="username">{data.login}</h3>
      <Link to="/">
        <img className="user-ava" src={data.avatar_url} />
      </Link>
    </div>
  )
}

export default Followers;