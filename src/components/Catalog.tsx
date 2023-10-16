import { ICategory } from "../models/ICategory";
import {useGetCatalogQuery} from "../services/CatalogService";
import {CatalogLink} from "./CatalogLink";

export function Catalog() {
    const {data: catalog, isLoading, error} = useGetCatalogQuery();

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <>{error}</>
    }

    return (
        <div>
            <h1>Каталог</h1>
            <ul>
                {catalog && catalog.categories.map((item: ICategory) => {
                    return (
                        <CatalogLink key={item.id} item={item} path={'/catalog'}/>
                    )
                })}
            </ul>
        </div>
    );
}
