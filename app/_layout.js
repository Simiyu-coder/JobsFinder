import { Stack } from  'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    /*const [ fontsLoaded ] =useFonts({
        DMBold: require('../assets/fonts/DMsans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMsans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMsans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback( async () => {
        if(fontsLoaded){
            await hideAsync();
        }
    },[fontsLoaded])*/
    return <Stack/>
}

export default Layout;