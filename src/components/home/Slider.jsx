import '../../styles/reset.css'
import './slider.css';

const itemList = [
  {
    id: 1,
    title: 'Bags',
    content: 'Le chiquito moyen Small leather bag',
    price: '641.81$',
    alt: '손잡이가 큰 작은 주황색 가죽 가방'
  },
  {
    id: 2,
    title: 'Tops',
    content: 'La chemise Laurier Cropped shirt.',
    price: '414.61$',
    alt: '팔이 긴 가슴아래 끈으로 되어있는 크롭 화이트 셔츠'
  },
  {
    id: 3,
    title: 'Coats&Jackets',
    content: 'La veste camargue Long pleated suit jacket',
    price: '6892.73$',
    alt: '명치까지 내려오는 브이넥 긴팔 셔츠형태의 검정 미니 원피스'
  },
  {
    id: 4,
    title: 'Hats',
    content: 'Le bob gadjo Canvas bucket hat',
    price: '110.02$',
    alt: '자크뮈스 로고가 박힌 핫 핑크색의 캔버스 버킷햇'
  },
  {
    id: 5,
    title: 'Skirts',
    content: 'La jupe blé Embroidered skirt',
    price: '922.89$',
    alt: '빨간 작은 동그라미 수가 놓아진 화이트 실크 스커트'
  }
];


function Slider(props) {
  return (
    <div className='sliderWrap'>
      <h2 className='cardTitle'>New arrivals</h2>
      <div className='cardWrap'>
        {itemList.map((item)=>(
        <article className='sliderCard' key={item.id}>
          <h4>{item.title}</h4>
          <figure>
            <img className ='sliderImg' src={`/images/main_newProduct${item.id}.png`} alt={item.alt} />
            <figcaption>{item.content}</figcaption>
            <p className='price'>{item.price}</p>
          </figure>
        </article>
        ))}
      </div>
    </div>      
  );
}

export default Slider;