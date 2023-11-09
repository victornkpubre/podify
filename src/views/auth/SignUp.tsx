import {FC, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native'
import { PRIMARY } from '@utils/colors'
import AuthInputField from '@components/AuthInputField';
import SubmitButton from '@components/form/SubmitButton';
import PasswordVisibilityIcon from '@ui/PasswordVisibilityIcon';
import * as yup from 'yup'
import { FormikHelpers } from 'formik';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import Form from '@components/form';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@src/@types/navigation';



const signUpSchema = yup.object({
    name: yup
        .string()
        .trim("Invalid Input")
        .min(3, "Invlaid name")
        .required("Name is required"),
    email: yup
        .string()
        .trim("Email is required")
        .email("Invalid email!")
        .required("Email is required!"),
    password: yup
        .string()
        .trim("Password is required")
        .min(8, "Password is too short!")
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/, 'Password is too simple!')
        .required("Password is required!")
})

const initialValues = {
    name: "",
    email: "",
    password: ""
}

type NewUser = {
    name: "",
    email: "",
    password: ""
}

interface Props {}

const SignUp: FC<Props> = props => {
    const [secureEntry, setSecureEntry] = useState(true)
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>()

    const togglePasswordView = () => {
        setSecureEntry(!secureEntry)
    }


    return <Form 
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
            console.log(values)
        }}
    >
        <AuthFormContainer
            heading='Welcome'
            subHeading="Let's get started by creating your account"
        >
            <View style={styles.formContainer}>
                <AuthInputField
                    name= 'name'
                    placeholder='John Doe'
                    label='Name'
                    containerStyle={styles.marginBottom}
                />
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

                <SubmitButton title='Sign Up' />

                <View style={styles.linkContainer}>
                    <AppLink 
                        title='I Lost my Password'
                        onPress={() => {
                            navigation.navigate("LostPassword")
                        }}
                    />
                    <AppLink 
                        title='Sign In'
                        onPress={() => {
                            navigation.navigate("SignIn")
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

export default SignUp;