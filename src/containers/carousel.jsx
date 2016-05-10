import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Slide from '../components/slide';
import { changeSlide } from '../actions/carousel';
import * as styles from '../styles/carousel';

class carouselContainer extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  //componentDidMount() {}
  //componentWillReceiveProps() {}
  //componentWillUnmount() {}

  parseTrackStyles() {
    return { ...styles.carouselTrack, width: `${100 * this.props.slides.length}%` }
  }

  handlePrevSlide(event) {
    event.preventDefault();
    this.transitionTo(this.props.activeIndex - 1);
  }
  handleNextSlide(event) {
    event.preventDefault();
    this.transitionTo(this.props.activeIndex + 1);
  }

  transitionTo(index) {
    if (index < 0) {
      // TODO: implement infinite carousel to scroll from first to last slide
      console.error('Cannot transition lower than first slide');
    } else if (index >= this.props.slides.length) {
      // TODO: implement infinite carousel to scroll from first to last slide
      console.error('Cannot transition higher than last slide');
    } else {
      this.props.actions.changeSlide(index);
    }
  }

  render() {
    return (
      <section className="carousel" style={styles.carousel}>
        <ul className="carousel__track" style={this.parseTrackStyles()}>
          {this.props.slides.map((imgSrc, index) => <Slide key={index} imgSrc={imgSrc} activeIndex={this.props.activeIndex} /> )}
        </ul>

        <button className="carousel__prev-btn" disabled={(this.props.activeIndex === 0)} onClick={(event) => this.handlePrevSlide(event)}>Prev</button>
        <button className="carousel__next-btn" disabled={(this.props.activeIndex === this.props.slides.length-1)} onClick={(event) => this.handleNextSlide(event)}>Next</button>

        <div className="carousel__dots">
          Active Slide is {this.props.activeIndex + 1} of {this.props.slides.length}
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  const carousel = state.carousel;

  return {
    slides: carousel.slides,
    autoplay: carousel.autoplay,
    activeIndex: carousel.activeIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeSlide: (index) => dispatch(changeSlide(index)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(carouselContainer);;
