import {Link} from "react-router-dom";
import {ICategory} from "../models/ICategory";

interface CatalogListProps {
    item: ICategory;
    path: string;
}

export function CatalogLink({item, path}: CatalogListProps) {

    return (
        <li>
            <Link key={item.id} to={`${path}/${item.slug}`}>{item.name}</Link>
        </li>
    )
}