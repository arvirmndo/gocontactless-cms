import React from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';

function home() {
    return (
        <div className='md:container mx-auto'>
            <Header />
            <Button title="Submit"/>
        </div>
    );
}

export default home;