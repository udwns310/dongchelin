import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PropaneSharp } from "@mui/icons-material";
import chasu from "./image/chasu.jpg";
import suyuk from "./image/suyuk.jpg";
import buldak from "./image/buldak.jpg";
import cheese from "./image/cheese.jpg";
import samgyup from "./image/samgyup.jpg";
import jeyuk from "./image/jeyuk.jpg";

export default function ActionCards(props) {
  const title = props.title;
  const desc = props.desc;
  return (
    <>
      <Card style={{ width: "33%" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={suyuk} alt="chasu" />
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
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
