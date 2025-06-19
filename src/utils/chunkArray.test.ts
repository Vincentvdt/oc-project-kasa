import { describe, expect, it } from 'vitest'
import { chunkArray } from './chunkArray'

describe('chunkArray', () => {
  it('splits array into chunks of given size', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })
})
