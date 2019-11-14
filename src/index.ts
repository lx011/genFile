import { outputFile, pathExists, outputJSON } from 'fs-extra';
import chalk from 'chalk';

const log = console.info;
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
    return outputJSON(filePath, template, {spaces: 2})
      .then(() => log(msg))
      .catch(err => console.error(errorMsg(err)));
  } else {
    return outputFile(filePath, template)
      .then(() => log(msg))
      .catch(err => console.error(errorMsg(err)));
  }
}

const genFile = ({ filename, template, path = '', update } : IGenFile): Promise<string> => {
  let filePath = path.replace(/(^\/)|(\/$)/g, '');
  filePath = filePath ? `${filePath}/${filename}` : filename;
  return new Promise((res) => {
    pathExists(filePath, async (_err, exists) => {
      if (!exists) {
        await outputContent(filePath, template, `${createMsg('[create]')}: ${lightMsg(filePath)}`);
        res('create');
      } else {
        if (update) {
          await outputContent(filePath, template, `${updateMsg('[update]')}: ${lightMsg(filePath)}`)
          res('update');
        } else {
          log(`${warnMsg('[exist]')}: ${lightMsg(filePath)}`)
          res('exist');
        }
      }
    })
  })
}

export default genFile;
