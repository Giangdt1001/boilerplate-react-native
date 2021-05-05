import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/Theme'
import MainNavigator from '@/Navigators/Main'

const Stack = createStackNavigator()


// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(true)
  // const applicationIsLoading = useSelector(state => state.startup.loading)
  const applicationIsLoading = false


  // useEffect(() => {
  //   // if (MainNavigator == null && !applicationIsLoading) {
  //   //   console.log("MainNavigator",MainNavigator);
  //   //   console.log("applicationIsLoading",applicationIsLoading);
  //   MainNavigator = require('@/Navigators/Main').default
  //   setIsApplicationLoaded(true)
  //   // }
  // }, [applicationIsLoading]
  // )

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      // console.log("vao dayyyy");
      setIsApplicationLoaded(false)
      MainNavigator = null

    },
    [],
  )

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode={'none'}>
          {/* <Stack.Screen name="Startup" component={IndexStartupContainer} /> */}
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
