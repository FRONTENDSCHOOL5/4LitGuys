import './header.css'

function Header() {
    return (
        <section className="sectionHeader">            
            <div className='headerWrap'>
                <p className="headerMenu">Shop</p>                
                <img className='mainLogoW' src="/images/main_logo_white.png" alt="자크뮈스로고" />
                <p className="headerBag">Bag <span>0</span> </p>
            </div>                     
        </section>
    );
}

export default Header;


