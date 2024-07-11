export {};
import { InventoryItem } from "../models/inventory_item.model";

const getAllInventoryItems = async () => {
	const inventoryItems = await InventoryItem.findAll();
	return inventoryItems;
};

const createInventoryItem = async (data: any) => {
	// const sessionId = getSessionId(userId);
	console.log("services: creating inventory item...");
	const inventoryItem = await InventoryItem.create(data);
	return inventoryItem;
};

module.exports = {
	getAllInventoryItems,
	createInventoryItem,
};
