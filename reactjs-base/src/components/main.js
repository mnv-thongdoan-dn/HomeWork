function Main(){
  return(
    <main className="main">
    <section className="banner">
        <div className="container-fluid">
          <div className="wrapper">
            <div className="banner-content col-5">
              <span className="sub-title">First order and you'll get up to $10 in free BTC as a reward</span>
              <h1>A Trusted and Secure Cryptocurrency Exchange</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.</p>
              <form action="#" method="post">
                <input className="input" type="email" name="email" placeholder="Enter your email"/>
                <button type="submit" className="btn btn-secondary">Get Started<i></i></button>
              </form>
            </div>
            <img className="banner-image col-7" src="./images/banner-img.png" alt="banner image"/>
          </div>
        </div>
    </section>
    <section className="introduce">
      <div className="container">
          <h2 className="title-h2">The Global Leader of Social Trading</h2>
          <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="introduce-content row">
          <li className="introduce-content-item col-4">
            <article className="content-wraper">
              <img src="./images/introduce-1.png" alt="introduce1"/>
              <h3>Start Instantly</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et doee magna aliqua. Ut enim ad minim veniam.</p>
            </article>
          </li>
          <li className="introduce-content-item col-4">
            <article className="content-wraper">
              <img src="./images/introduce-2.png" alt="introduce2"/>
              <h3>Easy to Use</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et doee magna aliqua. Ut enim ad minim veniam.</p>
            </article>
          </li>
          <li className="introduce-content-item col-4">
            <article className="content-wraper">
              <img src="./images/introduce-3.png" alt="introduce3"/>
              <h3>Secure and Regulated</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et doee magna aliqua. Ut enim ad minim veniam.</p>
            </article>
            </li>
        </ul>
      </div>
    </section>
    <section className="sell-tokens">
      <div className="container">
        <div className="wrapper">
          <img src="./images/sell-token.jpg" alt="sell token image" className="sell-tokens-image col-6"/>
          <div className="sell-tokens-content col-6">
            <h2 className="title-h2">Pre-Sale Ends In</h2>
            <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <ul className="content-countdown">
              <li><span id="days">1328</span>DAYS</li>
              <li><span id="hours">09</span>HOURS</li>
              <li><span id="minutes">43</span>MIN</li>
              <li><span id="seconds">23</span>SEC</li>
            </ul>
            <div className="content-tokenPrice">
              <div className="content-tokenPrice-box"> 
                <span>Token Price</span>
                <h3>1 ICOX=$0.08</h3>
              </div>
              <div className="content-tokenPrice-box"> 
                <span>We Accept</span>
                <h3><img src="./images/sell-token-eth-image.png" alt="eth image"/>ETH</h3>
              </div>
            </div>
            <span className="content-totalPrice">Tokens Available On Pre-Sale <span>75,000,000 ICOX</span></span>
            <div className="content-button">
              <a href="abc.com" className="btn btn-primary"><i className="fa fa-cc-discover" aria-hidden="true"></i>Buy token 55% off</a>
              <a href="abc.com" className="btn btn-secondary"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>White Pappers</a>
            </div>
            <div className="content-payment" src="" alt="">
              <img src="./images/payment-image.png" alt="payment image"/>
              <img src="./images/payment-image2.png" alt="payment image"/>
              <img src="./images/payment-image-3.png" alt="payment image"/>
              <img src="./images/payment-image-4.png" alt="payment image"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cryptocurrencies">
      <div className="container">
        <h2 className="title-h2 ">Top Cryptocurrencies</h2>
        <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <table className="cryptocurrencies-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change(24h)</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="./images/header-image/BTC-coin.png" alt=""/>BITCOIN</td>
              <td>USD 44444</td>
              <td className="trending-up">+1.55%</td>
              <td><a href="abc.com" className="btn btn-primary">BUY</a></td>
            </tr>
            <tr>
              <td><img src="./images/sell-token-eth-image.png" alt=""/>ETHERUM</td>
              <td>USD 44444</td>
              <td className="trending-up">+1.55%</td>
              <td><a href="abc.com" className="btn btn-primary">BUY</a></td>
            </tr>
            <tr>
              <td><img src="./images/header-image/LiteCoin.png" alt=""/>LITECOIN</td>
              <td>USD 44444</td>
              <td className="trending-down">+1.55%</td>
              <td><a href="abc.com" className="btn btn-primary">BUY</a></td>
            </tr>
            <tr>
              <td><img src="./images/header-image/LiteCoin.png" alt=""/>CARDANO</td>
              <td>USD 44444</td>
              <td className="trending-up">+1.55%</td>
              <td><a href="abc.com" className="btn btn-primary">BUY</a></td>
            </tr>
            <tr>
              <td><img src="./images/header-image/XRP.png" alt=""/>XRP</td>
              <td>USD 44444</td>
              <td className="trending-up">+1.55%</td>
              <td><a href="abc.com" className="btn btn-primary">BUY</a></td>
            </tr>
            <tr>
              <td><img src="./images/header-image/STE.png" alt=""/>STELLAR</td>
              <td>USD 44444</td>
              <td className="trending-up">+1.55%</td>
              <td><a href="abc.com" className="btn btn-primary">BUY</a></td>
            </tr>
          </tbody>
        </table>
        <div className="cryptocurrencies-btn">
          <a className="btn btn-secondary" href="abc.com"><i className="fa fa-pied-piper-pp" aria-hidden="true"></i>See more Prices</a>
        </div>
      </div>
    </section>
    <section className="features">
      <div className="container">
        <h2 className="title-h2">Our Features</h2>
        <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="features-list row">
            <li className="features-item col-4">
              <a href="abc.com">
                <img src="./images/feature-img1.png" alt=""/>
              </a>
              <h3>Security First</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et doee magna aliqua. Ut enim ad minim veniam.</p>
            </li>
            <li className="features-item col-4">
              <a href="abc.com">
                <img src="./images/features-img2.png" alt=""/>
              </a>
              <h3>Fast Withdrawals</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et doee magna aliqua. Ut enim ad minim veniam.</p>
            </li>
            <li className="features-item col-4">
              <a href="abc.com">
                <img src="./images/features-img3.png" alt=""/>
              </a>
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et doee magna aliqua. Ut enim ad minim veniam.</p>
            </li>
        </ul>
      </div>
    </section>
    <section className="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="portfolio-carousel col-5">
            <div className="carousel-viewport">
              <ol>
                <li>
                  <h3>Lorem</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed veniam voluptatibus distinctio hic expedita voluptatem in odio ipsam aliquid. Vero cumque adipisci reprehenderit officia quasi sit in nesciunt sed.</p>
                </li>
              </ol>
            </div>
            <button className="carousel-button-prev"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></button>
            <button className="carousel-button-next"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
          </div>
          <div className="portfolio-image col-7">
            <img src="./images/portfolio-img1.png" alt=""/>
          </div>
        </div>
        </div>
        <div className="shape portfolio--shape">
          <img src="" alt=""/>
        </div>
    </section>
    <section className="tutorial">
      <div className="container">
        <h2 className="title-h2">How to Buy and Sell Cryptocurrency</h2>
        <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="tutorial-list row">
          <li className="tutorial-item col-4">
            <article>
              <img src="./images/tutorial-img1.png" alt=""/>
              <h3>Bank Transfers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur elit.</p>
            </article>
          </li>
          <li className="tutorial-item col-4">
            <article >
              <img src="./images/tutorial-img2.png" alt=""/>
              <h3>Online Wallets</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur elit.</p>
            </article>
          </li>
          <li className="tutorial-item col-4">
            <article>
              <img src="./images/tutorial-img3.png" alt=""/>
              <h3>Cash Payment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur elit.</p>
            </article>
          </li>
          <li className="tutorial-item col-4">
            <article>
              <img src="./images/tutorial-4.png" alt=""/>
              <h3>Debit/Credit Cards</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur elit.</p>
            </article>
          </li>
          <li className="tutorial-item col-4">
            <article>
              <img src="./images/tutorial-img5.png" alt=""/>
              <h3>Discounted Gift Cards</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur elit.</p>
            </article>
          </li>
          <li className="tutorial-item col-4">
            <article>
              <img src="./images/tutorial-img6.png" alt=""/>
              <h3>Goods & Services</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur elit.</p>
            </article>
          </li>
        </ul>
      </div>
    </section>
    <section className="download">
      <div className="container">
        <div className="wrapper">
          <img className="download-image col-6" src="./images/dowload-img1.png" alt=""/>
          <div className="download-app col-6">
            <h2>Trade On The Mobile App</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="download-app-content">
              <a href="abc.com" className="btn btn-download"><img src="./images/download-img2.png" alt=""/>Get It On<span>GOOGLE PlAY</span></a>
              <a href="abc.com" className="btn btn-download"><img src="./images/download-img3.png" alt=""/>Download on the<span>APPLE STORE</span></a>
            </div>
          </div>
        </div>
      </div>
    <img className="shape download--shape" src="" alt=""/>
    </section>
    <section className="advisors">
      <div className="container">
        <h2 className="title-h2">Our Advisors</h2>
        <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="advisors-list row">
          <li className="advisors-item col-3">
            <article>
              <div className="wrapper-image">
                <img src="./images/advisor-img1.jpg" alt=""/>
              </div>
              <h3>Alika Maya</h3>
              <span>CEO Capital Limited</span>
            </article>
          </li>
          <li className="advisors-item col-3">
            <article>
              <div className="wrapper-image">
                <img src="./images/advisor-img2.jpg" alt=""/>
              </div>
              <h3>Jason Smith</h3>
              <span>CEO Capital Limited</span>
            </article>
          </li>
          <li className="advisors-item col-3">
            <article>
              <div className="wrapper-image">
                <img src="./images/advisor-img3.jpg" alt=""/>
              </div>
              <h3>Ruby Taylor</h3>
              <span>CEO Capital Limited</span>
            </article>
          </li>
          <li className="advisors-item col-3">
            <article>
              <div className="wrapper-image">
                <img src="./images/advisor-img4.jpg" alt=""/>
              </div>
              <h3>Eva Anderson</h3>
              <span>CEO Capital Limited</span>
            </article>
          </li>
        </ul>
      </div>
    </section>
    <section className="start-trading">
      <div className="container">
        <div className="wrapper">
          <div className="start-trading-content col-6">
            <h2 className="title-h2">Start Trading on Temo</h2>
            <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <a className="btn btn-primary btn-start-trading" href="abc.com"><i className="fa fa-user-o" aria-hidden="true"></i>Register Now</a>
          </div>
          <div className="wrapper-image-trading col-6">
            <img className="start-trading-image" src="./images/start-trading-img1.png" alt=""/>
          </div>
        </div>
      </div>
        <div className="shape start-trading-shape1"></div>
        <div className="shape start-tradingshape2"></div>
        <div className="shape start-trading-shape3"></div>
        <div className="shape start-trading-shape4"></div>
        <div className="shape start-trading-shape5"></div>
    </section>
    </main>
  )
}

export default Main;
