import React from 'react'
import axios from 'axios'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const API_STRING = `http://dummy.restapiexample.com/api/v1/create`

class PersonListPost extends React.Component {
  state = {
    name: '',
    salary:'',
    age:'',
    data: undefined
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    const user = {
      name: this.state.name,
      salary: this.state.salary,
      age: '741852963'
    }

    axios.post(API_STRING,user).then(response => {
        alert("Berhasil Menambahkan data");
        this.props.modalAddClose();
    })
    // axios.post(API_STRING, { user }).then(response => {
    //   this.setState({
    //     data: response.data
    //   })
    // })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />
        <label>Salary:</label>
        <input type='text' name='salary' value={this.state.salary} onChange={this.handleChange} /><br />
        <button type='submit'>Add Data</button>
      </form>
      </div>
    )
  }
}


class AddModal extends React.Component {
  state = {
    open: false,
    setOpen:false
  }
  handleOpen = () => {
    this.setState(prevState => ({
      open: prevState.open = true,
      setOpen: prevState.setOpen = true
    }))
  }
  handleClose = () => {
    this.setState(prevState => ({
      open: prevState.open = false,
      setOpen: prevState.setOpen = false
    }));
    this.props.refreshPage();
  }
  render() {
    return (
      <div><a onClick={this.handleOpen} style={{position:"fixed",bottom: "1em",right: "1em",cursor:"pointer"}}><AddCircleIcon color="primary" fontSize="large"></AddCircleIcon></a>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={this.state.open}
        style={{display: "flex",alignItems:"center",justifyContent:"center"}}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div style={{backgroundColor: "#ffffff",border: '2px solid #000',padding: "2em",outline: 0,}}>
            <h2>Add Data To Api</h2>
            <PersonListPost modalAddClose = {this.handleClose}/>
          </div>
        </Fade>
      </Modal>
      </div>
    )
  }
}
export default AddModal
