import * as ts from 'typescript';
import { IValidator } from './Interface/IValidator';
import { TranslationKeywordValidator } from './Validator/TranslationKeywordValidator';

(async () => {
  const VALIDATORS: IValidator[] = [
    new TranslationKeywordValidator()
  ]
  for (const validator of VALIDATORS) {
    await validator.validate();
  }

})();