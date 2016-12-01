import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPostListItem(posts) {
    if(!posts) return "";

    return posts.map( postItem => (
      <Link to={`/post/${postItem.id}`} key={postItem.id} className="list-group-item list-group-item-action">
        <strong>{postItem.title}</strong>
        <span className="float-xs-right">{postItem.categories}</span>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right" style={{marginBottom: '20px'}}>
          <Link to="/post/new" className="btn btn-primary">Add Post</Link>
        </div>
        <div className="list-group">
          { this.renderPostListItem(this.props.posts) }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return { fetchPosts };
// }

// mapDispatchToProps 可以是 Object or Function，
// 所以可以直接傳入物件
export default connect(mapStateToProps, { fetchPosts })(PostList);