import { CONTRAST, INACTIVE_CONTRAST, SECONDARY } from '@utils/colors';
import React from 'react';
import {FC, forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native'

interface Props extends TextInputProps {
}

const OTPField:FC<Props> = ((props) => {
    return <TextInput
        {...props} 
        style={[styles.input, props.style]} 
        placeholderTextColor={INACTIVE_CONTRAST} 
    />
});

const styles = StyleSheet.create({
    input: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: SECONDARY,
        borderWidth: 2,
        textAlign: 'center',
        color: CONTRAST,
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 0
    },
});

export default OTPField;