import React from 'react'
import { Typography, Divider, Grid, Avatar } from '@material-ui/core'
import javascriptLogo from '../../images/JavaScript-logo.png'
import reactLogo from '../../images/reactLogo.png'
import htmlLogo from '../../images/htmlLogo.png'
import cssLogo from '../../images/css3Logo.jpg'
import Menu from '../menu/menu'


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
            
        },
        item: {
            margin: "3rem auto",
        }
    }))
    const skillsList = [
        {
            logoSkill: `${ javascriptLogo }`,
            nameSkill: "JavaScript",
        },
        {
            logoSkill:`${ reactLogo }`,
            nameSkill: "ReactJs",
        },
        {
            logoSkill:`${ htmlLogo }`,
            nameSkill: "Html",
        },
        {
            logoSkill:`${ cssLogo }`,
            nameSkill: "Css3",
        },
]
    //       
const Skills = () => {
    const classes = useStyles()
    return(
        <>
        <Menu/>
            <br/>
            <br/>
            <br/>
            <br/>            
            <Typography variant="h3" align="center" margin="15px" padding="25px" gutterBottom>Skills</Typography>
            <Divider/>
                <Grid container className={classes.container} >
                    <Grid>
                        <Typography variant="h4" align="center" item xs={12}  sm={12} md={12} xl={12}> I'm focus in JavaScript like my principal programming language.<br/>Using React like my default app maker alongside the material ui style sheet and their benefits.</Typography>
                    </Grid>
                    {skillsList.map ((skillsItem, key) =>
                        <Grid className={classes.item} item xs={12}  sm={12} md={6} xl={3} key={key}>
                            <Grid container justify="center" >
                                <Avatar className={classes.avatar} src={skillsItem.logoSkill} alt="JavaScript"/> 
                            </Grid>
                            <Typography variant="h5" align="center">{skillsItem.nameSkill}</Typography>
                        </Grid>
                    )}
            </Grid>
        </>
        )

}
export default Skills