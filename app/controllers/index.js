import Controller from '@ember/controller';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class IndexController extends Controller {
  model = this.model;
  chosen = null;

  currentBlocksList = null;
  isLoading = false;
  currentErrorMessage = '';

  @action
  setExpanded(node) {
    this.set('chosen', node);
    this.loadBlocks();
  }

  @action
  async loadBlocks() {
    try {
      this.setProperties({
        isLoading: true,
        currentErrorMessage: '',
      });

      const response = await fetch(`${this.chosen.url}/api/v1/blocks`);
      const responseJSON = await response.json();

      this.set('currentBlocksList', responseJSON.data);

      this.set('isLoading', false);
    } catch (e) {
      if (!this.isDestroyed) {
        this.setProperties({
          isLoading: false,
          currentErrorMessage: 'Something went wrong...',
        });
      }      
    }
  }
}
