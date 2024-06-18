import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";

const cardStyle = {
  width: "100%",
  textAlign: "left",
  height: "20vh",
};

function ReviewCard(props) {
  const food_id = props.food_id;
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
  if (getData.reviews) {
    return (
      <div>
        <Row gutter={16} style={cardStyle}>
          <Col span={8}>
            <Card
              title={getData.reviews[0].user.nickname}
              bordered={true}
              style={{ border: "1px solid grey" }}
            >
              {getData.reviews[0].comment}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={getData.reviews[0].user.nickname}
              bordered={true}
              style={{ border: "1px solid grey" }}
            >
              {getData.reviews[0].comment}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={getData.reviews[0].user.nickname}
              bordered={true}
              style={{ border: "1px solid grey" }}
            >
              {getData.reviews[0].comment}
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={cardStyle}>
          <Col span={8}>
            <Card
              title={getData.reviews[0].user.nickname}
              bordered={true}
              style={{ border: "1px solid grey" }}
            >
              {getData.reviews[0].comment}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={getData.reviews[0].user.nickname}
              bordered={true}
              style={{ border: "1px solid grey" }}
            >
              {getData.reviews[0].comment}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={getData.reviews[0].user.nickname}
              bordered={true}
              style={{ border: "1px solid grey" }}
            >
              {getData.reviews[0].comment}
            </Card>
          </Col>
        </Row>
      </div>
    );
  } else {
    return null;
  }
}
export default ReviewCard;
