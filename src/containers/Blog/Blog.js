import React, {Component} from 'react';

import axios from "axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.module.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount() {
    // const axios = require('axios');
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // console.log(response);
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map(post => {
          return {
            ...post, author: 'Max'
          };
        });
        this.setState({posts: updatedPost});
      }).catch(error => {
        this.setState({error: true});
    });
  }

  postSelectedHandler (id) {
    this.setState({selectedPostId: id});
  }

  render() {
    let post = <p style={{textAlign: 'center'}}>Something went wrong</p>
    if (!this.state.error) {
      post = this.state.posts
        .map(post => {
          return (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => {this.postSelectedHandler(post.id)}}/>
          );
        });
    }


    return (
      <div>
        <section className="Posts">
          {post}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost/>
        </section>
      </div>
    );
  }
}


export default Blog;