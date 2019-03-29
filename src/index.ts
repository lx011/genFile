import { outputFile, pathExists, outputJSON } from 'fs-extra';
import chalk from 'chalk';

const errorMsg = chalk.bold.red;
const warnMsg = chalk.bold.keyword('orange');
const createMsg = chalk.bold.green;
const updateMsg = chalk.bold.blue;
const lightMsg = chalk.bold.magenta;

export interface IGenFile {
  filename: string; // filename
  template: string | object; // template
  path?: string; // file path
  update?: boolean; // update file content
}

const outputContent = (filePath: string, template: object | string, msg: string) => {
  if (typeof template === 'object') {
    outputJSON(filePath, template, {spaces: 2})
      .then(() => console.info(msg))
      .catch(err => console.error(errorMsg(err)));
  } else {
    outputFile(filePath, template)
      .then(() => console.info(msg))
      .catch(err => console.error(errorMsg(err)));
  }
}

const genFile = ({ filename, template, path = '', update } : IGenFile) => {
  let filePath = path.replace(/(^\/)|(\/$)/g, '');
  filePath = filePath ? `${filePath}/${filename}` : filename;
  pathExists(filePath, (_err, exists) => {
    if (!exists) {
      outputContent(filePath, template, `${createMsg('[create]')}: ${lightMsg(filePath)} successfully!`);
    } else {
      if (update) {
        outputContent(filePath, template, `${updateMsg('[update]')}: ${lightMsg(filePath)} successfully!`);
      } else {
        console.info(`${warnMsg('[warn]')}: ${lightMsg(filePath)} already exists!`);
      }
    }
  })
}

export default genFile;
