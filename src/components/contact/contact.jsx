import React from 'react'
import { Typography, Button, Grid, Divider } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
        formContainer: {
            background: "lightblue",
            width: "80%",
            align:"center",
            margin: "0 auto",
            padding: '15px',
            display:'flex',
            flexWrap: 'wrap',
        },
        form: {
            width:"75%",
            '& .MuiTextField-root': {
              margin: theme.spacing(1),
              
            },
        },
        

}))
const Contact = () => {
    const classes = useStyles()
    return(
        <>
        <Typography variant="h3" align="center">Contact Me</Typography>
        <Divider/>
        <Grid container className={classes.formContainer} justify="center">
            <form className={classes.form} noValidate autoComplete="off">
                <Grid>
                    <TextField 
                   id="name"
                   label="Name"
                   variant="outlined"
                   fullWidth
                   required
                    />
                </Grid>
                <Grid>
                    <TextField 
                    id="email" 
                    label="Email"
                    type="email"
                    variant="outlined" 
                    fullWidth
                    required
                    />
                </Grid>
                <Grid >
                    <TextField 
                    id="message" 
                    label="How can I help you?" 
                    variant="outlined" 
                    multiline
                    rows={4}
                    fullWidth
                    required
                    />    
                </Grid>
                <Grid align="right">
                   <Button 
                   variant="contained" 
                   color="primary"
                   >
                       Send
                   </Button>
                </Grid>
            </form>            
       
        </Grid>
            
        </>
    )
}

export default Contact