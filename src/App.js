import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
        user:{
            id:'',
            name: '',
            email: '',

            entries: 0,
            joined: ''
        }

    }
  }

    loadUser = (data) => {
        this.setState({user:  {
                id: data.id,
                name: data.name,
                email: data.email,

                entries: data.entries,
                joined: data.joined
            }})

    }


    onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})

    } else if (route === 'home'){
      this.setState({isSignedIn: true} )
    }

    this.setState({route: route})

  }

  render() {

        let component = null
        switch(this.state.route) {
          case 'signin'  :
            component =
                <div>
                    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                    <SignIn onRouteChange={this.onRouteChange}/>
                </div>
            break;

          case 'signout'  :
                component =
                    <div>
                        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        <SignIn onRouteChange={this.onRouteChange}/>
                    </div>
                break;

          case 'home':
            component =
                <div>
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                </div>
              break;

          case 'signup':
            component =
              <div>
              <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}  />
              </div>
            break;

          default:

        }



    return (
      <div className="App">
        {component}
      </div>
    );
  }
}

export default App;