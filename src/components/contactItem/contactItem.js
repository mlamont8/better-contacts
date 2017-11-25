import React, { Component } from 'react'

export default class ContactItem extends Component {
    // Renders a single row
    render() {
      let item = this.props.item
    return (
      <div>
                {item.firstName}{item.lastName}
      </div>
    
    )
  }
}
