import { createSwitchNavigator } from "react-navigation";
import OnboardingScreen from "../screens/onboarding";
import HomeStack from "./homeStack";

const screens = {
  Onboarding: {
    screen: OnboardingScreen
  },
  Home: {
    screen: HomeStack
  }
};

// const options = {
//   headerMode: 'none'
// }

export default createSwitchNavigator(screens);
