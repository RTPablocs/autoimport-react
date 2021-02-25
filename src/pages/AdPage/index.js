import React, { Component } from 'react';

class AdPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            error: null,
            loaded: false,
            ad: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/ads/1')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    loaded: true,
                    ad: result.data[0]
                })
            }, (error) => {
                this.setState({
                    error: error,
                    loaded: false
                })
            })
    }

    render() {
        const { error, loaded, ad } = this.state;
        console.log(ad)
        if (error) {
            return (
                <h2>Error</h2>

            )
        }
        if (!loaded) {
            return (
                <h2>Loading, please wait </h2>
            )
        } else {
            return (
                <div>
                    <h1>{ad.title}</h1>
                    <p>{ad.desc}</p>
                </div>

            )
        }
    }
}

export default AdPage;
