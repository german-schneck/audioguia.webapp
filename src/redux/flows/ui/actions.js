// ActionTypes
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// Exporter
export function openModal(id, data) {
  return {
    type: OPEN_MODAL,
    payload: {
      id,
      data
    }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
