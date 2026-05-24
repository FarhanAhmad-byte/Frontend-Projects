import { useEffect, useState } from "react";

function useData() {
  const [data, setData] = useState([])

  const url = "http://localhost:5173/question.json"

  useEffect(() => {
    fetch(url)
    .then((data) => data.json() )
    .then((res) => {setData(res.Questions)})
    .catch((err) => console.log(`Data Fetching Error: \n ${err}`))

  }, [])

  return data
}

export default useData