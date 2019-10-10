import React from 'react';
import SingleAdvert from './singleAdvert/Advert';

export default class Home extends React.Component{
    public render() {
        return (
            <div>
                <h2>Home</h2>
                <SingleAdvert />
            </div>
        );
    }
}