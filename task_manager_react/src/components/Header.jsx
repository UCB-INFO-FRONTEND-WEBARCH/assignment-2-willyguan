import menuIcon from '../assets/menu_icon.png';
import searchIcon from '../assets/search_icon.png';
import checkIcon from '../assets/check_icon.png'

function Header({ totalTasks, completedTasks }) {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="menu-icon">
           <img src={menuIcon} alt="Menu"/>
        </div>
        <div className="search-container">
          <img className="search-icon" src={searchIcon} alt="Search"/>
          <input type="text" className="quick-find" placeholder="Quick find"/>
        </div>
      </div>
      <div className="header-right">
        <img src={checkIcon} alt="Check" className="check-icon" />
        <span className="task-counter">{completedTasks}/{totalTasks}</span>
      </div>
    </header>
  );
}

export default Header;