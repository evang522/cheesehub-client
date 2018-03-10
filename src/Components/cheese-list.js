import React from 'react';
import {fetchCheeses} from '../actions/cheese';
import {connect} from 'react-redux';

export class CheeseList extends React.Component{

componentDidMount() {
    this.props.dispatch(fetchCheeses());
}

render() {
    console.log(this.props);
    const cheeseArr = this.props.cheeses.map((cheese,index) => {
            return (
                <li key={index}> {cheese} </li>
            )
    })

    return (
        <ul className='cheese-arr'>
            {cheeseArr}    
       </ul>
    )
}

}

const mapStateToProps = state => {
    return ({
        cheeses:state.cheeses
    })
}

export default connect(mapStateToProps)(CheeseList);