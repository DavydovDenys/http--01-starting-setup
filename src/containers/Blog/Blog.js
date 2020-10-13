import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Posts from '../Blog/Posts/Posts'
import './Blog.module.css';

class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <header>
          <ul>
            <li><NavLink to='/' exact>Home</NavLink></li>
            <li><NavLink to={{
              pathname: '/new-post',
              hash: '#submit',
              search: '?quick-submit=true'
            }}>New Post</NavLink></li>
          </ul>
        </header>
        {/*<Posts/>*/}
        <Route path="/" exact component={Posts}/>
        <Route path="/new-post" component={NewPost}/>
        <Route path=":id" component={FullPost}/>
      </div>
    );
  }
}


export default Blog;