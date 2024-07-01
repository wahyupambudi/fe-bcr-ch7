const SectionBanner: React.FC = () => {
  return (
    <div>
      <section>
        <div
          style={{ textAlign: "center" }}
          className="container mt-6 w-1168 br-13 clock text-white p-5"
        >
          <h2 className="fs-36 mt-3">
            <strong>Sewa Mobil di (Lokasimu) Sekarang</strong>
          </h2>
          <p className="fs-14 mt-4 w-468-1 w-468" style={{ margin: "0 auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <a
            href="/rental"
            className="btn text-white fs-14 mt-4 mb-4 btn-header pd-banner"
          >
            <strong>Mulai Sewa Mobil</strong>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SectionBanner;
