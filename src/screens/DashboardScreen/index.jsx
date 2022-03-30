// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styled Components
import {
  Layout,
  Field,
  AppList
} from './styles';
import { MarginContainer } from '../../shared/components';

// Components
import Title from '../../shared/components/misc/Title';
import AppCard from '../../shared/components/misc/AppCard';

// Actions
import { fetchApps } from '../../redux/flows/apps/actions';
import { getApps, getIsLoadingApps } from '../../redux/flows/apps/selectors';

// Types
import { appsIds, appStateTypesId } from '../../shared/types/apps';

function DashboardScreen() {
  // State
  const dispatch = useDispatch();
  const isLoadingApps = useSelector(getIsLoadingApps);
  const apps = useSelector(getApps);

  // Functions
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchApps());
  }, []);

  return (
    <Layout>
      <MarginContainer>
        <Field>
          <Title
            text={'Apps'}
            description={'Descubre todas nuestras apps disponibles para disfrutar de una experiencia turística superior.'}
          />
        </Field>
        {isLoadingApps ? (
          <>
            Loading
          </>
        ) : (
          <AppList>
            {(apps || []).map((app, index) => (
              <AppCard
                key={`--app-${index.toString()}`}
                as={'li'}
                state={app.state}
                title={app.name}
                image={appsIds[app.id].image}
                onClick={() => app.state === appStateTypesId.UNAVAILABLE ? null : history.push(`/apps/${app.id}`)}
              />
            ))}
          </AppList>
        )}
      </MarginContainer>
    </Layout>
  );
}

export default DashboardScreen;
