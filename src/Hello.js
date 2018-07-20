import React, { Component } from 'react'


class Hello extends React.Component {
    render() {
        const { name } = this.props
        return (
            <div>
                Hello {name}!!
            </div>
        )
    }
}

export default Hello
