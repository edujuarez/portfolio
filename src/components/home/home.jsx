import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Typed from 'react-typed'
import avatar from '../images/avatar.png'


//CSS
const useStyles = makeStyles (theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: 'black'
    },
    subtitle: {
        color: 'black',
        marginBottom:'3rem'
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Home = () => {
    const classes = useStyles()
    return(
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Eduardo Juarez"/> 
        </Grid>
        <Typography variant="h4" className={classes.title}>
            <Typed strings={["Eduardo Juarez"]} typeSpeed="40"/>
        </Typography>
        <br />
        <Typography  className={classes.subtitle} variant="h5">
            <Typed strings={["Web Developer", "React","JavaScipt"]} typeSpeed="60" backSpeed="60" loop/>
        </Typography>
    </Box>
)
}
export default Home