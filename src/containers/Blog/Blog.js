import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Posts from '../Blog/Posts/Posts'
import './Blog.module.css';

class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <header>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </header>
        {/*<Posts/>*/}
        <Route path="/" exact render={() => <h1>Home</h1>}/>
        <Route path="/new-post" exact render={() => <h1>New Post</h1>}/>
      </div>
    );
  }
}


export default Blog;