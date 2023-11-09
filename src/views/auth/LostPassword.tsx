import {FC} from 'react';
import {View, StyleSheet, SafeAreaView, Button, Image, Text} from 'react-native'
import { PRIMARY } from '@utils/colors'
import AuthInputField from '@components/AuthInputField';
import * as yup from 'yup'
import SubmitButton from '@components/form/SubmitButton';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import Form from '@components/form';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@src/@types/navigation';

const lostPasswordSchema = yup.object({
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
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>()


    return <Form 
        initialValues={initialValues}
        validationSchema={lostPasswordSchema}
        onSubmit={(values) => {
            console.log(values)
        }}
    >
        <AuthFormContainer
            heading='Forgot Password!'
            subHeading="Oops, did you forget your password? Don't worry, we'll help"
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
                        title='Sign In'
                        onPress={() => {
                            navigation.navigate("SignIn")
                        }}
                    />
                    <AppLink 
                        title='Sign Up'
                        onPress={() => {
                            navigation.navigate("SignUp")
                        }}
                    />
                </View>
            </View>
        </AuthFormContainer>
    </Form>
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