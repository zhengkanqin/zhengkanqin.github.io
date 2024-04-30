const PAGE_PATH = '/pages/composition-api/reactivity/to-refs/to-refs'

describe('toRefs', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const stateNum = await page.$('#state-num')
    expect(await stateNum.text()).toBe('state.num: 0')
    const stateStr = await page.$('#state-str')
    expect(await stateStr.text()).toBe('state.str: str-0')
    const stateAsRefsNum = await page.$('#state-as-refs-num')
    expect(await stateAsRefsNum.text()).toBe('stateAsRefs.num: 0')
    const stateAsRefsStr = await page.$('#state-as-refs-str')
    expect(await stateAsRefsStr.text()).toBe('stateAsRefs.str: str-0')

    const updateStateBtn = await page.$('#update-state-btn')
    await updateStateBtn.tap()

    expect(await stateNum.text()).toBe('state.num: 1')
    expect(await stateStr.text()).toBe('state.str: str-1')
    expect(await stateAsRefsNum.text()).toBe('stateAsRefs.num: 1')
    expect(await stateAsRefsStr.text()).toBe('stateAsRefs.str: str-1')
  })
})