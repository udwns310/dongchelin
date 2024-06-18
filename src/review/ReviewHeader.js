import React from "react";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Carousel } from "antd";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "33.3%",
  display: "inline",
};

function ReviewHeader() {
  const badgeStyle = ["success", "danger", "warning"];
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Image src="img/국밥.jpg" style={contentStyle} />
          <Image src="img/국밥.jpg" style={contentStyle} />
          <Image src="img/국밥.jpg" style={contentStyle} />
        </div>
        <div>
          <Image src="img/라면.jpg" style={contentStyle} />
          <Image src="img/라면.jpg" style={contentStyle} />
          <Image src="img/라면.jpg" style={contentStyle} />
        </div>
      </Carousel>
      <div>
        <Image src="img/best3.png" style={{ width: "80px", height: "80px" }} />
        <h1 style={{ display: "inline", fontSize: "50px", padding: "15px" }}>
          차슈덮밥
        </h1>
        <p
          style={{
            display: "inline",
            fontSize: "50px",
            color: "orange",
            paddingRight: "15px",
          }}
        >
          4.5
        </p>
        <p></p>
        <Badge bg={badgeStyle[0]} style={{ fontSize: "20px" }}>
          수덕전
        </Badge>
      </div>
    </div>
  );
}

export default ReviewHeader;
