import { useEffect, useState } from "react"
import { fetchProducts } from "../services/get-products";

export const useProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            const result = await fetchProducts();
            setData(result);
            setLoading(false);
        }
        loadData()
    }, [])

    return { data, loading }
}