import React, { Component } from 'react';
import classNames from 'classnames';


class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };

        this.setIsCollapsed = this.setIsCollapsed.bind(this);
    }

    setIsCollapsed() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }

    render() {
        const { heading, children } = this.props;
        const { isCollapsed } = this.state;

        return(
            <div className="Accordion">
                <div className="Heading" onClick={this.setIsCollapsed}>
                    <h2>{ heading }</h2>
                </div>
                { !isCollapsed && <div className="Content">{ children }</div> }
            </div>        
        );
    }
}

export default Accordion;