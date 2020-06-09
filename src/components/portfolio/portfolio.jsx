import React from 'react'
import { Typography, Grid, Box, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core'
import tetrisMiniatura  from '../../images/tetrisMiniatura.png'
import covidMiniatura  from '../../images/covidMiniatura.png'
import searchMiniatura  from '../../images/searchMiniatura.png'
import portfMiniatura  from '../../images/portfMiniatura.png'



const portfList = [
    {
        imagePreview: tetrisMiniatura,
        nameProyect: "Tetris in JS",
        descriptionProyect: "Tetris game in vanilla JavaScript and CSS.",
        btnLive:"http://tetris-js.surge.sh/",
        btnCode:"https://github.com/edujuarez/js-tetris"
    },
    {
        imagePreview: covidMiniatura,
        nameProyect: "Corona tracker",
        descriptionProyect: "Coronavirus tracker in React. Updated daily.",
        btnLive:"http://jsoft-corona-app.surge.sh/",
        btnCode:"https://github.com/edujuarez/corona-tracker"
    },
    {
        imagePreview: searchMiniatura,
        nameProyect: "Movie Searcher",
        descriptionProyect: "Movie searcher in React with IMDb API.",
        btnLive:"http://eduk-search-movies.surge.sh/",
        btnCode:"https://github.com/edujuarez/search-movie-react"
    },
    {
        imagePreview: portfMiniatura,
        nameProyect: "This Portfolio",
        descriptionProyect: "My own portfolio made in React.",
        btnLive:"",
        btnCode:"https://github.com/edujuarez/portfolio"
    }
]
const useStyles = makeStyles (theme => ({
    mainContainer: {
        background: "lightblue",
        height: "50%",
        width: "80%",
        margin: "0 auto",
        alignContent:"center",
        display: "block"
        
    },
    cardContainer: {
        maxWidth: 347,
        margin: "5rem auto",

    },
}))


const Portfolio = () => {
const classes = useStyles()
    return (<>               
    <Typography variant="h3" align="center" margin="25px" padding="25px">Portfolio</Typography>
               <Divider />      
        <Box component="div" className={classes.mainContainer}>
               <Grid container justify="center">
                    {portfList.map((portfItem, key) =>
                        <Grid item={true} xs={12} md={6} sm={3}  key={key}>
                            <Card className={classes.cardContainer} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={portfItem.nameProyect}
                                        height="140"
                                        image={portfItem.imagePreview}
                                        title={portfItem.nameProyect}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            {portfItem.nameProyect}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {portfItem.descriptionProyect}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions alignSelf="center">
                                    <Button size="small" color="primary" href={portfItem.btnLive}>
                                    Live Version
                                    </Button>
                                    <Button size="small" color="primary" href={portfItem.btnCode}>
                                    GitHub
                                    </Button>
                                </CardActions>
                            </Card> 
                        </Grid>
                    )}
               </Grid>
        </Box></>
    )
}
export default Portfolio