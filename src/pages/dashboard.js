import React, {Component} from 'react';

import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  Item,
  Button,
  ImageBackground,
} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Menu from './requests';
import Orders from './payments';
import CustomerCare from './pendingpayments';

import Assets from '../assets/assets';

import Profile from './profile';
import Places from './places';
import Calendar from './calendar';
import Settings from './settings';
import AboutUs from './about';
import Tickets from './ticket';

import MenuDrawer from './MenuDrawer';
import LocationMap from './locationMap';
import Page from './page';
import Booking from './booking';
import NoticeBoard from './noticeboard';

class Dashboad extends Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.foodMenu} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: 'purple',
          style: {
            backgroundColor: '#f3940b',
            borderTopWidth: 3,
            borderTopColor: 'purple',
          },
          indicatorStyle: {
            backgroundColor: 'red',
          },
        },
      },
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        tabBarLabel: 'Your order',
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.order} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: 'purple',
          style: {
            backgroundColor: '#f3940b',
            borderTopWidth: 3,
            borderTopColor: '#f3940b',
          },
          indicatorStyle: {
            backgroundColor: 'red',
          },
        },
      },

      navigationOptions: ({navigation}) => ({
        title: navigation.getParam('categoryId', 'CategoryMeals'),
      }),
    },

    CustomerCare: {
      screen: CustomerCare,
      navigationOptions: {
        tabBarLabel: 'Customer Care',
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.customerCare} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: 'purple',
          style: {
            backgroundColor: '#f3940b',
            borderTopWidth: 3,
            borderTopColor: 'purple',
          },
          indicatorStyle: {
            backgroundColor: 'red',
          },
        },
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: "Kui's Menu" + '  ',
        headerStyle: {
          backgroundColor: '#f3940b',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  },
);

//--------STACK NAVIGATOR 1 ---------------------------------------------------

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: {screen: DashboardTabNavigator},
    LocationMap: {
      screen: LocationMap,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f3940b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Page: {
      screen: Page,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f3940b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    NoticeBoard: {
      screen: NoticeBoard,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f3940b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f3940b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerTitle: 'connectlift',
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{width: 40, height: 40}}
                source={Assets.bkdmenu3}
                name="ios-list"
                size={30}
              />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('NoticeBoard')}
              style={{
                width: 40,
                height: 40,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <ImageBackground
                source={Assets.emptyPlate}
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                imageStyle={{
                  resizeMode: 'contain', // works only here!
                }}>
                <View>
                  <Text style={{fontSize: 10, color: 'red'}}>5</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{width: 40, height: 40}}
                source={Assets.bkdsearch1}
                name="ios-list"
                size={30}
              />
            </TouchableOpacity>
          </View>
        ),
      };
    },
  },
);

//--------DRAWER NAVIGATOR 2 ---------------------------------------------------

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({navigation}) => {
    return <MenuDrawer navigation={navigation} />;
  },
};

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      //screen: DashboardTabNavigator
      screen: DashboardStackNavigator,
    },
    Profile: {
      screen: Profile,
    },
    Places: {
      screen: Places,
    },
    Tickets: {
      screen: Tickets,
    },
    Calendar: {
      screen: Calendar,
    },
    Settings: {
      screen: Settings,
    },
    AboutUs: {
      screen: AboutUs,
    },
  },
  DrawerConfig,
);

//--------SWITCH NAVIGATOR 1 ---------------------------------------------------

const connectliftwitchNavigator = createSwitchNavigator({
  DrawerNav: {screen: DrawerNavigator},
});

//--------NAVIGATOR CONTAINER 1 ---------------------------------------------------

const AppContainer = createAppContainer(connectliftwitchNavigator);

export default AppContainer;

//--------STYLES ----------------------------------------------------------------

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },

  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 250,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
  buttonContainer: {
    width: 250,
    backgroundColor: '#92ca2c',
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 250,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
  buttonContainer: {
    width: 250,
    backgroundColor: '#92ca2c',
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  },
  signupButton: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '500',
  },
  btmtab: {
    backgroundColor: 'red',
  },
});