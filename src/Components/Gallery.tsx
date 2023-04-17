import { images } from "../images/images";

interface Iprops {
    images: any;
}
export const Gallery = () => {
    return (
        <div>
            {images.map(p => {
                return <img key={p.key} src={p.src }/>
            })}
        </div>
    )
}