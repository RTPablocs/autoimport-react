import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '350px',
    height: '350px'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        let latitude = function() {
            let num = (Math.random() * 180).toFixed(3);
            let type = Math.floor(Math.random());
            if (type === 0) {
                num = num * -1;
            }
            return num;
        }

        let long = function () {
            let num = (Math.random() * 90).toFixed(3);
            let type = Math.floor(Math.random());
            if (type === 0) {
                num = num * -1;
            }
            return num;
        }


        this.setState({
            lat: latitude,
            lng: long
        })
    }


    render() {
        const {lat, lng} = this.state
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: lat,
                        lng: lng
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyANzWaquCZ2tnGe0ujLvnV19Cp7FDK8Zxk',
    language: 'ES'
})(MapContainer);