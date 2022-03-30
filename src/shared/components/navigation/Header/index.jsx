// Dependencies
import React, { useCallback, useMemo } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Assets
import AudioguiaLogo from '../../../assets/icons/audioguia-alhambra.icon.svg';

import {
  LogOutOutline
} from 'react-ionicons';

// Styled Components
import {
  Layout,
  Logotype,
  Container,
  User,
  Name,
  LogoutButton,
  Left
} from './styles';

// Selectors
import { getMe } from '../../../../redux/flows/auth/selectors';

// Types
import alertsTypeId from '../../../types/alerts';
import { modalTypesId } from '../../../types/ui';

// Actions
import { closeModal, openModal } from '../../../../redux/flows/ui/actions';

// Utils
import LocalStorageUtils from '../../../utils/localStorage';

function Header() {
  // State
  const me = useSelector(getMe);
  const dispatch = useDispatch();

  const greetings = useMemo(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 0 && hour <= 5) {
      return 'Buenas noches';
    } else if (hour >= 6 && hour <= 13) {
      return 'Buenos días';
    } else if (hour >= 13 && hour <= 18) {
      return 'Buenas tardes';
    } else if (hour >= 18 && hour <= 23) {
      return 'Buenas noches';
    }
  }, []);

  const handleClickDisconnect = useCallback(() => {
    dispatch(openModal(modalTypesId.ALERT, {
      type: alertsTypeId.LOGOUT,
      title: 'Cerrar sesión',
      description: '¿Estás seguro que deseas salir?',
      primaryAction: function() {
        LocalStorageUtils.clear();
        window.location.reload();
      },
      secondaryAction: function() {
        dispatch(closeModal());
      }
    }));
  }, []);

  return (
    <Layout>
      <Container>
        <Left>
          <Link to={'/'}>
          <Logotype src={AudioguiaLogo} />
          </Link>

        </Left>

        <User>
          <Jazzicon diameter={28} seed={jsNumberForAddress(me.id)} />
          <Name>{greetings}, <b>{me.name}</b></Name>
          <LogoutButton onClick={handleClickDisconnect}>
            <LogOutOutline
              width={'20px'}
              color={'#595959'}
            />
          </LogoutButton>
        </User>
      </Container>
    </Layout>
  );
}

export default Header;
