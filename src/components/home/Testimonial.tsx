import React, { useEffect } from 'react';
import rate from "../../assets/images/main/icon/Rate.png";
import person1 from "../../assets/images/main/1.png";
import person2 from "../../assets/images/main/2.png";

const Testimonial: React.FC = () => {
    useEffect(() => {  
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ($(".owl-carousel") as any).owlCarousel({
            stagePadding:10,
            // autoplay: true,
            // autoplayTimeout: 3000,
            // autoplayHoverPause: true,
            loop:true,
            margin:35,
            nav:true,
            center: true,
            responsive:{
              0:{
                items:1
              },
              600:{
                items:1
              },
              1000:{
                items:2
              }
            },
            });
        },[])
  return (
    <div>
      <section>
        <div className="container-fluid mt-6 p-0">
          <div style={{ textAlign:'center' }}>
            <h2 className="fs-24">
              <strong>Testimonial</strong>
            </h2>
            <p className="fs-14 mt-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <div className="owl-carousel owl-theme">
            <div className="testi card br-8 testi-card">
              <div className="card-body">
                <div className="row justify-content-start mt-4 mb-4">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <img src={person1} alt="user" />
                  </div>
                  <div className="col-9 testi-comment">
                    <img
                      src={rate}
                      className="mb-3 mt-3 rate-center"
                      alt="rate"
                    />
                    <p className="fs-14 mb-10">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="fs-14 mb-10">
                      <strong>John Dee 32, Bromo</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi card br-8 testi-card">
              <div className="card-body">
                <div className="row justify-content-start mt-4 mb-4">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <img src={person2} alt="user" />
                  </div>
                  <div className="col-9 testi-comment">
                    <img
                      src={rate}
                      className="mb-3 mt-3 rate-center"
                      alt="rate"
                    />
                    <p className="fs-14 mb-10">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="fs-14 mb-10">
                      <strong>John Dee 32, Bromo</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi card br-8 testi-card">
              <div className="card-body">
                <div className="row justify-content-start mt-4 mb-4">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <img src={person1} alt="user" />
                  </div>
                  <div className="col-9 testi-comment">
                    <img
                      src={rate}
                      className="mb-3 mt-3 rate-center"
                      alt="rate"
                    />
                    <p className="fs-14 mb-10">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="fs-14 mb-10">
                      <strong>John Dee 32, Bromo</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
