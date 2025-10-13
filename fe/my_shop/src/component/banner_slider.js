import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
        alt="Banner 1"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        src="https://img.freepik.com/premium-photo/beautiful-sky-clouds-autumn-sunset-background_692702-7800.jpg?w=2000"
        alt="Banner 2"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
        alt="Banner 3"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </div>
  </Carousel>
);

export default HomeCarousel;
