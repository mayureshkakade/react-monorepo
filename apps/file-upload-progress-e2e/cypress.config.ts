import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run file-upload-progress:serve',
        production: 'nx run file-upload-progress:preview',
      },
      ciWebServerCommand: 'nx run file-upload-progress:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
