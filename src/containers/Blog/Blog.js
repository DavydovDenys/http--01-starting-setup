import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Posts from '../Blog/Posts/Posts'
import './Blog.module.css';

class Blog extends Component {

  state ={
    auth: false,
  };


  render() {

    return (
      <div className="Blog">
        <header>
          <ul>
            <li><NavLink to='/posts/' exact>Home</NavLink></li>
            <li><NavLink to={{
              pathname: '/new-post',
              hash: '#submit',
              search: '?quick-submit=true'
            }}>New Post</NavLink></li>
          </ul>
        </header>
        {/*<Posts/>*/}

        <Switch>
          {this.state.auth ? <Route path="/new-post/" component={NewPost}/> : null}
          <Route path="/posts" component={Posts}/>
          <Redirect from="/" to="/posts"/>
        </Switch>

      </div>
    );
  }
}


export default Blog;