import { Container, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import './Test.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

function Test1() {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if(title===''){
            setTitleError(true);
        }
        if(details===''){
            setDetailsError(true);
        }
        if(title && details){
            console.log(title,details)
        }
    }
    return (
        <Container className='container'>
            <Typography
            className='headText'
            color='secondary' 
            variant='h4'
            gutterBottom
            >
                Create A New Note
            </Typography>

            <form 
            onSubmit={handleSubmit}
            noValidate 
            autoComplete='off' 
            >
            <TextField 
            onChange={(e)=>setTitle(e.target.value)}
            className='title'
            color='secondary' 
            id="standard-basic" 
            label="Note Title" 
            variant="outlined"
            fullWidth
            required
            error={titleError}
            />
            <TextField 
            onChange={(e)=>setDetails(e.target.value)}
            className='details'
            color='secondary' 
            id="standard-basic" 
            label="Details" 
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            error={detailsError}
            />
            <Button 
            type='submit'
            className='sendButton'
            variant="contained" 
            color="primary" 
            endIcon={<SendIcon/>}
            fullWidth
            >Submit</Button>
            </form>

            
        </Container>
    )
}

export default Test1
