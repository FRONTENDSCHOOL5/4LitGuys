import Collection from "./CollectionPart";
import MainSs from "./MainSs";
import Mainvisual from "./Mainvisual";
import Simon from "./Simon";
import Slider from "./Slider";

export default function Home(){
    return (
        <>
            <Mainvisual />
            <Slider />
            <MainSs/>
            <Collection />
            <Simon />
        </>
    )
}