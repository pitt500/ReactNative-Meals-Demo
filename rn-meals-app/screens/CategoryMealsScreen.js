import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The category meal screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to detail!" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'}) // or props.navigation.navigate('CategoryMeals')
             }} />
             <Button title="Go back" onPress={() => {
                 props.navigation.goBack();
             }}/>
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;