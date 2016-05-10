import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-addons-test-utils';
import { expect } from 'chai';

import CarouselContainer from '../../src/containers/carousel';

describe('CarouselContainer', () => {

  describe('Next and Prev buttons', () => {
    let prevBtn;
    let nextBtn;

    before('render and locate element', function() {
      const renderedComponent = renderIntoDocument(
        <CarouselContainer />
      );

      prevBtn = findRenderedDOMComponentWithClass(renderedComponent, 'carousel__prev-btn');
      nextBtn = findRenderedDOMComponentWithClass(renderedComponent, 'carousel__next-btn');
    });

    it('renders previous and next buttons', () => {
      expect(prevBtn).to.be.ok;
      expect(nextBtn).to.be.ok;
    });
  });

});
