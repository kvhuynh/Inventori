import { useState } from "react";
import { createNewInventoryItem } from "../../services/inventory.service";
import { useNavigate } from "react-router-dom";


import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ListDivider from "@mui/joy/ListDivider";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

export const AddItem = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		company: "",
		name: "",
		catalogNumber: "",
		description: "",
		quantity: 0,
		pricePerUnit: 0,
		location: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		console.log("Form Data:", formData);
		createNewInventoryItem(formData).then(() => navigate("/"));
	};

	return (
		<Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start" }}>
			<ListDivider component="hr" />
			<Box sx={{ flexDirection: "column" }}>
				<FormControl>
					<FormLabel>Company</FormLabel>
					<Input
						size="sm"
						name="company"
						value={formData.company}
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Name</FormLabel>
					<Input
						name="name"
						size="sm"
						value={formData.name}
						onChange={handleInputChange}
					/>
				</FormControl>{" "}
				<FormControl>
					<FormLabel>Catalog number</FormLabel>
					<Input
						name="catalogNumber"
						size="sm"
						value={formData.catalogNumber}
						onChange={handleInputChange}
					/>
				</FormControl>{" "}
				<FormControl>
					<FormLabel>Quantity</FormLabel>
					<Input
						name="quantity"
						size="sm"
						value={formData.quantity}
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Price per unit</FormLabel>
					<Input
						name="pricePerUnit"
						size="sm"
						value={formData.pricePerUnit}
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Location</FormLabel>
					<Input
						name="location"
						size="sm"
						value={formData.location}
						onChange={handleInputChange}
					/>
				</FormControl>
				<Button onClick={handleSubmit}>+ Add</Button>
			</Box>
		</Box>
	);
};

export default AddItem;
