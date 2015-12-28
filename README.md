# Simple-ember-blog

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Use Ember 2.2.0-beta.2

* `npm uninstall -g ember-cli` -- Remove old global ember-cli
* `npm cache clean` -- Clear NPM cache
* `bower cache clean` -- Clear Bower cache
* `npm install -g ember-cli@2.2.0-beta.2` -- Install new global ember-cli

## Install Emberfire with Ember 2.2.0-beta.2

`ember install emberfire` will fail with `The package ember-cli@2.2.0-beta.1 does not satisfy its siblings' peerDependencies requirements!.`
* Use `ember install firebase/emberfire#master`, more information please (check this issue on github)[https://github.com/firebase/emberfire/issues/346]

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Dev steps

* `ember g route index` -- generate basic index route
* `ember g model post title:string author:string content:string createdAt:date` -- generate post model
* `ember g component create-new-post --pod` -- generate create-new-post component with POD structure
* Add a form in component's template than add component `{{create-new-post}}` into your index.hbs
* Add an action in component
* Define index route (app/routes/index.js) with model and action
* Modify index.hbs and pass data like `{{create-new-post post=model.post createPost="createPost"}}`
* `Ember g component blog-post --pod` -- generate blog-post component
* Add blog-post component' content into index.hbs

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
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
