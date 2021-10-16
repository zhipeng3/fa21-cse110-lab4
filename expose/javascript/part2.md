1. 3, i is a var, so it exist after the for loop
2. 150, discountedPrice is var, it exist after for loop
3. 150, finalPrice is var, it exist after for loop
4. [50, 100, 150], it's the prices after discount.
5. error, i is let, it disappear after the for loop.
6. error, discountedPrice is let, disappear after the for loop.
7. 150, line 14 is in the same block with the declaration of finalPrice
8. [50, 100, 150], return discounted is in the same block with the declaration of discounted
9. error, i is let, it disappear after the for loop.
10. 3, line 12 is in the same block with the declaration of length
11. [50, 100, 150], you can add to a const array, just not reassign them.
12.
    a. student.name
    b. student["Grad Year"]
    c. student.greeting()
    d. student.["Favorite Teacher"].name
    e. student.courseLoad[0]
13.
    a. 32, convert 2 to string then concatenate
    b. 1, convert '3' to 3 then subtract
    c. 3, conver null to 0
    d. 3null, convert null to string then concatenate
    e. 4, convert true to 1
    f. 0, convert false to 0, and null to 0
    g. 3undefined, convert undefined to string then concatenate
    h. NaN, try to convert undefined to number but failed
14.
    a. true, '2' convert to 2 then compare
    b. true, '2' and '12' both convert to 2 and 12 then compare
    c. true, '2' convert to 2 then compare
    d. false, different type
    e. false, true convert to 1 then compare
    f. true, true convert to 1 and boolean(2) convert to 1 then compare
15. == change everything to number then compare, === if two side are different type return false immediately
17. The modifyArray will return [2, 4, 6]. for loop walk through all element in [1, 2, 3], inside for loop, each element passed into doSomething, which double it, then it push into the newArr, which is the return value.
19. 1 4 3 2