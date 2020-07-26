import React, {Component} from 'react';
import '../Product.css'

class CardProduct extends Component {
    state = {
        order: 0,
        name: 'key'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
       this.setState({
           order: this.state.order + 1 
       }, () => {
        //    mengirimkan nilai props melalui function handleCounterChange
            this.handleCounterChange(this.state.order);
       })
    }

    handleMinus = () => {
        if (this.state.order === 0) {
            alert('tidak bisa melakukan mengurangan product')
        }else{
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
           })
        }        
    }

    render() {
        return (
            <div className="card">
                <div className="imgtumb-prod">
                    <img src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="food"/>
                </div>
                <p className="product-title">Title</p>
                <p className="product-price">Rp. 30.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input 
                    type="text" 
                    value={this.state.order}
                    onChange={(event)=>this.inputChangedHandler(event)}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>       
        )
    }
}

export default CardProduct;