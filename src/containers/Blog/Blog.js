import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import NewPost from "./NewPost/NewPost";
import Posts from '../Blog/Posts/Posts'
import './Blog.module.css';

class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <header>
          <ul>
            <li><Link to={{
              pathname: '/',
              has: '#submit',
              search: '?quick-submit=true'
            }}>Home</Link></li>
            <li><Link to='/new-post'>New Post</Link></li>
          </ul>
        </header>
        {/*<Posts/>*/}
        <Route path="/" exact component={Posts}/>
        <Route path="/new-post" component={NewPost}/>
      </div>
    );
  }
}


export default Blog;