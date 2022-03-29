import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import config from '../config';

interface PrivateRouteProps {
  children: ReactElement;
  redirectTo: string;
}

const {
  constants: { TOKEN_KEY },
} = config;

export default function PrivateRoute({
  children,
  redirectTo,
}: PrivateRouteProps) {
  const isAuthenticated = !!localStorage.getItem(TOKEN_KEY);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
