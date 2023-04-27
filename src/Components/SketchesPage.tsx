import { artimages } from "../images/images";
import '../App.css'; 
export const SketchesPage = () => {
    return (
        <div className="productimage">
            <div className="image">
                {artimages.filter((x: any) => x.category === "pencilsketch").map(p => {
                    return (
                        <>
                           <div className="image productimage" key={p.key}>
                                <img src={p.ImageURL} />
                            </div>
                            <div className="description">
                                <div >Name:{p.Name}</div>
                                <p>Description:{p.Description}</p>
                            </div>
                        </>
                    )
                })}  
            </div>
        </div>
       

    )
}