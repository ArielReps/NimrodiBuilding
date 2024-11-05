import { configureStore } from '@reduxjs/toolkit';
import floorAccessReducer from './floorreducer'; // Import the items reducer
import rolesReducer from './rolereducer'
const store = configureStore({
  reducer: {
    floorAccess: floorAccessReducer, // Combining reducers if necessary
    role: rolesReducer
  },
});

export default store;
