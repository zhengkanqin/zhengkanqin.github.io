const PAGE_PATH = '/pages/app-instance/index/index'

describe('app-instance', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('app.component', async () => {
    const CompForAppComponent = await page.$('.component-for-app-component')
    const CompForAppComponentText = await CompForAppComponent.text()
    expect(CompForAppComponentText).toBe('component for app.component')
  })
  it('app.use', async () => {
    const plugin1El = await page.$('.plugin1')
    const plugin1Text = await plugin1El.text()
    expect(plugin1Text).toBe('plugin1: 通过字面量方式创建的 plugin')

    const plugin2El = await page.$('.plugin2')
    const plugin2Text = await plugin2El.text()
    expect(plugin2Text).toBe('plugin2: 通过函数方式创建的 plugin')

    const plugin3El = await page.$('.plugin3')
    const plugin3Text = await plugin3El.text()
    expect(plugin3Text).toBe(
      'plugin3: 通过 definePlugin + 对象字面量方式创建的 plugin'
    )

    const plugin4El = await page.$('.plugin4')
    const plugin4Text = await plugin4El.text()
    expect(plugin4Text).toBe(
      'plugin4: 通过 definePlugin + 函数方式创建的 plugin'
    )

    const compForPluginEl = await page.$('.component-for-plugin')
    const compForPluginText = await compForPluginEl.text()
    expect(compForPluginText).toBe('component for plugin')
  })
})
