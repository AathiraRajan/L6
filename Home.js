import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate('Edit', { key: item.key, type: section.title, index })
                }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button title="Add Letter" onPress={() => navigation.navigate('Add')} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>{title}</Text>
                )}
            />
        </View>
    );
};

export default Home;
