import React from 'react';

export default function CheeseList(props) {

    const cheeseArr = props.cheeses.map(cheese => {
            return (
                <li> {cheese} </li>
            )
    })

    return (
        <ul class='cheese-arr'>
            {cheeseArr}    
       </ul>
    )

}