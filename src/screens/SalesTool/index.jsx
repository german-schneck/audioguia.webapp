// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

// Styled Components
import {
  Layout,
  Field,
  Grid,
  Row
} from './styles';
import { MarginContainer } from '../../shared/components';

// Sections
import CreateAccounts from './sections/CreateAccounts';
import AccountsList from './sections/AccountsList';

// Components
import Title from '../../shared/components/misc/Title';
import Button from '../../shared/components/buttons/Button';
import TextInput from '../../shared/components/inputs/TextInput';

// Actions
import { fetchApps } from '../../redux/flows/apps/actions';
import { getApps, getIsLoadingApps } from '../../redux/flows/apps/selectors';

// Types
import appsIds from '../../shared/types/apps';

function SalesTool() {
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
            text={'Herramienta de ventas'}
            description={'Gestiona tus ventas desde aqui. Podrás crear hasta una cierta cantidad asignada de códigos de acceso a la app'}
          />
        </Field>
        <Field>
          <Switch>
            <Route
              exact={true}
              path={'/apps/1/sales'}
              component={AccountsList}
            />
            <Route
              exact={true}
              path={'/apps/1/sales/create-accounts'}
              component={CreateAccounts}
            />
          </Switch>
        </Field>
      </MarginContainer>
    </Layout>
  );
}

export default SalesTool;
