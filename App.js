import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  function HomeScreen() {
    return(
      <>
        <View>
          <Text>Ini adalah tampilan home</Text>
        </View>
      </>
    )
  }

  function AppScreen() {
    return(
      <>
        <View className="flex-1 bg-slate-200 justify-center items-center ">
          <Text className="text-blue-300">Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </>
    )
  }

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={AppScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
