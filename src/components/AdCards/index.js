import React, {Component} from 'react';
import {
    Container,
    Card,
    ProductHead,
    PriceTag,
    DeleteButton,
    FilterForm,
    FLabel
} from "./AdStyles";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

class AdCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            ads: [],
            filterAds: [],
            filters: {
                brand: '',
                model: '',
                minPrice: '',
                maxPrice: '',
            }
        }
        this.removeAd = this.removeAd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.executeFiltering = this.executeFiltering.bind(this)
        this.clearFilters = this.clearFilters.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:8080/ads')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    loaded: true,
                    ads: result.data,
                    filterAds: result.data
                })
            }, (error) => {
                this.setState({
                    error: error,
                    loaded: false
                })
            })
    }

    removeAd(id, event) {
        event.stopPropagation();
        fetch(`http://localhost:8080/ads/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    ads: this.state.ads.filter(ad => ad.id !== id)
                })
            })

    }

    executeFiltering(event) {
        event.preventDefault()
        this.setState({
           filterAds: this.state.filterAds.filter(ad => ad.makeName === this.state.filters.brand)
        })


    }
    clearFilters(event){
        event.stopPropagation()
        this.setState({
            filterAds: this.state.ads
        })
        console.log(this.state)
    }

    handleChange(event){
        this.setState({
            filters:{
                brand: event.target.value
            }
        })
    }

    render() {
        const {error, loaded, filterAds} = this.state;
        const {brand} = this.state.filters
        if (error) {
            return (
                <h2>There has been an Error!</h2>
            )
        }
        if (!loaded) {
            return (<h2>Loading, please Wait</h2>)
        } else {
            return (

                <div>
                    <FilterForm onSubmit={this.executeFiltering}>
                        <FLabel htmlFor="">3D Model</FLabel>
                        <input type="checkbox"/>
                        <FLabel htmlFor="">Brand</FLabel>
                        <input type="text" value={brand} onChange={this.handleChange}/>
                        <FLabel htmlFor="">Model</FLabel>
                        <input type="text"/>
                        <input type="submit" value="Submit"/>

                    </FilterForm>
                    <button onClick={this.clearFilters}>Clear</button>
                    <Container>
                        {filterAds.map(ad => (
                                <Card key={ad.id}>
                                    <ProductHead to={`/ad/${ad.id}`}>{ad.title}</ProductHead>
                                    <PriceTag>{ad.price}</PriceTag>
                                    <DeleteButton onClick={(event) => {
                                        this.removeAd(ad.id, event)
                                    }}><Fa icon={faTrash} color="white"/></DeleteButton>
                                </Card>
                            )
                        )}
                    </Container>
                </div>

            )
        }
    }
}

export default AdCards;
