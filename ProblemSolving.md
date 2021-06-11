# Problem Solving

## Topics

1. Programming Language
2. Data Structures and Algorithms
3. Coding Question Practice
   - HackerRank
   - LeetCode

## References

- https://www.programiz.com/dsa
- https://www.pepcoding.com/resources/online-java-foundation
- https://www.codechef.com/certification/data-structures-and-algorithms/prepare
- https://practice.geeksforgeeks.org/home/

## Notes

### Difference between SubArray, SubSequence, SubSet

```
arr = [1,2,3,4,5,6,7,8,9,10]
SubArray - Contiguous part of array
	- Ex: [4,5,6,7]
	- Not SubArray - [4,6,7]
	- Total Possible Non Empty SubArray: (n * (n+1))/2
SubSequence - May not be Contiguous but maintain the relative order
	- Ex: [4,5,6,7], [4,6,7]
	- Not SubSequence - [5,4]
	- Total Possible Non Empty SubSequence: 2^n - 1
SubSet - May not be Contiguous and may not be in order
	- Ex: [4,6,7], [5,4]
- Not SubSet - [15, 4]
- Substring
  - abc ==> every char will be in continuously placed
  - n --> n(n+1)/2
```

### Permutations, Combination

```
Permutations
	- Ex. the combination of Locker
	- here the order matters
	- Formula : n! / (n -r)!
Combination
	- Ex. the fruit salad
	- here the order does not matter
- Formula : n! / r!(n - r)!
```
