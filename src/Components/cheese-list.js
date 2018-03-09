import React from 'react';
import {fetchCheeses} from '../actions/cheese';

export default class CheeseList extends React.Component{

componentDidMount() {
    fetchCheeses();
}

render() {
    const cheeseArr = this.props.cheeses.map(cheese => {
            return (
                <li> {cheese} </li>
            )
    })

    return (
        <ul className='cheese-arr'>
            {cheeseArr}    
       </ul>
    )
}

}