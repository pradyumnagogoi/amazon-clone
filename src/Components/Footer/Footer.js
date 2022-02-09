import React from 'react';
import '../Footer/Footer.css';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return <div className='footer'>
      <div className='footer1'>Back to top</div>
      <div className='footer2'>
          <div className='footer_list'>
              <div className='footer_head'>Get to Know Us</div>
              <div className='footer_link'>
                <a href=' '>About Us</a>
                <a href=' '>Careers</a>
                <a href=' '>Press Release</a>
                <a href=' '>Amazon Cares</a>
                <a href=' '>Gift a Smile</a>
                <a href=' '>Amazon Science</a>
              </div>
              
          </div>
          <div className='footer_list'>
              <div className='footer_head'>Contect with Us</div>
              <div className='footer_link'>
                <a href=' '>Facebook</a>
                <a href=' '>Twitter</a>
                <a href=' '>Instagram</a>
              </div>
          </div>
          <div className='footer_list'>
              <div className='footer_head'>Make Money with Us</div>
              <div className='footer_link'>
                <a href=' '>Sell on Amazon</a>
                <a href=' '>Sell under Amazon Accelerator</a>
                <a href=' '>Amazon Globel Selling</a>
                <a href=' '>Become an Affillite</a>
                <a href=' '>Fulfilment by Amazon</a>
                <a href=' '>Advertise your Products</a>
                <a href=' '>Amazon Pay on Merchants</a>
              </div>
          </div>
          <div className='footer_list'>
              <div className='footer_head'>Let us Help You</div>
              <div className='footer_link'>
                <a href=' '>COVID-19 and Amazon</a>
                <a href=' '>Your Account</a>
                <a href=' '>Return Center</a>
                <a href=' '>100% Purchase Protection</a>
                <a href=' '>Amazon App Download</a>
                <a href=' '>Amazon Assistant Download</a>
                <a href=' '>Help</a>
              </div>
          </div>
      </div>
      <div className='footer3'>
        <div className='footer3_a'>
            <div><img className='logo' src='logo.png' alt='logo' /></div>
            <div className='footer_lang'>
              <div className='lang_icon'><LanguageIcon /></div>
              <div>English</div>
            </div>
        </div>
        <div className='footer_location'>
          <span>Australia</span>
          <span>Brazil</span>
          <span>Canada</span>
          <span>France</span>
          <span>Germany</span>
          <span>India</span>
          <span>Italy</span>
          <span>Japan</span>
          <span>Maxico</span>
          <span>Netherlands</span>
          <span>Poland</span>
          <span>Singapore</span>
          <span>Spain</span>
          <span>Turkey</span>
          <span>United Arab Emirates</span>
          <span>United Kingdom</span>
          <span>United States</span>
        </div>
      </div>
      <div className='footer4'>
        <div className='footer4_a'>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>h</div>
          <div>i</div>
        </div>
        <div>
            b
        </div>
      </div>
  </div>;
}

export default Footer;
