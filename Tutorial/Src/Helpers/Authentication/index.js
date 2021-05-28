import * as React from 'react';
import {AuthContext} from './AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerMenu, LoginModule } from '../../Routing';


export default function Authentication({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':

          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':

          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
      
        dispatch({ type: 'SIGN_IN', token: data });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
     
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
        {state.userToken == null ? (
            
          <LoginModule />
        ) : (
          <DrawerMenu />
        )}
    </AuthContext.Provider>
  );
}