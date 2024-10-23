import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const drawerWidth = 240; // Define the sidebar width here
	const navigate = useNavigate();

	return (
		<Drawer
			variant="persistent"
			open
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					height: '100vh', // Ensure the drawer takes full height
				},
			}}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/')}>
						<ListItemIcon><HomeIcon /></ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/inventory')}>
						<ListItemIcon><InventoryIcon /></ListItemIcon>
						<ListItemText primary="Inventory" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/about')}>
						<ListItemIcon><InfoIcon /></ListItemIcon>
						<ListItemText primary="About" />
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default Sidebar;
