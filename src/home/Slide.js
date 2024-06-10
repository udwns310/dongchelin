import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import school from './image/school.jpg';

function Example(props) {
    const divStyle = {
        backgroundImage: `url(${school})`,
        backgroundSize: 'cover',
    };
    

    var items = [
        {
            name: 'Random Name #1',
            url: school,
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            description: 'Hello World!',
        },
        {
            name: 'Random Name #3',
            description: 'Hello World!',
        },
        {
            name: 'Random Name #4',
            description: 'Hello World!',
        },
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    return (
        <div>
            
            <Paper>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">Check it out!</Button>
            </Paper>
        </div>
    );
}

export default Example;
