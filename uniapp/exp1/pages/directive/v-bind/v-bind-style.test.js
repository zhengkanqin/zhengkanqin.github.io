const PAGE_PATH = '/pages/directive/v-bind/v-bind-style'

describe('v-bind-style', () => {
  const isFirefox = process.env.uniTestPlatformInfo.indexOf('firefox') > -1
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('basic', async () => {
    const text = await page.$('.text-font-size')
    const view = await page.$('.view-style')

    expect(await text.style('fontSize')).toBe('14px')
    if(process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await view.style('backgroundColor')).toBe('rgb(0, 128, 0)')
    } else {
      expect(await view.style('backgroundColor')).toBe('#008000')
    }
    expect(await view.style(isFirefox ? 'borderTopWidth' : 'borderWidth')).toBe('2px')
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await view.style(isFirefox ? 'borderTopColor' : 'borderColor')).toBe('rgb(0, 0, 255)')
    } else {
      expect(await view.style('borderColor')).toBe('#0000FF')
    }
  })
})