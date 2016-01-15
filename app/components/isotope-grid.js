import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['grid'],
    didInsertElement: function() {
        this.$().isotope({
            itemSelector: '.info-module',
            layoutMode: 'masonry'
        });
    }
});
