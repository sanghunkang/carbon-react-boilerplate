import React, { useState } from 'react';
import { Content } from "carbon-components-react/lib/components/UIShell";
import { StackedBarChart } from '@carbon/charts-react';

export default function BarChartContent() {
  const [stackedBarData, setStackedBarData] = useState({
    labels: ['Quantity', 'Leads', 'Sold', 'Restocking', 'Misc'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [32432, 21312, 56456, 21312, 34234],
      },
      {
        label: 'Dataset 1',
        data: [65000, 29123, 35213, 51213, 16932],
      },
      {
        label: 'Dataset 3',
        data: [12312, 23232, 34232, 12312, 34234],
      },
    ],
  });

  const [stackedBarOptions, setStackedBarOptions] = useState({
    title: 'Stacked bar (discrete)',
    axes: {
      left: {
        primary: true,
        stacked: true,
      },
      bottom: {
        scaleType: 'labels',
        secondary: true,
      },
    },
    height: '400px',
  });

  return (
    <div id="main-content">
      <div className="bx--grid">
        <div className="bx--row">
          <section className="bx--offset-lg-3 bx--col-lg-13">
            <StackedBarChart
              data={stackedBarData}
              options={stackedBarOptions}
            />
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
            <h2
              style={{
                fontWeight: "800",
                margin: "30px 0",
                fontSize: "20px"
              }}
            >
              Header responsive behavior
            </h2>
            <p style={{ lineHeight: "20px" }}>
              As a header scales down to fit smaller screen sizes, headers with
              persistent side nav menus should have the side nav collapse into
              “hamburger” menu. See the example to better understand responsive
              behavior of the header.
            </p>
            <h2
              style={{
                fontWeight: "800",
                margin: "30px 0",
                fontSize: "20px"
              }}
            >
              Secondary navigation
            </h2>
            <p style={{ lineHeight: "20px" }}>
              The side-nav contains secondary navigation and fits below the
              header. It can be configured to be either fixed-width or flexible,
              with only one level of nested items allowed. Both links and category
              lists can be used in the side-nav and may be mixed together. There
              are several configurations of the side-nav, but only one
              configuration should be used per product section. If tabs are needed
              on a page when using a side-nav, then the tabs are secondary in
              hierarchy to the side-nav.
            </p>
            <h2
              style={{
                fontWeight: "800",
                margin: "30px 0",
                fontSize: "20px"
              }}
            >
              Secondary navigation
            </h2>
            <p style={{ lineHeight: "20px" }}>
              The side-nav contains secondary navigation and fits below the
              header. It can be configured to be either fixed-width or flexible,
              with only one level of nested items allowed. Both links and category
              lists can be used in the side-nav and may be mixed together. There
              are several configurations of the side-nav, but only one
              configuration should be used per product section. If tabs are needed
              on a page when using a side-nav, then the tabs are secondary in
              hierarchy to the side-nav.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};