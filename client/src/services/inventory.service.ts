import axios, { AxiosResponse } from "axios";
import { InventoryItem } from "../types/InventoryTypes";

const http = axios.create({
	baseURL: "http://localhost:8000/api/v1/items/",
	withCredentials: true,
});

// ----- Register Operations -----
export const getInventoryItems = async (): Promise<InventoryItem[]> => {
	console.log("Fetching inventory items");

	const res: AxiosResponse<InventoryItem[]> = await http.get("/");

	return res.data;
};

export const getOneInventoryItem = async (
	itemId: string
): Promise<InventoryItem> => {
	console.log("getting one inventory item");

	const res: AxiosResponse<InventoryItem> = await http.get(`/${itemId}`);
	console.log(res.data);
	
	return res.data;
};

export const createNewInventoryItem = async (newItem: InventoryItem) => {
	const res = await http.post("/new", newItem);
	return res.data;
};
