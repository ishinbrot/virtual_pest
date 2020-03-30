import React, { useState, useEffect } from 'react';

import CardComponent from '../../CardComponent/CardComponent';
import DeadlPenguin from '../../../assets/penguin_dead.png';
import PlayfulPenguin from '../../../assets/penguin_playful.png';
import HungryPenguin from '../../../assets/penguin_hungry.png';
import EnragedPenguin from '../../../assets/penguin_enraged.png';
import HappyPenguin from '../../../assets/penguin_happy.png';


import * as constants from '../../../assets/constants';




const VirtualPest = props => {

    const [counter, setCounter] = useState(0);
    const [sound, setSound] = useState('Yay');
    const [action, setAction] = useState('Happy');
    const [image, setImage] = useState(HappyPenguin);
    const [state, setState] = useState('happy');

    useEffect(() => {
        showState();
      }, [state]);
      
    const Pat = () =>{
        if ( state === "happy") {
            setState("playful");
        }
        if (state=== "playful") {
            setState("hungry");
        }
        showState();
    }
    var Feed = () => {
        if( state === "hungry" )
        {
        setState("happy");
        }
        else if (state === "happy")
        {
            setState("playful");

        }
        else if (state === "playful")
        {
            setState("enraged");
    
        }
        else if (state === "enraged"  )
        {
            setState("dead");

        }
        else if (state === "enraged")
        {
            setState("happy");
        
        }
        else if (state === "hungry" )
        {
            setState( "playful");
        }
        showState();
    }
     const showState = () => {

    
        if (state === "happy") {
            setAction(constants.HAPPY_ACTION);
            setSound(constants.HAPPY_SOUND);
            setImage(HappyPenguin);
    
    
        }
        else if (state === "enraged") {
            setAction(constants.ENRAGED_ACTION)
            setSound(constants.ENRAGED_SOUND)
            setImage(EnragedPenguin);
        }
        else if (state === "playful") {
            setSound(constants.PLAYFUL_SOUND);
            setAction(constants.PLAYFUL_ACTION);
            setImage(PlayfulPenguin);
    
        }
        else if (state === "hungry") {
            setSound(constants.HUNGRY_SOUND)
            setAction(constants.HUNGRY_ACTION)
            setImage(HungryPenguin);
        }
        else if (state === "dead") {
            setAction(constants.DEAD_ACTION)
            setSound(constants.DEAD_SOUND)
            setImage(DeadlPenguin);
        }
    
        else {
            setAction("Error - unknown state")
            setSound("Oh No!")
        }
        setCounter(counter+1);
    }

    const simulate = () => {
        setCounter(counter+1);

        var n = Math.random();


        if( state == "happy" && n < 0.4 ) 
        setState("playful");
        else if( state == "playful" && 0.0<n && n< 0.2 )
        setState("enraged");
        if (state == "enraged"&& 0.0 <n && n< 0.6)
        setState("happy");
        else if (state == "enraged"&& 0.6<n && n<1)
        setState("dead");
        if( state == "hungry" && n<0.3)
        setState("happy");
        if( state == "hungry" && n<0.2)
        setState("dead");
        if (state =="playful" &&  n<0.2 && n<1)
        setState("hungry");

        showState();

        setTimeout("Simulate(thePest)",1000)
    }

    const restart = () => {
   
    setState('happy');
    showState();
    }

    const VirtualPestCard =
    {
        state: state,
        Action: action,
        Sound: sound,
        button1Text: 'FEED',
        button1Click: () => Pat(),
        button2Click: () => Feed(),
        button2Text: "PAT",
        imageLocation: image,
        restart: () => restart()
    }
    return (
        <CardComponent settings={VirtualPestCard} />
    );
}


export default VirtualPest;