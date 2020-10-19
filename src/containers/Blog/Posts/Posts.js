import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";


class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    // const axios = require('axios');
    axios.get('/posts')
      .then(response => {
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

  postSelectedHandler(id) {
    this.props.history.push({
      pathname: '/posts/' + id
    });
  }

  render() {
    let post = <p style={{textAlign: 'center'}}>Something went wrong</p>
    if (!this.state.error) {
      post = this.state.posts
        .map(post => {
          return (
              // <Link
              // to={'/posts/' + post.id}
              // key={post.id}>
              <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => {
                  this.postSelectedHandler(post.id)
                }}/>
              // </Link>
          );
        });
    }

    return (
      <div>
        <section className="Posts">
          {post}
        </section>
        <Route path={this.props.match.url + '/:id'} component={FullPost}/>
      </div>
    );
  };
}

export default Posts;