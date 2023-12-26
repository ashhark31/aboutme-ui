import { Link } from 'react-router-dom';
import { setTriggeredMenu } from '../reducers';
import '../styles/head.hoc.css'
import {useDispatch} from 'react-redux'

const HeadHOC = ({children}) => {
  const nav_menus = ['Self', 'Dashboard', 'Config', 'Setting'];
  const dispatch = useDispatch();
  return (
    <div className="head_hoc">
        <div className="nav-tabs">
          {
            nav_menus?.map((menu,index) => {
              return (
                  <Link 
                    key={index}
                    to={"/"+menu.toLowerCase()} 
                    relative='path'
                  >
                    <div
                      key={index}
                      name={menu}
                      onClick={() => dispatch(setTriggeredMenu(menu))}
                    >
                      {menu}
                    </div>
                  </Link>   
              )
            })
          }
        </div>
        <div className="body-section">
          {children}
        </div>
    </div>
  )
}

export default HeadHOC