import React, {Component} from 'react';
import './FullStaeComp.css'


class LifeCycleComp extends Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            value : 3
        };
        
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDrivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(()=>{
            this.setState({
                value: 4
            })
        },3000)        
    }
  
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    onChange = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    render () {
        console.log("render")
        return(
            <div className="container">
                <p>Lifecycles Component</p>
                <hr/>
                <button className="btn" onClick={this.onChange}>
                    Submit {this.state.value}
                </button>
            </div>
        )
    }
    
}

export default LifeCycleComp