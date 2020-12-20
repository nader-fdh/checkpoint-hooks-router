import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from 'react-bootstrap';
import "./ModalInput.css";

function getModalStyle() {
  const top = 45;
  const left = 45;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalInput({callBack}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = useState({
        title:'',
        rate:'',
        description:'',
        posterurl:''
    })
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
      e.preventDefault()
      const name = e.target.name;
      const value= e.target.value;
      setInputValue({...inputValue, [name]: value})
  }
  
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4>Add you favorite movie</h4>
      <form className='form' onSubmit={handleSubmit}>
          <input className='input' type='text' name='title' value={inputValue.title} onChange={handleSubmit} placeholder='Title' />
          <input className='input' type='text' name='rate' value={inputValue.rate} onChange={handleSubmit} placeholder='Rating' />
          <input className='input' type='text' name='description' value={inputValue.description} onChange={handleSubmit} placeholder='description' />
          <input className='input' type='text' name='posterurl' value={inputValue.posterurl} onChange={handleSubmit} placeholder='Image' />
          <span onClick={()=>setOpen(false)}>
              <button className='btn' type='submit' onClick={()=> callBack(inputValue)} >submit</button>
            </span>
            
      </form>
    </div>
  );

  return (
    <div>
      <button className="btn" type="button" onClick={handleOpen}>
        Add a movie
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalInput;