import twitter from './Images/twitter.png';
import telegram from './Images/telegram.png';
import buy from './Images/buy.png';
import hero from './Images/hero.png';
import hero_gif1 from './Images/hero.gif';
import ele from './Images/ele.png';
import hero_gif from './Images/1.gif';
import supply from './Images/supply.png';
import about_ele from './Images/about-ele.png';
import left_cloud from './Images/left-cloud.png';
import right_cloud from './Images/right-cloud.png';
import token_bg from './Images/tokenomics.png';
import token1 from './Images/token1.gif';
import token2 from './Images/token2.gif';
import token3 from './Images/token3.gif';
import token4 from './Images/3.gif';
import token5 from './Images/4.gif';
import token_trump from './Images/2.gif';
import about_heading from './Images/about-heading.png';
import about_content from './Images/about-content.png';
import about_img from './Images/about-img.png';
import usa from './Images/usa.gif';
import about_gif from './Images/abput.gif';
import map_heading from './Images/map-heading.png';
import map_1gif from './Images/map1.gif';
import map_2gif from './Images/map2.gif';
import map_3gif from './Images/map3.gif';
import p1 from './Images/p1.png';
import p2 from './Images/p2.png';
import p3 from './Images/p3.png';
import p4 from './Images/p4.png';
import footer from './Images/footer.png';
import f_tremp from './Images/f-tremp.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <nav>
          <img src={ele} alt="" className="logo" />
          <div className="links">
            <a href="http://www.twitter.com/Trumpforeverlfg">
              <img src={twitter} alt="" />
            </a>
            <a href="https://t.me/Trumpforeverlfg">
              <img src={telegram} alt="" />
            </a>
            <a href="/" className="btn">
              <img src={buy} alt="" />
            </a>
          </div>
        </nav>
        <img src={hero} alt="" className="hero-img" />
        <h2 className='ca'>ca: 0x5E83153AC55e9aeD734c7A60DeD8258f5E4bEb52</h2>
        <img src={hero_gif1} alt="" className="tremp" />
        <img src={hero_gif} alt='logo' className='hero_gif' />
      </div>
      <div className="supply">
        <img src={supply} alt="logo" className="supply-bg" />
        <h2>420,000,000,000 sUPPLY</h2>
        <p>
        Welcome to Forever Trump: The Unapologetic Meme Token <br/>
        In light of the recent attack on Donald Trump, we're more determined than ever to stand up for what we believe in: free speech, individuality, and the unapologetic spirit that's made America great.
        </p>
        <img src={token_trump} alt="" className="tremp1" />
        <img src={left_cloud} alt="" className="left" />
        <img src={right_cloud} alt="" className="right" />
        <img src={about_ele} alt="" className="jar" />
      </div>
      <div className='tokenomics'>
        <img src={token_bg} alt='logo' className='token_bg' />
        <img src={token4} alt='logo' className='token4' />
        <img src={token5} alt='logo' className='token5' />
        <div className='content'>
          <div className='box'>
            <img src={token1} alt='logo' className='token1' />
            {/* <h2>TOKENS</h2>
            <h2>1 BILLION</h2> */}
          </div>
          <div className='box'>
            <img src={token2} alt='logo' className='token2' />
            {/* <h2>TAXES</h2>
            <h2>0 %</h2> */}
          </div>
          <div className='box'>
            <img src={token3} alt='logo' className='token3' />
            {/* <h2>LIQUIDITY</h2>
            <h2>BURNT</h2> */}
          </div>
        </div>
      </div>
      <div className="about">
        <img src={about_heading} alt="" className="heading" />
        <img src={about_content} alt="" className="content" />
        <img src={usa} alt="" className="usa" />
        <div className="con">
          <div className="left">
            <p>
            Our token is a beacon of hope for those who refuse to be silenced, who refuse to be canceled, and who refuse to back down in the face of oppression. We're not afraid to push boundaries, challenge the status quo, and make some noise.
            </p>
            <p>
              Join us on this epic journey, and let's make some meme magic happen! Let's show the world that we won't be silenced, we won't be canceled, and we won't back down.
            </p>
            <a href="/" className="btn">
              <img src={buy} alt="" />
            </a>
          </div>
          <div className="right">
            <img src={about_img} alt="" />
            <img src={about_gif} className='about_gif' alt="" />
          </div>
        </div>
      </div>
      <div className="map">
        <img src={map_heading} alt="" className="heading" />
        <img src={map_1gif} alt="" className="map1" />
        <img src={map_2gif} alt="" className="map2" />
        <img src={map_3gif} alt="" className="map3" />
        <div className="content">
          <div className="con">
            <div className="box">
              <h3>phase 1</h3>
              <ul>
                <li> Launch on ETH</li>
                <li>Community Growth</li>
                <li>Website Release</li>
              </ul>
              <img src={p1} alt="" />
            </div>
            <div className="box">
              <h3>phase 2</h3>
              <ul>
                <li>Telegram &amp; Twitter Marketing</li>
                <li>Custom Meme's</li>
                <li>Cameo's</li>
                <li>Donations to Trump Campaign </li>
              </ul>
              <img src={p2} alt="" />
            </div>
            <div className="box">
              <h3>phase 3</h3>
              <ul>
                <li>CMC &amp; CG Listing</li>
                <li>Further Social Media Marketing</li>
                <li>Medium Release</li>
              </ul>
              <img src={p3} alt="" />
            </div>
            <div className="box">
              <h3>phase 4</h3>
              <ul>
                <li>CEX Listings</li>
                <li>Partnerships</li>
                <li>Going Viral</li>
              </ul>
              <img src={p4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src={footer} alt="" className="f-img" />
      <footer>
        <img src={f_tremp} alt="" className="tremp3" />
        <div className="links">
          <a href="http://www.twitter.com/Trumpforeverlfg">
            <img src={twitter} alt="" />
          </a>
          <a href="https://t.me/Trumpforeverlfg">
            <img src={telegram} alt="" />
          </a>
          <a href="/" className="btn">
            <img src={buy} alt="" />
          </a>
        </div>
        <p>TRUMP FOREVER © 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
