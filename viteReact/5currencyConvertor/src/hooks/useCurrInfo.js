import { useState, useEffect } from "react";

function useCurrInfo(country) {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${country}.json`).then((res) => {
            return res.json()
        }).then((res) => {
            setData(res[country]);
        }).catch((er) => {
            setError(er);
        });
    }, [country])
    console.log(data);
    console.log(error);
    return data;
}

export default useCurrInfo;