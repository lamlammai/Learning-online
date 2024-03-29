import React from "react";
import "./StudyRoute.scss";
import { Tag } from "antd";
import Layout from "../../../component/Layout/Basic/Layout";
import StudyRouteItem from "./component/StudyRoute_Item";
import { route1, route2, route3 } from "../../../constants/images";
const StudyRoutes = [
  {
    link: "/nhap-mon",
    img: route1,
    name: "Bắt đầu",
    sub_name:
      "Trước tiên, chúng ta sẽ tìm hiểu về phương pháp học lập trình, kỹ năng đặt mục tiêu và các khái niệm kỹ thuật như: domain, client, server.",
  },
  {
    link: "/front-end",
    img: route2,
    name: "Front-end",
    sub_name:
      "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.",
  },
  {
    link: "/back-end",
    img: route3,
    name: "Back-end",
    sub_name:
      "Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học để trở thành lập trình viên Back-end nhé.",
  },
  {
    link: "/mobile-app",
    img: route2,
    name: "Mobile App",
    sub_name:
      "Chương trình “Mobile App Development with React Native” giúp học viên làm chủ công nghệ phát triển ứng dụng mobile trên iOS & Android, xây dựng được các ứng dụng hoàn thiện bằng React Native. Cùng với đó, khóa học này còn giúp học viên biết cách để mở rộng năng lực thông qua việc học công nghệ mới. Hoàn thành khóa học học viên có ĐỦ NĂNG LỰC CỦA MỘT LẬP TRÌNH VIÊN MOBILE CHUYÊN NGHIỆP, có thể tham gia trực tiếp vào các dự án phần mềm tại doanh nghiệp hoặc tự mình xây dựng các ứng dụng phục vụ cho các mục đích khác nhau.",
  },
];
function StudyRoute() {
  document.title = "Lộ trình học";
  return (
    <>
      <Layout>
        <div className="StudyRoute-wrapper">
          <section className="Main-row">
            <div className="Main-left">
              <h1>Lộ trình đề xuất</h1>
              <p>
                Cho dù bạn là người mới bắt đầu hay một lập trình viên đã có
                kinh nghiệm đang tìm kiếm các khóa học để nâng cao kỹ năng bản
                thân và đạt đến mức độ cao hơn trong lập trình, lộ trình học tập
                này sẽ giúp bạn đạt được mục tiêu của mình.
              </p>
              <div className="Main-left-body">
                {StudyRoutes.map((item, i) => (
                  <StudyRouteItem key={i} item={item} />
                ))}
              </div>
            </div>
            <div className="Main-right">
              <div className="Main-right-body">
                <Tag
                  icon={<i className="fas fa-snowboarding"></i>}
                  color="success"
                >
                  Bắt đầu từ con số 0
                </Tag>
                <Tag icon={<i className="fas fa-key"></i>} color="processing">
                  Trải nghiệm từ dễ đến khó
                </Tag>
                <Tag icon={<i className="fas fa-star"></i>} color="error">
                  Khóa học miễn phí, đa dạng
                </Tag>
                <Tag
                  icon={<i className="fas fa-hourglass-half"></i>}
                  color="warning"
                >
                  Bài tập củng cố, chấm code tự động
                </Tag>
                <Tag icon={<i className="fas fa-users"></i>} color="cyan">
                  Trao đổi, học hỏi, chia sẻ kiến thức
                </Tag>
                <Tag
                  icon={<i className="fas fa-graduation-cap"></i>}
                  color="purple"
                >
                  Học được, làm được
                </Tag>
                <Tag icon={<i className="fas fa-building"></i>} color="orange">
                  Học lập trình để đi làm
                </Tag>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default StudyRoute;
