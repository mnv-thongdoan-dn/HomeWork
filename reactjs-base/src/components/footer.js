function Footer(){
  return(
    <footer className="footer">
    <div className="container">
      <div className="footer-list-content row">
        <div className="footer-item footer-subrcribe col-5">
          <a href="abc.com"><img src="./images/logo.png" alt="" className="footer--logo"/></a>
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>
          <form action="">
            <input className="input" type="email" name="email" placeholder="Enter Your Email"/>
            <button type="submit" className="btn btn-primary">Subrcribe Now<i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </form>
          <ul>
            <li><a href="facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="twitter.com"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="linkedin.com"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div className="footer-item footer-cryptocurrencies col-2">
          <h3>Cryptocurrency</h3>
          <ul>
            <li><a href="abc.com">Buy Bitcoin1</a></li>
            <li><a href="abc.com">Buy Bitcoin2</a></li>
            <li><a href="abc.com">Buy Bitcoin3</a></li>
            <li><a href="abc.com">Buy Bitcoin4</a></li>
            <li><a href="abc.com">Buy Bitcoin5</a></li>
          </ul>
        </div>
        <div className="footer-item footer-resource col-2">
          <h3>Resources</h3>
          <ul>
            <li><a href="abc.com">Trade1</a></li>
            <li><a href="abc.com">Trade2</a></li>
            <li><a href="abc.com">Trade3</a></li>
            <li><a href="abc.com">Trade4</a></li>
          </ul>
        </div>
        <div className="footer-item footer-contact col-3">
          <h3>Contact Info</h3>
          <ul>
            <li>Address: 2750, Quadra Street Victoria, Canada</li>
            <li>Email:<a href="abc.com">hello@temo.com</a></li>
            <li>Phone:<a href="abc.com">+44 587 154756</a></li>
            <li>Fax:<a href="abc.com">+55 58715 4756</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright 2022 <strong>Temo</strong>. All Rights Reserved by <a href="abc.com">EnvyTheme</a></p>
    </div>
    </footer>
  )
}

export default Footer;
