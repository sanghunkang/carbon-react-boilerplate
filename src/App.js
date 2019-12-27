import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import ServicePage from './content/ServicePage'
import SidebarPage from './content/SidebarPage'

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/services" component={ServicePage} />
            <Route path="/sidebar" component={SidebarPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
