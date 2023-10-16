import {useEffect, useState} from "react";
import {findCurrCategory} from "../utils/findCurrCategory";
import {ICategory} from "../models/ICategory";

export function useFindCurrCategory(categories: ICategory[], pathname: string) {
    const [category, setCategory] = useState<ICategory | undefined>(undefined)

    useEffect(() => {
        // берем текущие слаги из роута
        const currSlugs = pathname.split('/').slice(2)
        const currCategory = findCurrCategory(categories, currSlugs)
        setCategory(currCategory)
    }, [pathname, categories]);

    return { category }
}

