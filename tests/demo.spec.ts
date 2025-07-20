import { it, expect, describe } from "vitest"

const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] => {
  // Merge nums2 into nums1 in-place
  const res: number[] = []
  let i = 0
  let j = 0
  while (i < m || j < n) {
    if (i < m && j < n) {
      if (nums1[i] <= nums2[j]) {
        res.push(nums1[i])
        i++
      } else {
        res.push(nums2[j])
        j++
      }
    } else if (i < m) {
      res.push(nums1[i])
      i++
    } else if (j < n) {
      res.push(nums2[j])
      j++
    }
  }
  nums1.splice(0, nums1.length, ...res)
  return nums1
}
describe("demo", () => {
  it("should", () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3
    const res = merge(nums1, m, nums2, n)
    expect(res).toEqual([1, 2, 2, 3, 5, 6])
  })

  it("case2", () => {
    const nums1 = [1]
    const m = 1
    const nums2: number[] = []
    const n = 0
    const res = merge(nums1, m, nums2, n)
    expect(res).toEqual([1])
  })

  it("case3", () => {
    const nums1 = [0]
    const m = 0
    const nums2 = [1]
    const n = 1
    const res = merge(nums1, m, nums2, n)
    expect(res).toEqual([1])
  })

  it("case4", () => {
    const nums1 = [2, 3, 4, 4, 0, 0]
    const m = nums1.length - 2
    const nums2 = [4, 5]
    const n = nums2.length
    const res = merge(nums1, m, nums2, n)
    expect(res).toEqual([2, 3, 4, 4, 4, 5])
  })
})
