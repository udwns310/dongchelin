import React from 'react';
import { Card, Col, Row } from 'antd';
import Rating from '@mui/material/Rating';

const cardStyle = {
    width: '100%',
    textAlign: 'left',
    height: '20vh',
};

function ReviewCard(props) {
    const reviews = props.reviews;
    if (reviews) {
        return (
            <div>
                <Row gutter={16} style={cardStyle}>
                    {Array.from({
                        length: reviews.length > 6 ? 6 : reviews.length,
                    }).map((_, i) => (
                        <Col span={8}>
                            <Card
                                title={reviews[i].user.nickname}
                                extra={<Rating name="read-only" value={reviews[i].rate} readOnly />}
                                bordered={true}
                                style={{ border: '1px solid grey' }}
                            >
                                {reviews[i].comment}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    } else {
        return null;
    }
}
export default ReviewCard;
