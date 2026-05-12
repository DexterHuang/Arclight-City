import fs from 'fs';
import path from 'path';
import { IValidator } from '../Interface/IValidator';

const MARKDOWN_DIRS = ['tutorial', 'lore-notes', 'encounter-choices', 'scenario', 'enemy-container'];

export class MarkdownCoverageValidator implements IValidator {
  validate() {
    const langs = fs.readdirSync('contribution').filter(f => {
      return fs.lstatSync(`contribution/${f}`).isDirectory() && f !== 'en';
    });

    const warnings: string[] = [];

    for (const dir of MARKDOWN_DIRS) {
      const enDir = `contribution/en/${dir}`;
      if (!fs.existsSync(enDir)) continue;

      const enFiles = fs.readdirSync(enDir).filter(f => f.endsWith('.md') || f.endsWith('.json'));

      for (const lang of langs) {
        const langDir = `contribution/${lang}/${dir}`;
        if (!fs.existsSync(langDir)) {
          warnings.push(`[${lang}] Missing directory: ${dir}/`);
          continue;
        }

        const langFiles = new Set(fs.readdirSync(langDir));
        for (const file of enFiles) {
          if (!langFiles.has(file)) {
            warnings.push(`[${lang}] Missing file: ${dir}/${file}`);
          }
        }
      }
    }

    if (warnings.length > 0) {
      console.warn(`\nMarkdown coverage warnings (${warnings.length}):`);
      for (const w of warnings) {
        console.warn(`  ⚠  ${w}`);
      }
    } else {
      console.log('All markdown files are present across all languages');
    }
  }
}
