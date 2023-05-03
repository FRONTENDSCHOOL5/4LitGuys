function Main_ss() {
    return (
        // <h1>Hello world</h1>
        <section className="section_ss">
            <div className="info">
                <p className="info_ss">spent most of his time with his grandmother in Provence, was inspired by the local values of the region. Miro's poems, Provençal ceramic works, cherry trees, nostalgic hand-knitted tablecloths are among these sources of inspiration. The colour palette, dominated by white, blue and earthy tones, harmonised perfectly with the wheat fields.</p>
                <button type="button" className="btn_ss">SHOP</button>
            </div>
            <div className="image">
                <img src={require("../image/main_collection1.png")}  alt='test-img' />
            </div>
        </section>
    );
}

export default Main_ss;
