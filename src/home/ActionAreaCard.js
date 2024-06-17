import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useScrollTrigger } from "@mui/material";
import chasu from "./image/chasu.jpg";
import suyuk from "./image/suyuk.jpg";
import buldak from "./image/buldak.jpg";
import cheese from "./image/cheese.jpg";
import samgyup from "./image/samgyup.jpg";
import jeyuk from "./image/jeyuk.jpg";
import ActionCards from "../components/ActionCard.js";
import { Flex } from "antd";
import axios from "axios";

const baseStyle = {
  width: "25%",
  height: 54,
};
var title = [
  "수육정식",
  "차슈덮밥",
  "돌솥치즈불닭덮밥",
  "치즈돈까스",
  "삼겹살비빔밥",
  "제육불고기덮밥",
];

export default function ActionAreaCard() {
  const [name, setName] = useState([]);
  const [rate, setRate] = useState([]);
  const [getData, setgetData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dongchelin.dev-ssu.com/menu/recommend")
      .then(function (response) {
        console.log(response, "성공");
        setgetData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2
        className="homeheader"
        style={{
          padding: "10px",
          textAlign: "left",
          display: "inline-block",
          zIndex: "10",
        }}
      >
        메뉴 추천
      </h2>
      <Flex>
        {Array.from({
          length: 3,
        }).map((_, i) => (
          <ActionCards title={getData[i].name} desc={getData[i].avgRate} />
        ))}
      </Flex>
      <Flex>
        {Array.from({
          length: 3,
        }).map((_, i) => (
          <ActionCards
            title={getData[i + 3].name}
            desc={getData[i + 3].avgRate}
          />
        ))}
      </Flex>
    </div>
  );
}
