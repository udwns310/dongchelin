import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Input } from "antd";
import Rating from "@mui/material/Rating";
import ReviewCard from "../components/ReviewCard";
import { message } from "antd";
import ReviewHeader from "./ReviewHeader";
import { useLocation } from "react-router-dom";

function Review() {
  const { TextArea } = Input;
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0); //별점 value
  const onReviewChange = (e) => {
    console.log(e.target.value);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const fail = () => {
    messageApi.open({
      type: "error",
      content: "로그인 후에 이용하세요",
      className: "custom-class",
      style: {
        marginTop: "50vh",
        fontSize: "20px",
      },
    });
  };
  const loginCheck = () => {
    if (localStorage.getItem("loginToken")) {
      console.log(localStorage.getItem("loginToken"));
      setOpen(true);
    } else {
      fail();
    }
  };
  const location = useLocation();
  const food_id = location.state.id;
  const food_img = location.state.food_img;
  const avgRate = location.state.avgRate;
  return (
    <div>
      {contextHolder}
      <ReviewHeader food_id={food_id} food_img={food_img} avgRate={avgRate} />

      <div>
        <h3 style={{ float: "left" }}>메뉴 평가</h3>
      </div>

      <div className="mb-2" style={{ float: "right" }}>
        <Button variant="warning" size="lg" onClick={loginCheck}>
          리뷰쓰기
        </Button>
        <Modal
          title="리뷰 작성"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          okText="확인"
          cancelText="취소"
        >
          <Rating
            name="half-rating"
            value={value}
            precision={0.5}
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
          />
          <TextArea
            rows={4}
            onChange={onReviewChange}
            style={{ resize: "none" }}
          />
        </Modal>
      </div>
      <ReviewCard food_id={food_id} />
    </div>
  );
}

export default Review;
