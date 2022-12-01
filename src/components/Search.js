import { Base } from '@studiometa/js-toolkit';
import { animate } from 'motion';

import Shuffle from 'shufflejs';

export default class Search extends Base {
  static config = {
    name: 'Search',
    refs: ['search', 'types', 'sections[]', 'elements[]'],
  };

  elementsInstances = [];

  mounted() {
    this.$refs.sections.forEach((section) => {
      const shuffleInstance = new Shuffle(section, {
        itemSelector: '[data-ref="elements[]"]',
        delimiter: ',',
        sizer: '.sizer',
      });

      this.elementsInstances.push(shuffleInstance);
    });
  }

  onTypesChange(e) {
    this.elementsInstances.forEach((instance) => {
      instance.filter(e.target.value);
    });
  }

  onSearchInput(e) {
    this.elementsInstances.forEach((instance) => {
      instance.filter((element) => {
        const titleText = element.dataset.title;
        return titleText.includes(e.target.value);
      });
    });
  }
}
