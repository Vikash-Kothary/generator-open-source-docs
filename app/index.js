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

    // this.destinationRoot();

    // this.destinationRoot('README.md')
    // this.destinationRoot('LICENSE')
    // this.destinationRoot('CHANGELOG.md')
    // this.destinationRoot('CODE_OF_CONDUCT.module')
    // this.destinationRoot('LICENSE')
    // this.destinationRoot('LICENSE')
    // this.destinationRoot('LICENSE')
  }

  writing() {
    this.log('open-source-docs: writing')

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationRoot(),
      {
        lintCommand: '',
        buildCommand: '',
        testCommand: '',
        runCommand: ''
      }
    )
    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationRoot(),
      {
        currentYear: 2019,
        fullName: 'Vikash Kothary'
      }
    )
    this.fs.copyTpl(
      this.templatePath('CHANGELOG.md'),
      this.destinationRoot(),
      {
        githubUsername: 'vikash-kothary',
        githubRepo: 'generator-open-source-docs',
        currentVersion: 'v0.1.0',
        currentDate: '2019-03-04'
      }
    )
    this.fs.copy(
      this.templatePath('CODE_OF_CONDUCT.md'),
      this.destinationRoot()
    )
    this.fs.copyTpl(
      this.templatePath('CONTRIBUTING.md'),
      this.destinationRoot(),
      {
        projectName: 'Open Source Documentation Generator'
      }
    )
    this.fs.copyTpl(
      this.templatePath('PULL_REQUEST_TEMPLATE.md'),
      this.destinationRoot(),
      {
        lintCommand: 'yarn format',
        testCommand: 'yarn test',

      }
    )
    this.fs.copyTpl(
      this.templatePath('ISSUE_TEMPLATE.md'),
      this.destinationRoot(),
      {
        lintCommand: 'yarn format',
        testCommand: 'yarn test',

      }
    )
  }

  end(){
    this.log('open-source-docs: end')
  }
};