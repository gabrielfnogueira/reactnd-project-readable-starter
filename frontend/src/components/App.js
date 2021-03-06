import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Post404 from './Post404';
import PostDetails from './PostDetails';
import PostList from './PostList';
import Sidebar from './Sidebar';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    font-family: sans-serif;
  }
  body {
    background: #1a1a1a;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button:focus,
  button:active {
    outline: none;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 2rem;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GridContainer>
          <Sidebar />
          <Content>
            <Switch>
              <Route exact path="/posts/404" component={Post404} />
              <Route
                exact
                path="/:category?"
                render={props => {
                  return <PostList selectedCategory={props.match.params.category} />;
                }}
              />
              <Route exact path="/:category/:postId" component={PostDetails} />
            </Switch>
          </Content>
        </GridContainer>
      </BrowserRouter>
    );
  }
}

export default App;
