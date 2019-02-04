'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('open-source-docs: constructor');

    // This makes `appname` a required argument.
    // this.argument('appname', { type: String, required: true });

    // And you can then access it later; e.g.
    // this.log(this.options.appname);

    // These methods adds support for flags e.g. `--no-readme` 
    // this.option('no-readme');
    // this.option('no-description');
    // this.option('no-code-of-coduct');
    // this.option('no-contributing');
    // this.option('no-license');
    // this.option('no-issue-templates');
    // this.option('no-pull-request-templates');

    // And you can then access it later; e.g.
    // this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");
  }

  async prompting() {
    this.log('open-source-docs: prompting')

    const answers = await this.prompt([
    {
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, 
    {
      type    : 'confirm',
      name    : 'cool',
      message : 'Would you like to enable the Cool feature?'
    },
    {
      type    : 'input',
      name    : 'username',
      message : 'What\'s your GitHub username',
      store   : true
    }
    ]);

    // this.log('app name', answers.name);
    // this.log('cool feature', answers.cool);
  }

  start() {
    this.log('open-source-docs: start');
  }

  paths() {
    this.log('open-source-docs: paths')
  }

  writing() {
    this.log('open-source-docs: writing')

    // this.log('cool feature', this.answers.cool);
  }

  end(){
    this.log('open-source-docs: end')
  }
};