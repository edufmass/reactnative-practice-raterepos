import React from "react";
import { Formik } from "formik";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import FormikInputValue from "../components/LogInForm";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
    email: '',
    password: ''
}


const LoginPage = () => {
    return (
        <Formik
            validationSchema={loginValidationSchema}
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