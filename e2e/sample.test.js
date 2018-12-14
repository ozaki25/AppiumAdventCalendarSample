import { config, driver } from './config';

describe('e2e', () => {
  beforeAll(async () => {
    // アプリの起動処理
    await driver.init(config);
    // 起動時間の分スリープを入れる
    await driver.sleep(5000);
  });

  test('トップページが表示されること', async () => {
    expect(await driver.hasElementByAccessibilityId('App')).toBe(true);
  });
});
