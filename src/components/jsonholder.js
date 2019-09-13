import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const API_STRING = `http://dummy.restapiexample.com/api/v1/employees`

class JsonPlaceHolder extends React.Component{
    state = {
        persons: [],
        filter:'163537'
      }
    
    componentDidMount() {
            axios.get(API_STRING).then(res => {
            const persons = res.data.filter(function(number) {
                return number.id == '163537';
              });
            this.setState({ persons })
        })
      }

        handleChange(event) {
            this.setState({
                filter: event.target.value
            });
            console.log(event.target.value)
        }
    
      render() {
        return (
        <Grid container spacing={0}>
            
            <Grid item xs={12}>
                <FormControl>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                    value={this.state.filter}
                    onChange={this.handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={2} style={{textAlign:"left"}}>
                <h3>Employee Id</h3>
            </Grid>
            <Grid item xs={4} style={{textAlign:"left"}}>
                <h3>Employee Name</h3>
            </Grid>
            <Grid item xs={3} style={{textAlign:"left"}}>
                <h3>Employee Age</h3>
            </Grid>
            <Grid item xs={3} style={{textAlign:"left"}}>
                <h3>Employee Salary</h3>
            </Grid>

            <Grid item xs={2} style={{textAlign:"left"}}>
            {this.state.persons.length > 0 &&
              this.state.persons.map((person,index) => <p key={index}>{person.id}</p>)}
            </Grid>
            <Grid item xs={4} style={{textAlign:"left"}}>
            {this.state.persons.length > 0 &&
              this.state.persons.map((person,index) => <p key={index}>{person.employee_name}</p>)}
            </Grid>
            <Grid item xs={3} style={{textAlign:"left"}}>
            {this.state.persons.length > 0 &&
              this.state.persons.map((person,index) => <p key={index}>{person.employee_age}</p>)}
            </Grid>
            <Grid item xs={3} style={{textAlign:"left"}}>
            {this.state.persons.length > 0 &&
              this.state.persons.map((person,index) => <p key={index}>{person.employee_salary}</p>)}
            </Grid>
        </Grid>
        )
      }
}
export default JsonPlaceHolder