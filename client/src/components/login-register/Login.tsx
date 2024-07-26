import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Link,
	Stack,
	Typography,
} from "@mui/joy";
import { useState } from "react";

import { FormElements } from "./loginRegisterTypes";
import { Props } from "./loginRegisterTypes";
import { userState } from "./loginRegisterTypes";

import { createUser } from "../../services/loginRegister.service";

export const Login: React.FC<Props> = (props) => {
	const [userInfo, setUserInfo] = useState<FormElements>(userState);
	// const [isFlipped, setIsFlipped] = useState(props.flipState);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createUser(userInfo).then
		console.log(userInfo);
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
							Sign in
						</Typography>
						<Typography level="body-sm">
							New to us?{" "}
							<Link
								level="title-sm"
								onClick={(e) => {
									props.flipState(e);
								}}
							>
								Sign up!
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
						<Stack gap={4} sx={{ mt: 2 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Checkbox size="sm" label="Remember me" name="persistent" />
								<Link level="title-sm" href="#replace-with-a-link">
									Forgot your password?
								</Link>
							</Box>
							<Button type="submit" fullWidth>
								Sign in
							</Button>
						</Stack>
					</form>
				</Stack>
			</Box>
		</Box>
	);
};

export default Login;
