import React from 'react'
import { Spinner } from 'react-bootstrap';

export const Loader: React.FC = () => { 
    return (
        <div className="loader">
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
        </div>
    )
}