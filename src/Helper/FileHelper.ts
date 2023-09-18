
import * as fs from 'fs';

export class FileHelper {

  static getFilesInDir(dir: string, match: RegExp) {
    const files: string[] = [];
    const paths = fs.readdirSync(dir);
    for (let path of paths) {
      path = dir + '/' + path;
      if (fs.lstatSync(path).isDirectory()) {
        files.push(...this.getFilesInDir(path, match));
      } else if (match.test(path)) {
        files.push(path);
      }
    }
    return files;
  }
}