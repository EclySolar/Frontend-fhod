import { describe, it, expect } from 'vitest'
import { unwrap } from '../src/services/api'
describe('API response adapter', () => {
  it('extracts data from the provisional API envelope', () => {
    expect(unwrap({ success: true, data: { id: 1 } })).toEqual({ id: 1 })
  })
})
