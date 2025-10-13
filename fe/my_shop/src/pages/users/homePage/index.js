
import HomeCarousel from "component/banner_slider";
import {memo, useState} from "react"
import { Link } from "react-router-dom";
import "./style.scss"
import { IoMdToday } from "react-icons/io";
const HomePage = () => {
    const [categories,setCategories] = useState([
        {name:"Woman's Fashion"},
         {name:"Men's Fashion"},
          {name:"Electonics"},
           {name:"Home & Lifestyle"},
            {name:"Medicine"},
             {name:"Sports & Outdoor"},
    ])
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
                             <li key={index}><Link>{item.name}</Link></li>
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
            <h4>Flash Sales</h4>
             <p>
  {time.getHours().toString().padStart(2, "0")}:
  {time.getMinutes().toString().padStart(2, "0")}:
  {time.getSeconds().toString().padStart(2, "0")}
</p>
           </div>
          </div>

        </div>
        </div>
         
        </>
    )
}
export default memo(HomePage);