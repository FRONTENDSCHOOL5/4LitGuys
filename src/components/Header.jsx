function Header() {
    return (
        <section className="section_header">
            <div className="headerTop">
                <p className="headerMenu">Shop</p>
                <h1> <img src={require("../image/main_logo_white.png")} alt="자크뮈스로고" />  </h1>
                <p className="headerBag">Bag</p>
            </div>
            <div className="headerText">
                <p>SPRING SUMMER 2021 MENSWEAR</p>
                <h2> L'amour By <br />
                    Oliver hadlee pearch</h2>
                <button className="whiteBtn">SEE PRODUCT</button>
            </div>            
        </section>
    );
}
export default Header;


