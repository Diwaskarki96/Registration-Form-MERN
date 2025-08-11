import { Formik } from "formik";
import { useState } from "react";
import { loginValidationSchema } from "../validation/loginValidationSchema";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { $axios } from "../axios/axiosInstance";
const Login = () => {
  const navigate = useNavigate();
  const [error, seterror] = useState(null);
  const { isPending, mutate } = useMutation({
    mutationKey: ["Login-user"],
    mutationFn: async (values) => {
      return await $axios.post("/login", values);
    },
    onSuccess: (res) => {
      console.log({res})
            const accessToken = res?.data?.token;
      localStorage.setItem("accessToken", accessToken);

      navigate("/home");
    },
    onError: (error) => {
      seterror(error.response.data.msg);
    },
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        mutate(values);
      }}
    >
      {(formik) => {
        return (
          <div style={{backgroundColor:"#fffdf7"}}>
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

              <Typography variant="h3" color={"black"}>Login</Typography>
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
              <Link to={"/register"}>New here? Register now</Link>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
