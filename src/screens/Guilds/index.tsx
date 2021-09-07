import React from 'react';

import {
    View, FlatList
} from 'react-native';

import { styles } from './styles';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider/indes';
import { GuildProps } from '../../components/Guild';

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'League of Legends',
            icon: 'image.png',
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>
    );
}