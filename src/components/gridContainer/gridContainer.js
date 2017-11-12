import React, { Component } from 'react';
import { Col } from 'react-bootstrap'

class gridContainer extends Component {
    render() {
        return (
            <Col md={10} mdOffset={1} className="gridContainer">
                grid Col
            </Col>
        );
    }
}

export default gridContainer;
