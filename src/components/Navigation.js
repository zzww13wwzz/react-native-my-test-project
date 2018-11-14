import { createStackNavigator} from 'react-navigation';
import MealDetails from "./MealDetails";
import HomeScreen from "./HomeScreen";
import App from '../../App'

const Navigation = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: MealDetails },
    // App: {screen: App }
});

export default Navigation;