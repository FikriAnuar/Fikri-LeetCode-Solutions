/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var pointer1 = m-1;
    var pointer2 = n-1;
    for (var i = m + n; i >= 0; i--) {
      if (pointer1 === -1 && pointer2 === -1) {
        if (nums2[0] < nums1[0]) {
          nums1[0] = nums2[0];
        }
      } else {
        if (pointer2 === -1 || nums1[pointer1] >= nums2[pointer2]) {
          nums1[pointer1+pointer2+1] = nums1[pointer1];
          pointer1--;
        } else {
          nums1[pointer1+pointer2+1] = nums2[pointer2];
          pointer2--;
        }
      }
    }
};