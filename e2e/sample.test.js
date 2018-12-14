import { config, driver } from './config';

describe('e2e', () => {
  beforeAll(async () => {
    // アプリの起動処理
    await driver.init(config);
    // 起動時間の分スリープを入れる
    await driver.sleep(5000);
  });

  test('SampleA', async () => {
    // SampleAが表示されていること
    expect(await driver.hasElementByAccessibilityId('SampleA')).toBe(true);
    // 画面をスクロールする
    await driver.elementByAccessibilityId('SampleA').flick(1, -1000, 100);
    // ボタンをクリックする
    await driver.elementByAccessibilityId('NextButton').click();
  });
  test('SampleB', async () => {
    // SampleBが表示されていること
    expect(await driver.hasElementByAccessibilityId('SampleB')).toBe(true);
    // 文字列を入力する
    await driver.elementByAccessibilityId('TextInput').type('ozaki25');
    // ボタンをクリックする
    await driver.elementByAccessibilityId('NextButton').click();
  });
  test('SampleC', async () => {
    // SampleCが表示されていること
    expect(await driver.hasElementByAccessibilityId('SampleC')).toBe(true);
    //表示内容を確認
    expect(await driver.elementByAccessibilityId('text').text()).toBe('ozaki25');
  });
});
