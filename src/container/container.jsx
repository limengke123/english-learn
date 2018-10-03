import React from 'react'
import {withRouter} from 'react-router-dom'
import propTypes from 'prop-types'

class Container extends React.Component {
    static propTypes = {
        children: propTypes.element.isRequired
    }
    render () {
        const {history, children} = this.props
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default withRouter(Container)