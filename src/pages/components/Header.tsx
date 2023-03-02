import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '../../assets/chat.svg';
import LikesIcon from '../../assets/likes.svg';
import ProfileIcon from '../../assets/profile.svg';
import DropdownIcon from '../../assets/dropdown.svg';
import '../styles/header.css';
import { Margin } from '@mui/icons-material';

function Header() {
  return (
    <div className="header">
      <Button
        variant="contained"
        style={{
          backgroundColor: '#07A189',
          width: '162px',
          height: '70px',
          borderRadius: '17px',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontSize: '20px',
          marginLeft: '20px'
        }}
      >
        Logo
      </Button>
      <input
        className="input-search"
        placeholder="What are you looking here eg. freelancer, projects"
      />
      <Button variant="contained" endIcon={<SearchIcon fontSize="large" />} className="btn-icon" />
      <span className="bold-text">Post Project</span>
      <span className="bold-text">Search Project</span>
      <span className="icon-wrap">
        <span className="notify">4</span>
        <img
          alt=""
          src={ChatIcon}
          style={{
            width: '28px',
            height: '26px'
          }}
        />
      </span>
      <span className="icon-wrap">
        <span className="notify">5</span>
        <img
          alt=""
          src={LikesIcon}
          style={{
            width: '29px',
            height: '24px'
          }}
        />
      </span>
      <img
        alt=""
        src={ProfileIcon}
        style={{
          width: '53px',
          height: '53px',
          cursor: 'pointer'
        }}
      />
      <img
        alt=""
        src={DropdownIcon}
        style={{
          width: '16px',
          height: '9px',
          marginRight: '30px',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}

export default Header;
