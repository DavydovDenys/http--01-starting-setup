import React, {Component} from 'react';
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    // const axios = require('axios');
    axios.get('/posts')
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
      <section className="Posts">
        {post}
      </section>
    );
  };
}

export default Posts;