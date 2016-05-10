import carousel from './carousel';

export default function(state = {}, action) {
  return {
    carousel: carousel(state.carousel, action),
  }
}
