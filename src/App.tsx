import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Catalog} from "./components/Catalog";
import {CatalogCategory} from "./components/CatalogCategory";
import {Layout} from "./layout/Layout";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Navigate to="/catalog" replace={true}/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:slug/*" element={<CatalogCategory/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
