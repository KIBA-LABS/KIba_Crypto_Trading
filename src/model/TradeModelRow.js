import { Grid, Table, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

function TradeModelRow(props) {
  return (
    <TableRow>
      <TableCell xs={3}>{props.data.PRICE}</TableCell>
      <TableCell xs={3}>{props.data.VOLUME}</TableCell>
      <TableCell xs={3}>{props.data.TIME}</TableCell>
    </TableRow>
  );
}
export default TradeModelRow;
