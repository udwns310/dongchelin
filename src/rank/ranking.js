import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";

// import "./style.css";

function Rank() {
  const [data, setData] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchData = (restaurant, category) => {
    const url = "https://dongchelin.dev-ssu.com/menu/rank";
    const params = {};

    if (restaurant) params.restaurant = restaurant;
    if (category) params.category = category;

    axios
      .get(url, { params })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(selectedRestaurant, selectedCategory);
  }, [selectedRestaurant, selectedCategory]);

  return (
    <Container>
      <div id="titleR">메뉴 랭킹</div>
      <Row id="rowR">
        <Col sm={3} id="c1R">
          <div id="resR">
            <div className="rankCtg">식당 구분</div>
            <div
              className={`restau ${
                selectedRestaurant === "suduk" ? "selected" : ""
              }`}
              onClick={() => setSelectedRestaurant("suduk")}
            >
              수덕전
            </div>
            <div
              className={`restau ${
                selectedRestaurant === "tech" ? "selected" : ""
              }`}
              onClick={() => setSelectedRestaurant("tech")}
            >
              정보관
            </div>
            <div
              className={`restau ${
                selectedRestaurant === "dormitory" ? "selected" : ""
              }`}
              onClick={() => setSelectedRestaurant("dormitory")}
            >
              기숙사 식당
            </div>
          </div>
          <div id="kindR">
            <div className="rankCtg">종류</div>
            <div
              className={`categorys ${
                selectedCategory === "korean" ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory("korean")}
            >
              한식
            </div>
            <div
              className={`categorys ${
                selectedCategory === "western" ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory("western")}
            >
              양식
            </div>
            <div
              className={`categorys ${
                selectedCategory === "japanese" ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory("japanese")}
            >
              일식
            </div>
            <div
              className={`categorys ${
                selectedCategory === "chinese" ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory("chinese")}
            >
              중식
            </div>
            <div
              className={`categorys ${
                selectedCategory === "snack" ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory("snack")}
            >
              분식
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <div className="rankCtg">랭킹 순위</div>
          <Row>
            <Col className="ctgNum">순위</Col>
            <Col className="ctgNum">메뉴명</Col>
            <Col className="ctgNum">식당</Col>
            <Col className="ctgNum">별점</Col>
          </Row>
          {data.map((item, index) => (
            <Row key={index}>
              <Col className="numR">{index + 1}</Col>
              <Col>{item.name}</Col> {/* 메뉴명 */}
              <Col>
                {item.restaurant === "suduk" && "수덕전"}
                {item.restaurant === "tech" && "정보관"}
                {item.restaurant === "dormitory" && "기숙사 식당"}
              </Col>
              {/* 식당 */}
              <Col>{item.avgRate}</Col> {/* 별점 */}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Rank;
