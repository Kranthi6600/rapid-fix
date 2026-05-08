"use client";
import Link from "next/link";
import { blogs } from "@/data/blogs";

const BlogDetailContent = ({ blog }) => {
  const { title, date, img, tags, category, content } = blog;
  const popular = blogs.slice(0, 3);

  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-details-card">
              <div className="blog-thumb">
                <img src={`/${img}`} alt={title} />
                <div className="blog-meta">
                  <span>
                    <i className="far fa-user" /> By Rapid Fix Team
                  </span>
                  <span>
                    <i className="far fa-folder" /> {category}
                  </span>
                </div>
                <Link href="/blog" className="blog-date">
                  {date.day} {date.month.toUpperCase()}
                </Link>
              </div>
              <div className="blog-content">
                <h2 className="blog-title h3">{title}</h2>
                {content.intro.map((para, i) => (
                  <p key={i} className={i < content.intro.length - 1 ? "mb-15" : ""}>
                    {para}
                  </p>
                ))}

                <blockquote>
                  <p>{content.pullQuote.text}</p>
                  <cite>{content.pullQuote.cite}</cite>
                </blockquote>

                <p className="mb-40">{blog.excerpt}</p>

                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="blog-thumb mb-sm-0 mb-30">
                      <img src={`/${img}`} alt={title} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-details-single-card bg-title">
                      <h4 className="text-white">{content.sectionTitle}</h4>
                      <p className="text-white">
                        Our certified technicians at Rapid Fix address each of
                        these points in every service visit — no shortcuts, no
                        guesswork.
                      </p>
                      <p className="text-white mb-n2">
                        Fast, accurate, and affordable service every time.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="blog-inner-title mt-70">{content.sectionTitle}</h3>
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="checklist style2">
                      <ul>
                        {content.checklistLeft.map((item, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checklist style2">
                      <ul>
                        {content.checklistRight.map((item, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-40">{content.closing}</p>
              </div>

              <div className="share-links clearfix">
                <span className="share-links-title">Tags:</span>
                <div className="tagcloud">
                  {tags.map((tag, i) => (
                    <Link key={i} href="/blog">{tag}</Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="comments-wrap">
              <h3 className="blog-inner-title">Leave a comment</h3>
              <div className="comment-form bg-smoke mb-30">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Your Name" className="form-control style-white" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Your Email" className="form-control style-white" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Phone Number" className="form-control style-white" />
                  </div>
                  <div className="col-md-6 form-group">
                    <select name="subject" id="subject" className="form-select style-white" defaultValue="Choose">
                      <option value="Choose">Select Subject*</option>
                      <option value="Auto Repair">Auto Repair</option>
                      <option value="Diesel Repair">Diesel Repair</option>
                      <option value="Diagnostics">Diagnostics</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea placeholder="Message here.." className="form-control style-white" defaultValue="" />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn style2">Send now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">Search</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><i className="fas fa-search" /></button>
                </form>
              </div>

              <div className="widget widget_categories">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li><Link href="/blog">Auto Repair <span>(3)</span></Link></li>
                  <li><Link href="/blog">Diesel Repair <span>(2)</span></Link></li>
                  <li><Link href="/blog">Diagnostics <span>(4)</span></Link></li>
                  <li><Link href="/blog">Fleet Services <span>(2)</span></Link></li>
                  <li><Link href="/blog">Maintenance Tips <span>(5)</span></Link></li>
                </ul>
              </div>

              <div className="widget">
                <h3 className="widget_title">Popular Posts</h3>
                <div className="recent-post-wrap">
                  {popular.map((post, i) => (
                    <div className="recent-post" key={i}>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link href="/blog">{post.date.full}</Link>
                        </div>
                      </div>
                      <div className="media-img">
                        <Link href={`/blog/${post.slug}`}>
                          <img src={`/${post.img}`} alt={post.title} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <Link href="/blog">Auto Repair</Link>
                  <Link href="/blog">Diesel</Link>
                  <Link href="/blog">Brakes</Link>
                  <Link href="/blog">Oil Change</Link>
                  <Link href="/blog">Fleet</Link>
                  <Link href="/blog">Diagnostics</Link>
                  <Link href="/blog">SSC</Link>
                  <Link href="/blog">Maintenance</Link>
                  <Link href="/blog">Truck Repair</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContent;
