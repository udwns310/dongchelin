import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Rank() {
  const [data, setData] = useState([]);
  const [selectRestaurant, setSelectRestaurant] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  const navigate = useNavigate();
  const nameInfo = useRef();
  const fetchData = (restaurant, category) => {
    const url = "https://dongchelin.dev-ssu.com/menu/rank"; //메뉴 검색 API
    const params = {};

    if (restaurant) params.restaurant = restaurant;
    if (category) params.category = category;

    axios
      .get(url, { params })
      .then((response) => {
        console.log(response, "suc");
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //식당 구분
  const handleClickRes = (restaurant) => {
    setSelectRestaurant(selectRestaurant === restaurant ? null : restaurant);
  };
  //종류
  const handleClickCate = (category) => {
    setSelectCategory(selectCategory === category ? null : category);
  };
  //메뉴 id
  const handleClickMenu = (name) => {
    navigate(`/review`, {
      state: { id: name },
    });
  };

  useEffect(() => {
    fetchData(selectRestaurant, selectCategory);
  }, [selectRestaurant, selectCategory]);

  return (
    <div>
      <Container>
        <div style={{ padding: "10px" }}></div>
        <h2
          style={{
            padding: "10px",
            textAlign: "left",
            display: "inline-block",
            fontSize: "35px",
          }}
        >
          메뉴 랭킹
        </h2>
        <Row id="rowR">
          <Col sm={3} id="c1R">
            <div id="resR">
              <div className="rankCtg">식당 구분</div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectRestaurant === "suduk" ? "white" : "#198754",
                    color: selectRestaurant === "suduk" ? "#198754" : "white",
                    border: "solid 2px #198754",
                  }}
                  className={`restau ${
                    selectRestaurant === "suduk" ? "selected" : ""
                  }`}
                  onClick={() => handleClickRes("suduk")}
                >
                  수덕전
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectRestaurant === "tech" ? "white" : "#FFC107",
                    color: selectRestaurant === "tech" ? "#FFC107" : "white",
                    border: "solid 2px #FFC107",
                  }}
                  className={`restau ${
                    selectRestaurant === "tech" ? "selected" : ""
                  }`}
                  onClick={() => handleClickRes("tech")}
                >
                  정보관
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectRestaurant === "dormitory" ? "white" : "#DC3545",
                    color:
                      selectRestaurant === "dormitory" ? "#DC3545" : "white",
                    border: "solid 2px #DC3545",
                  }}
                  className={`restau ${
                    selectRestaurant === "dormitory" ? "selected" : ""
                  }`}
                  onClick={() => handleClickRes("dormitory")}
                >
                  기숙사 식당
                </button>
              </div>
            </div>
            <div id="kindR">
              <div className="rankCtg">종류</div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectCategory === "korean" ? "white" : "#79ABFF",
                    color: selectCategory === "korean" ? "#79ABFF" : "white",
                    border: "solid 2px #79ABFF",
                  }}
                  className={`categorys ${
                    selectCategory === "korean" ? "selected" : ""
                  }`}
                  onClick={() => handleClickCate("korean")}
                >
                  한식
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectCategory === "western" ? "white" : "#F2CB61",
                    color: selectCategory === "western" ? "#F2CB61" : "white",
                    border: "solid 2px #F2CB61",
                  }}
                  className={`categorys ${
                    selectCategory === "western" ? "selected" : ""
                  }`}
                  onClick={() => handleClickCate("western")}
                >
                  양식
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectCategory === "japanese" ? "white" : "#F15F5F",
                    color: selectCategory === "japanese" ? "#F15F5F" : "white",
                    border: "solid 2px #F15F5F",
                  }}
                  className={`categorys ${
                    selectCategory === "japanese" ? "selected" : ""
                  }`}
                  onClick={() => handleClickCate("japanese")}
                >
                  일식
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectCategory === "chinese" ? "white" : "#FFA873",
                    color: selectCategory === "chinese" ? "#FFA873" : "white",
                    border: "solid 2px #FFA873",
                  }}
                  className={`categorys ${
                    selectCategory === "chinese" ? "selected" : ""
                  }`}
                  onClick={() => handleClickCate("chinese")}
                >
                  중식
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      selectCategory === "snack" ? "white" : "#D1B2FF",
                    color: selectCategory === "snack" ? "#D1B2FF" : "white",
                    border: "solid 2px #D1B2FF",
                  }}
                  className={`categorys ${
                    selectCategory === "snack" ? "selected" : ""
                  }`}
                  onClick={() => handleClickCate("snack")}
                >
                  분식
                </button>
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
              <Row
                key={index}
                onClick={() => {
                  console.log(`Row clicked ${index + 1}`);
                }}
              >
                <Col className="numR">{index + 1}</Col>
                <Col
                  className="numR"
                  onClick={() => {
                    handleClickMenu(item.id);
                  }}
                >
                  {item.name}
                </Col>{" "}
                {/* 메뉴명 */}
                <Col className="numR">
                  {item.restaurant === "suduk" && "수덕전"}
                  {item.restaurant === "tech" && "정보관"}
                  {item.restaurant === "dormitory" && "기숙사 식당"}
                </Col>
                <Col className="numR">{item.avgRate}</Col> {/* 별점 */}
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rank;
