import * as React from "react";
import Login from "./Login";
import Register from "./Register";

import { useState, useEffect } from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";

import ReactCardFlip from "react-card-flip";

interface FormElements {
	email: string;
	password: string;
	confirmPassword?: string;
	persistent: boolean;
}

const userState: FormElements = {
	email: "",
	password: "",
	confirmPassword: "",
	persistent: false,
};

function ColorSchemeToggle(props: IconButtonProps) {
	const { onClick, ...other } = props;
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<IconButton
			aria-label="toggle light/dark mode"
			size="sm"
			variant="outlined"
			disabled={!mounted}
			onClick={(event) => {
				setMode(mode === "light" ? "dark" : "light");
				onClick?.(event);
			}}
			{...other}
		>
			{mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
		</IconButton>
	);
}

export const LoginRegister: React.FC = () => {
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const [userInfo, setUserInfo] = useState<FormElements>(userState);

	const handleFlip = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};	

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<CssBaseline />
			<GlobalStyles
				styles={{
					":root": {
						"--Form-maxWidth": "800px",
						"--Transition-duration": "0.4s", // set to `none` to disable transition
					},
				}}
			/>
			<Box
				sx={(theme) => ({
					width: { xs: "100%", md: "50vw" },
					transition: "width var(--Transition-duration)",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					position: "relative",
					zIndex: 1,
					display: "flex",
					justifyContent: "flex-end",
					backdropFilter: "blur(12px)",
					backgroundColor: "rgba(255 255 255 / 0.2)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundColor: "rgba(19 19 24 / 0.4)",
					},
				})}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100dvh",
						width: "100%",
						px: 2,
					}}
				>
					<Box
						component="header"
						sx={{
							py: 3,
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
							<IconButton variant="soft" color="primary" size="sm">
								<BadgeRoundedIcon />
							</IconButton>
							<Typography level="title-lg">Inventori</Typography>
						</Box>
						<ColorSchemeToggle />
					</Box>

					<ReactCardFlip isFlipped={isFlipped}>
						<Login flipState={handleFlip}></Login>
						<Register flipState={handleFlip}></Register>
					</ReactCardFlip>

					<Box component="footer" sx={{ py: 3 }}>
						<Typography level="body-xs" textAlign="center">
							© Kevin Huynh {new Date().getFullYear()}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={(theme) => ({
					height: "100%",
					position: "fixed",
					right: 0,
					top: 0,
					bottom: 0,
					left: { xs: 0, md: "50vw" },
					transition:
						"background-image var(--Transition-duration), left var(--Transition-duration) !important",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					backgroundColor: "background.level1",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage:
						"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundImage:
							"url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
					},
				})}
			/>
		</CssVarsProvider>
	);
};

export default LoginRegister;
