import * as ts from 'typescript';
import { IValidator } from './Interface/IValidator';
import { TranslationKeywordValidator } from './Validator/TranslationKeywordValidator';
import { JsonValidator } from './Validator/JsonValidator';
import { MarkdownCoverageValidator } from './Validator/MarkdownCoverageValidator';

(async () => {
  const VALIDATORS: IValidator[] = [
    new JsonValidator(),
    new TranslationKeywordValidator(),
    new MarkdownCoverageValidator()
  ]
  for (const validator of VALIDATORS) {
    await validator.validate();
  }

})();