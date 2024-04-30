const PAGE_PATH = '/pages/composition/mixins/mixins-web'
let page

describe('mixins', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    // 该实例只针对 web 平台
    it('android', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  // TODO: web 平台不支持 mixins 嵌套及对象字面量创建方式
  // 暂时针对 web 平台只测试基本功能
  it('basic', async () => {
    const mixinProp = await page.$('#mixin-prop')
    expect(await mixinProp.text()).toBe('mixinProp: 通过字面量定义非全局 mixin props')

    const mixinDataMsg = await page.$('#mixin-data-msg')
    expect(await mixinDataMsg.text()).toBe('mixinDataMsg: 通过字面量定义非全局 mixin data')

    const mixinOnloadMsg = await page.$('#mixin-onload-msg')
    expect(await mixinOnloadMsg.text()).toBe('mixinOnloadMsg: mixin onLoad msg in onLoad')

    const mixinComputed = await page.$('#mixin-computed')
    expect(await mixinComputed.text()).toBe(
      'mixinComputed: 通过字面量定义非全局 mixin computed, 更新后的 mixinOnloadMsg: mixin onLoad msg in onLoad')
  })
})