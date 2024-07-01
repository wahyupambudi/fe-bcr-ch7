const WhyUs: React.FC = () => {
  return (
    <div>
      <section>
        <div className="container mt-6 w-1168">
          <h2 className="fs-24 txt-center">
            <strong>Why Us?</strong>
          </h2>
          <p className="fs-14 mt-3 txt-center">
            Mengapa harus pilih Binar Car Rental?
          </p>
          <div className="row mt-4">
            <div className="col-md-3 mb-3">
              <div className="card br-8">
                <div className="card-body">
                  <li className="mb-4 mt-2 far fa-thumbs-up fi thumbs"></li>
                  <h5 className="card-title fs-16">
                    <strong>Mobil Lengkap</strong>
                  </h5>
                  <p className="card-text mb-2 fs-14">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card br-8">
                <div className="card-body">
                  <li className="mb-4 mt-2 fas fa-tag fi tag"></li>
                  <h5 className="card-title fs-16">
                    <strong>Harga Murah</strong>
                  </h5>
                  <p className="card-text mb-2 fs-14">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card br-8">
                <div className="card-body">
                  <li className="mb-4 mt-2 far fa-clock fi clock"></li>
                  <h5 className="card-title fs-16">
                    <strong>Layanan 24 Jam</strong>
                  </h5>
                  <p className="card-text mb-2 fs-14">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card br-8">
                <div className="card-body">
                  <li className="mb-4 mt-2 fas fa-award fi award"></li>
                  <h5 className="card-title fs-16">
                    <strong>Sopir Profesional</strong>
                  </h5>
                  <p className="card-text mb-2 fs-14">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
