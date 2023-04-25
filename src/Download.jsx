import { Export } from "./Export"
import { Document } from "./Document"

export default function Download(props) {
    return (
        <div className="container p-5">
            <Export />

            <Document />
        </div>
    )
}