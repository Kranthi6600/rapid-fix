
import Link from "next/link";

const items = [
  { img: "assets/img/update-img/product/1-1.png", title: "Engine pistons and cog" },
  { img: "assets/img/update-img/product/1-2.png", title: "Power steering pump" },
  { img: "assets/img/update-img/product/1-3.png", title: "Windshield wiper motor" },
  { img: "assets/img/update-img/product/1-4.png", title: "Windshield wiper motor" },
  { img: "assets/img/update-img/product/1-5.png", title: "Exhaust manifold", tag: "-20%" },
  { img: "assets/img/update-img/product/1-6.png", title: "Oil filter" },
];

const ProductAreaTwo = () => {
  return (
    <div className="product-area-2 space-top overflow-hidden">
      <div className="container">
        <div className="mb-50">
          <div className="row gy-4 justify-content-lg-between justify-content-center align-items-center text-lg-start text-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-area mb-0">
                <h3 className="sec-title mb-0">Popular Services</h3>
              </div>
            </div>
            <div className="col-auto" data-aos="fade-left">
              <div className="sec-btn">
                <Link href="/service" className="btn style-border2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-30 justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-xxl-4 col-lg-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index % 3) * 100 + 100}`}
            >
              <div className="product-card list-view">
                <div className="product-img">
                  <img src={item.img} alt="Rapid Fix" />
                  {item.tag && (
                    <span className="tag">
                      <span className="offer-tag">{item.tag}</span>
                    </span>
                  )}
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <Link href="/shop-details">{item.title}</Link>
                  </h3>
                  <span className="star-rating">
                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                  </span>
                  <span className="price">
                    <del>$30</del> $25
                  </span>
                  <Link href="#" className="link-btn">
                    Add to cart <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAreaTwo;
