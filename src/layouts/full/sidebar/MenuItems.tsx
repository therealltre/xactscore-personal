import { IconMailForward } from '@tabler/icons-react';
import {
  IconActivity,
  IconAperture, IconBriefcase, IconBriefcaseOff, IconCards, IconCashBanknote, IconChartArcs, IconChartHistogram, IconCopy, IconCreditCard, IconEPassport, IconGauge, IconLayoutDashboard, IconLogin, IconMail, IconMessage, IconMessage2, IconMoodHappy, IconRating12Plus, IconSettings, IconTypography, IconUser, IconUserPlus
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Score Factors',
  },
  {
    id: uniqueId(),
    title: 'Credit Usage',
    icon: IconChartHistogram,
    href: '/creditreport/creditusage',
  },
  {
    id: uniqueId(),
    title: 'Payment History',
    icon: IconCashBanknote,
    href: '/creditreport/paymenthistory',
  },
  {
    id: uniqueId(),
    title: 'Score Rating',
    icon:  IconGauge,
    href: '/creditreport/scorerating',
  },
  {
    id: uniqueId(),
    title: 'Account Mix',
    icon: IconCreditCard,
    href: '/creditreport/accountmix',
  },
  {
    id: uniqueId(),
    title: 'Account Age',
    icon: IconActivity,
    href: '/creditreport/accountage',
  },
  {
    id: uniqueId(),
    title: 'Inquiries',
    icon: IconMailForward,
    href: '/creditreport/inquiries',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Credit Report',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Score Factors',
  //   icon: IconGauge,
  //   href: '#',
  //   submenu: [
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '#',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '/scorefactors',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '/scorefactors',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '/scorefactors',
  //     },

  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Auth',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/authentication/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/authentication/register',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },

];

export default Menuitems;
