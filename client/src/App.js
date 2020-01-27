import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import Splash from "./pages/Home/Splash";
import Login from './pages/Login';
import Listings from "./pages/Listing";
import AddNewListing from "./pages/AddNewListing";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";


export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <ConnectedPublicRoute exact path="/" component={Splash} />
          <ConnectedPublicRoute path="/login" component={Login} />
          <ConnectedPublicRoute path="/signup" component={Signup} />
          <ConnectedPrivateRoute exact path="/listings" component={Listings} />
          <ConnectedPrivateRoute path="/AddNewListing" component={AddNewListing} />
          <ConnectedPrivateRoute path="/listings/:id" component={Detail} />
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </div>
    </Router>

  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        rest.user ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: routeProps.location }
              }}
            />
          )
      }
    />
  );
}

const ConnectedPrivateRoute = connect(
  // mapStateToProps
  state => ({user: state.user.details})
  )(PrivateRoute);

// A wrapper for <Route> that redirects to the listings 
// screen if you're authenticated.
function PublicRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        !rest.user ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/listings"
              }}
            />
          )
      }
    />
  );
}

const ConnectedPublicRoute = connect(
  // mapStateToProps
  state => ({user: state.user.details})
  )(PublicRoute);
