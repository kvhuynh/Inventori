import { useState, useEffect } from "react";
import { getOneInventoryItem } from "../../services/inventory.service";
import { useParams } from "react-router-dom";
import { InventoryItem } from "../../types/InventoryTypes";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import { Button } from "@mui/joy";

export const OneItem = () => {
  const [item, setItem] = useState<InventoryItem>();
  const [tabIndex, setTabIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getOneInventoryItem(id!).then((incomingItem) => {
      setItem(incomingItem);
    });
  }, [id]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 4 }}>
      
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography level="h1">{item?.name || "Item Name"}</Typography>
        <Box>
			<Button>Add</Button>
			
        </Box>
      </Box>
      
      <Divider />

      {/* Tab Navigation */}
      <Tabs value={tabIndex} onChange={(event, newValue) => setTabIndex(newValue)}>
        <TabList>
          <TabPanel value={0}>Overview</TabPanel>
          <TabPanel value={1}>Details</TabPanel>
          <TabPanel value={2}>Transactions</TabPanel>
        </TabList>
      </Tabs>

      {/* Main Content */}
      <Box sx={{ display: "flex", gap: 4 }}>
        {/* Left Side: Main Item Details */}
        <Box sx={{ flexGrow: 1 }}>
          {tabIndex === 0 && (
            <Card sx={{ padding: 3 }}>
              <Typography level="h2">Item Overview</Typography>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={2}>
                <Box>
                  <Typography level="h6" textColor="neutral.500">Catalog Number</Typography>
                  <Typography>{item?.catalogNumber || "N/A"}</Typography>
                </Box>
                <Box>
                  <Typography level="h6" textColor="neutral.500">Company</Typography>
                  <Typography>{item?.company || "Unknown"}</Typography>
                </Box>
                {/* Add more details as needed */}
              </Stack>
            </Card>
          )}

          {tabIndex === 1 && (
            <Card sx={{ padding: 3 }}>
              <Typography level="h2">Detailed Information</Typography>
              {/* Detailed Info Section */}
            </Card>
          )}

          {tabIndex === 2 && (
            <Card sx={{ padding: 3 }}>
              <Typography level="h2">Transactions</Typography>
              {/* Transaction Info */}
            </Card>
          )}
        </Box>

        {/* Right Side Panel: Additional Info */}
        <Box sx={{ width: 300 }}>
          <Card sx={{ padding: 3 }}>
            <Typography level="h6" textColor="neutral.500">Status</Typography>
            <Typography>Available</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography level="h6" textColor="neutral.500">Tags</Typography>
            <Typography>Warehouse</Typography>
            {/* Add more fields like price, quantity, etc. */}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default OneItem;
