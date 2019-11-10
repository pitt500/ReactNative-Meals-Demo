import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The category meal screen!</Text>
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