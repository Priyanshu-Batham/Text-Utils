import { useParams } from "react-router-dom"
export default function User(){
    const {userid} = useParams()
    return(
        <>
        hello:{userid}
        </>
    )
}