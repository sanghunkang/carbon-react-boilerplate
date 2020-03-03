import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import {
  Content,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  
} from "carbon-components-react/lib/components/UIShell";
// import { Link, Route, Switch } from 'react-router-dom';
// import LineChartContent from './LineChartContent';
// import BarChartContent from './BarChartContent';
// import MiscComponents from './MiscComponents';

export default function Visualizations() {
  return(
    <div>
      <Sidebar></Sidebar>
    </div>
  );
}