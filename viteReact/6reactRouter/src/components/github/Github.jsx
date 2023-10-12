import { useLoaderData } from "react-router-dom"
export default function Github() {
    const data = useLoaderData();
    return (
        <>
            <div className="justify-self-center">
                <img src={data.avatar_url} alt="" />
                Github followers: {data.followers}
            </div>
        </>
    )
}

export async function getData() {
    const p = await fetch("https://api.github.com/users/priyanshu-batham");
    const result = await p.json();
    return result;
}