import { configureStore } from '@reduxjs/toolkit';
import floorAccessReducer from './floorreducer'; 
import rolesReducer from './rolereducer'
const store = configureStore({
  reducer: {
    floorAccess: floorAccessReducer, 
    role: rolesReducer
  },
});

export default store;
