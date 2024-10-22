import { useState, useEffect } from "react";
import {
	getInventoryItems,
	getOneInventoryItem,
} from "../../services/inventory.service";

import { useParams } from 'react-router-dom';


import { InventoryItem } from "../../types/InventoryTypes";


export const OneItem = () => {
	const [inventoryItems, setInventoryItems] = useState<Array<InventoryItem>>();
    const { id } = useParams();
	// const navigate = useNavigate();
    useEffect(() => {
        getOneInventoryItem(id!)
    })


	return <>yo</>;
};

export default OneItem;
