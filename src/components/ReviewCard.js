import React from "react";
import { Card, Col, Row } from "antd";
import Rating from "@mui/material/Rating";

const cardStyle = {
  width: "100%",
  textAlign: "left",
  height: "20vh",
};

function ReviewCard(props) {
  const reviews = props.reviews;

  if (reviews) {
    return (
      <div>
        <Row gutter={16} style={cardStyle}>
          {Array.from({
            length: 6,
          }).map((_, i) => (
            <Col span={8}>
              <Card
                title={reviews[0].user.nickname}
                extra={
                  <Rating name="read-only" value={reviews[0].rate} readOnly />
                }
                bordered={true}
                style={{ border: "1px solid grey" }}
              >
                {reviews[0].comment}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    return null;
  }
}
export default ReviewCard;
