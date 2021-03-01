import React, { Component } from 'react';
import { Container, Card, ProductHead, PriceTag, TextContainer } from "./AdStyles";

class AdCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            ads: []
        }
        this.removeAd = this.removeAd.bind(this)
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

    removeAd(id, event){
        event.stopPropagation();
        const position = this.state.ads.map(ad => {return ad.id}).indexOf(id)
        let nAds = this.state.ads.splice(position)
        this.setState({
            ads: nAds
        })
        fetch(`http://localhost:8080/ads/delete/${id}`,{
            method: 'DELETE'
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
                        <button onClick={(event) => {this.removeAd(ad.id, event)}}>Delete</button>
                    </Card>
                )
                )}
                </Container>
            )
        }
    }
}

export default AdCards;
