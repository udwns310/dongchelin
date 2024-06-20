import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Input } from 'antd';
import Rating from '@mui/material/Rating';
import ReviewCard from '../components/ReviewCard';
import { message } from 'antd';
import ReviewHeader from './ReviewHeader';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Review() {
    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(0); //별점 value
    const [loginToken, setloginToken] = useState('');
    const [reviewText, setreivewText] = useState('');
    const onReviewChange = (e) => {
        setreivewText(e.target.value);
    };
    const [messageApi, contextHolder] = message.useMessage();
    const fail = () => {
        messageApi.open({
            type: 'error',
            content: '로그인 후에 이용하세요',
            className: 'custom-class',
            style: {
                marginTop: '50vh',
                fontSize: '20px',
            },
        });
    };
    const loginCheck = () => {
        if (localStorage.getItem('loginToken')) {
            console.log(localStorage.getItem('loginToken'));
            setOpen(true);
            setloginToken(localStorage.getItem('loginToken'));
        } else {
            fail();
        }
    };
    const location = useLocation();
    const food_id = location.state.id;
    // const food_img = location.state.food_img;
    // const avgRate = location.state.avgRate;
    const [getData, setgetData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://dongchelin.dev-ssu.com/menu/detail/${food_id}`)
            .then(function (response) {
                console.log(response, '성공');
                setgetData(response.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    });
    const onwriteReview = () => {
        axios
            .post(
                `https://dongchelin.dev-ssu.com/review/${food_id}`,
                {
                    rate: value,
                    comment: reviewText,
                },
                {
                    headers: {
                        authorization: `Bearer ${loginToken}`,
                    },
                }
            )
            .then(function (response) {
                console.log(response, '성공');
                window.location.reload();
                
            })
            .catch(function (err) {
                console.log(err);
            });
    };
    if (getData.avgRate) {
        return (
            <div>
                {contextHolder}
                <ReviewHeader
                    food_id={food_id}
                    food_img={getData.name}
                    avgRate={getData.avgRate}
                    title={getData.name}
                    restaurant={getData.restaurant}
                />

                <div>
                    <h3 style={{ float: 'left' }}>메뉴 평가</h3>
                </div>

                <div className="mb-2" style={{ float: 'right' }}>
                    <Button variant="warning" size="lg" onClick={loginCheck}>
                        리뷰쓰기
                    </Button>
                    <Modal
                        title="리뷰 작성"
                        centered
                        open={open}
                        onOk={() => {
                            setOpen(false);
                            onwriteReview();
                        }}
                        onCancel={() => setOpen(false)}
                        width={1000}
                        okText="확인"
                        cancelText="취소"
                    >
                        <Rating
                            name="half-rating"
                            value={value}
                            onChange={(e, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <TextArea rows={4} onChange={onReviewChange} style={{ resize: 'none' }} />
                    </Modal>
                </div>
                <ReviewCard reviews={getData.reviews} />
            </div>
        );
    } else {
        return null;
    }
}

export default Review;
