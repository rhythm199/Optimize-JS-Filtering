# Optimize JavaScript Filtering Function

## Overview

 This project focuses on optimizing a JavaScript function that filters an array of objects based on a keyword. The goal is to improve efficiency, correctness, and readability while ensuring robust handling of edge cases.

## Given Function

```
function fetchDataAndFilter(data, keyword) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.includes(keyword)) {
            var results = [];
            results.push(data[i]);
        }
    }
    return results;
}
```

## Issues in the Original Function

1. Inefficiency: A new results array is initialized inside the loop, causing it to be reset on every iteration.

2. Incorrect Filtering: Only the last matched item is stored because results is reassigned inside the loop.

3. Title Property Assumption: The function assumes every object has a title property, which may not be true.

4. Case-Sensitivity: The function performs a case-sensitive match, missing variations in letter casing.

5. Edge Cases Not Handled:

  * Empty arrays

  * Missing title properties

  * Case-insensitive search

  * Partial matches (e.g., "JS" should match "JavaScript")


## Optimized Function
Refer `fetchDataAndFilter.js `

## Improvements

* Efficiency: Uses .filter() to iterate and return the filtered results directly.

* Correctness: The results array is declared once outside the loop.

* Readability: Uses clear and concise logic.

* Robustness: Handles edge cases like missing properties and case insensitivity.

## Unit Tests

To ensure correctness, the `fetchDataAndFilter.test.js` Jest test cases should be included.

## How to Run Tests

1. Install Jest:

```
npm install --save-dev jest
```

2. Run tests:

```
npm test
```

## Conclusion

This optimized function provides a more reliable and efficient way to filter data, ensuring better performance and handling edge cases effectively.

