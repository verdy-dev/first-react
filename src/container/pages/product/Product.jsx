import React, {Component, Fragment} from 'react';
import './Product.css'
import CardProduct from './card-product/CardProduct';

class Product extends Component {
    state = {
        order: 0 
    }

    handleCounterChange = newValue => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="http://etanee.co.id/wp-content/uploads/2018/09/logo-96px.png" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="" alt=""/>
        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                {/* props pada statefull component berupa function */}
                <CardProduct 
                onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;