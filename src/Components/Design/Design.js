import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Card from '../Card/Card';


const mapStateToProps = (state) => {
    console.log('state:',state);
    return({
        stateValue:state.stateValue
    })
}


const Design = (state) => {
    return(
        <Fragment>
            <Header/>
            <Card/>
      </Fragment>
    
    );
}
export default connect(mapStateToProps)(Design);