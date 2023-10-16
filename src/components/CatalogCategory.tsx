import {useEffect, useState} from "react";
import {useGetCatalogQuery} from "../services/CatalogService";
import {useFindCurrCategory} from "../hooks/useFindCurrCategory";
import {CatalogLink} from "./CatalogLink";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux";
import {setRobotsMetaIndex} from "../store/slices/main/mainSlice";
import {sortByName} from "../utils/sortByName";

export function CatalogCategory() {
    const {data: catalog, isLoading, error} = useGetCatalogQuery();
    const [data, setData] = useState(undefined);

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
    }, [category]);


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <div>{error}</div>
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
