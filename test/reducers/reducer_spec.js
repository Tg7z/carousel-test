import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    // Quickely bootstrap slides array of length X
    const slidesArr = Array.apply(null, {length: 6}).map((current, index) => `http://lorempixel.com/400/200/food/${index}/`);

    const action = {
      type: 'SET_STATE',
      state: {
        carousel: {
          autoplay: true,
          slides: slidesArr,
        }
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        carousel: {
          autoplay: true,
          slides: slidesArr,
        }
      }
    }));
  });
});
