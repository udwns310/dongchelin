import React from "react";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Carousel } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "33.3%",
  display: "inline",
};

function ReviewHeader(props) {
  const [badgeStyle, setbadgeStyle] = useState("");

  const food_id = props.food_id;
  const food_img = props.food_img;
  const avgRate = props.avgRate;
  const [getData, setgetData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dongchelin.dev-ssu.com/menu/detail/${food_id}`)
      .then(function (response) {
        console.log(response, "성공");
        setgetData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
            style={contentStyle}
          />
          <Image
            src={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
            style={contentStyle}
          />
          <Image
            src={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
            style={contentStyle}
          />
        </div>
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
            style={contentStyle}
          />
          <Image
            src={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
            style={contentStyle}
          />
          <Image
            src={process.env.PUBLIC_URL + "/img/" + food_img + ".jpg"}
            style={contentStyle}
          />
        </div>
      </Carousel>
      <div>
        <Image src="img/best3.png" style={{ width: "50px", height: "50px" }} />
        <h1 style={{ display: "inline", fontSize: "50px", padding: "15px" }}>
          {getData.name}
        </h1>
        <p
          style={{
            display: "block",
            fontSize: "50px",
            color: "orange",
          }}
        >
          <Rating name="read-only" value={avgRate} readOnly />
        </p>

        <Badge bg={badgeStyle} style={{ fontSize: "20px" }}>
          <BadgeName />
        </Badge>
      </div>
    </div>
  );

  function BadgeName() {
    var restaurant = getData.restaurant;
    switch (restaurant) {
      case "suduk":
        setbadgeStyle("success");
        return "수덕전";
      case "tech":
        setbadgeStyle("warning");
        return "정보관";
      case "dormitory":
        setbadgeStyle("danger");
        return "기숙사식당";
      default:
        return null;
    }
  }
}

export default ReviewHeader;
