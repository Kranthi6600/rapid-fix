"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const getDateParts = (iso) => {
  if (!iso) return { day: "", month: "" };
  const d = new Date(iso);
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
};

const BlogArea = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setBlogs(result.data);
      })
      .catch(() => {});
  }, []);

  if (blogs.length === 0) return null;

  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center" data-aos="fade-up">
              <span className="sub-title">Latest From The Blog</span>
              <h2 className="sec-title">Auto Tips & Repair Insights</h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow" data-aos="fade-up" data-aos-delay="150">
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
            {blogs.map((blog) => {
              const date = getDateParts(blog.published_at || blog.created_at);
              return (
                <SwiperSlide key={blog.slug}>
                  <div>
                    <div className="blog-card style2">
                      <div className="blog-img">
                        <img
                          src={blog.thumbnail || "/assets/img/blog/blog-1.jpg"}
                          alt={blog.thumbnail_alt || blog.title}
                        />
                        <div className="blog-date">
                          <Link href="/blog">
                            <span>{date.day}</span>
                            {date.month}
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <Link href="/blog">
                            <i className="fas fa-user" /> By RapidFix Team
                          </Link>
                          {blog.wehoware_blog_categories?.name && (
                            <Link href="/blog">
                              <i className="fas fa-tag" />{" "}
                              {blog.wehoware_blog_categories.name}
                            </Link>
                          )}
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
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
