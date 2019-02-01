import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Page1 from './components/Page1';
import Home from './components/Home';
import About from './components/About';


const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. state</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route exact path={`${match.path}`} render={() => <h3> Please select a topic.</h3>} />
  </div>
)

function NoMatch({ location }) {
  return <h3>no match for {location.path}</h3>
}
// const NoMatch = () => (<h1>No match </h1>)

function AppRouter () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/about"></Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;