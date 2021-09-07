import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    return (
        <Image
            source={{ uri: 'https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png' }}
            style={styles.image}
            resizeMode="cover"
        />

    );
};