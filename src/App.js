import React, { Component, Suspense, Fragment } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import User from "./containers/User";
import Welcome from "./containers/Welcome";
// import Posts from "./containers/Posts";

const Posts = React.lazy(() => import("./containers/Posts"));

class App extends Component {
  state = { show: false };

  modeHandler = () => {
    // console.log('show')
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <Fragment>
        <button className="btn btn-primary m-5" onClick={this.modeHandler}>
          Toggle Mode
        </button>

{this.state.show ? (
  <Suspense fallback={<div>Loading ...</div>}>
    <Posts />
  </Suspense>
) : (
  <User />
)}
      </Fragment>
      // <BrowserRouter>
      //   {/* <React.Fragment> */}
      //   <>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     {/* <Route path="/posts" component={Posts} /> */}
      //   <Route
      //     path="/posts"
      //     component={() => (
      //       <Suspense fallback={<div>Loading ...</div>}>
      //         <Posts />
      //       </Suspense>
      //     )}
      //   />
      //   </>
      //   {/* </React.Fragment> */}
      // </BrowserRouter>
    );
  }
}

export default App;
