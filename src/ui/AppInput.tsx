import { INACTIVE_CONTRAST, SECONDARY } from '@utils/colors';
import {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native'

interface Props extends TextInputProps {}

const AppInput: FC<Props> = props => {
    return <TextInput 
        {...props}
        placeholderTextColor={INACTIVE_CONTRAST}
        autoCapitalize='none'
        secureTextEntry={true}
        style={[styles.input, props.style]}
    />
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: SECONDARY,
        height: 45,
        borderRadius: 15,
        paddingLeft: 10,
    },
});

export default AppInput;