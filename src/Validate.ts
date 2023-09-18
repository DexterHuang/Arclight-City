import * as ts from 'typescript';
import { IValidator } from './Interface/IValidator';
import { TranslationKeywordValidator } from './Validator/TranslationKeywordValidator';
import { JsonValidator } from './Validator/JsonValidator';

(async () => {
  const VALIDATORS: IValidator[] = [
    new JsonValidator(),
    new TranslationKeywordValidator()
  ]
  for (const validator of VALIDATORS) {
    await validator.validate();
  }

})();