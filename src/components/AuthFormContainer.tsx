import CircleUI from '@ui/CircleUI';
import {FC, ReactNode} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import { CONTRAST, SECONDARY } from '@utils/colors';


interface Props {
    children: ReactNode
    heading?: string
    subHeading?: string
}

const AuthFormContainer: FC<Props> = ({heading, subHeading, children}) => {

    return <View style={styles.container}>
        <CircleUI size={300} position='top-left'/>
        <CircleUI size={200} position='top-right'/>
        <CircleUI size={200} position='bottom-left'/>
        <CircleUI size={300} position='bottom-right'/>

        <View style={styles.headerContainer}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subHeading}>
                {subHeading}
            </Text>
        </View>
        {children}
        {/* <Form 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
        >{children}</Form> */}
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        color: SECONDARY,
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    subHeading: {color: CONTRAST, fontSize: 16},
    headerContainer: {width: '100%', marginBottom:20}
});

export default AuthFormContainer;