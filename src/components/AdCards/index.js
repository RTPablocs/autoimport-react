import React, { Component } from 'react';
import {Container, Card, ProductHead, PriceTag, TextContainer, DeleteButton} from "./AdStyles";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

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
        fetch(`http://localhost:8080/ads/delete/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result) =>{
                this.setState({
                    ads: this.state.ads.filter(ad => ad.id !== id)
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
                        <PriceTag>{ad.price}</PriceTag>
                        <DeleteButton onClick={(event) => {this.removeAd(ad.id, event)}}><Fa icon={faTrash} color="white"/></DeleteButton>
                    </Card>
                )
                )}
                </Container>
            )
        }
    }
}

export default AdCards;
