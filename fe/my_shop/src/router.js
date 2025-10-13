import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import LoginScreem  from  "./pages/authen/login";
import LoginPage from "./pages/authen/login";
import SignUPScreem from "pages/authen/sign_up/sign_up";
const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
          {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>
        }
        ,
          {
            path: ROUTERS.AIUTHEN.LOGIN,
            component: <LoginPage/>
        }
        ,
          {
            path: ROUTERS.AIUTHEN.REGISTER,
            component: <SignUPScreem/>
        }
    ]

    return(
        <MasterLayout>
        <Routes>
           {
            userRouter.map((item,key) => 
              <Route key={key} path={item.path}
                element= {item.component}
                />
            )
           }
        </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom