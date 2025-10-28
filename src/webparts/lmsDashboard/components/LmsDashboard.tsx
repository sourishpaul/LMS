import * as React from 'react';
// import styles from './LmsDashboard.module.scss';
// import type { ILmsDashboardProps } from './ILmsDashboardProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import '../assets/css/color_theme.scss';
import '../assets/css/skin_color.scss';
import '../assets/css/vendors_css.scss';
import '../assets/css/style_rtl.scss';
import '../assets/css/style.scss';
import Header from './Header';

const LmsDashboard = () => {
  return (
    <div className='wrapper'>
      LmsDashboard
      <Header />
    </div>

  )
}

export default LmsDashboard
