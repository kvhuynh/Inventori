import {
	Box,
	Button,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Link,
	Stack,
	Typography,
} from "@mui/joy";
import { useState } from "react";
import { createUser } from "../../services/loginRegister.service";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { FormElements } from "./loginRegisterTypes";
import { Props } from "./loginRegisterTypes";

export interface RegisterData {
	firstName: string;
	lastName: string;
	email: string;
	password: string
	confirmPassword: string
}

const initialFormState: RegisterData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: ""
}

interface ValidationErrors {
	firstNameError: string;
	lastNameError: string;
	emailError: string;
	passwordError: string;
}

const initialErrorState: ValidationErrors = {
	firstNameError: "",
	lastNameError: "",
	emailError: "",
	passwordError: ""
}

export const Register: React.FC<Props> = (props) => {
	const [userInfo, setUserInfo] = useState<RegisterData>(initialFormState);
	const [errors, setErrors] = useState<ValidationErrors>(initialErrorState)
	const navigate: NavigateFunction = useNavigate();


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrors(initialErrorState);
		createUser(userInfo)
			.then(() => {
				navigate("/dashboard");
			})
			.catch((error: any) => {
				setErrors(error);
			});
	};

	const handleChange =
		(props: keyof FormElements) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setUserInfo({ ...userInfo, [props]: event.target.value });
		};
	return (
		<Box sx={{ bgcolor: "primary", borderRadius: 20 }}>
			<Box
				component="main"
				sx={{
					my: "auto",
					py: 2,
					pb: 5,
					display: "flex",
					flexDirection: "column",
					gap: 2,
					width: 400,
					maxWidth: "100%",
					mx: "auto",
					borderRadius: "sm",
					"& form": {
						display: "flex",
						flexDirection: "column",
						gap: 2,
					},
					[`& .MuiFormLabel-asterisk`]: {
						visibility: "hidden",
					},
				}}
			>
				<Stack gap={4} sx={{ mb: 2 }}>
					<Stack gap={1}>
						<Typography component="h1" level="h3">
							Register
						</Typography>
						<Typography level="body-sm">
							Already a member?{" "}
							<Link
								level="title-sm"
								onClick={(e) => {
									props.flipState(e);
								}}
							>
								Sign in!
							</Link>
						</Typography>
					</Stack>
					<Button variant="soft" color="neutral" fullWidth>
						Continue with Google
					</Button>
				</Stack>
				<Divider
					sx={(theme) => ({
						[theme.getColorSchemeSelector("light")]: {
							color: { xs: "#FFF", md: "text.tertiary" },
						},
					})}
				>
					or
				</Divider>
				<Stack gap={4} sx={{ mt: 2 }}>
					<form onSubmit={handleSubmit}>
						<FormControl required>
							<FormLabel>Email:</FormLabel>
							<Input
								onChange={handleChange("email")}
								type="email"
								name="email"
							/>
						</FormControl>
						<FormControl required>
							<FormLabel>Password:</FormLabel>
							<Input
								onChange={handleChange("password")}
								type="password"
								name="password"
							/>
						</FormControl>
						<FormControl required>
							<FormLabel>Confirm Password:</FormLabel>
							<Input
								onChange={handleChange("confirmPassword")}
								type="password"
								name="confirmPassword"
							/>
						</FormControl>
						<Stack gap={4} sx={{ mt: 2 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							></Box>
							<Button type="submit" fullWidth>
								Sign up
							</Button>
						</Stack>
					</form>
				</Stack>
			</Box>
		</Box>
	);
};

export default Register;
