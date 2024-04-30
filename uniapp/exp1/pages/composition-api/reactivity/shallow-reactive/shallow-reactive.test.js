const PAGE_PATH = '/pages/composition-api/reactivity/shallow-reactive/shallow-reactive'

describe('shallowReactive', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const stateCount = await page.$('#state-count')
    expect(await stateCount.text()).toBe('state.count: 0')

    const stateNestedCount = await page.$('#state-nested-count')
    expect(await stateNestedCount.text()).toBe('state.nested.count: 0')

    const incrementStateNestedCountBtn = await page.$('.increment-state-nested-count-btn')
    await incrementStateNestedCountBtn.tap()

    expect(await stateNestedCount.text()).toBe('state.nested.count: 0')

    const incrementStateCountBtn = await page.$('.increment-state-count-btn')
    await incrementStateCountBtn.tap()

    expect(await stateCount.text()).toBe('state.count: 1')
    expect(await stateNestedCount.text()).toBe('state.nested.count: 1')
  })
})