import { CONTRAST, SECONDARY } from '@utils/colors';
import {FC} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native'
import Loader from './Loader';

interface Props {
    title: string;
    onPress?(): void;
    busy?: boolean
}

const AppButton: FC<Props> = ({title, busy, onPress}) => {
    return <Pressable onPress={onPress} style={styles.container}> 
        {!busy? <Text style={styles.title}> {title} </Text>: <Loader/>}
    </Pressable>
};

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 45, 
        backgroundColor: SECONDARY, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 25 
    },
    title: {
        color: CONTRAST,
        fontSize: 18
    }
});


export default AppButton