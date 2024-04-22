import { useState } from "react";
import { Formik } from "formik";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { registerValidationSchema } from "../validation/registrationValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { $axios } from "../axios/axiosInstance";

const Registration = () => {
  const [error, seterror] = useState(null);

  const nagivate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["Register-user"],
    mutationFn: async (values) => {
      return await $axios.post("/register", values);
    },
    onSuccess: () => {
      nagivate("/home");
    },
    onError: (error) => {
      seterror(error.response.data.msg);
    },
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => {
        mutate(values);
      }}
    >
      {(formik) => {
        return (
          <div>
            {error && (
              <Alert sx={{ marginBottom: "2rem" }} severity="error">
                {error}
              </Alert>
            )}
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "1rem",
                gap: "1rem",
                width: "350px",
              }}
            >
              {isPending && <LinearProgress />}
              <Typography variant="h3">Register</Typography>
              <FormControl>
                <TextField
                  label="First Name"
                  {...formik.getFieldProps("firstName")}
                  required
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Last Name"
                  {...formik.getFieldProps("lastName")}
                  required
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Email"
                  {...formik.getFieldProps("email")}
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isPending}
              >
                Login
              </Button>
              <Link to={"/login"}>Already registered? Login</Link>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Registration;
