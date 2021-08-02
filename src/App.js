/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import logo from './Images/logo.svg';
import logoWritten from './Images/logoWritten.svg';
import ScreenCSS from './Images/ScreenCSS.png';
import screen from './Images/Screenshot.png';

const background = css`
  background-color: #212224;
  width: 100%;
  height: 100vh;
`;

const background2 = css`
  background-color: #212224;
  width: 100%;
  height: 160vh;
  padding: 200px 0px;
`;

const menu = css`
  position: fixed;
  right: 3%;
  top: 18px;
  z-index: 100;
`;

const menuBar = css`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  text-align: center;
  color: white;
`;

const menuLink = css`
  text-decoration: none;
  color: #8c63fd;
`;

const emailForm = css`
  display: flex;
  padding: 6px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 28px 24px rgb(0 0 0 / 9%);
  width: 394px;
  height: 35px;
  margin-top: 8px;
`;

const inputEm = css`
  flex: 1 1;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.2em;
  border-radius: 20px;
  color: #101112;
  width: 260px;
  margin-right: 24px;
  text-indent: 20px;
  background: 0 0;
  border: white;
`;

const input2 = css`
  flex: 0 1;
  padding: 0 20px 0 24px;
  border-radius: 20px;

  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.2em;
  -webkit-appearance: none;
  color: white;
  background-color: #8c63fd;
  border: white;
`;

const menuLogo = css`
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 102;
  display: flex;
  align-items: center;
  fill: rgba(255, 255, 255, 1);
  color: white;
`;

const logoWr = css`
  width: 98px;
  margin-left: 12px;
  transition: opacity 0.62s;
`;

const imgPhone = css`
  display: block;
  position: absolute;
  bottom: 0px;
  right: 45%;
  width: 550px;
`;
const h12 = css`
  position: absolute;
  top: 290px;
  right: 13%;
`;

const h1first = css`
  margin: 12px 0 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -1.2px;
  max-width: 400px;

  color: white;
`;

const h2style = css`
  margin-top: 24px;
  font-size: 18px;
  opacity: 0.6;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: white;
`;

const innerDiv = css`
  position: relative;
  width: auto;
  margin: 0px 10%;
  padding: 0;
`;

const h4first = css`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.2em;
  color: #8c63fd;
  font-size: 14px;
`;
const mostInnerDiv = css`
  max-width: 720px;
  max-height: 401.56px;
  margin: 0px 210px;
  padding: 0;
`;

const h2second = css`
  margin: 12px 0 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -1.2px;
  color: white;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const h3second = css`
  font-size: 18px;
  opacity: 0.6;
  margin-top: 20px;
  color: white;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: normal;
`;

const buttonDiv = css`
  display: flex;
  width: 720px;
  margin: 80px auto 40px;
`;

const button1 = css`
  display: block;
  width: 50%;
  padding: 20px 0;
  text-align: center;
  cursor: pointer;
  opacity: 0.6;
  border-bottom: 1px solid rgba(16, 17, 18, 0.1);
  transition: all 0.32s;
  color: #8c63fd;
  opacity: 1;
  border-bottom-color: #8c63fd;
`;

const background3 = css`
  width: 100%;
  height: 645.53px;
  background-color: #212224;
  padding: 200px 0;
`;

const textblock3 = css`
  margin-top: 80px;
  margin-right: 0px;
  width: 480px;
  float: left;
`;

const innerDiv3 = css`
  height: 645.35;
  margin: 0px 244px;
`;

const h43 = css`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.4em;
  color: #8c63fd;
`;

const h23 = css`
  margin: 12px 0 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -1.5px;
  color: white;
`;

const h33 = css`
  display: block;
  font-size: 1.15em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: normal;
  color: white;
  opacity: 0.6;
`;

const imgWr3 = css`
  margin-left: 40px;
  flex: 1 1;
  float: left;
`;

const img2 = css`
  max-width: 1000px;
  z-index: -1000;
`;

function App() {
  return (
    <>
      <header>
        <div css={menuLogo}>
          <img src={logo} alt="logo" />
          <img src={logoWritten} alt="written" css={logoWr} />
        </div>

        <div class="Menu" css={menu}>
          <div class="Header" css={menuBar}>
            SIGN UP FOR EARLY ACCESS OR{' '}
            <a href="https://app.cloverapp.co/login" css={menuLink}>
              sign in
            </a>
          </div>
          <form class="email" css={emailForm}>
            <input css={inputEm} placeholder="Email Adress" />
            <input type="submit" css={input2} value="sign up" />
          </form>
          <div class="signIn" />
        </div>
      </header>

      <main>
        <div css={background}>
          <img src={screen} alt="smartphones" css={imgPhone} />
          <div css={h12}>
            <h1 css={h1first}>The all-in-one notebook for creatives.</h1>
            <h2 css={h2style}>Brainstorm, write, and plan in a single tool.</h2>
          </div>
        </div>
        <div css={background2}>
          <div css={innerDiv}>
            <div css={mostInnerDiv}>
              <h4 css={h4first}>REIMAGINING THE PAGE</h4>
              <h2 css={h2second}>
                Designed for better
                <br /> writting and thinking.
              </h2>
              <h3 css={h3second}>
                <p>
                  Word processors have always worked in straight lines – top to
                  bottom, left to right. But that’s not how our minds work. What
                  if we had a tool that could work in straight lines or… well…
                  not straight lines? We think it makes for a pretty powerful
                  thinking tool.
                </p>
                <p>
                  We built a new style of text editor from the ground up to
                  better support creative thinking. Clover lets you explode
                  traditional documents and work in a more free-form manner for
                  better brainstorming, mind-mapping, and exploration.
                </p>
              </h3>
            </div>
            <div css={buttonDiv}>
              <div css={button1}>Writing</div>
              <div css={button1}>Thinking</div>
            </div>
            <div>
              <img src={ScreenCSS} alt="Window" css={img2} />
            </div>
          </div>
        </div>
        <div css={background3}>
          <div css={innerDiv3}>
            <div>
              <div css={textblock3}>
                <h4 css={h43}>FROM IDEA TO REALITY.</h4>
                <h2 css={h23}>
                  Manage your tasks.
                  <br /> Plan your days.
                </h2>
                <h3 css={h33}>
                  Ideas are nothing without execution. Clover integrates tasks
                  directly within your documents to make project management as
                  simple as writing. The Agenda view lets you track notes and
                  tasks per day, so you never forget anything.
                </h3>
              </div>
              <div css={imgWr3}>
                {/* <img
                  src="https://cloverapp.co/static/media/agenda-dark.84d71097.png"
                  alt="phone"
                css={img3}
                />*/}
              </div>
            </div>
          </div>
        </div>
        {/*
        <div css={background4}>
          <div css={innerDiv4}>
            <div css={svgContainer4}></div>
          </div>
        </div>*/}
      </main>
    </>
  );
}

export default App;
