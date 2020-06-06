import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "black",
            "& :hover": {
                fill: "black",
                fontSize: "1.8rem",
            },
        },
    },
})
const Footer = () =>{
    const classes = useStyles()
    return(
        <>
        <BottomNavigation width="auto" style={{background:"lightblue"}}>
            <BottomNavigationAction
            classeName={classes.root}
            style={{padding: 0}}
            icon={<LinkedIn/>}
            href="https://www.linkedin.com/in/eduardo--juarez/"
            />
            <BottomNavigationAction
            classeName={classes.root}
            style={{padding: 0}}
            icon={<GitHub/>}
            href="https://github.com/edujuarez"
            />
           

        </BottomNavigation>
        </>
    )
}
export default Footer