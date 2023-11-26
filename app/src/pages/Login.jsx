import React from "react";
import { Formik } from "formik";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import LogInForm from "../components/LogInForm";
import FormikInputValue from "../components/LogInForm";

const initialValues = {
    email: '',
    password: ''
}
const LoginPage = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={ values => console.log(values) }
        >
            { ({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <Text>Working on login Form!</Text>
                        <FormikInputValue
                            name='email'
                            placeholder='email' />
                        <FormikInputValue
                            name='password'
                            placeholder='password'
                            secureTextEntry />
                        <Button
                            title='Login'
                            onPress={handleSubmit}/>
                    </View>
                );
            }}
        </Formik>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    form: {
        margin: 12,
    }
});