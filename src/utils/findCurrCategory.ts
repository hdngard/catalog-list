import {ICategory} from "../models/ICategory";

export function findCurrCategory(array: ICategory[] | null, slugs: string[]): ICategory | undefined{
    if (!Array.isArray(array) || !slugs.length) {
        return;
    }

    // находим текущую категорию
    for (const item of array) {
        if (item.slug === slugs[0]) {
            if (slugs.length === 1) {
                return item;
            } else {
                return findCurrCategory(item.children, slugs.slice(1));
            }
        }
    }
}