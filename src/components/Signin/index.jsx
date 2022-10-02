import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { Container, Form } from "./style";

const Signin = () => {
	const [hasError, setHasError] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (value) => {
			fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					email: value?.email,
					password: value?.password,
				}),
			})
				.then((res) => res.json())
				.then((res) =>
					res
						? setTimeout(() => {
								localStorage.setItem("token", res?.authenticationToken);
								navigate("/home");
						  }, 1500)
						: null
				)
				.catch(() => {
					setHasError(true);
				});
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email("You have entered an invalid email address!")
				.required("Fill in the Blank fields"),
			password: Yup.string().min(8).required("Fill in the Blank fields"),
		}),
	});

	const navigate = useNavigate();
	const notify = () => toast.error("Email or Password is wrong!");

	return (
		<Container className="container">
			<Form onSubmit={formik.handleSubmit}>
				{hasError ? (
					<>
						<ToastContainer theme="colored" position="bottom-right" />
					</>
				) : (
					<></>
				)}
				<Form.Title>Sign in</Form.Title>
				<Form.Input
					login
					name="email"
					id="email"
					type={"email"}
					placeholder="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<div style={{ marginBottom: "44px" }}>
					{formik.errors.email && formik.touched.email ? (
						<Form.Error>{formik.errors.email}</Form.Error>
					) : null}
				</div>
				<Form.Input
					psw
					name="password"
					id="password"
					type={"password"}
					placeholder="Password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<div style={{ marginBottom: "16px" }}>
					{formik.errors.password && formik.touched.password ? (
						<Form.Error>{formik.errors.password}</Form.Error>
					) : null}
				</div>
				<Form.CheckboxRememberForgot>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Form.CheckboxRememberForgotCheck
							id="checkbox_id"
							type="checkbox"
						/>
						<Form.CheckboxRememberForgotLabel htmlFor="checkbox_id">
							Remember me
						</Form.CheckboxRememberForgotLabel>
					</div>
					<Form.ForgotLink href="#">Forgot</Form.ForgotLink>
				</Form.CheckboxRememberForgot>
				<Form.Button onClick={notify} type="submit">
					Login
				</Form.Button>
				<Form.Register onClick={() => navigate("/signup")}>
					Did you Register?
				</Form.Register>
			</Form>
		</Container>
	);
};

export default Signin;
