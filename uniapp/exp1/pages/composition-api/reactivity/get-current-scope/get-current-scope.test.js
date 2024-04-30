const PAGE_PATH = '/pages/composition-api/reactivity/get-current-scope/get-current-scope'

describe('getCurrentScope', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const hasCurrentScope = await page.$('#has-current-scope')
    expect(await hasCurrentScope.text()).toBe('hasCurrentScope: false')

    const createScopeBtn = await page.$('#create-scope-btn')
    await createScopeBtn.tap()

    expect(await hasCurrentScope.text()).toBe('hasCurrentScope: true')
  })
})