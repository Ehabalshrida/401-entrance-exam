import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavWathes from './components/FavWathes';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginButton from './components/LoginButton';

export class App extends Component {
  render() {
    return (
      <div>
        <FavWathes/>
        {/* @todo show login button and hide the list for unauthenticated users */}
        <Router>
          <Header/>
        <Switch>
          <Route path="/">
            {this.props.Auth0.isAuthenticated? <Home />:<LoginButton/>
            }
          </Route>
          <Route path="/FavWathes">
          {this.props.Auth0.isAuthenticated?  < FavWathes/>:<LoginButton/>
            }
           
          </Route>
          
      
        </Switch>
        <Footer/>
        </Router>





        {/* @todo show logout button and show items list components for authenticated users */}
      </div>
    )
  }
}

export default withAuth0(App);
