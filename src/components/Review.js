import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Card, Carousel, Col, Row, Modal, Input } from 'antd';
import Rating from '@mui/material/Rating';
import ReviewCard from './ReviewCard';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '33.3%',
    display: 'inline',
};
const cardStyle = {
    width: '100%',
    textAlign: 'left',
    height: '20vh',
};

function Review() {
    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <Image src="img/cheese.jpg" style={contentStyle} />
                    <Image src="img/cheese.jpg" style={contentStyle} />
                    <Image src="img/cheese.jpg" style={contentStyle} />
                </div>
                <div>
                    <Image src="img/jeyuk.jpg" style={contentStyle} />
                    <Image src="img/jeyuk.jpg" style={contentStyle} />
                    <Image src="img/jeyuk.jpg" style={contentStyle} />
                </div>
            </Carousel>
            <div>
                <Image src="img/best3.png" style={{ width: '80px', height: '80px' }} />
                <h1 style={{ display: 'inline', fontSize: '50px', padding: '15px' }}>차슈덮밥</h1>
                <p style={{ display: 'inline', fontSize: '50px', color: 'orange', paddingRight: '15px' }}>4.5</p>
                <p style={{ fontSize: '20px' }}>부드러운 차슈와 간장소스의 만남</p>
                <Badge bg="success" style={{ fontSize: '20px' }}>
                    수덕전
                </Badge>
            </div>
            <hr />

            <div>
                <h2 style={{ float: 'left' }}>메뉴 평가</h2>
            </div>

            <div className="mb-2" style={{ float: 'right' }}>
                <Button variant="warning" size="lg">
                    좋아요
                </Button>{' '}
                <Button variant="warning" size="lg">
                    즐겨찾기
                </Button>{' '}
                <Button variant="warning" size="lg" onClick={() => setOpen(true)}>
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
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <TextArea rows={4} />
                </Modal>
            </div>
            <ReviewCard />
        </div>
    );
}

export default Review;