import React, {useState, useEffect} from 'react'
import {Typography, Button} from '@material-ui/core'

function Topics() {
    const [topics, setTopics]= useState([
        {
         name: 'Data Sciene',
         id:'456',
         link:'DataScience'
        },
        {
            name: 'Art',
            id:'45t6',
            link:'Art'
        },
        {
            name: 'Gaming',
            id:'4556',
            link:'Gaming'
        },
        {
            name: 'eSports',
            id:'4556',
            link:'ESports'
        },
        {
            name: 'Music',
            id:'4556',
            link:'Music'
        },
        {
            name: 'Healty Life',
            id:'4556',
            link:'HealthAndFood'
        },
        {
            name: 'Politics',
            id:'4556',
            link:'Politics'
        },
        {
            name: 'Gaming',
            id:'4556',
            link:'Gaming'
        },
        {
            name: 'eSports',
            id:'4556',
            link:'ESports'
        },
        {
            name: 'Music',
            id:'4556',
            link:'Music'
        },
        {
            name: 'Mental Health',
            id:'4556',
            link:'HealthAndFood'
        },
        {
            name: 'Politics',
            id:'4556',
            link:'Politics'
        },
        {
            name: 'Pet',
            id:'4556',
            link:'pet'
        }
    ]);


    return (
        <div>
            <div>
                <Typography variant="h5" style={{textAlign:'center', margin:'10px'}}>Topics</Typography>
                <Typography variant="subtitle2">Discover more of what matters to you</Typography>
              
                <div>
                    {
                    topics.map((topic, i)=>(
                        <Button key={i} variant="outlined" size="small" style={{margin:'7px 4px', textTransform:'none'}}>{topic.name}</Button>
                    ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Topics
