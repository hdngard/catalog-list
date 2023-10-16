import { ICategory } from "../models/ICategory";

export function sortByName(arr: ICategory[]) {
    return [...arr].sort((a, b) => a.name.localeCompare(b.name))
}