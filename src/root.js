import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers/reducer';
import CarouselContainer from './containers/carousel';

// Quickely bootstrap slides array of length X
const slidesArr = Array.apply(null, {length: 6}).map((current, index) => `http://lorempixel.com/400/200/food/${index}/`);

const store = createStore(reducer);
store.dispatch({
  type: 'INIT_CAROUSEL',
  carousel: {
    autoplay: true,
    activeIndex: 3,
    slides: slidesArr,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <CarouselContainer />
  </Provider>,
  document.getElementById('app')
);
