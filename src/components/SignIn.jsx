import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from '../config/firebase';
import {useNavigate} from "react-router-dom";
import {Formik} from "formik";
import * as yup from "yup";
export const SignIn = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const handleSignIn = async (values) => {
        // alert(`${email}, ${password}`)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((user) => {
                console.log(user)
                navigate("/");
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    return (
        <Box>
                <Formik
                    onSubmit={handleSignIn}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Box m={4} flexDirection="column" maxWidth="400px">
                                <TextField fullWidth
                                           label="Enter E-mail"
                                           type="email"
                                           name="email"
                                           sx={{marginBottom: "20px"}}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.email}
                                           error={!!touched.email && !!errors.email}
                                           helperText={touched.email && errors.email}
                                />
                                <TextField fullWidth
                                           label="Enter Password"
                                           type="password"
                                           name="password"
                                           sx={{marginBottom: "20px"}}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.password}
                                           error={!!touched.password && !!errors.password}
                                           helperText={touched.password && errors.password}
                                />
                                <Button type="submit"> Sign in </Button>
                            </Box>
                        </form>
                    )}
                </Formik>

        </Box>
    )
}

const validationSchema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
});
const initialValues = {
    email: "",
    password: "",
}