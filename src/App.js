import React, { Suspense, Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
const LandingPage = React.lazy(() => import('./content/LandingPage'));
const RepoPage = React.lazy(() => import('./content/RepoPage'));
const ServicePage = React.lazy(() => import('./content/ServicePage'));
const SidebarPage = React.lazy(() => import('./content/SidebarPage'));


class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repo" component={RepoPage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/sidebar" component={SidebarPage} />
          </Switch>
        </Content>
        </Suspense>
      </>
    );
  }
}

export default App;
