// Dependencies
import React from 'react';

// Screens
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AppDetails from '../screens/AppDetails';
import SalesTool from '../screens/SalesTool';

// Types
import { userRolesId } from '../shared/types/users';

const authorizedRoutes = [
  {
    path: '/',
    component: () => (
      <DashboardScreen />
    )
  },
  {
    path: '/apps/:id',
    component: () => (
      <AppDetails />
    )
  },
  {
    path: '/apps/:id/membership',
    component: () => (
      <AppDetails />
    )
  },
  {
    path: '/apps/:id/invitations',
    component: () => (
      <AppDetails />
    )
  }
];

const superAuthorizedRoutes = [
  ...authorizedRoutes,
  {
    path: '/apps/:id/sales',
    component: () => (
      <SalesTool />
    )
  },
  {
    path: '/apps/:id/sales/create-accounts',
    component: () => (
      <SalesTool />
    )
  }
];

const unauthorizedRoutes = [
  {
    path: '/',
    index: true,
    component: () => (
      <LoginScreen />
    )
  }
];

const getRoutes = (isAuthorized, role = null) =>
  isAuthorized ? role && role.role === userRolesId.USER ? authorizedRoutes : superAuthorizedRoutes : unauthorizedRoutes;

export default getRoutes;
