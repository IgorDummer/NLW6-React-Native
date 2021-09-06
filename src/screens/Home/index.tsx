import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider/indes';

import { styles } from './styles';


export function Home() {
    const [category, setCaterogy] = useState('');

    const appointments = [{
        id: '1',
        guild: {
            id: '1',
            name: 'League of Legends',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20h40',
        description: 'É hoje que vamos chegar no challenger sem perder uma partida da md10'
    }, {
        id: '2',
        guild: {
            id: '1',
            name: 'League of Legends',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20h40',
        description: 'É hoje que vamos chegar no challenger sem perder uma partida da md10'
    }]

    function handleCaterogySelect(categoryId: string) {
        categoryId === category ? setCaterogy('') : setCaterogy(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCaterogySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}