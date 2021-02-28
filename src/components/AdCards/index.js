import React, { Component } from 'react';
import { Container, Card, ProductHead, PriceTag, TextContainer } from "./AdStyles";
import { BrowserRouter as Router } from 'react-router-dom'

class AdCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            ads: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/ads')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    loaded: true,
                    ads: result.data
                })
            }, (error) => {
                this.setState({
                    error: error,
                    loaded: false
                })
            })
    }

    render() {
        const { error, loaded, ads } = this.state;
        if (error) {
            return (
                <h2>There has been an Error!</h2>
            )
        }
        if (!loaded) {
            return (<h2>Loading, please Wait</h2>)
        } else {
            return (
                <Container>{ads.map(ad => (
                    <Card key={ad.id}>
                        <ProductHead to={`/ad/${ad.id}`}>{ad.title}</ProductHead>
                        <TextContainer>{ad.desc}</TextContainer>
                        <PriceTag>{ad.price}</PriceTag>
                    </Card>
                )
                )}
                </Container>
            )
        }
    }
}

export default AdCards;
