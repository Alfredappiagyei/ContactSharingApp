import { StatusBar } from 'expo-status-bar';
import React from 'react';
 
import Navigations from './Components/navigation'
import {Provider} from 'react-redux'
import {store, persister} from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react'
 
export default function App() {
  return (
     <Provider store={store}>
       <PersistGate persistor={persister}>
           <Navigations />
       </PersistGate>
   </Provider>
  );
}
 


