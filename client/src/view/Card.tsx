import * as React from 'react'
import './Card.css'

export const Card = (props: { title: string; content: string }) => (
    <div className='card'>
        <span className='card-title'>{props.title}</span>
        <span className='card-content'>{props.content}</span>
    </div>
)
