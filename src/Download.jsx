import { Export } from "./Export"

export default function Download() {
    return (
        <div className="container p-5">
            <Export />
            <div style={{"display": "none"}} >
            </div>
        </div>
    )
}