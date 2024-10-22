import axios, { AxiosResponse } from "axios";
import { InventoryItem } from "../types/InventoryTypes"

const http = axios.create({
	baseURL: "http://localhost:8000/api/v1/inventory-items/",
	withCredentials: true,
});

// ----- Register Operations -----
export const getInventoryItems = async (): Promise<InventoryItem[]> => {
	console.log("Fetching inventory items");

	const res: AxiosResponse<InventoryItem[]> = await http.get("/");

	return res.data;
};

export const getOneInventoryItem = async (itemId: string): Promise<InventoryItem> => {
	const res: AxiosResponse<InventoryItem> = await http.get(`/${itemId}`)
	return res.data;
}

export const createNewInventoryItem = async (newItem: InventoryItem) => {
	const res = await http.post("/new", newItem);
	return res.data;
};
