import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabsNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Favorites from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: { 
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }
});

const MealFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: Favorites
});

export default createAppContainer(MealFavTabNavigator);