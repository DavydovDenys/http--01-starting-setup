import React, {Component} from 'react';

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
        <Posts/>
      </div>
    );
  }
}


export default Blog;