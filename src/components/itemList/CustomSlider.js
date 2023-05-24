import Slider from "react-slick";
import './customSlider.css'
const dataList = [1,2,3,4,5,6,7];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block", backgroundColor: 'gray' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block" , 'backgroundColor': 'gray'}}
      onClick={onClick}
    />
  );
}


export default function SimpleSlider(){
 
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "150px",
      slidesToShow: 3,
      speed: 1100,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      dots:true
    }

    return (
      <div style={{ 'width' : '1300px', 'margin' : '0 auto', 'paddingBottom' :'30px'}}>
        <Slider {...settings} className="sliderWrapper">
          {
            dataList.map((el) => (
              <div>
                <img src={`/images/slider/item${el}.png`} width={300} height={300}/>
              </div>
            ))
          }
        </Slider>
      </div>
    );
}