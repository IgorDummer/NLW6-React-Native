import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
    var phrases = [
        ':)',
        'rapaz (ratinhoo)',
        'CAVALO',
        'e.e',
        'po mano assiste naruto'
    ];

    function shuffle(array: any) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    shuffle(phrases);

    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/IgorDummer.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Igor
                    </Text>
                </View>
                <Text style={styles.message}>
                    {phrases[0]}
                </Text>
            </View>
        </View>
    );
};