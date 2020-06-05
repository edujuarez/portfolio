import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Typed from 'react-typed'
import avatar from '../../images/avatar.png'

//CSS
const useStyles = makeStyles (theme => ({
    avatar: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        margin: theme.spacing(1)
    },
    title: {
        color: 'purple'
    },
    subtitle: {
        color: "lightBlue",
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
        <Typography className={classes.title} variant="h4" >
            <Typed strings={["Eduardo Juarez"]} typeSpeed={40}/>
        </Typography>
        <br />
        <Typography  className={classes.subtitle} variant="h5">
            <Typed strings={["React Developer", "Front-End Developer","JavaScript"]} typeSpeed={40} backSpeed={80} loop/>
        </Typography>
    </Box>
)
}
export default Home