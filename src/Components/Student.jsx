import React from 'react';
import { Link } from 'react-router';

const student = ({ student }) => {
    const { name, age, gender, gpa } = student
    
    return (
        <div className="grid grid-cols-3">
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <ul>
                        <li>{name}</li>
                        <li>{age}</li>
                        <li>{gender}</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <p>{gpa}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default student;