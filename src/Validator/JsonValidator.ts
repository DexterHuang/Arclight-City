import { FileHelper } from "../Helper/FileHelper";
import { IValidator } from "../Interface/IValidator";
import fs from 'fs';

export class JsonValidator implements IValidator {
  validate() {
    const jsonPaths = FileHelper.getFilesInDir('contribution', /\.json/gm);
    console.log(`Validating json files...(${jsonPaths.length} files)`);
    for (const jsonPath of jsonPaths) {
      const jsonStr = fs.readFileSync(jsonPath, 'utf8');
      try {
        JSON.parse(jsonStr);
      } catch (e) {
        throw new Error(`${jsonPath} is not a valid json file: ${e}`)
      }
    }
    console.log(`All json files are valid`);
  }

}