import React from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import useFormHook from '../../hooks/formHook'
import {addQuestion} from '../../firebase/util'

import { Typography } from '@material-ui/core';

const Contact = (props) => {
    //const [open, setOpen] = React.useState(false);
    console.log(props.open)
    const [error, seterror] = React.useState('');
    const [email,setEmail] = useFormHook("")
    const [question,setQuestion] = useFormHook("")
    const [contactNumber,setContactNumber] = useFormHook("")



  

//   const handleClose = () => {
//     setOpen(false);
//   };

  const handleSubmit = async ()=>{
    if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.trim()))){
        return seterror("Email not in correct format")
    }
    else{
        try {
            const newQuestion = await addQuestion({question,email,contact:contactNumber,productCode:props.productCode})
            props.closeHandler()
        } catch (error) {
            console.log(error)
            seterror("Could not post your query. Please try agian")
            props.closeHandler()
        }
    }
    
  }

  return (
    <div>
      
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="contact">Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your query and your contact details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={setEmail}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="Question"
            label="Query"
            type="text"
            fullWidth
            value={question}
            onChange={setQuestion}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Number"
            type="text"
            fullWidth
            value={contactNumber}
            onChange={setContactNumber}
            style={{marginBottom:"4px"}}
          />
          {error && <Typography color="error" variant="caption">{error}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>)
}

export default Contact
