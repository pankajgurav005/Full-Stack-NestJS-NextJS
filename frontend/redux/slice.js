const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  isModalOpen: false,
}

const Slice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
    toggleModal: (state, action) => {
      if (action.payload === 'SIGN_IN') {
        state.isSigninModal = !state.isSigninModal;
      } else if (action.payload === 'SIGN_UP') {
        state.isSignupModal = !state.isSignupModal;
      }
    }
  }
});

export const { openModal, closeModal, toggleModal } = Slice.actions;
export default Slice.reducer;