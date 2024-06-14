import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useAsyncError } from "react-router-dom";
import "./style.css";

function Rank() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dongchelin.dev-ssu.com/")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <div id="titleR">메뉴 랭킹</div>
      <Row id="rowR">
        <Col sm={3} id="c1R">
          <div id="resR">
            <div className="rankCtg">식당 구분</div>
            <div className="restau">수덕전</div>
            <div className="restau">정보관</div>
            <div className="restau">기숙사 식당</div>
          </div>
          <div id="kindR">
            <div className="rankCtg">종류</div>
            <div className="kinds">한식</div>
            <div className="kinds">양식</div>
            <div className="kinds">일식</div>
            <div className="kinds">중식</div>
            <div className="kinds">분식</div>
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
              <Col>{item.menu_id}</Col> {/*메뉴명*/}
              <Col>{item.restaurant}</Col> {/*식당*/}
              <Col>{item.rate}</Col> {/*별점*/}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Rank;
