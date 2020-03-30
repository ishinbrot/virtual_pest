import React from 'react'
import { Grid } from '@material-ui/core';
import classes from './GridComponent.module.css'
import CardComponent from '../CardComponent/CardComponent'

const GridComponent = props => {
    return (
        <div>
            <Grid container spacing={3} className={classes.container}>
                {props.cards.map(el => (
                    <Grid item xs>
                        <CardComponent className={classes.cardComponent} title={el.title} description={el.description} linkTitle={el.linkTitle} click={el.click} link={el.link}/>
                    </Grid>
                ))

                }
            </Grid>
        </div>
    );
}

export default GridComponent;