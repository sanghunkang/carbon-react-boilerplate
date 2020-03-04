import React, { Suspense, Component } from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./content/LandingPage'));
const pages = [
  {
    route: '/repos',
    label: 'Repos',
    component: React.lazy(() => import('./content/Repos')),
  },
  {
    route: '/services',
    label: 'Services',
    component: React.lazy(() => import('./content/ServicePage')),
  },
  {
    route: '/sidebar',
    label: 'Sidebar',
    component: React.lazy(() => import('./content/SidebarPage')),
  },
  {
    route: '/visualizations',
    label: 'Visualizations',
    component: React.lazy(() => import('./content/Visualizations')),
  },
];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
        <TutorialHeader pages={pages}/>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            {pages.map(page => <Route path={page.route} component={page.component} />)}
          </Switch>
        </Content>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default App;
