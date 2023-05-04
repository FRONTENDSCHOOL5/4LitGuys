import '../styles/footer.css'

function Footer() {
    return (
        <section className="sectionFooter">
            <div className="footerLeft">
                <img src="/images/main_logo_black.png"  alt="자크뮈스로고" class="blackLogo"/>
                <ul class="snsList">
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>twitter </li>
                </ul>
            </div>
            <div className="footerRight">
                <ul className="brandLegal">
                    <li>Legal and cookies</li>
                    <li>Assistance</li>
                    <li>Company</li>
                    <li>Refunds</li>
                    <li>Shipping</li>
                    <li>Terms of service</li>
                </ul>
                <p className="footerCopy">© JACQUEMUS 2021-70boutique@jacquemus.com .Custormer service. </p>
            </div>            
        </section>
    );
}

export default Footer;