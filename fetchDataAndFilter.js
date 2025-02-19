function fetchDataAndFilter(data = [], keyword = "") {
    if (!Array.isArray(data)) {
        return "Error: The first argument must be an array.";
    }

    if (keyword.trim() === "") {
        return "Warning: Search keyword is empty. Returning an empty array.";
    }

    const lowerCaseKeyword = keyword.toLowerCase();

    const results = data.filter(item => {
        if (!item.title || typeof item.title !== 'string') {
            console.warn(`Warning: Skipping an item without a valid title:`, item);
            return false;
        }

        return item.title.toLowerCase().includes(lowerCaseKeyword);
    });

    if (results.length === 0) {
        return "Info: No matches found for the given keyword.";
    }
    return results;
}


const data = [
    {
        title: 'Doctor Strange',
    },
    {
        title: 'Captain America',
    },
    {
        title: 'Iron Man',
    },
    {
        title: 'Wonder Women',
    },
    {
        title: 'JavaScript es6',
    }
]
console.log(fetchDataAndFilter(data, 'es6'));

module.exports = { fetchDataAndFilter };
