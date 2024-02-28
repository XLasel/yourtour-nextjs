export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export const deleteCentralElementArray = (array) => {
    if (Array.isArray(array)) {
        const centralElement =
            array.length % 2 === 0
                ? array[array.length / 2 - 1]
                : array[Math.floor(array.length / 2)];
        const filterArray = array.filter((elem) => elem !== centralElement);
        return filterArray;
    } else {
        console.log(array);
        console.error('deleteCentralElement: Input is not an array');
        return array;
    }
};

export const filterPhotosGallery = (photos, deviceType) => {
    let counter;
    let filterResult = structuredClone(photos);

    switch (deviceType) {
        case 'tablet':
            counter = 1;
            break;
        case 'mobile':
            counter = 2;
            break;
        default:
            counter = 0;
    }

    for (let i = 0; i < counter; i++) {
        filterResult = filterResult.map((row) =>
            deleteCentralElementArray(row),
        );
    }

    return filterResult;
};