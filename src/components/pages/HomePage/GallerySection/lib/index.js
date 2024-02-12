import { deleteCentralElementArray } from '@/lib';

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