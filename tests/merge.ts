export function merge(nums1: number[], m: number, nums2: number[], n: number) {
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
