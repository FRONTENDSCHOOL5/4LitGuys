import '../styles/header.css'

function Header() {
    return (
        <section className="sectionHeader">
            <img className='mainVisual' src="/images/main_mainvisual1.png" alt="메인비주얼" />
            <div className='headerWrap'>
                <div className="headerTop">
                    <p className="headerMenu">
                        <img className='mainMenuBar' src="/images/mian_menuBar.png" alt="menu" />Shop
                    </p>
                    <h1> <img className='mainLogoW' src="/images/main_logo_white.png" alt="자크뮈스로고" />  </h1>
                    <p className="headerBag">Bag <span>0</span> </p>
                </div>
                <div className="headerText">
                    <p>SPRING SUMMER 2021 MENSWEAR</p>
                    <h2> L'amour By <br />
                        Oliver hadlee pearch</h2>
                    <button className="whiteBtn">SEE PRODUCT</button>
                </div>  
            </div>          
        </section>
    );
}
export default Header;


