import React from 'react'

const User = ({ data }) => {
  return (
    <div className="my-card">
      <img alt="me" src={data.avatar_url} />
      <div className="my-card-info">
        <h3 className="my-name">{data.name}</h3>
        <p className="my-username">{data.login}</p>
        <p>Location: {data.location}</p>
        <p>Profile:{' '}
          <a href={data.html_url}>{data.html_url}</a>
        </p>
        <p>Followers: {data.followers}</p> 
        <p>Following: {data.following}</p>
        <p>Bio: {data.bio}</p>
      </div>
    </div>
  )
}

export default User;