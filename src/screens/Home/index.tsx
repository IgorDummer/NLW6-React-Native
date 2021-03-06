import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider/indes';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';


export function Home() {
    const [category, setCaterogy] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
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

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
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
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
};