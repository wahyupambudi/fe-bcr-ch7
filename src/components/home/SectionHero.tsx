import imgService from "../../assets/images/main/img_service.png";
import check from "../../assets/images/main/icon/fi-check.png";


const SectionHero: React.FC = () => {
  return (
    <div>
      <section>
        <div className="container mt-6 w-1027">
          <div className="row">
            <div className="col me-6-rem text-center">
              <img
                src={imgService}
                className="img-fluid w-252"
                alt="Service"
              />
            </div>
            <div className="col mt-4">
              <h2 className="fs-24">
                <strong>
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </strong>
              </h2>
              <p className="mt-4 fs-14">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="list-unstyled fs-14">
                <li className="mb-3">
                  <img
                    src={check}
                    className="me-2"
                    alt="fi-check"
                  />{" "}
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li className="mb-3">
                  <img
                    src={check}
                    className="me-2"
                    alt="fi-check"
                  />{" "}
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li className="mb-3">
                  <img
                    src={check}
                    className="me-2"
                    alt="fi-check"
                  />{" "}
                  Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li className="mb-3">
                  <img
                    src={check}
                    className="me-2"
                    alt="fi-check"
                  />{" "}
                  Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li className="mb-3">
                  <img
                    src={check}
                    className="me-2"
                    alt="fi-check"
                  />{" "}
                  Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHero;
