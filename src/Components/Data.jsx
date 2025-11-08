import React from 'react';
import { useLoaderData } from 'react-router';
import Student from './Student'

const Data = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-5 m-18'>
            {
                data.map((student) => {
                    return (
                        <Student student={student}></Student>
                    )
                })
            }
        </div>
    );
};

export default Data;