import ReactDOM from 'react-dom';
import sidenav from './components/sidenav/sidenav';
import './style.css'


ReactDOM.render(
    <div>
        {sidenav()}
    </div>
    ,document.getElementById('root')
);