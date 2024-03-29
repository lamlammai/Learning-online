import Layout from "../../component/Layout/Basic/Layout";
import React, { useState, useEffect } from "react";
import useScrollListener from "../../component/Scroll/ScrollX";
import Report from "../../pages/HomePage/Blog/Report";
import classNames from "classnames";
import { message } from "antd";
import { Link, useParams } from "react-router-dom";
import "../../pages/HomePage/Blog/Blog.scss";
import "./DetailBlog.scss";
import DrawerComment from "../../component/DrawerComment/DrawerComment";
import { sendGet } from "../../utils/api";
import { logo } from "../../constants/images";
const topic = [
  // thay doi
  { name: "Frontend", link: "FRONTEND" },
  { name: "Backend", link: "BACKEND" },
  { name: "Basic", link: "BASIC" },
  { name: "Mobile", link: "MOBILE" },
  { name: "DEVOPS", link: "DEVOPS" },
  { name: "Other", link: "OTHERS" },
];
function DetailBlog() {
  document.title = "Blog";
  const params = useParams();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [bgColor, setbgColor] = useState(false);
  const [far, setReact] = useState(false);
  const [count, setCount] = useState(0);
  const [, setCopied] = useState(false);

  const handleState = (e) => {
    setStatus(!status);
    setbgColor(!bgColor);
    status ? message.warning("Bỏ lưu!") : message.success("Lưu thành công!");
  };
  const reactHeart = () => {
    setReact(!far);
    // eslint-disable-next-line no-lone-blocks
    {
      far ? setCount(count - 1) : setCount(count + 1);
    }
  };
  const [cmt, setcmt] = useState(0);

  const callbackFunction = (childData) => {
    setcmt(childData);
  };
  const [navClassList, setNavClassList] = useState([]);
  const [navhidden, setNavhidden] = useState("SlideHidden");
  const scroll = useScrollListener();
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    message.success("Bạn đã copy link bài học!");
  }
  // thay doi
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const Blog = async () => {
    const res = await sendGet(`/posts/user/${params.link}`);
    if (res.statusCode === 200) {
      setData(res.returnValue.data);
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };
  useEffect(() => {
    Blog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const _classList = [];
    if (scroll.y > 60 && scroll.y - scroll.lastY > 0)
      _classList.push("hidden-header");
    setNavClassList(_classList);
    setNavhidden("SlideHidden");
  }, [scroll.y, scroll.lastY, navhidden]);

  return (
    <>
      <Layout navClassList={navClassList} navhidden={navhidden}>
        {data && (
          <div className="Detail-blog-wrapper Blog-wrapper">
            <div className="Detail-sub">
              <div>
                <h3>{data.author?.username}</h3>
                <div>
                  <span>
                    <i
                      className={far ? "fas fa-heart" : "far fa-heart"}
                      onClick={reactHeart}
                    ></i>
                    {count}
                  </span>
                  <span>
                    <DrawerComment parentCallback={callbackFunction} /> {cmt}
                  </span>
                </div>
              </div>
            </div>
            <div className="Detail-blog-main Blog-item">
              <h1 className="title">{data.title}</h1>
              <div className="author Blog-header">
                <img
                  alt="Ảnh đại diện"
                  src={data?.author?.avt ? data?.author?.avt : logo}
                />
                <div className="info">
                  <h3>{data.author?.username}</h3>
                  <div className="time">
                    <span style={{ marginLeft: "0px" }}>
                      {" "}
                      {/* {formatterDate.format(Date.parse(data?.createdAt))} */}
                      {data?.createdAt}
                    </span>{" "}
                    .
                  </div>
                </div>
                <div className="Blog-action">
                  <i
                    className={classNames("fas fa-bookmark", {
                      bgColor: bgColor,
                    })}
                    onClick={handleState}
                  ></i>
                  <i className="fas fa-ellipsis-h">
                    <ul>
                      <li>
                        <a
                          style={{ color: "#323333" }}
                          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Tiêu đề &body=http://localhost:3000/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fas fa-envelope"></i>Chia sẻ tới Email
                        </a>
                      </li>
                      <li onClick={copy}>
                        <i class="fas fa-link"></i>Sao chép liên kết
                      </li>
                      <Report data={data} />
                    </ul>
                  </i>
                </div>
              </div>
              <div className="main-content">
                <p dangerouslySetInnerHTML={{ __html: data.currentContent }} />
              </div>
              <div className="other-post">
                <ul></ul>
              </div>
              <div className="Blog-topic">
                <h3>Các chủ đề được đề xuất</h3>
                <div className="Topic-list">
                  {topic.map((item, key) => (
                    <div className="Topic-item" key={key}>
                      <Link to="#">{item.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export default DetailBlog;
