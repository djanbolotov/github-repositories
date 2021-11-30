import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = any;
export const ErrorComponent: React.FC<Props> = ({ error }) => {
    return (
        <Alert variant="info">
            <Alert.Heading>{error}</Alert.Heading>
            <p>
                Try to enter the name of a company you know.
            </p>
        </Alert>
    )
}