import React, { Component } from 'react';
import { Row, Col } from 'antd';

export class gridComponent extends Component {
  render() {
    return (
    <React.Fragment>
   <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={8} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
    </React.Fragment>
    )
  }
}