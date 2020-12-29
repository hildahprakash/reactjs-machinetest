import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Design from './Components/Design/Design';
import contentListing from './API/contentListing.json';
import contentListingPage2 from './API/contentListingPage2.json';
import contentListingPage3 from './API/contentListingPage3.json';


const propTypes = {
  contentOne:contentListing, 
  contentTwo:contentListingPage2,
  contentThree:contentListingPage3
};

function ContentListing(state=propTypes) {
 
  return state;
}





const store = createStore(ContentListing, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Router>
        <Switch>
          <Route exact path ="/" component={Design}/>
        </Switch>
      </Router>
    </div>
    </Provider>
  )
}
export default App;
