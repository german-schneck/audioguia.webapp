// Dependencies
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Routes
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import getRoutes from '../../../config/routes';

// Actions
import { fetchAuth } from '../../../redux/flows/auth/actions';

// Selectors
import { getIsLoadingAuth, getMe } from '../../../redux/flows/auth/selectors';

// Styled Components
import { SplashLayout, Container } from './styles';

// Components
import Header from '../../components/navigation/Header';

// Stripe
const stripePromise = loadStripe('pk_test_51K6LB4GNuJd9RVsfNlZJmETTsK3rGtfmeRlMdmFUi6MpRg9rHr1RidfxidFg7rMYYIqTeFwAqEeLkVKwShMtJJFQ00Y6ns74ut');

function AuthManager() {
  const dispatch = useDispatch();
  const user = useSelector(getMe);
  const isLoadingAuth = useSelector(getIsLoadingAuth);

  const options = {
    clientSecret: 'sk_test_51K6LB4GNuJd9RVsfn2iMVyXpypTmk7h5R4RtOdrsggRRMa5WMukTEBvLvFfUWKKgEhmEQbEvkYPsqEK02SU5kHlL00XCP3cxTI'
  };

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  const isAuthorized = useMemo(() => !!user, [user]);

  if (isLoadingAuth) {
    return (
      <SplashLayout>
        <InfinitySpin
          ariaLabel="loading-indicator"
          height={50}
          width={200}
          color="red"
          secondaryColor="transparent"
        />
      </SplashLayout>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      {(isAuthorized) && (
        <Header />
      )}
      <Container>
        <Switch>
          {getRoutes(isAuthorized, user).map((route, i) => (
            <Route
              key={`_route-key-${i.toString()}`}
              exact={true}
              {...route}
            />
          ))}
          <Route
            path={'*'}
            exact={true}
            component={() =>
              <Redirect
                to={'/'}
              />
            }
          />
        </Switch>
      </Container>
    </Elements>
  );
}

export default AuthManager;
