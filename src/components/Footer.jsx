import '../styles/footer.css'

function Footer() {
    return (
        <section className="sectionFooter">
            <div className='footerWrap'>
                <div className="footerLeft">
                    <a href="#none">
                        <img className='blackLogo' src="/images/main_logo_black.png"  alt="자크뮈스로고" class="blackLogo"/>
                    </a>
                    <ul class="snsList">
                        <li><a href="#none"> facebook</a></li>
                        <li><a href="#none"> instagram</a></li>
                        <li><a href="#none"> twitter </a></li>
                    </ul>
                </div>
                <div className="footerRight">
                    <ul className="brandLegal">
                        <li><a href="#none"> Legal and cookies</a></li>
                        <li><a href="#none"> Assistance</a></li>
                        <li><a href="#none"> Company</a></li>
                        <li><a href="#none"> Refunds</a></li>
                        <li><a href="#none"> Shipping</a></li>
                        <li><a href="#none"> Terms of service</a></li>
                    </ul>
                    <p className="footerCopy">© JACQUEMUS 2021-70boutique@jacquemus.com .Custormer service. </p>
                </div>            

            </div>
        </section>
    );
}

export default Footer;