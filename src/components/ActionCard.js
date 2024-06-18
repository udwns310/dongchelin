import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

export default function ActionCards(props) {
  const title = props.title;
  const avgRate = props.avgRate;
  const food_img = props.food_img;

  const navigate = useNavigate();
  const navigateToReview = () => {
    navigate("/review", { state: { title: props.title, id: props.id, food_img: props.food_img, avgRate: props.avgRate} });
  };

  return (
    <>
      <Card style={{ width: "34%" }} onClick={navigateToReview}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontFamily: "GangwonEdu_OTFBoldA" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontFamily: "GangwonEdu_OTFBoldA" }}
            >
              <Rating name="read-only" value={avgRate} readOnly />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
