import Button from '@mui/material/Button';
import TwitterIcon from '../../assets/twitter.svg';
import FbIcon from '../../assets/fb.svg';
import InstaIcon from '../../assets/insta.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div>
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
            marginBottom: '30px'
          }}
        >
          Logo
        </Button>
        <div className="foot-1">
          <span className="text">901 Thornridge Cir.</span>
          <span className="text">Shiloh, Hawaii</span>
          <span className="text">81063</span>
        </div>
      </div>
      <div className="con-1">
        <span className="head-text">Company</span>
        <div className="foot-1">
          <span className="sub-text">About Us</span>
          <span className="sub-text">Career</span>
          <span className="sub-text">Team</span>
          <span className="sub-text">Contact</span>
        </div>
      </div>
      <div className="con-2">
        <span className="head-text">Product</span>
        <div className="foot-1">
          <span className="sub-text">Services</span>
          <span className="sub-text">Feelancer</span>
          <span className="sub-text">Features</span>
          <span className="sub-text">Development</span>
        </div>
      </div>
      <div className="con-3">
        <span className="head-text">Links</span>
        <div className="foot-1">
          <span className="sub-text">Privacy Policy</span>
          <span className="sub-text">Term & Conditions</span>
          <span className="sub-text">FAQ</span>
        </div>
      </div>
      <div className="con-4">
        <span className="head-text">Follow Us</span>
        <div className="foot-2">
          <img alt="" src={TwitterIcon} className="icon-social" />
          <img alt="" src={FbIcon} className="icon-social" />
          <img alt="" src={InstaIcon} className="icon-social" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
