import { React, useRef, useEffect, useState } from "react";

export default function Main() {
  const [Modea, setModea] = useState(0);
  const [Modeb, setModeb] = useState(0);
  const [Modec, setModec] = useState(0);
  const [Moded, setModed] = useState(0);
  const [Modee, setModee] = useState(0);

  const itemsref = useRef(0);

  const handleonchange = (m, smo, index) => {
    const elem = itemsref.current.children[index];
    if (m === 0) {
      elem.style.width = "42vw";
      elem.style.borderRadius = "8vw";
      elem.style.transitionDuration="2.5s";

      smo(1);
      for (let i = 0; i < 5; i++) {
        if (i != index) {
          itemsref.current.children[i].style.width = "8vw";
          itemsref.current.children[i].style.borderRadius = "8vw";
        }
      }

      if (index === 0) {
        setModeb(0);
        setModec(0);
        setModed(0);
        setModee(0);
      } else if (index === 1) {
        setModea(0);
        setModec(0);
        setModed(0);
        setModee(0);
      } else if (index === 2) {
        setModeb(0);
        setModea(0);
        setModed(0);
        setModee(0);
      } else if (index === 3) {
        setModeb(0);
        setModec(0);
        setModea(0);
        setModee(0);
      } else if (index === 4) {
        setModeb(0);
        setModec(0);
        setModed(0);
        setModea(0);
      }
    } else {
      elem.style.width = "8vw";
      smo(0);
    }
  };

  return (
    <>

      <div className="abouttext">About</div>
      <div className="hiddentect">About</div>

      <div className="pehlapanna" id="pehla">

        <div className="myphoto"></div>

        <div className="animatetextbaap">
          <div className="animatetext">
            <div className="static-txt">A</div>

            <ul className="dynamic-txts">
              <li className="laudalasan">
                <span>Designer</span>
              </li>
              <li className="laudalasan">
                <span>Developer</span>
              </li>
              <li className="laudalasan">
                <span>Freelancer</span>
              </li>
              <li className="laudalasan">
                <span>Student</span>
              </li>
            </ul>
          </div>

          <div className="animatetext" id="a">
            A 
          </div>

          <div className="animatetext" id="developer1">
            Developer
          </div>
          <div className="animatetext" id="developer2">
            Designer
          </div>
          <div className="animatetext" id="developer3">
              Freelancer
          </div>
          <div className="aboutme">
            Hey there, I'm Shreyas Biradar, and I'm excited to connect with you.
            I hope you enjoy my work and looking forward to meet you....
          </div>
        </div>
      </div>

      <div className="dusratextname">Work</div>
      <div className="hiddendusratextname">Work</div>

      <div className="dusrapanna" id="dusra">
        <div className="group" ref={itemsref}>
          <div
            id="item1"
            onMouseEnter={() => handleonchange(Modea, setModea, 0)}
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/cyborg-abstract-furistic-holographic-technology-with-tron-crypto-face_410516-21187.jpg?w=996)",
            }}
          ></div>
          <div
            id="item2"

            onMouseEnter={() => handleonchange(Modeb, setModeb, 1)}
            style={{
              backgroundImage:
                "url(https://as1.ftcdn.net/v2/jpg/01/84/79/98/1000_F_184799894_zIp5HDYfDsiBdBlDnRxo2KgIkgDwYd2N.jpg)",
            }}

          ></div>

          <div
            id="item3"
            onMouseEnter={() => handleonchange(Modec, setModec, 2)}
            style={{
              backgroundImage:
                "url(https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack.jpg)",
            }}
          ></div>

          <div
            id="item4"
            onMouseEnter={() => handleonchange(Moded, setModed, 3)}
            style={{
              backgroundImage:
                "url(https://wallpapercave.com/wp/wp9775505.jpg)",
            }}
          ></div>

          <div
            id="item5"
            onMouseEnter={() => handleonchange(Modee, setModee, 4)}
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/f/f8/Wallpapersden.com_anonymous-hacker-working_1280x720.jpg)",
            }}

          ></div>
        </div>
      </div>

      <div className="contactme">Contact</div>
      <div className="hiddencontactme">Contact</div>

      <div className="thisrapanna" id="thisra">

                    <div class="contact_us_8">
                <div class="responsive-container-block container">
                  <form class="form-box">
                    <div class="container-block form-wrapper">
                      <div class="responsive-container-block">
                        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i10mt-9">
                          <input class="input" id="ijowk-9" name="FirstName" placeholder="First Name"/>
                        </div>
                      
                        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="iajvf">
                          <input class="input" id="ipmgh-9" name="Email" placeholder="Email"/>
                        </div>
                        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i0txn">
                          <input class="input" id="imgis-8" name="PhoneNumber" placeholder="Phone Number"/>
                        </div>
                        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i634i-9">
                          <textarea aria-placeholder="What’s on your mind?" class="textinput" id="i5vyy-9" placeholder="What’s on your mind?"></textarea>
                        </div>
                      </div>
                      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12 checkbox-container" id="i634i-2-2">
                        
                      </div>
                      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i0txn-2">
                        <button class="submit-btn">
                          Send Message
                        </button>
                      </div>

              <div className="rightsidekabaap">

                      <div class="right-side-text">
                        <p class="text-blk contactus-head">
                          Get in Touch
                        </p>
                        <p class="text-blk contactus-subhead" style={{color:"white"}}>
                        if you have any questions ,comments ,or suggestion,i'd love to hear it from you and get to know you better
                        </p>
                        <div class="social-media-links">
                          <a href="#" id="ix94i-2-3">
                            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
                          </a>
                          <a href="#">
                            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
                          </a>
                          <a href="#">
                            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
                          </a>
                          <a href="#" id="izldf-2-3">
                            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
                          </a>
                        </div>
                      </div>

            </div>

                    </div>
                  </form>
                </div>
              </div>

      </div>

    </>

  );
}




