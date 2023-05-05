import '../styles/mainvisual.css'

function Mainvisual() {
    return (        
        <section className="mainVisualWrap">
            <img className='mainVisual' src="/images/main_mainvisual1.png" alt="메인비주얼" />
            <div className='mainViText'>
                <p className='mainViTitle'>SPRING SUMMER 2021 MENSWEAR</p>
                <h2 className='mainViTitle2'> L'amour By <br/>Oliver hadlee pearch</h2>                    
                <button className="whiteBtn">SEE PRODUCT</button>                
            </div>
        </section> 
    );
}
export default Mainvisual;