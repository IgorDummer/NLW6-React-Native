import React from 'react';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import {
    ImageBackground, Text, View
} from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider/indes';
import { ButtonIcon } from '../../components/ButtonIcon';

import Banner from '../../assets/banner.png';

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Veio da Havan',
            avatar_url: 'https://pbs.twimg.com/profile_images/1356432935445012481/bA1PVSHZ_400x400.jpg',
            status: 'online'
        },
        {
            id: '2',
            username: 'Juse',
            avatar_url: 'https://pbs.twimg.com/profile_images/1433116327074582545/IINXqlVy_400x400.jpg',
            status: 'online'
        },
        {
            id: '5',
            username: 'Falco',
            avatar_url: 'https://pbs.twimg.com/profile_images/1407887146845884419/1w39Nirk_400x400.jpg',
            status: 'online'
        },
        {
            id: '3',
            username: 'IGOOOOOOOR',
            avatar_url: 'https://pbs.twimg.com/profile_images/1433403246136205316/1dNRGi2W_400x400.jpg',
            status: 'offline'
        },
        {
            id: '4',
            username: 'Eliao',
            avatar_url: 'https://pbs.twimg.com/profile_images/1404309676733440003/-S7PZ2ph_400x400.jpg',
            status: 'offline'
        },
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground source={Banner} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        League of Legends
                    </Text>
                    <Text style={styles.subtitle}>
                        EOQ POG DALE VAMO DE LOLZIN FAMILIA MINHA IRELIA TA CANTANDO
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 5"
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title={'Entrar na partida'} />
            </View>
        </Background>
    );
}