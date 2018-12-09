import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: process.env.APK_PATH || './android/app/build/outputs/apk/app-debug.apk',
  unicodeKeyboard: true,
  resetKeyboard: true,
};
const driver = wd.promiseChainRemote('localhost', PORT);

let count = 1;

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(5000);
});

describe('e2e', () => {
  expect(await driver.hasElementByAccessibilityId('App')).toBe(true);
});
