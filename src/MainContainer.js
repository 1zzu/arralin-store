import React from 'react'
import { TouchableHighlight } from 'react-native'

// for navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// screen
import HomeScreen from './pages/HomeScreen'
import WishlistScreen from './pages/WishlistScreen'
import ProfileScreen from './pages/ProfileScreen'
import TransactionScreen from './pages/TransactionScreen'

const homeName = 'Beranda'
const wishListName = 'Wishlist'
const profileName = 'Profil'
const transactionName = 'Transaksi'

const Tab = createBottomTabNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
            tabBarLabelStyle: { paddingBottom: 6, fontSize: 11, color: 'grey' },
            tabBarIconStyle: { marginTop: 6, },
            tabBarStyle: { height: 60 },
            tabBarButton: (props) => <TouchableHighlight underlayColor={'#EEEEEE'} {...props}  />,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                let rn = route.name

                if ( rn == homeName) {
                    iconName = focused ? 'book' : 'book-outline'
                    color = focused ? '#03346E' : '#758694'
                    size = focused ? 28 : 24
                } else if ( rn == transactionName) {
                    iconName = focused ? 'receipt' : 'receipt-outline'
                    color = focused ? '#03346E' : '#758694'
                    size = focused ? 28 : 24
                } else if ( rn == wishListName) {
                    iconName = focused ? 'heart' : 'heart-outline'
                    color = focused ? '#DC2855' : '#758694'
                    size = focused ? 28 : 24
                } else if ( rn == profileName ) {
                    iconName = focused ? 'person' : 'person-outline'
                    color = focused ? '#03346E' : '#758694'
                    size = focused ? 28 : 24
                }

                return <Ionicons name={iconName} color={color} size={size} />
            },
        })}>

            <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name={wishListName} component={WishlistScreen} />
            <Tab.Screen name={transactionName} component={TransactionScreen} />
            <Tab.Screen name={profileName} component={ProfileScreen} />

        </Tab.Navigator>
    </NavigationContainer>
  )
}
