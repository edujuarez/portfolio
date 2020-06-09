import React from 'react'
import { Typography, Divider, Box, Grid, Avatar } from '@material-ui/core'
import javascriptLogo from '../../images/JavaScript-logo.png'
import reactLogo from '../../images/reactLogo.png'
import htmlLogo from '../../images/htmlLogo.png'
import cssLogo from '../../images/css3Logo.jpg'


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles (theme => ({
        avatar: {
            width: theme.spacing(30),
            height: theme.spacing(30),
            margin: theme.spacing(1),
            display: "flex",
            
        },
        container: {
            background: "lightblue",
            width: "80%",
            margin: "0 auto",
            alignContent:"center",
            alignSelf: "center",
            padding:"15px",
            display: "flex",
        }
    }))
const Skills = () => {
    const classes = useStyles()
    return(
        <>
            <Typography variant="h3" align="center" margin="15px" padding="25px" gutterBottom>Skills</Typography>
            <Divider/>

            <Grid container className={classes.container} >
                <Typography variant="h4" align="center"> I'm focus in JavaScript like my principal programming language<p>Using React like my default app maker alongside the material ui style sheet and their benefits.</p></Typography>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Grid container justify="center" >
                        <Avatar className={classes.avatar} src={javascriptLogo} alt="JavaScript"/> 
                    </Grid>
                    <Typography variant="h5" align="center">JavaScript</Typography>
                    
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Grid container justify="center">
                        <Avatar className={classes.avatar} src={reactLogo} alt="React"/> 
                    </Grid>
                    <Typography variant="h5" align="center">React </Typography>
                    <Typography variant="subtitle1"></Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Grid container justify="center">
                        <Avatar className={classes.avatar} src={htmlLogo} alt="Html"/> 
                    </Grid>
                    <Typography variant="h5" align="center">Html</Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Grid container justify="center">
                        <Avatar className={classes.avatar} src={cssLogo} alt="Css"/> 
                    </Grid>
                    <Typography variant="h5" align="center">Css</Typography>
                </Grid>
            </Grid>
        </>
        )

}
export default Skills