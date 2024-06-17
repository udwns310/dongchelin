import * as React from 'react';
import { useEffect, useState } from 'react';
import ActionCards from '../components/ActionCard.js';
import { Flex } from 'antd';
import axios from 'axios';

export default function ActionAreaCard() {
    const [getData, setgetData] = useState([]);

    useEffect(() => {
        axios
            .get('https://dongchelin.dev-ssu.com/menu/recommend')
            .then(function (response) {
                console.log(response, '성공');
                setgetData(response.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    if (getData[0]) {
        return (
            <div>
                <h2
                    className="homeheader"
                    style={{
                        padding: '10px',
                        textAlign: 'left',
                        display: 'inline-block',
                        zIndex: '10',
                    }}
                >
                    메뉴 추천
                </h2>
                <Flex>
                    {Array.from({
                        length: 3,
                    }).map((_, i) => (
                        <ActionCards title={getData[i].name} desc={getData[i].avgRate} food_img={getData[i].name} />
                    ))}
                </Flex>
                <Flex>
                    {Array.from({
                        length: 3,
                    }).map((_, i) => (
                        <ActionCards
                            title={getData[i + 3].name}
                            desc={getData[i + 3].avgRate}
                            food_img={getData[i + 3].name}
                        />
                    ))}
                </Flex>
            </div>
        );
    } else {
        return null;
    }
}
