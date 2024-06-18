import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Input } from "antd";
import Rating from "@mui/material/Rating";
import ReviewCard from "../components/ReviewCard";
import { message } from "antd";
import ReviewHeader from "./ReviewHeader";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "33.3%",
  display: "inline",
};
const cardStyle = {
  width: "100%",
  textAlign: "left",
  height: "20vh",
};

function Review() {
  const { TextArea } = Input;
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0); //별점 value
  const WriteReview = {};
  const badgeStyle = ["success", "danger", "warning"];
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
  return (
    <div>
      {contextHolder}
      <ReviewHeader />

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
      <ReviewCard />
    </div>
  );
}

export default Review;
