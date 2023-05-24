import SimpleSlider from "./CustomSlider"
import NewArrivals from "./NewArrivals"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function ItemList(){
    return(
        <>
             <NewArrivals />;
             <SimpleSlider/>
        </>
    )
}