"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "@/data/blogs";

const BlogAreaTwo = () => {
  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Latest From The Blog</span>
              <h2 className="sec-title">Auto Tips & Repair Insights</h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            style={{ alignItems: "stretch" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.slug}>
                <div>
                  <div className="blog-card style2">
                    <div className="blog-img">
                      <img src={blog.img} alt={blog.title} />
                      <div className="blog-date">
                        <Link href="/blog">
                          <span>{blog.date.day}</span>
                          {blog.date.month}
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">
                          <i className="fas fa-user" /> By Rapid Fix Team
                        </Link>
                        <Link href="/blog">
                          <i className="fas fa-tag" /> {blog.category}
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h3>
                      <Link className="link-btn style3" href={`/blog/${blog.slug}`}>
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
