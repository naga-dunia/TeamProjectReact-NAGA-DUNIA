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
import AddModal from './addform';
import UpdateModal from './updateForm';
import DeleteIcon from '@material-ui/icons/Delete';

const API_STRING = `http://dummy.restapiexample.com/api/v1/employees`

class JsonPlaceHolder extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      persons: [],
      filter:'',
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
      handleEraseSubmit = id => {
        axios
        .delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`).then(() => {
          this.refreshPaging();
          alert("Berhasil menghapus data");
        })
      }
      

      refreshPaging = () => {
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
      }
    
      render() {
        return (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Employee id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Erase</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.persons.length > 0 && this.state.persons.map((person,index) =>
              <TableRow key={index}>
                <TableCell>{person.id}</TableCell>
                <TableCell>{person.employee_name}</TableCell>
                <TableCell>{person.employee_salary}</TableCell>
                <TableCell>
                <UpdateModal
                updateId={person.id}
                updateName={person.employee_name}
                updateSalary={person.employee_salary}
                refreshPage = {this.refreshPaging}
                />
                </TableCell>
                <TableCell>
                <a key={index} onClick={() => this.handleEraseSubmit(person.id)} style={{cursor:"pointer"}}><DeleteIcon color="primary" fontSize="large"></DeleteIcon></a>
                </TableCell>
              </TableRow>
              )}
            </TableBody>
          <AddModal refreshPage = {this.refreshPaging}/>
          </Table>
        )
      }
}
export default JsonPlaceHolder