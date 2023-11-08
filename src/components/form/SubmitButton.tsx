import AppButton from '@ui/AppButton';
import { useFormikContext } from 'formik';
import {FC} from 'react';
import {StyleSheet, Button} from 'react-native'

interface Props {
    title: string
}

const SubmitButton: FC<Props> = props => {
    const {handleSubmit} = useFormikContext()
    return <AppButton onPress={handleSubmit} title={props.title}/>
};

const styles = StyleSheet.create({
    container: {},
});

export default SubmitButton;