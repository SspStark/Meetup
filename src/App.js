import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    registerError: false,
  }

  updateName = name => this.setState({name})

  updateTopic = topic => this.setState({topic})

  getRegistered = () => this.setState({isRegistered: true})

  updateError = () => this.setState({registerError: true})

  render() {
    const {name, topic, isRegistered, registerError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          registerError,
          getRegistered: this.getRegistered,
          updateError: this.updateError,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
