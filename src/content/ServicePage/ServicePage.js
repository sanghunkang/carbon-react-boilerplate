import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  Search,
  SearchSkeleton,
  SearchFilterButton,
  SearchLayoutButton,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';

export default function ServicePage() {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row service-page__banner">
        <div className="bx--col-lg-4">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
          <Search />
          <SearchSkeleton />
          <SearchFilterButton />
          <SearchLayoutButton />
        </div>
      </div>
    </div>
  )
}