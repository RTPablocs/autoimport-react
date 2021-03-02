import React, {Component} from 'react';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            brand: '',
            model: '',
            price: '',
        }
    }

    componentDidMount() {
        const fetchOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}

        }
    }

    render() {
        return (
            <form>
                <label htmlFor="">Brand</label>
                <input type="text"/>
                <label htmlFor="">Model</label>
                <input type="text"/>
                <label htmlFor="">Mileage</label>
                <input type="number"/>
                <label htmlFor="">Price</label>
                <input type="number"/>
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
        );
    }
}

export default CreateForm;