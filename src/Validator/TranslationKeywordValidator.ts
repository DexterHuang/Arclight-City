import fs from 'fs';
import { IValidator } from '../Interface/IValidator';
export class TranslationKeywordValidator implements IValidator {
  validate() {
    const langs = fs.readdirSync('contribution').filter(f => f.indexOf('.') <= 0 && f !== 'en');
    // get all json files in contribution folder recursively
    const files: string[] = langs.map(lang => {
      return fs.readdirSync(`contribution/${lang}`).filter(f => f.endsWith('.json')).map(f => `contribution/${lang}/${f}`);
    }).reduce((a, b) => a.concat(b), []);
    for (const path of files) {
      console.log(`Validating ${path}...`);
      if (!fs.existsSync(path)) {
        console.log(`${path} does not exist, skipping...`);
        continue;
      }
      const json = JSON.parse(fs.readFileSync(path, 'utf8') + '');
      if (path.endsWith('translation-keywords.json')) {
        // validate translation-keywords.json
        if (!json.keywords) {
          throw new Error(`${path}does not contain keyword list`)
        }
        for (const { eng, trans, desc, match } of json.keywords) {
          if (!eng) {
            throw new Error(`${path} contains a keyword without an English translation`)
          }
          if (!trans) {
            throw new Error(`${path} ${eng} does not contain a 'trans' field`)
          }
          if (!match) {
            throw new Error(`${path} ${eng} does not contain a 'match' field`)
          }
        }
      }

      console.log(`${path} is valid`);
    }
  }

}