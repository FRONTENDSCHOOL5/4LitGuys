import '../styles/reset.css'
import '../styles/slider.css';

function Slider() {
  return (
    <article className='sliderCard'>
      <h4>Bags</h4>
      <img className ='sliderImg' src="/images/main_newProduct1.png" alt="손잡이가 큰 작은 주황색 가죽 가방" />
      <div className='cardName'>
        <p>Le chiquito moyen</p>
        <p className='price'>641.81$</p>
      </div>
      <p>Small leather bag</p>
    </article>
  );
}

export default Slider;