import Ember from 'ember';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/controllers/jsonapi-pagination';

export default Ember.Controller.extend(Pagination, {
  state: null,
  city: null,
  name: null,
  queryParams: ['state', 'city', 'name'],
  states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY', 'AB', 'ACT', 'Akaa', 'Antarctica', 'Australia', 'Austria', 'BC', 'Baden-Württemberg', 'Belgium', 'Botkyrka', 'British Indian Ocean Territory', 'Busan', 'Calinan', 'Canterbury', 'Catalina Island', 'Croatia (Hrvatska)', 'Czech Republic', 'Denmark', 'Ekerö', 'Estonia', 'Finland', 'France', 'Fyn', 'Germany', 'Goteborg', 'Guam', 'Gästrikland', 'Haiti', 'Halland', 'Hamar', 'Haninge', 'Havirov', 'Herning', 'Honduras', 'Huddinge', 'Hungary', 'Hyougo Ken', 'Iceland', 'Ipswich', 'Israel', 'Japan', 'Jeollanam-do', 'Jutland', 'Karmøy', 'Korea (South)', 'Kungsängen', 'Lappland', 'Latvia', 'Lidingö', 'London', 'Luxembourg', 'MB', 'Medelpad', 'Mexico', 'NB', 'NS', 'NSW', 'NU', 'Netherlands', 'Netherlands Antilles', 'New Zealand', 'Nicaragua', 'Norrbotten', 'North Auckland', 'North Zeeland', 'Northumberland', 'Norway', 'Nuevo León', 'Närke', 'ON', 'One Tree Hill', 'PE', 'Perth', 'Peru', 'Philippines', 'Pohjanmaa', 'Poland', 'Preston', 'Prov Utrecht', 'QC', 'Queensland', 'Ruapehu', 'Russian Federation', 'SK', 'Saipan', 'Skåne', 'Slovak Republic', 'Slovenia', 'Småland', 'South Africa', 'South Finland', 'Spain', 'Sweden', 'Switzerland', 'Södermalm', 'Taiwan', 'Tasmania', 'Tokyo', 'Turku', 'Tyresö', 'United Kingdom', 'Uppland', 'Uusimaa', 'Uzbekistan', 'Vaxholm', 'Victoria', 'Viet Nam', 'Västerbotten', 'Västergötland', 'Waiheke Island', 'Wellington', 'YT', 'Zealand', 'Zeeland', 'Ångermanland', 'Östergötland'],

  totalPages: Ember.computed('size', 'number', 'model.[]', function() {
    return this.get('model.meta.page-count');
  }),

  actions: {
    selectState(selectedState) {
      if (selectedState === null)
      {
        this.set('state', 'All');
      }
      else
      {
        this.set('state', selectedState);
        this.set('number', 1);
      }
    },

    setCurrentPage(page) {
      this.set('page', page);
      this.set('name', '');
    }
  }
});
