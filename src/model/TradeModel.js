import {
  Grid,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TradeModelRow from "./TradeModelRow";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const TrademodelData = [
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "1",
  },
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "2",
  },
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "3",
  },
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "4",
  },
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "5",
  },
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "6",
  },
  {
    PRICE: "57346849",
    VOLUME: "37297048",
    TIME: "33:56",
    ID: "7",
  },
];
const card = (
  // <React.Fragment>
  <Card>
    <Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell xs={3}>PRICE</TableCell>
            <TableCell xs={3}>VOLUME</TableCell>
            <TableCell xs={3}>TIME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TrademodelData.map((value) => {
            return <TradeModelRow data={value}></TradeModelRow>;
          })}
        </TableBody>
      </Table>
    </Grid>
  </Card>
  // </React.Fragment>
);

function TradeModel() {
  return (
    <Box sx={{ minWidth: 275, marginTop: "200px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
export default TradeModel;
