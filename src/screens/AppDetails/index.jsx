// Dependencies
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Switch, Route } from 'react-router-dom';

// Styled Components
import {
  Layout,
  Wrapper,
  AppLogo,
  Title,
  Location,
  Container,
  Navigation,
  NavItem,
  NavText,
  NavIcon,
  NavigatorWrapper
} from './styles';

// Components

// Assets
import {
  TicketOutline,
  InformationCircleOutline,
  PersonAddOutline
} from 'react-ionicons';
import AudioguiaAlhambraLogo from '../../shared/assets/icons/audioguia-alhambra.icon.svg';

// Actions
import { fetchApps } from '../../redux/flows/apps/actions';
import { getAppById, getIsLoadingApps } from '../../redux/flows/apps/selectors';

// Sections
import AboutOfApp from './sections/AboutOfApp';
import Invitations from './sections/Invitations';
import Membership from './sections/Membership';
import { MarginContainer } from '../../shared/components';
import { appStateTypesId } from '../../shared/types/apps';

function AppDetails() {
  // Params
  const params = useParams();

  // State
  const dispatch = useDispatch();
  const app = useSelector((state) => getAppById(state, params.id));
  const isLoadingApps = useSelector(getIsLoadingApps);

  useEffect(() => {
    if (params && params.id) {
      dispatch(fetchApps(params.id));
    }
  }, []);

  const isPurchased = useMemo(() =>
    app.state === appStateTypesId.ALREADY_PURCHASED,
  [app.state]);

  if (isLoadingApps) {
    return null;
  }

  return (
    <Layout>
      <Wrapper>
        <Container>
          <AppLogo src={AudioguiaAlhambraLogo} />
          <Title>{app.name}</Title>
          <Location>Granada, Andalucía - España</Location>
        </Container>
      </Wrapper>
      <NavigatorWrapper>
        <MarginContainer>
          <Navigation>
            <NavItem exact={true} to={'/apps/1/'}>
              <NavIcon>
                <InformationCircleOutline
                  width={'22px'}
                  height={'22px'}
                  color={'currentColor'}
                />
              </NavIcon>
              <NavText>
                Sobre la app
              </NavText>
            </NavItem>
            <NavItem exact={true} to={`/apps/${app.id}/membership`}>
              <NavIcon>
                <TicketOutline
                  width={'22px'}
                  height={'22px'}
                  color={'currentColor'}
                />
              </NavIcon>
              <NavText>
                {isPurchased ? 'Membresía' : 'Comprar'}
              </NavText>
            </NavItem>
            <NavItem exact={true} to={`/apps/${app.id}/invitations`}>
              <NavIcon>
                <PersonAddOutline
                  width={'22px'}
                  height={'22px'}
                  color={'currentColor'}
                />
              </NavIcon>
              <NavText>
                Invitar
              </NavText>
            </NavItem>
          </Navigation>
        </MarginContainer>
      </NavigatorWrapper>
      <Switch>
        <Route
          exact={true}
          path={'/apps/1'}
          component={AboutOfApp}
        />
        <Route
          exact={true}
          path={'/apps/1/membership'}
          component={Membership}
        />
        <Route
          exact={true}
          path={'/apps/1/invitations'}
          component={Invitations}
        />
      </Switch>
    </Layout>
  );
}

export default AppDetails;
