import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import chasu from './image/chasu.jpg';
import suyuk from './image/suyuk.jpg';
import buldak from './image/buldak.jpg';
import cheese from './image/cheese.jpg';
import samgyup from './image/samgyup.jpg';
import jeyuk from './image/jeyuk.jpg';

var title = ['수육정식', '차슈덮밥', '돌솥치즈불닭덮밥', '치즈돈까스', '삼겹살비빔밥', '제육불고기덮밥'];
var desc = [];

export default function ActionAreaCard() {
    return (
        <div>
            <h2>메뉴 추천</h2>
            <div style={{ display: 'flex' }}>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={suyuk} alt="chasu" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title[0]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={chasu} alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title[1]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={buldak} alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title[2]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div style={{ display: 'flex' }}>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={cheese} alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title[3]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={samgyup} alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title[4]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={jeyuk} alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title[5]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
