import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;