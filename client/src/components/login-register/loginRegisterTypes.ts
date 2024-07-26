export interface FormElements {
	email: string;
	password: string;
	confirmPassword?: string;
	persistent: boolean;
}

export interface Props {
    flipState: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const userState: FormElements = {
	email: "",
	password: "",
	confirmPassword: "",
	persistent: false,
};

