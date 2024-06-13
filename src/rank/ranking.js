import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Rank() {
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
          <Row>
            <Col className="numR">1</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">2</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">3</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">4</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">5</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">6</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">7</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">8</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">9</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
          <Row>
            <Col className="numR">10</Col>
            <Col>.</Col>
            <Col>.</Col>
            <Col>.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Rank;
