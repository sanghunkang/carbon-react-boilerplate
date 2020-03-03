import React, { Suspense, Component } from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./content/LandingPage'));
const RepoPage = React.lazy(() => import('./content/RepoPage'));
const ServicePage = React.lazy(() => import('./content/ServicePage'));
const SidebarPage = React.lazy(() => import('./content/SidebarPage'));
const Visualizations = React.lazy(() => import('./content/Visualizations'));


class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
        <TutorialHeader />
        {/* <ServicePage /> */}
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/services" component={ServicePage} />
            <Route path="/sidebar" component={SidebarPage} />
            <Route path="/visualizations" component={Visualizations} />
          </Switch>
        </Content>
        </Suspense>
      </>
    );
  }
}

export default App;
