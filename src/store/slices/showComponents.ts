import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileNavList: false,
};

type PayloadType = keyof typeof initialState;

const showComponentsSlice = createSlice({
  name: 'show-components',
  initialState,
  reducers: {
    showComponent: (state, { payload }: { payload: PayloadType }) => {
      state[payload] = true;
    },

    hideComponent: (state, { payload }: { payload: PayloadType }) => {
      state[payload] = false;
    },

    toggleComponent: (state, { payload }: { payload: PayloadType }) => {
      state[payload] = !state[payload];
    },
  },
});

export default showComponentsSlice.reducer;

export const { showComponent, hideComponent, toggleComponent } =
  showComponentsSlice.actions;
