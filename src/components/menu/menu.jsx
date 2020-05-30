import React, { useState} from 'react'
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core'
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail  } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import avatar from '../images/avatar.png'
import MovilMenu from '@material-ui/core/Drawer'

//css Styles
const useStyles = makeStyles (theme=>({
    menuSlider: { 
        width: 250,
        background: 'wheet',
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'black'
    }
}))

const menuList = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Portfolio"
    },
     {
        listIcon: <Apps/>,
        listText: "Skills"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact Me"
    },
   
]

const Menu = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => (
        setState({...state, [slider]: open})
    )
    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSlider} component="div">
                <Avatar className={classes.avatar}src={avatar} alt="Eduardo Juarez"/>
                <Divider/>
                <List>
                    {menuList.map((lsItem, key) =>(
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem}>
                                {lsItem.listText}
                            </ListItemText>  
                        </ListItem>
                    ))}
                </List>
            </Box>

    )
    return(
        <>
            
            <Box component="nav">
                <AppBar position='static' style={{background: "lightblue"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("rigth", true)}>
                            <ArrowBack style={{color: "tomato"}} /> 
                        </IconButton>
                        <Typography style= {{color:"black"}} variant='h5'>
                            Portfolio
                        </Typography>
                        <MovilMenu anchor="right" open={state.right }>
                            {sideList("right")}
                        </MovilMenu>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Menu