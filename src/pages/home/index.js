import React, {Component} from 'react';
import CategoryCard from "../../components/CategoryCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import {Photos} from './photos'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomPics: Photos
        }
    }

    render() {
        return (
            <div>
                <Carousel>
                    {this.state.randomPics.map( photo => (
                        <img src={photo.image} />
                    ))}
                </Carousel>

                <CategoryCard />
            </div>
        );
    }
}

export default Home;
