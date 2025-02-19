const { fetchDataAndFilter } = require('./fetchDataAndFilter');

describe('fetchDataAndFilter', () => {
  beforeEach(() => {
    console.warn = jest.fn();
  });

  test('should return matched objects case-insensitively', () => {
    const data = [
      { title: 'JavaScript Basics' },
      { title: 'Advanced JS' },
      { title: 'React Introduction' }
    ];
    expect(fetchDataAndFilter(data, 'js')).toEqual([
      { title: 'Advanced JS' }
    ]);
  });

  test('should skip items without a valid title and log a warning', () => {
    const data = [
      { title: 123 },
      { title: null },
      { description: 'No title here' },
      { title: 'Advanced JS' },
    ];

    const result = fetchDataAndFilter(data, 'js');
    expect(result).toEqual([
      { title: 'Advanced JS' },
    ]);

    expect(console.warn).toHaveBeenCalledTimes(3);
    expect(console.warn).toHaveBeenCalledWith(
      'Warning: Skipping an item without a valid title:',
      { title: 123 }
    );
    expect(console.warn).toHaveBeenCalledWith(
      'Warning: Skipping an item without a valid title:',
      { title: null }
    );
    expect(console.warn).toHaveBeenCalledWith(
      'Warning: Skipping an item without a valid title:',
      { description: 'No title here' }
    );
  });

  test('should return an empty array if no matches are found', () => {
    const data = [{ title: 'JavaScript Basics' }];
    expect(fetchDataAndFilter(data, 'Python')).toEqual("Info: No matches found for the given keyword.");
  });

  test('should handle empty array', () => {
    expect(fetchDataAndFilter([], 'JS')).toEqual("Info: No matches found for the given keyword.");
  });

  test('should handle case with no keyword', () => {
    expect(fetchDataAndFilter()).toEqual(
      "Warning: Search keyword is empty. Returning an empty array."
    );
  });

  test('should return an empty array if input is not an array', () => {
    expect(fetchDataAndFilter({}, 'js')).toEqual("Error: The first argument must be an array.");
  });
});
