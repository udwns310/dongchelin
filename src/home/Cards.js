import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import school from "./image/school.jpg";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Cards() {
  var title = "오늘의 학식";
  var location = ["수덕전", "정보공학관", "기숙사식당", "교직원식당"];

  const CardStyle = {
    margin: "2rem",
    height: "100%",
  };
  const divStyle = {
    backgroundImage: `url(${school})`,
    backgroundSize: "cover",
  };
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get("https://dongchelin.dev-ssu.com/menu/list?date=20240613")
      .then(function (response) {
        console.log(response, "성공");
        setMenus(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  if (menus.suduk) {
    return (
      <div>
        <div>
          <h2
            style={{
              padding: "10px",
              textAlign: "left",
              display: "inline-block",
            }}
          >
            학식 정보
          </h2>
          {/*수덕전*/}
          <CardGroup style={divStyle}>
            <Card style={CardStyle}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{location[0]}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{menus.suduk.corner1}</ListGroup.Item>
                <ListGroup.Item>{menus.suduk.corner2}</ListGroup.Item>
                <ListGroup.Item>{menus.suduk.corner3}</ListGroup.Item>
              </ListGroup>
            </Card>
            {/*정보공학관*/}
            <Card style={CardStyle}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{location[1]}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{menus.tech.corner1}</ListGroup.Item>
                <ListGroup.Item>{menus.tech.corner2}</ListGroup.Item>
                <ListGroup.Item>{menus.tech.corner3}</ListGroup.Item>
              </ListGroup>
            </Card>
            {/*기숙사식당*/}
            <Card style={CardStyle}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{location[2]}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{menus.dormitory.corner1}</ListGroup.Item>
                <ListGroup.Item>{menus.dormitory.corner1}</ListGroup.Item>
                <ListGroup.Item>{menus.dormitory.corner1}</ListGroup.Item>
              </ListGroup>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Cards;
