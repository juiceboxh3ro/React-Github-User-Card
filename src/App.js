import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'

import User from './components/User';
import Followers from './components/Followers';

class App extends React.Component {

  state = {
    heyitsme: {},
    followers: []
  };
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/juiceboxh3ro')
      .then(res => {
        this.setState({
          heyitsme: res.data
        })
      })
      .catch(err => {
        console.log(err)}
      )

    axios
      .get('https://api.github.com/users/juiceboxh3ro/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchFollower = (follower) => {
    axios
      .get(`https://api.github.com/users/${follower}`)
      .then(res => {
        this.setState({
          heyitsme: res.data
        })
        window.scrollTo(0, 0)
      })
      .catch(err => console.log(err))
    axios
      .get(`https://api.github.com/users/${follower}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div id="App">
        <div id="me">
          <User data={this.state.heyitsme}/>
        </div>

        <div id="followers">
          {this.state.followers.map(item => (
            <Followers clickEvent={() => this.fetchFollower(item.login)} key={item.id} data={item}/>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
