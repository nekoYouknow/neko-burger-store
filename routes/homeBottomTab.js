import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/home";
import LocaleScreen from "../screens/locale";
import SearchScreen from "../screens/search";
import CartScreen from "../screens/cart";
import OthersScreen from "../screens/others";

import React from "react";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // tabBarLabel: "Home",
      // tintColor: "#c0392b",
      tabBarIcon: ({ focused, tintColor }) => {
        return <Feather name="home" size={25} color={tintColor} />;
      }
    }
  },
  Locale: {
    screen: LocaleScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Entypo name="compass" size={25} color={tintColor} />;
      }
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name="ios-search" size={25} color={tintColor} />;
      }
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Feather name="shopping-cart" size={25} color={tintColor} />;
      }
    }
  },
  Others: {
    screen: OthersScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name="ios-menu" size={25} color={tintColor} />;
      }
    }
  }
};

const options = {
  tabBarOptions: {
    // headerMode: "none"
    activeTintColor: "#e74c3c",
    inactiveTintColor: "#bdc3c7",
    // labelStyle: {
    //   fontWeight: "bold"
    // },
    tabStyle: {
      paddingTop: 7
    },
    showLabel: false,
    showIcon: true

    // activeBackgroundColor: "green",
    // inactiveBackgroundColor: "yellow",
    // style: {
    //   borderWidth: 2,
    //   borderColor: "purple"
    // },
  }
};

export default createBottomTabNavigator(screens, options);
