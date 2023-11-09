import {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { PRIMARY } from '@utils/colors';
import AuthInputField from '@components/AuthInputField';
import SubmitButton from '@components/form/SubmitButton';
import PasswordVisibilityIcon from '@ui/PasswordVisibilityIcon';
import * as yup from 'yup';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import Form from '@components/form';


const SignInSchema = yup.object({
    email: yup
        .string()
        .trim("Email is required")
        .email("Invalid email!")
        .required("Email is required!"),
    password: yup
        .string()
        .trim("Password is required")
        .min(8, "Password is too short!")
        .required("Password is required!")
})

const initialValues = {
    email: "",
    password: ""
}



interface Props {}

const SignIn: FC<Props> = props => {
    const [secureEntry, setSecureEntry] = useState(true)

    const togglePasswordView = () => {
        setSecureEntry(!secureEntry)
    }


    return <Form 
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
            console.log(values)
        }}
    > 
        <AuthFormContainer
            heading='Welcome back'
            subHeading="Let's log in your account"
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
                <AuthInputField
                    name="password"
                    placeholder='**********'
                    label='Password'
                    autoCapitalize='none'
                    secureTextEntry={secureEntry}
                    containerStyle={styles.marginBottom}
                    rightIcon={<PasswordVisibilityIcon privateIcon={secureEntry} />}
                    onRightIconPress={togglePasswordView}
                />
                <View  style={{height:16}}/>

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
    </Form>
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 15
    },
    marginBottom: {
        marginBottom: 15
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    }
});

export default SignIn;