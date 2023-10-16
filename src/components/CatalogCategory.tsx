import {useEffect, useState} from "react";
import {useGetCatalogQuery} from "../services/CatalogService";
import {useFindCurrCategory} from "../hooks/useFindCurrCategory";
import {CatalogLink} from "./CatalogLink";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux";
import {setRobotsMetaIndex} from "../store/slices/main/mainSlice";
import {sortByName} from "../utils/sortByName";
import { ICatalog } from "../models/ICatalog";

export function CatalogCategory() {
    const {data: catalog, isLoading, error} = useGetCatalogQuery();
    const [data, setData] = useState<ICatalog | undefined>(undefined);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        setData(catalog)
    }, [catalog])

    const {category} = useFindCurrCategory(data?.categories, location.pathname);

    // индексируется ли страница с текущей категорией
    useEffect(() => {
        dispatch(setRobotsMetaIndex(Boolean(category?.index)));
    }, [dispatch, category]);


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <>{error}</>
    }

    return (
        <div>
            {category && <h1>{category.name}</h1>}
            {category?.children &&
                <ul>
                    {sortByName(category.children).map((item) => {
                        return (
                            <CatalogLink key={item.id} item={item} path={location.pathname}/>
                        )
                    })}
                </ul>
            }
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
}
