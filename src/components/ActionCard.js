import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionCards(props) {
    const title = props.title;
    const desc = props.desc;
    const food_img = props.food_img;

    return (
        <>
            <Card style={{ width: '33%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={process.env.PUBLIC_URL + '/img/' + food_img  + '.jpg'}
                    />

                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{ fontFamily: 'GangwonEdu_OTFBoldA' }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ fontFamily: 'GangwonEdu_OTFBoldA' }}
                        >
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
