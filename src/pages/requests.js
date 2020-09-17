/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Featured from './featured';
import MainDishes from './maindishes';
import FastFood from './fastfood';
import Drinks from './drinks';
import African from './african';
import Exotic from './world';

import Assets from '../assets/assets';

const Drawer = createMaterialTopTabNavigator(
  {
    Featured: {
      screen: Featured,
      navigationOptions: {
        tabBarLabel: (
          <Text style={{fontSize: 10, color: '#fff'}}> Day feature </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.dayMenu} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: '#f3940b',
          inactiveTintColor: '#D3D3D3',
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: '#f3940b',
            borderTopColor: '#D3D3D3',
          },
          indicatorStyle: {
            backgroundColor: 'green',
          },
        },
      },
    },
    MainDishes: {
      screen: MainDishes,
      navigationOptions: {
        tabBarLabel: (
          <Text style={{fontSize: 10, color: '#fff'}}>Main dishes</Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.mainFood} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: '#f3940b',
          inactiveTintColor: '#D3D3D3',
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: '#f3940b',
            borderTopColor: '#D3D3D3',
          },
          indicatorStyle: {
            backgroundColor: 'green',
          },
        },
      },
    },
    FastFood: {
      screen: FastFood,
      navigationOptions: {
        tabBarLabel: (
          <Text style={{fontSize: 10, color: '#fff'}}>Fast food</Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.snacks} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: '#f3940b',
          inactiveTintColor: '#D3D3D3',
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: '#f3940b',
            borderTopColor: '#D3D3D3',
          },
          indicatorStyle: {
            backgroundColor: 'green',
          },
        },
      },
    },
    Drinks: {
      screen: Drinks,
      navigationOptions: {
        tabBarLabel: (
          <Text style={{fontSize: 10, color: '#fff'}}>All drinks</Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.drinks} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: '#f3940b',
          inactiveTintColor: '#D3D3D3',
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: '#f3940b',
            borderTopColor: '#D3D3D3',
          },
          indicatorStyle: {
            backgroundColor: 'green',
          },
        },
      },
    },
    African: {
      screen: African,
      navigationOptions: {
        tabBarLabel: (
          <Text style={{fontSize: 10, color: '#fff'}}>African food</Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.Africa} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: '#f3940b',
          inactiveTintColor: '#D3D3D3',
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: '#f3940b',
            borderTopColor: '#D3D3D3',
          },
          indicatorStyle: {
            backgroundColor: 'green',
          },
        },
      },
    },
    Exotic: {
      screen: Exotic,
      navigationOptions: {
        tabBarLabel: (
          <Text style={{fontSize: 10, color: '#fff'}}> Exotic food</Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image source={Assets.World} style={{height: 20, width: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: '#f3940b',
          inactiveTintColor: '#D3D3D3',
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: '#f3940b',
            borderTopColor: '#D3D3D3',
          },
          indicatorStyle: {
            backgroundColor: 'green',
          },
        },
      },
    },
  },
  {
    navigationOptions: {
      tabBarLabel: 'u',
      tabBarIcon: ({tintColor}) => (
        <Image source={Assets.order} style={{height: 20, width: 20}} />
      ),
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: '#D3D3D3',
        style: {
          backgroundColor: '#f3940b',
          borderTopColor: '#D3D3D3',
        },
        indicatorStyle: {
          backgroundColor: 'green',
        },
      },
    },
  },
);

const PContainer = createAppContainer(Drawer);

export default PContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3940b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
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
});
