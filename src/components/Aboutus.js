import Navbar from "./Navbar";
import checkAuth from './auth/checkAuth';

function Aboutus() {
    return (
        <div>
            <Navbar />

            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2>About <b>MEDICART</b></h2>
                        <p className="text-center">
                            "Welcome to MEDICART, where your health and well-being are our top priorities. With a relentless dedication to providing exceptional pharmaceuticals, healthcare products, and expert guidance, we aspire to be your trusted partner in every step of your wellness journey. Our mission is clear: to enhance the quality of life for our community by offering a diverse range of healthcare solutions. We take pride in our unwavering commitment to quality assurance, ensuring that every product we carry meets stringent safety and efficacy standards. At MEDICART, we understand the value of your time, which is why we offer convenient online ordering, home delivery, and in-store pickup options, making it easier than ever to access the healthcare products you require. Moreover, we actively engage with our local community, collaborating with healthcare providers and organizations to promote health and wellness initiatives. Thank you for choosing MEDICART as your dedicated healthcare partner, and we look forward to serving you with care, compassion, and excellence."
                        </p>
                        <h6>Phone: 0471-23456678</h6>
                        <h6>Email: abcd@gmail.com</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(Aboutus);
