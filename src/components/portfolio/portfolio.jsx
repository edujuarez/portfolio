import React from 'react'
import { Typography, Grid, Box, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core'
import tetrisMiniatura  from '../../images/tetrisMiniatura.png'
import covidMiniatura  from '../../images/covidMiniatura.png'
import searchMiniatura  from '../../images/searchMiniatura.png'

const useStyles = makeStyles (theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
        
    },
    card: {
        maxWidth: 345,
    }
}))
const portfList = [
    {
        imagePreview: tetrisMiniatura,
        nameProyect: "Tetris in JS",
        descriptionProyect: "Tetris game with vanilla JavaScript and CSS"
    },
    {
        imagePreview: covidMiniatura,
        nameProyect: "Corona tracker",
        descriptionProyect: "Corona virus worldwide tracker updated daily with API"
    },
    {
        imagePreview: searchMiniatura,
        nameProyect: "Movie Searcher",
        descriptionProyect: "Movie searcher with IMDb API"
    }
]
const Portfolio = () => {
const classes = useStyles()
    return (
        <>
        <Box >
               <Typography variant="h4">Portfolio</Typography>
               <Divider />      
               <Grid className={classes.container}>
                    {portfList.map((portfItem, key) =>
                        <Card className={classes.card} key={key}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt={portfItem.imagePreview}
                            height="140"
                            image={portfItem.imagePreview}
                            title={portfItem.nameProyect}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {portfItem.nameProyect}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {portfItem.descriptionProyect}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Live Version
                            </Button>
                            <Button size="small" color="primary">
                            Code
                            </Button>
                        </CardActions>
                        </Card> 
                    )}
               
               </Grid>
        </Box>
        </>
    )
}
export default Portfolio