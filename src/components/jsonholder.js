import React from 'react'
import axios from 'axios'
// import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const API_STRING = `http://dummy.restapiexample.com/api/v1/employees`

class JsonPlaceHolder extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      persons: [],
      filter:''
    }
  }
    
    componentDidMount() {   
            axios.get(API_STRING).then(res => {
            // const persons = (this.state.filter === ''?res.data:res.data.filter(number=> {return number.id === this.state.filter;}));
            const persons = res.data.filter(number=> {return number.employee_age === '741852963';});
            // const persons = res.data.slice(0,5);
            this.setState({ persons })
        })
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
        console.log(event.target.value)
      }
    
      render() {
        return (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Employee id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.persons.length > 0 && this.state.persons.map((person,index) =>
              <TableRow key={index}>
                <TableCell>{person.id}</TableCell>
                <TableCell>{person.employee_name}</TableCell>
                <TableCell>{person.employee_salary}</TableCell>
              </TableRow>
              )}
            </TableBody>
          </Table>
        )
      }
}
export default JsonPlaceHolder