import React from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'

class HomePage extends React.Component{
    render(){
        return (
            <div>
                this is home page
                <Button onClick={() => this.props.history.push('/exam')}>按钮</Button>
            </div>
        )
    }
}

export default withRouter(HomePage)