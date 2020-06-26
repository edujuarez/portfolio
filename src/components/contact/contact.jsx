<<<<<<< HEAD
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
            <form>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeRhWq--bInNMck8fY0T6YrETpqh-dEQIt4Sti8HsKPsrFZjg/viewform?embedded=true" 
                    width="640" 
                    height="900" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                    Cargando…
                </iframe>
            </form>      
       
        </Grid>
            
        </>
    )
}

export default Contact
=======
import React from 'react'
import { Typography, Button, Grid, Divider } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'
import Menu from '../menu/menu'

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
        <Menu/>
        <Typography variant="h3" align="center" margin="15px" padding="25px" >Contact Me</Typography>
        <Divider/>
        <Grid container className={classes.formContainer}  justify="center">
            <form>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeRhWq--bInNMck8fY0T6YrETpqh-dEQIt4Sti8HsKPsrFZjg/viewform?embedded=true" 
                    width="640" 
                    height="900" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                    Cargando…
                </iframe>
            </form>      
       
        </Grid>
            
        </>
    )
}
export default Contact
>>>>>>> add contact form
