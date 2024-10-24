export interface InventoryItem {
    id?: number;
    company: string;
	name: string;
    catalogNumber: string;
	description: string;
    quantity: number;
	pricePerUnit: number;
	location: string;
}