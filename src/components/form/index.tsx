import AuthInputField from '@components/AuthInputField';
import { PRIMARY } from '@utils/colors';
import { Formik, FormikHelpers } from 'formik';
import {Children, FC, ReactNode} from 'react';
import {View, StyleSheet, Button} from 'react-native'

interface Props<T> {
    initialValues: any;
    validationSchema: any;
    children: ReactNode
}

const Form = <T extends Object>(props: Props<T>) => {
   const {initialValues, validationSchema, children} = props
    return <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values)
        }
    }>
        {children}
    </Formik>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 15
    },
    marginBottom: {
        marginBottom: 20
    }
});

export default Form;