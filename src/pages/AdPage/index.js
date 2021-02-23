import React, {Component} from 'react';

class AdPage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {console.log(this.props)}P1
            </div>
        );
    }
}

export default AdPage;
