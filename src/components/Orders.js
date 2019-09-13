import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import JsonPlaceHolder from './jsonholder'

// Generate Order Data

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Employee id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell align="right">Extra Money</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <JsonPlaceHolder />
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}