var path = require('path');
var fs   = require('fs');

const modulesPath = path.resolve('redux', 'modules', 'index.js');

module.exports = {
  description() {
    return "Generates a new feature module";
  },

  fileMapTokens(options) {
    return {
      __module_name__: function(options) {
        return options.entity.name;
      }
    }
  },

  afterInstall(options) {
    this.writeImport(options.entity.name);
    this.writeReducer(options.entity.name);
  },

  writeImport(name) {
    this.ui.writeInfo('Adding import statement for module');
    const importString = `import ${name} from './${name}';`;
    const content = fs.readFileSync(modulesPath).toString().split('\n');
    content.splice(1, 0, importString);
    fs.writeFileSync(modulesPath, content.join('\n'), 'utf8');
    this.ui.writeCreate('Successfully added import of new module');
  },

  writeReducer(name) {
    this.ui.writeInfo('Adding reducer to modules');
    const reducerString = `  [${name}.constants.NAME]: ${name}.reducer,`;

    const content = fs.readFileSync(modulesPath).toString().split('\n');
    const reducerIndex = content.indexOf('export default combineReducers({') + 1;

    content.splice(reducerIndex, 0, reducerString);
    fs.writeFileSync(modulesPath, content.join('\n'), 'utf8');
    this.ui.writeCreate('Successfully added reducer of new module');
  },
};
