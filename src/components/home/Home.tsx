import React, { useEffect } from 'react';
import SingleAdvert from './singleAdvert/Advert';
import Loader from '../shared/loader/Loader';
import { connect } from 'react-redux';

import { loadAdverts } from '../../redux/actions/advertsAction';
import { getAdverts, getAdvertsPending, getAdvertsError } from '../../redux/reducers/advertsReducer';

const Home = (props: any) => {
    useEffect(() => {
        props.loadAdverts();
    }, [props.advert]);

    return (
        <div>
            <h2>Home</h2>
            <Loader pending={props.pending}/>
            <SingleAdvert adverts={props.adverts} />
        </div>
    );
}

function mapStateToProps(state: any){
    return {
        pending: getAdvertsPending(state),
        adverts: getAdverts(state),
        error: getAdvertsError(state)
    }
}

const mapDispatchToProps = {
    loadAdverts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);