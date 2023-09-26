import fs from 'fs';
import { IValidator } from '../Interface/IValidator';
export class TranslationKeywordValidator implements IValidator {
  validate() {
    const langs = fs.readdirSync('contribution').filter(f => f.indexOf('.') <= 0 && f !== 'en');
    for (const lang of langs) {
      const path = `contribution/${lang}/translation-keywords.json`;
      console.log(`Validating ${lang}/translation-keywords.json...`);
      if (!fs.existsSync(path)) {
        console.log(`${lang}/translation-keywords.json does not exist, skipping...`);
        continue;
      }
      const json = JSON.parse(fs.readFileSync(path, 'utf8'));
      if (!json.keywords) {
        throw new Error(`${lang}/translation-keywords.json does not contain keyword list`)
      }
      for (const { eng, trans, desc, match } of json.keywords) {
        if (!eng) {
          throw new Error(`${lang}/translation-keywords.json contains a keyword without an English translation`)
        }
        if (!trans) {
          throw new Error(`${lang}/translation-keywords.json ${eng} does not contain a 'trans' field`)
        }
        if (!match) {
          throw new Error(`${lang}/translation-keywords.json ${eng} does not contain a 'match' field`)
        }
        // if (!desc) {
        //   throw new Error(`${lang}/translation-keywords.json ${eng} does not contain a 'desc' field`)
        // }
      }

      console.log(`${lang}/translation-keywords.json is valid`);
    }
  }

}