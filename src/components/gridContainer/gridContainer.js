import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import ContactItem from '../contactItem/contactItem'

class gridContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         contacts: []
      }
    }

    componentDidMount() {
        this.ApiCall();
    }

    ApiCall() {
        fetch('/api/contacts')
        .then(results => {
            return results.json();
        }).then(data =>{
            console.log(data);
            this.setState ({
                contacts : data
            })
        })
    }
    

    render() {
        let items = this.state.contacts;
        return (
            <div>
            <Col md={10} mdOffset={1} className="gridContainer">

                <div className="row">Header Row</div>
                    {items.map((item) =>
                        <Row key = {item.id}>
                            <ContactItem
                                item = {item} />
                        </Row>
            
                    )}
            

            </Col>
            </div>
        )
        
    }
}

export default gridContainer;
