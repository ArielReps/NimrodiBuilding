import { configureStore } from '@reduxjs/toolkit';
import floorAccessReducer from './blalafloorreducer'; // Import the items reducer
import rolesReducer from './blablarolereducer'
const store = configureStore({
  reducer: {
    floorAccess: floorAccessReducer, // Combining reducers if necessary
    role: rolesReducer
  },
});

export default store;
