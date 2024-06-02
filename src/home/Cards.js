import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import school from "./image/school.jpg"

function Cards() {
  var title = "오늘의 학식"
  var location = ["수덕전", "정보공학관", "기숙사식당", "교직원식당"];
  var suduck_menu = ["중식볶음밥&탕수육", "물냉면", "라면, 라면&밥"];
  var jungbo_menu = ["고구마치즈돈까스", "라면, 라면&밥", "닭볶음탕"];
  var domitory_menu = ["육개장,돈갈비찜,쥐어채볶음,미역줄기무침,깍두기", "쇠고기미역국,토마토스파게티,꼬마돈까스&케찹,궁채나물,김치", "김밥볶음밥,두부미소국,츄러스,얼갈이겉절이,김치/후식음료캔"];
  var staff_menu = ["시락국,짜장소스,파닭전,고추잡채&꽃빵,어묵메란조림,장아찌,겉절이,김치,숭늉"];

  const CardStyle = {
    margin: '2rem',
    height: '100%'
  }
  const divStyle = {
    backgroundImage: `url(${school})`,
    backgroundSize: 'cover',
  }
  
  return (
    <div>
      {/*수덕전*/}
      <CardGroup style={divStyle}>
      <Card style={CardStyle}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {location[0]}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{suduck_menu[0]}</ListGroup.Item>
          <ListGroup.Item>{suduck_menu[1]}</ListGroup.Item>
          <ListGroup.Item>{suduck_menu[2]}</ListGroup.Item>
        </ListGroup>
      </Card>
      {/*정보공학관*/}
      <Card style={CardStyle}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {location[1]}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{jungbo_menu[0]}</ListGroup.Item>
          <ListGroup.Item>{jungbo_menu[1]}</ListGroup.Item>
          <ListGroup.Item>{jungbo_menu[2]}</ListGroup.Item>
        </ListGroup>
      </Card>
      {/*기숙사식당*/}
      <Card style={CardStyle}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {location[2]}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{domitory_menu[0]}</ListGroup.Item>
          <ListGroup.Item>{domitory_menu[1]}</ListGroup.Item>
          <ListGroup.Item>{domitory_menu[2]}</ListGroup.Item>
        </ListGroup>
      </Card>
      {/*교직원식당*/}
      <Card style={CardStyle}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {location[3]}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{staff_menu[0]}</ListGroup.Item>

        </ListGroup>
      </Card>

    </CardGroup>
    </div>
  );
}

export default Cards;