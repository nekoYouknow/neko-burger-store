import { createStackNavigator } from "react-navigation-stack";
import HomeBottomTab from "./homeBottomTab";
import MenuScreen from "../screens/menu";
import PizzaScreen from "../screens/pizza";

const screens = {
  Home: {
    screen: HomeBottomTab
  },
  Menu: {
    screen: MenuScreen
  },
  Pizza: {
    screen: PizzaScreen
  }
};

const options = {
  headerMode: "none"
};

export default createStackNavigator(screens, options);
