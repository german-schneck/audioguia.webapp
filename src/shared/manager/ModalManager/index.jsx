// Dependencies
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated, config } from 'react-spring';

// Selectors
import { getModal } from '../../../redux/flows/ui/selectors';

// Actions
import { closeModal } from '../../../redux/flows/ui/actions';

// Types
import { modalTypesId } from '../../types/ui';

// Modals
import ErrorModal from '../../components/modals/ids/ErrorModal';
import AlertModal from '../../components/modals/ids/AlertModal';

// Styles
import { Backdrop } from './styles';

function ModalManager() {
  // State
  const dispatch = useDispatch();
  const modal = useSelector(getModal);

  // Animation
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    visibility: 'hidden'
  }));

  const renderModalById = useMemo(() => {
    const { data = null } = modal;
    switch (modal.id) {
      case modalTypesId.ALERT:
        return (
            <AlertModal
              type={data.type}
              title={data.title}
              description={data.description}
              primaryAction={data.primaryAction}
              secondaryAction={data.secondaryAction}
            />
        );

      case modalTypesId.ERROR:
        return (
            <ErrorModal
              title={data.title}
              description={data.description}
              action={() => {
                dispatch(closeModal());
              }}
            />
        );

      default:
        return null;
    }
  }, [modal.id, modal.data]);

  useEffect(() => {
    if (modal.id) {
      api.start({
        opacity: 1,
        visibility: 'visible',
        transform: 'scale(1)',
        config: config.stiff
      });
    } else {
      api.start({
        opacity: 0,
        transform: 'scale(0.9)',
        visibility: 'hidden',
        config: config.stiff
      });
    }
  }, [modal.id]);

  return (
    <Backdrop visible={!!modal.id}>
      <animated.div style={styles}>
        {renderModalById}
      </animated.div>
    </Backdrop>
  );
}

export default ModalManager;
