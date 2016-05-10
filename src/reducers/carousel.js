function initCarousel(state, carousel) {
  return Object.assign(state, carousel);
}

function changeSlide(state, activeIndex) {
  return {
    ...state,
    activeIndex,
  };
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'INIT_CAROUSEL':
    return initCarousel(state, action.carousel);
  case 'CHANGE_SLIDE':
    return changeSlide(state, action.activeIndex);

  default:
    return state;

  }
};
