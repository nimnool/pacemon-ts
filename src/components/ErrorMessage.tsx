import React from 'react';

interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return (
        <h2 className="text-center text-red-700">{ error }</h2>
    );
};

export default ErrorMessage;
