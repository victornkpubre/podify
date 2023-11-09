import {FC, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Button, Image, Text, TextInput, Keyboard} from 'react-native'
import { PRIMARY } from '@utils/colors'
import AuthInputField from '@components/AuthInputField';
import * as yup from 'yup'
import SubmitButton from '@components/form/SubmitButton';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import OTPField from '@ui/OTPField';
import AppButton from '@ui/AppButton';


interface Props {}


const otpFields = new Array(6).fill('')


const Verification: FC<Props> = (props) => {
    const [otp, setOtp] = useState([...otpFields])
    const [activeOtpIndex, setActiveOtpIndex] = useState(0)

    const inputRef = useRef<TextInput>(null)

    const handleChange = (value: string, index: number) => {
        console.log(value+" "+index)
        const newOtp = [...otp]
        if(value === 'Backspace') {
            if(!newOtp[index]) setActiveOtpIndex(index - 1)
            newOtp[index] = ''
        }
        else {
            setActiveOtpIndex(index + 1)
            newOtp[index] = value
        }
        setOtp([...newOtp])
    }

    const handlePaste = (value: string) => {
        if(value.length === 6) {
            Keyboard.dismiss()
            const newOtp = value.split('')
            setOtp([...newOtp])
        }
    }
    const handleSubmit = () => {
        console.log(otp)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [activeOtpIndex])

    return <AuthFormContainer
        heading='Forgot Password!'
        subHeading="Oops, did you forget your password? Don't worry, we'll help"
    >
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                {otpFields.map((_, index) => {
                    return <OTPField 
                        ref={activeOtpIndex === index? inputRef: null}
                        key={index} 
                        placeholder='*'
                        onKeyPress={({nativeEvent}) => {
                            handleChange(nativeEvent.key, index)
                        }}
                        onChangeText={handlePaste} //-- Doesn't work on andriod
                        keyboardType='numeric'
                        value={otp[index] || ''}
                    />
                })}
            </View> 

            <AppButton title='Submit' onPress={handleSubmit}/>

            <View style={styles.linkContainer}>
                <AppLink
                    title='Re-send OTP'
                    onPress={() => {

                    }}
                />
            </View>
        </View>
    </AuthFormContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    formContainer: {
        width: '100%',
    },
    marginBottom: {
        marginBottom: 16
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20
    }
});

export default Verification;