import {FC} from 'react';
import {View, StyleSheet, SafeAreaView, Button, Image, Text} from 'react-native'
import { PRIMARY } from '@utils/colors'
import AuthInputField from '@components/AuthInputField';
import * as yup from 'yup'
import SubmitButton from '@components/form/SubmitButton';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import OTPField from '@ui/OTPField';

const verificationSchema = yup.object({
    email: yup
        .string()
        .trim("Email is required")
        .email("Invalid email!")
        .required("Email is required!")
})

const initialValues = {
    email: ""
}

interface Props {}


const otpFields = new Array(6).fill('')


const Verification: FC<Props> = (props) => {

    return <AuthFormContainer
        heading='Forgot Password!'
        subHeading="Oops, did you forget your password? Don't worry, we'll help"
        initialValues={initialValues}
        validationSchema={verificationSchema}
    >
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                {otpFields.map((_, index) => {
                    return <OTPField key={index} placeholder='*'/>
                })}
            </View>

            <SubmitButton title='Submit'/>

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