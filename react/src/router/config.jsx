import React, { lazy } from 'react';

export const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   redirect: '/home',
  //   fallback: <div> Loading... </div>
  // },
  {
    path: '/',
    component: lazy(() => import('../views/home/home')),
    exact: true,
    private: false,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/login',
    component: lazy(() => import('../views/login')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  }
  // {
  //   path: '/admin',
  //   component: lazy(() => import('../layout/admin')),
  //   exact: false,
  //   private: true,
  //   fallback: <div> Loading... </div>,
  //   routes: [
  //     {
  //       path: '/home/signup',
  //       component: lazy(() => import('../views/sandwiches/sandwiches')),
  //       exact: false,
  //       private: false,
  //       fallback: <div> Loading... </div>
  //     },
  //     {
  //       path: '/home/login',
  //       component: lazy(() => import('../views/tacos/tacos')),
  //       exact: false,
  //       private: false,
  //       fallback: <div> Loading... </div>
  //     }
  //   ]
  // }
];
