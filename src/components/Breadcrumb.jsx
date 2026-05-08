
import Link from "next/link";

const Breadcrumb = ({ title, img = "/assets/img/normal/breadcrumb-thumb.png" }) => {
  return (
    <div className="breadcumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <div className="breadcumb-thumb">
              <img src={img} alt="Rapid Fix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
