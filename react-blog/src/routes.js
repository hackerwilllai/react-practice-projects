import React from 'react';
import { Route, IndexRoute } from 'react-router';


// import components
import App from './components/App';
import PostList from './components/PostList';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostList} />
    <Route path="post/new" component={PostNew} />
    <Route path="post/:id" component={PostShow} />
  </Route>
);