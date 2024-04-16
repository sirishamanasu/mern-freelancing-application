import React from "react";
import styled from "styled-components";

const About = () => {
  const Wrapper = styled.section`
    #divider3 {
      position: absolute;
      background: #1cd6ce;
      border-radius: 50px;
      height: 4px;
      width: 116px;
      margin-left: 692px;
      margin-top: -19px;
    }

    h1 {
      text-align: center;
      color: var(--accent-color);
      font-size: 45px;
      font-weight: bold;
      font-family: "Andada Pro", serif;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin: auto;
      margin-top: 1.5em;
    }

    .about-card {
      background-color: var(--shady-white-color);
      position: relative;
      text-align: center;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 2.9px 3.4px 3.6px rgba(0, 0, 0, 0.045),
        7.9px 9.3px 10px rgba(0, 0, 0, 0.065),
        19px 22.3px 24.1px rgba(0, 0, 0, 0.085),
        63px 74px 80px rgba(0, 0, 0, 0.13);
      margin: 0px 25px;
      padding: 45px 70px;
    }

    .img {
      display: inline-block;
      z-index: 1;
      position: relative;
      cursor: pointer;
      margin-bottom: 0px;
      width: 130px;
      height: 130px;
    }

    .img::before {
      content: "";
      border-radius: 50%;
      background-color: var(--accent-color);
      position: absolute;
      opacity: 0.2;
      transform: scale(3);
      transition: all 0.3s linear 0s;
      cursor: pointer;
      bottom: 135%;
      right: 0;
      left: 0;
      width: 100%;
      height: 0;
    }

    .about-card:hover .img::before {
      height: 100%;
    }

    .img:after {
      content: "";
      border-radius: 50%;
      background-color: var(--accent-color);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .img img {
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.8s ease 0s;
      width: 100%;
      height: auto;
      cursor: pointer;
    }

    .about-card:hover .img img {
      box-shadow: 0 0 0 14px white;
      transform: scale(0.7);
      cursor: pointer;
    }

    .info {
      margin-bottom: 30px;
    }

    .info h3 {
      font-family: "Andada Pro", serif;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }

    .info span {
      font-family: "Andada Pro", serif;
      display: block;
      font-size: 15px;
      color: #4e5052;
    }

    .social {
      background: var(--accent-color);
      position: absolute;
      bottom: -100px;
      left: 0;
      width: 100%;
      padding: 0;
      margin: 0;
      transition: all 0.5s ease 0s;
    }

    .about-card:hover .social {
      bottom: 0;
    }

    .social li {
      display: inline-block;
    }

    .social li a {
      text-decoration: none;
      display: block;
      font-size: 17px;
      color: #fff;
      cursor: pointer;
      padding: 10px;
      transition: all 0.3 ease 0s;
    }

    .social li a:hover {
      color: var(--accent-color);
      background: var(--shady-white-color);
    }
  `;
  return (
    <>
      {/* //? About Us */}
      <Wrapper>
        <main>
          <div className="Features">
            <p id="s-specialty"> Our Team </p>
          </div>

          <div id="divider3"></div>
          <div className="container">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
              className="about-card"
            >
              <div className="img">
                
              </div>
              <div className="info">
                <h3>Sai Sreeja</h3>
                
              </div>
              <ul className="social">
                <li>
                  <a href="/" className="fab fa-facebook">
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="/" className="fab fa-twitter">
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                   
                    className="fab fa-instagram"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="/" className="fab fa-linkedin">
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
              className="about-card"
            >
              <div className="img">
                
              </div>
              <div className="info">
                
                <span>Full Stack Developer</span>
              </div>
              <ul className="social">
                <li>
                  <a
                   
                    className="fab fa-facebook"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SunkaBhanu"
                    className="fab fa-twitter"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a

                    className="fab fa-instagram"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bhanu-sunka-94a24a21a/"
                    className="fab fa-linkedin"
                  >
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
              className="about-card"
            >
              <div className="img">
                <img src="data:image/png;base64,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" alt="" loading="lazy"/>
              </div>
              <div className="info">
                <h3>Mounika Bindu</h3>
                <span>Full Stack Developer</span>
              </div>
              <ul className="social">
                <li>
                  <a href="/" className="fab fa-facebook">
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="/" className="fab fa-twitter">
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sanagala-sai-sreeja-22769822a"
                    className="fab fa-instagram"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="/" className="fab fa-linkedin">
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
            

            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
              className="about-card"
            >
              <div className="img">
                 </div>
              <div className="info">
                
              </div>
              <ul className="social">
                <li>
                  <a href="/" className="fab fa-facebook">
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="/" className="fab fa-twitter">
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/https://www.instagram.com/harsh_97"
                    className="fab fa-instagram"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="/" className="fab fa-linkedin">
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Wrapper>
      {/* //? ------------------------------------------------------------------------------ */}
    </>
  );
};

export default About;
