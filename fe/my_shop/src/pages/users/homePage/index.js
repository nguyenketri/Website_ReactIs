
import HomeCarousel from "component/banner_slider";
import {memo, useEffect, useState} from "react"
import { Link, Meta } from "react-router-dom";
import "./style.scss"
import { IoMdToday } from "react-icons/io";
import { formatTimeAdvanced, getSecondsLeft } from "utils/time";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "component/card/ProductCard";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Col, Row } from "antd";
import Category_card from "component/card_category/Category_card";
import { SiGravatar } from "react-icons/si";
const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0); // lưu index đang active
     const [activeCategory, setActiveCategory] = useState(0); // lưu index đang active
   // Fake: kết thúc sau 2 phút từ khi load trang
 const fakeEndTime = new Date(
  Date.now() + (2 * 24 * 60 * 60 + 3 * 60 * 60 + 15 * 60) * 1000
);

  const [timeLeft, setTimeLeft] = useState(getSecondsLeft(fakeEndTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getSecondsLeft(fakeEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    const [categories,setCategories] = useState([
        {name:"Woman's Fashion",path:'/'},
        {name:"Men's Fashion",path:'/'},
        {name:"Electonics",path:'/'},
        {name:"Home & Lifestyle",path:'/'},
        {name:"Medicine",path:'/'},
        {name:"Sports & Outdoor",path:'/'},
    ])

    const products = [
  { title: "Shoes", image: "https://m.media-amazon.com/images/I/51dy67JYsOL._AC_SY445_.jpg", price: 50, rating:5 },
  { title: "Bag", image: "https://m.media-amazon.com/images/I/51dy67JYsOL._AC_SY445_.jpg", price: 80,  rating:3.5 },
  { title: "Watch", image: "https://m.media-amazon.com/images/I/51dy67JYsOL._AC_SY445_.jpg", price: 120 ,rating:4 },
   
];
   
  const category = [
    {image:"https://th.bing.com/th?id=OIF.wdzmW7J7zPor%2faIhOeN0Fg&w=246&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",text:'Phone'},
    {image:"https://th.bing.com/th?id=OIF.wdzmW7J7zPor%2faIhOeN0Fg&w=246&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",text:'Camera'},
    {image:"https://th.bing.com/th?id=OIF.wdzmW7J7zPor%2faIhOeN0Fg&w=246&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",text:'HeaderPhone'},
    {image:"https://th.bing.com/th?id=OIF.wdzmW7J7zPor%2faIhOeN0Fg&w=246&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",text:'Gaming'},
    {image:"https://th.bing.com/th?id=OIF.wdzmW7J7zPor%2faIhOeN0Fg&w=246&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",text:'Computer'},
    {image:"https://th.bing.com/th?id=OIF.wdzmW7J7zPor%2faIhOeN0Fg&w=246&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",text:'SmartWatch'},
  ]
    return(
        <>
        <div className="content">
            <div className="container">
              <div className="container_banner">
            <nav className="nav_content">
                <ul>
                    {
                        categories.map((item,index) => {
                            return(
                             <li key={index}
                              onClick={() => setActiveIndex(index)} // click thì set active
                              className={activeIndex === index ? "active" : ""} // check active
                             ><Link to={item.path}>{item.name}</Link></li>
                            )
                        })
                    }
              
                </ul>
            </nav>
            <div className="banner">
         <HomeCarousel/>
            </div>
            </div>
        <div className="product_today">
  <IoMdToday /><span>Today</span>
  <div>
    <div className="next_product">
      <h4>Flash Sales: <span>{formatTimeAdvanced(timeLeft)}</span></h4>
      <p>
        <Link to=""><FaArrowLeft /></Link>
        <Link to=""><FaArrowRight /></Link>
      </p>
    </div>

    <div className="product-list">
      {products.map((p, idx) => (
        <ProductCard
          key={idx}
          title={p.title}
          image={p.image}
          price={p.price}
          rating={p.rating}
        />
      ))}
    </div>
  </div>

  <div className="view-all-wrapper">
    <Button>View All Product</Button>
  </div>
</div>
<div className="content_category">
   <IoMdToday /><span>Category</span>
   
   <div className="next_product">
      <h3>Browser By Category</h3>
      <p>
        <Link to=""><FaArrowLeft /></Link>
        <Link to=""><FaArrowRight /></Link>
      </p>
    </div>
    <div className="category_btn">
    {
      category.map((item, index) => {
        return (
        <button
        onClick={() => setActiveCategory(index)}
         className={activeCategory === index ? "active" : ""} // check active
        > <Category_card image={item.image} text={item.text}/>
        </button>
       )
  
      })
    }
    </div>
    
</div>
  
     <div className="best_product">
  <IoMdToday /><span>This Month</span>
  <div>
    <div className="product_best_selling">
      <h2>Best Selling Products</h2>
      <Button>View All</Button>
    </div>

    <div className="product-list">
      {products.map((p, idx) => (
        <ProductCard
          key={idx}
          title={p.title}
          image={p.image}
          price={p.price}
          rating={p.rating}
        />
      ))}
    </div>
  </div>

</div>

    <div className="banner-card">
  <img src="https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/boombox/loa-jbl-boombox-mau-xanh-reu-tai-hdradio-2ccc.jpg" alt="banner" />
  <div className="banner-text">
    <h2>Enhance Your Music Experience</h2>
    <p>Categories</p>
    <div className="countdown">
      <span>Days 05</span>
      <span>Hours 23</span>
      <span>Minutes 59</span>
      <span>Seconds 35</span>
    </div>
    <button>Buy Now!</button>
  </div>
</div>
   
  <div className="new_arrival">
  <Row gutter={[16, 16]}>
    {[...Array(4)].map((_, idx) => (
      <Col xs={24} sm={12} md={8} lg={6} key={idx}>
        <div className="banner-card">
          <img src="https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/boombox/loa-jbl-boombox-mau-xanh-reu-tai-hdradio-2ccc.jpg" alt="banner" />
          <div className="banner-text">
            <h2>Enhance Your Music Experience</h2>
            <p>Categories</p>
            <div className="countdown">
              <span>Days 05</span>
              <span>Hours 23</span>
              <span>Minutes 59</span>
              <span>Seconds 35</span>
            </div>
            <button>Buy Now!</button>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</div>
    <div className="all_infor">
   <div className="content_infor">
     <SiGravatar />
     <h2>FREE AND FAST DELIVERY</h2>
     <p>Free delivery for all orders over $140</p>
   </div>
   <div className="content_infor">
     <SiGravatar />
     <h2>FREE AND FAST DELIVERY</h2>
     <p>Free delivery for all orders over $140</p>
   </div>
   <div className="content_infor">
     <SiGravatar />
     <h2>FREE AND FAST DELIVERY</h2>
     <p>Free delivery for all orders over $140</p>
   </div>
  </div>
        </div>
        </div>
         
        </>
    )
}
export default memo(HomePage);


