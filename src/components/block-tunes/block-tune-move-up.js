/**
 * @class MoveUpTune
 * @classdesc Editor's default tune that moves up selected block
 */
import BlockTune from './block-tune';
export default class MoveUpTune extends BlockTune {
  constructor(state) {
    super(state);
  }
  /**
     * Create "MoveUp" button and add click event listener
     * @returns [Element}
     */
  render() {
    let moveUpButton = $.make('div', [], {
      textContent: 'Her'
    });

    moveUpButton.addEventListener('click', this.handle, false);
    return moveUpButton;
  }
  /**
     * Move current block up
     * @param {Event} event
     */
  handle(event) {
    console.log('hey');
  }
}
