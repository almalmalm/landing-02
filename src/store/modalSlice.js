import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsOpen: false,
  },
  reducers: {
    closeModal(state, action) {
      state.modalIsOpen = action.payload;
    },
    openModal(state, action) {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
