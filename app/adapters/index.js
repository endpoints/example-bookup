import adapter from 'ember-data-endpoints/adapter';

export default adapter.extend({
    host: '',
    queryParams: {
      include: 'chapters',
      filter: {
        published_after: '1990-01-01'
      }
    }
});
