import {Box, Button, Link, TextField} from "@mui/material";
import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from '../config/firebase';
import {useNavigate} from "react-router-dom";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {Formik} from "formik";
import * as yup from 'yup'
export const SignUp = () => {

    const navigate = useNavigate();
    const auth = getAuth(app);
    const db = getFirestore(app);
    const usersRef = collection(db, "users");

    const handleSignUp = async (values) => {
        // alert(`${email}, ${password}`)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((user) => {
                console.log(user)
                addDoc(usersRef, {
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName
                })
                navigate("/");
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    return (
        <Box>
            <Box m={4} flexDirection="column" maxWidth="400px">
                <Formik
                    onSubmit={handleSignUp}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >

                    {({
                          values,
                          errors,
                          touched,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="flex"
                                flexDirection="column"
                            >
                                <TextField
                                    label="Enter your first name"
                                    name="firstName"
                                    fullWidth
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{
                                        mb: "30px"
                                    }}
                                />
                                <TextField
                                    label="Enter your last name"
                                    name="lastName"
                                    fullWidth
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{
                                        mb: "30px"
                                    }}
                                />
                                <TextField
                                    label="Enter your email"
                                    name="email"
                                    fullWidth
                                    type="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{
                                        mb: "30px"
                                    }}
                                />
                                <TextField
                                    label="Enter your password"
                                    name="password"
                                    fullWidth
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                    sx={{
                                        mb: "30px"
                                    }}
                                />
                                <TextField
                                    label="Confirm your password"
                                    name="passwordConfirm"
                                    fullWidth
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.passwordConfirm}
                                    error={!!touched.passwordConfirm && !!errors.passwordConfirm}
                                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                                    sx={{
                                        mb: "30px"
                                    }}
                                />
                            </Box>
                            <Box>
                                <Button type="submit" color="primary" variant="filled">
                                    Log In
                                </Button>
                                <Link to="/signin">Sign in</Link>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
    passwordConfirm: yup.string().required("Confirming password is required"),
});
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
}