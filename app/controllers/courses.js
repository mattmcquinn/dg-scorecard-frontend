import Ember from 'ember';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/controllers/jsonapi-pagination';

export default Ember.Controller.extend(Pagination, {
  state: null,
  city: null,
  name: null,
  queryParams: ['state', 'city', 'name'],
  states: ['ID', 'NJ', 'Östergötland', 'ACT', 'SC', 'Belgium', 'Perth', 'Switzerland', 'Uusimaa', 'NH', 'Vaxholm', 'Guam', 'ON', 'Västergötland', 'Victoria', 'Slovak Republic', 'United Kingdom', 'Waiheke Island', 'Prov Utrecht', 'WI', 'Haninge', 'Canterbury', 'HI', 'MO', 'Karmøy', 'BC', 'NC', 'British Indian Ocean Territory', 'AK', 'NM', 'MT', 'AZ', 'Latvia', 'TX', 'MA', 'Finland', 'NY', 'Nuevo León', 'IA', 'New Zealand', 'Israel', 'VA', 'Havirov', 'KY', 'Västerbotten', 'Czech Republic', 'Kungsängen', 'Nicaragua', 'South Finland', 'Pohjanmaa', 'KS', 'Tasmania', 'Norrbotten', 'Ipswich', 'Herning', 'Goteborg', 'Denmark', 'Tyresö', 'Medelpad', 'IL', 'Viet Nam', 'Lidingö', 'MS', 'NS', 'Japan', 'France', 'Södermalm', 'Turku', 'Germany', 'FL', 'London', 'Norway', 'Calinan', 'Uppland', 'Philippines', 'SD', 'TN', 'ME', 'DE', 'WV', 'Sweden', 'CO', 'Luxembourg', 'Skåne', 'OK', 'Queensland', 'Busan', 'NV', 'Honduras', 'Antarctica', 'Poland', 'Botkyrka', 'Korea (South)', 'NSW', 'OH', 'South Africa', 'Austria', 'GA', 'MD', 'Hamar', 'One Tree Hill', 'Fyn', 'Wellington', 'Zeeland', 'Småland', 'Saipan', 'Lappland', 'Huddinge', 'Iceland', 'WY', 'Haiti', 'Hyougo Ken', 'Gästrikland', 'AR', 'Spain', 'VT', 'Jeollanam-do', 'NB', 'Croatia (Hrvatska)', 'AB', 'Peru', 'Estonia', 'PA', 'North Auckland', 'North Zeeland', 'Taiwan', 'Mexico', 'Ångermanland', 'Northumberland', 'Uzbekistan', 'Hungary', 'Catalina Island', 'YT', 'Halland', 'Netherlands Antilles', 'PE', 'Ruapehu', 'Jutland', 'Zealand', 'RI', 'QC', 'WA', 'Ekerö', 'ND', 'CA', 'AL', 'Tokyo', 'Närke', 'Russian Federation', 'SK', 'CT', 'NE', 'Australia', 'MN', 'MI', 'UT', 'Netherlands', 'IN', 'Akaa', 'MB', 'Baden-Württemberg', 'NU', 'OR', 'Preston', 'Slovenia', 'LA'].sort(),

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
