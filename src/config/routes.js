// Dependencies
import React from 'react';

// Screens
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AppDetails from '../screens/AppDetails';
import InvitationsScreen from '../screens/SalesTool/InvitationsScreen';
import InviteScreen from '../screens/SalesTool/InviteScreen';

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
      <InvitationsScreen />
    )
  },
  {
    path: '/apps/:id/sales/create-accounts',
    component: () => (
      <InviteScreen />
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
