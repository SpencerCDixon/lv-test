module.exports = {
  description() {
    return "Generates a functional component";
  },

  fileMapTokens(options) {
    var modulePath = options.entity.options.module;

    if (modulePath) { 
      return {
        __module__: function(options) {
          return `modules/${modulePath}/components`;
        }
      }
    }
    return {
      __module__: function(options) {
        return 'components';
      }
    }
  },

  afterInstall(opts) {
    if (opts.entity.options.module) {
      this.ui.writeInfo('Adding component export statement');
      const name = opts.entity.name;
      const module = opts.entity.options.module;
      const compPath = path.resolve('redux', 'modules', module, 'components', 'index.js');

      const importString = `export ${name} from './${name}';`;
      const content = fs.readFileSync(compPath).toString().split('\n');
      content.push(importString);

      fs.writeFileSync(compPath, content.join('\n'), 'utf8');
      this.ui.writeCreate('Successfully added export of new component to module');
    }
  }
};
