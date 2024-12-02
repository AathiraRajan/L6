import React, { useState } from 'react';
import { datasource } from './Data.js';
import { TextInput, View, Text, Button, StyleSheet, Alert } from 'react-native';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput
                    value={letter}
                    style={{ borderWidth: 1 }}
                    maxLength={1}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            let indexNum = route.params.type === 'Vowels' ? 0 : 1;
                            datasource[indexNum].data[route.params.index].key = letter;
                            navigation.navigate('Home');
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            let indexNum = route.params.type === 'Vowels' ? 0 : 1;
                            Alert.alert('Are you sure?', '', [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        datasource[indexNum].data.splice(route.params.index, 1);
                                        navigation.navigate('Home');
                                    },
                                },
                                { text: 'No' },
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default Edit;
