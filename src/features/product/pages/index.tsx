import { useEffect } from "react";

export function ProductionPage() {
  useEffect(() => {
    const fetchData = async ()=> {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      console.log(data)
    }

    fetchData()
  }, []);
  return <>teste</>;
}
