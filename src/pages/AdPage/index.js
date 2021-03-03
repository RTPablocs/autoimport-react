import React, {Component} from 'react';
import Renderer from "../../components/Renderer";
import {Carousel} from "react-responsive-carousel";
import {Photos} from '../home/photos'
import MapContainer from "../../components/maps";


class AdPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            error: null,
            loaded: false,
            ad: {},
            photos: Photos
        }
        this.params = props.match.params
    }

    componentDidMount() {

        fetch(`http://localhost:8080/ads/${this.params.id}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    loaded: true,
                    ad: result.data[0],
                })
            }, (error) => {
                this.setState({
                    error: error,
                    loaded: false
                })
            })


    }

    render() {
        const {error, loaded, ad} = this.state;
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
                    <Carousel>
                        {this.state.photos.map(photo => (
                            <img src={photo.image}/>
                        ))}

                    </Carousel>

                    <p>{ad.desc}</p>
                    <MapContainer/>
                </div>

            )
        }
    }
}

export default AdPage;
