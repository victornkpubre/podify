import {FC} from 'react';
import {View, StyleSheet, SafeAreaView, Button, Image, Text} from 'react-native'
import { PRIMARY } from '@utils/colors'
import AuthInputField from '@components/AuthInputField';
import * as yup from 'yup'
import SubmitButton from '@components/form/SubmitButton';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';

const LostPasswordSchema = yup.object({
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

const LostPassword: FC<Props> = props => {

    return <AuthFormContainer
        heading='Forgot Password!'
        subHeading="Oops, did you forget your password? Don't worry, we'll help"
        initialValues={initialValues}
        validationSchema={LostPasswordSchema}
    >
        <View style={styles.formContainer}>
            <AuthInputField
                name='email'
                placeholder='john@email.com'
                label='Email'
                keyboardType='email-address'
                autoCapitalize='none'
                containerStyle={styles.marginBottom}
            />

            <SubmitButton title='Sign In' />

            <View style={styles.linkContainer}>
                <AppLink 
                    title='I Lost my Password'
                    onPress={() => {
                        
                    }}
                />
                <AppLink 
                    title='Sign Up'
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
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    }
});

export default LostPassword;