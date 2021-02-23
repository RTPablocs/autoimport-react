import React, {Component} from 'react';
import {Container, Card, ProductHead, PriceTag} from "./AdStyles";
import AdPage from "../../pages/AdPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
        const {error, loaded, ads} = this.state;
        if (error) {
            return (
                <h2>There has been an Error!</h2>
            )
        }
        if (!loaded) {
            return (<h2>Loading, please Wait</h2>)
        } else {
            return (
                <Container>
                    <Router>
                            {ads.map(ad => (
                                    <Card key={ad.id}>
                                        <ProductHead to={'/ad/' + ad.id} state={ad}>{ad.title}</ProductHead>
                                        <Route exact path='/ad/:id' component={AdPage}/>
                                        <PriceTag>{ad.price}</PriceTag>
                                    </Card>
                                )
                            )}
                    </Router>
                </Container>
            )
        }
    }
}

export default AdCards;
