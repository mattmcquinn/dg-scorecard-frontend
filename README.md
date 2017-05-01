# dg-scorecard-frontend

This is the frontend for my [disc golf API](https://github.com/mattmcquinn/dg-scorecard)
Currently a work in progress.

[Live demo on Heroku](https://ecaddy.herokuapp.com/)

#### What works

* Users can log in and log out
    * once logged in, the users' JWT token is sent with subsequent requests
    * logging out deletes the JWT from local storage
* Logged in users can:
  - view a list of registered users
  - view a table of all courses in Colorado and Missouri
    - table is paginated (client side, for now), and sortable
  - view a list of all rounds
    - view the scores for an individual round
* Guest users are redirected to the login page

#### To-do

* Everything else

----

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd dg-scorecard-frontend`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
