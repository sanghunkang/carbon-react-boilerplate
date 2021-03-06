import React, {useState} from "react";
import {
  Content,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  
} from "carbon-components-react/lib/components/UIShell";
import { Link, Route, Switch } from 'react-router-dom';
// import LineChartContent from './LineChartContent';
// import BarChartContent from './BarChartContent';
// import MiscComponents from './MiscComponents';

function StoryContent() {
  return(
    <Content id="main-content">
      <div className="bx--grid">
        <div className="bx--row">
          <section className="bx--offset-lg-3 bx--col-lg-13">
            <h2
              style={{
                fontWeight: "800",
                margin: "30px 0",
                fontSize: "20px"
              }}
            >
              Purpose and function
            </h2>
            <p style={{ lineHeight: "20px" }}>
              The shell is perhaps the most crucial piece of any UI built with
              Carbon. It contains the shared navigation framework for the entire
              design system and ties the products in IBM’s portfolio together in a
              cohesive and elegant way. The shell is the home of the topmost
              navigation, where users can quickly and dependably gain their
              bearings and move between pages.
              <br />
              <br />
              The shell was designed with maximum flexibility built in, to serve
              the needs of a broad range of products and users. Adopting the shell
              ensures compliance with IBM design standards, simplifies development
              efforts, and provides great user experiences. All IBM products built
              with Carbon are required to use the shell’s header.
              <br />
              <br />
              To better understand the purpose and function of the UI shell,
              consider the “shell” of MacOS, which contains the Apple menu,
              top-level navigation, and universal, OS-level controls at the top of
              the screen, as well as a universal dock along the bottom or side of
              the screen. The Carbon UI shell is roughly analogous in function to
              these parts of the Mac UI. For example, the app switcher portion of
              the shell can be compared to the dock in MacOS.
            </p>
          </section>
        </div>
      </div>
    </Content>
  );
}

export default function Sidebar() {
  return(
    <div className="container">
        <SideNav
          isFixedNav
          expanded={true}
          isChildOfHeader={false}
          aria-label="Side navigation">
          <SideNavItems>
            <SideNavLink element={Link} to="/sidebar/barchart">BarChart</SideNavLink>
            <SideNavLink element={Link} to="/sidebar/linechart">LineChart</SideNavLink>
            <SideNavLink element={Link} to="/sidebar/misc-components">MiscComponents</SideNavLink>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem>
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem>
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem>
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem>
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem aria-current="page">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem>
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem>
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem aria-current="page">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem>
                L0 Services
              </SideNavMenuItem>
            </SideNavMenu>
          </SideNavItems>
        </SideNav>
        {/* <Switch>
          <Route exact path="/sidebar" render={props => <StoryContent />}/>
          <Route path="/sidebar/linechart" render={props => <LineChartContent />}/>
          <Route path="/sidebar/barchart" render={props => <BarChartContent />}/>
          <Route path="/sidebar/misc-components" render={props => <MiscComponents />}/>
        </Switch> */}
    </div>
  );
}

