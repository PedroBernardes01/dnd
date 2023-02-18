import './Sidenav.css'
import {
    HomeFilled,
    ContainerFilled
  } from '@ant-design/icons';
export default _ =>
    <div id='Sidenav'>
        <button className='Home opt'><HomeFilled className='icon'/><span>Home</span></button>
        <button className='opt'><ContainerFilled className='icon'/><span>Sheets</span></button>
    </div>