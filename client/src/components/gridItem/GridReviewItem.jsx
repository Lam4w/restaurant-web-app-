import React from 'react'
import './GridReviewItem.css'

export default function GridReviewItem(props) {
    return (
        <div class="grid-item">
            <p>
                {props.review.desc}
            </p>
            <div class="review-subtitle">
                <h3>-{props.review.name}</h3>
            </div>
        </div>
    )
}
