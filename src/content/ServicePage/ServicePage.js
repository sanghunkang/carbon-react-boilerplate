import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  ExpandableTile,
  Search,
  SearchSkeleton,
  SearchFilterButton,
  SearchLayoutButton,
  DataTable,
} from 'carbon-components-react';
import { DonutChart, LineChart, ScatterChart, StackedBarChart } from '@carbon/charts-react';
import { InfoSection, InfoCard } from '../../components/Info';

import '@carbon/charts/styles.css';


export default function ServicePage() {
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
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter landing-page">
      <div className="bx--row sevice-page__r1 service-page__banner">
        <div className="bx--col-lg-16">
          <ExpandableTile />
        </div>
        <div className="bx--col-lg-4">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
          <Search labelText="label text"/>
          <SearchSkeleton />
          <SearchFilterButton />
          <SearchLayoutButton />

        </div>
        <div className="bx--col-lg-12">
          <StackedBarChart
            data={stackedBarData}
            options={stackedBarOptions}
          />
        </div>
        <div className="bx--col-lg-8">
          <DonutChart
            data={stackedBarData}
            options={stackedBarOptions}
          />
        </div>
        <div className="bx--col-lg-8">
          <ScatterChart
            data={stackedBarData}
            options={stackedBarOptions}
          />
        </div>
        <div className="bx--col-lg-8">
          <LineChart
            data={stackedBarData}
            options={stackedBarOptions}
          />
        </div>
        {/* <DataTable
              filterRows={function noRefCheck(){}}
              headers={[
                {
                  header: 'Name',
                  key: 'name'
                },
                {
                  header: 'Protocol',
                  key: 'protocol'
                },
                {
                  header: 'Port',
                  key: 'port'
                },
                {
                  header: 'Rule',
                  key: 'rule'
                },
                {
                  header: 'Attached Groups',
                  key: 'attached_groups'
                },
                {
                  header: 'Status',
                  key: 'status'
                }
              ]}
              locale="en"
              render={function noRefCheck(){}}
              rows={[
                {
                  attached_groups: 'Kevins VM Groups',
                  id: 'a',
                  name: 'Load Balancer 3',
                  port: 3000,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Disabled'
                },
                {
                  attached_groups: 'Maureens VM Groups',
                  id: 'b',
                  name: 'Load Balancer 1',
                  port: 443,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Starting'
                },
                {
                  attached_groups: 'Andrews VM Groups',
                  id: 'c',
                  name: 'Load Balancer 2',
                  port: 80,
                  protocol: 'HTTP',
                  rule: 'DNS delegation',
                  status: 'Active'
                },
                {
                  attached_groups: 'Marcs VM Groups',
                  id: 'd',
                  name: 'Load Balancer 6',
                  port: 3000,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Disabled'
                },
                {
                  attached_groups: 'Mels VM Groups',
                  id: 'e',
                  name: 'Load Balancer 4',
                  port: 443,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Starting'
                },
                {
                  attached_groups: 'Ronjas VM Groups',
                  id: 'f',
                  name: 'Load Balancer 5',
                  port: 80,
                  protocol: 'HTTP',
                  rule: 'DNS delegation',
                  status: 'Active'
                }
              ]}
              size={null}
              sortRow={function noRefCheck(){}}
              translateWithId={function noRefCheck(){}}
            /> */}
      </div>
    </div>
  )
}