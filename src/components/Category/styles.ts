import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15,
        marginTop: 15
    },
    checked: {
        position: 'absolute',
        top: 9,
        right: 9,
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary,
        //alignSelf: 'flex-end',
        //marginRight: 7,
        borderRadius: 2
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        //alignSelf: 'flex-end',
        //marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    }
});