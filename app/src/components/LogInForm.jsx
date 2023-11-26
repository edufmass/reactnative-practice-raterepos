import React from "react";
import { useField } from "formik";
import StyledText from "./StyledText";
import StyledTextInput from "./StyledTextInput";

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default FormikInputValue;