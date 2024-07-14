import React from "react";
import { MdHeight } from "react-icons/md";

function Section2(){
    return<>
    <section className="testimonials text-center bg-light">
<div className="container">
    <h2 className="mb-5">What people are saying...</h2>
    <div className="row">
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="https://th.bing.com/th/id/OIP.GLQi6SGsU6B-ezsiPu2uAwHaF7?w=800&h=640&rs=1&pid=ImgDetMain" alt="..." />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="https://herway.net/wp-content/uploads/2019/02/22-Signs-He-Has-A-Secret-Crush-On-You-720x405.jpg"style={{ height: 150, width: 180 }} alt="..." />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="https://www.australiansuper.com/-/media/home/campaigns/mobile/mobile_social.jpg" style={{ height: 150, width: 180 }}alt="..." />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
            </div>
        </div>
    </div>
</div>
</section>
</>
}

export default Section2