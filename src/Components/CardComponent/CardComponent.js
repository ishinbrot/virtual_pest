import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import classes from './CardComponent.module.css'
import CardActionArea from '@material-ui/core/CardActionArea';

const CardComponent = props => {

    const cardButtons =
        props.settings.state === "dead" ?
            <Button size="small" onClick={props.settings.restart}>RESTART</Button>
        
        :
            <div>
                <Button size="small" onClick={props.settings.button1Click}>{props.settings.button1Text}</Button>
                <Button size="small" onClick={props.settings.button2Click}>{props.settings.button2Text}</Button>
            </div>;
        

    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.pestImage}
                    image={props.settings.imageLocation}
                    title={props.settings.state}
                    component="img"
                />

                <CardContent>
                    <Typography variant="h5" component="h2">
                        Action:   {props.settings.Action}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Sound:  {props.settings.Sound}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            {cardButtons}

            </CardActions>
        </Card>
    );
};

export default CardComponent;