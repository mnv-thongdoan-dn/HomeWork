import logo from '../images/logo.png'

function Header(){
  return(
    <header className="header">
      <div className="container-fluid">
        <div className="header-wrapper">
          <a href="../HomeWork/index.html" className="header-logo"><img src={logo} alt="logo-temo"/></a>
          <div className="header-nav-icon col-largest-5"><i className="fa fa-bars" aria-hidden="true"></i></div>
          <nav className="header-nav col-largest-7">
            <ul className="header-menu">
              <li className="header-menu-multiple" >
                <a href="abc.com">Home</a>
                <ul>
                  <li><a href="abc.com">Home Demo - 1</a></li>
                  <li><a href="abc.com">Home Demo - 2</a></li>
                  <li><a href="abc.com">Home Demo - 3</a></li>
                  <li className="header-menu-multiple">
                  <a  href="abc.com">Page</a> 
                    <ul>
                      <li><a href="abc.com">Trade</a></li>
                      <li><a href="abc.com">Leadership Team</a></li>
                      <li><a href="abc.com">Privacy Policy</a></li>
                      <li><a href="abc.com">Terms & Conditions</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="header-menu-multiple" >
                <a  href="abc.com">Buy</a>
                <ul>
                  <li><a href="abc.com"><img src="./images/header-image/BTC-coin.png" alt="bitcoin-image"/>BTC - Bitcoin</a></li>
                  <li><a href="abc.com"><img src="./images/header-image/LiteCoin.png" alt="litecoin-image"/>MIT - LiteCoin</a></li>
                  <li><a href="abc.com"><img src="./images/header-image/XRP.png" alt="ripplecoin"/>XRP - Ripple</a></li>
                  <li><a href="abc.com"><img src="./images/header-image/STE.png" alt="stellarcoin"/>STE - Stellar</a></li>
                  <li><a href="abc.com"><i className="fa fa-arrow-right" aria-hidden="true"></i>View All Coin</a></li>
                </ul>
              </li>
              <li className="header-menu-multiple">
                <a  href="abc.com">Sell</a>
                <ul>
                  <li><a href="abc.com"><img src="./images/header-image/BTC-coin.png" alt="bitcoin-image"/>BTC - Bitcoin</a></li>
                  <li><a href="abc.com"><img src="./images/header-image/LiteCoin.png" alt="litecoin-image"/>MIT - LiteCoin</a></li>
                  <li><a href="abc.com"><img src="./images/header-image/XRP.png" alt="ripplecoin"/>XRP - Ripple</a></li>
                  <li><a href="abc.com"><img src="./images/header-image/STE.png" alt="stellarcoin"/>STE - Stellar</a></li>
                  <li><a href="abc.com"><i className="fa fa-arrow-right" aria-hidden="true"></i>View All Coin</a></li>
                </ul>
              </li>
              <li><a href="abc.com">Listings</a></li>
              <li className="header-menu-multiple" >
                <a href="abc.com">Support</a>
                <ul>
                  <li><a href="abc.com"><i className="fa fa-info-circle" aria-hidden="true"></i>FAQ</a></li>
                  <li><a href="abc.com"><i className="fa fa-book" aria-hidden="true"></i>Guides</a></li>
                  <li><a href="abc.com"><i className="fa fa-google-wallet" aria-hidden="true"></i>Wallets</a></li>
                  <li><a href="abc.com"><i className="fa fa-users" aria-hidden="true"></i>About</a></li>
                  <li><a href="abc.com"><i className="fa fa-phone" aria-hidden="true"></i>Contact Us</a></li>
                  <li><a href="abc.com"><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Affiliates</a></li>
                </ul>
              </li>
              <li><a href="abc.com">Blog</a></li>
            </ul>
          </nav>
          <div className="header-option">
            <a href="abc.com" className="header-option-login"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</a>
            <a href="abc.com" className="header-option-register btn btn-primary"><i className="fa fa-user-o" aria-hidden="true"></i>Register</a>
            <select name="" id="" className="header-option-multiple-language">
              <option selected>English1</option>
              <option value="1">English2</option>
              <option value="2">English3</option>
              <option value="3">English4</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;