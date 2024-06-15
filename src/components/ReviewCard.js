import React from 'react';

import { Card, Col, Row } from 'antd';

const cardStyle = {
    width: '100%',
    textAlign: 'left',
    height: '20vh',
};

function ReviewCard() {
    return (
        <div>
            <Row gutter={16} style={cardStyle}>
                <Col span={8}>
                    <Card title="최영준" bordered={true} style={{ border: '1px solid grey' }}>
                        재료가 친절해요
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="최영준" bordered={true} style={{ border: '1px solid grey' }}>
                        사장님이 맛있어요
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="최영준" bordered={true} style={{ border: '1px solid grey' }}>
                        서비스가 냄새나요
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={cardStyle}>
                <Col span={8}>
                    <Card title="최영준" bordered={true} style={{ border: '1px solid grey' }}>
                        재료가 친절해요
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="최영준" bordered={true} style={{ border: '1px solid grey' }}>
                        사장님이 맛있어요
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="최영준" bordered={true} style={{ border: '1px solid grey' }}>
                        서비스가 냄새나요
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ReviewCard;
