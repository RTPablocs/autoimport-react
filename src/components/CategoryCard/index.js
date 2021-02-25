import React, {Component} from 'react'

import {Container, Card, CardTitle} from './cardStyles';

export default class CategoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            categories: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loaded: true,
                        categories: result.data
                    })
                },
                (error) => {
                    this.setState({
                        loaded: true,
                        error: error
                    })
                }
            )
    }

    render() {
        const {error, loaded, categories} = this.state;
        if (error) {
            return (
                <div>
                    <p>There has been an error, please, refresh the page</p>
                </div>
            )
        }
        if (!loaded) {
            return (
                <div>Loading, please wait</div>
            )
        } else {
            return (
                <Container>
                    {categories.map(category => (
                        <Card key={category.category}>
                            <CardTitle>{category.category_name}</CardTitle>
                            <p>{category.category_count}</p>
                        </Card>

                    ))
                    }
                </Container>
            )
        }
    }
}
