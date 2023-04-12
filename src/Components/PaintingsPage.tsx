import { Gallery } from "react-grid-gallery"
import { images } from "../images/images"

export const PaintingsPage = () => {
    return (
        <>
            <Gallery
                images={images}
            />
        </>
        )

}