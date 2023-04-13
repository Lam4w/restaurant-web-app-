import React from 'react'

export default function(props) {
    return (
        <div>
            <div class="grid-item">
                <h3 class="menu-subtitle" id="selection-name1">{props.food.name}</h3>
                <p id="selection-desc1">{props.food.desc}</p>
            </div>
        </div>
    )
}
