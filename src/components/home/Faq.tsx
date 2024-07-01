const Faq: React.FC = () => {
  return (
    <div>
      <section>
        <div className="container mt-6 w-1168">
          <div className="row">
            <div className="col-md-5">
              <h2 className="fs-24">
                <strong>Frequently Asked Question</strong>
              </h2>
              <p className="fs-14 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-3 border-accor">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acc-1"
                      aria-expanded="false"
                      aria-controls="acc-1"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="acc-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus deleniti eaque cumque atque rem maxime quam
                      tenetur facilis eum perferendis id nostrum, quo, debitis
                      nisi dolorum, neque earum, enim corrupti?
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-accor">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acc-2"
                      aria-expanded="false"
                      aria-controls="acc-2"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="acc-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem quod voluptatem, obcaecati fuga, minus amet
                      maiores molestiae enim minima rem consectetur perferendis
                      inventore a aspernatur dignissimos hic magnam! Quidem,
                      itaque.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-accor">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acc-3"
                      aria-expanded="false"
                      aria-controls="acc-3"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="acc-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                      Est, eos ipsa magnam labore inventore dolores hic esse
                      pariatur et sunt, quisquam modi natus iusto, ullam
                      adipisci corrupti nesciunt rerum quasi.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-accor">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acc-4"
                      aria-expanded="false"
                      aria-controls="acc-4"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="acc-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum quaerat doloremque itaque eligendi consequatur
                      quasi fugit, cumque odit, dolorem praesentium nostrum
                      ipsam eveniet accusantium nihil animi corporis maiores
                      totam similique?
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-accor">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acc-5"
                      aria-expanded="false"
                      aria-controls="acc-5"
                    >
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div
                    id="acc-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora voluptas totam quaerat eveniet. Autem eaque amet
                      quas blanditiis magni cupiditate dolorum id reiciendis
                      molestias soluta, veniam, consequatur neque! Repudiandae,
                      similique!
                    </div>
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

export default Faq;
