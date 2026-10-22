import {defineConfig, devices} from '@playwright/test';
export default defineConfig({
  testDir:'./tests/browser',fullyParallel:true,workers:2,
  use:{baseURL:'http://127.0.0.1:18086',serviceWorkers:'block'},
  projects:[{name:'desktop',use:{...devices['Desktop Chrome']}},{name:'mobile',use:{...devices['Pixel 7']}}],
  webServer:{command:'python3 scripts/serve-checks.py',url:'http://127.0.0.1:18086',reuseExistingServer:false},
});
