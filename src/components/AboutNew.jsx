import { useState } from "react";

export default function AboutNew(props) {
  const [textShown, setTextShown] = useState(true);

  function toggleText() {
    setTextShown(prev => !prev);

    const imgBtnLogo = document.querySelector('#btn-img-logo')
    const imgBtnAwards = document.querySelector('#btn-img-awards')

    if (textShown){ 
    imgBtnLogo.classList.add("--about.btn-blue") 
    imgBtnAwards.classList.remove("--about.btn-blue")} else {
      imgBtnLogo.classList.remove("--about.btn-blue") 
      imgBtnAwards.classList.add("--about.btn-blue")
    }

    console.log(textShown);
  }

  const awardsText = props.awards.map((it) => {
    return (
      <>
        <ul className="--about-each-full-prize" key={it}>
          <li className="--about-prizes-lis">
            <strong className="--about-prizes-opus-title">
              {it.opus.toUpperCase()}{" "}
            </strong>
            <br />
            <em>({it.opusSubtitle})</em>
          </li>
          {it.prizes.map((it) => {
            return (
              <p className="--about-awards-paragraph" key={it.id}>
                · <strong>{it.prizeName}</strong> - {it.place} - {it.date} 
              </p>
            );
          })}
        </ul>
        <br />
      </>
    );
  });


  function toggleHandler(){
    setTextShown(prev => !prev);
  }


  return (
    <div className="--about-total-wrapper" id="about">
  
      
 
 

      <div className="--about-container-for-two-elements">
        <div className="--about-conditional-text-containers">
          <h4 className="--about-conditional-text-title">
            {textShown ? "About me" : "Awards"}
          </h4>
          <p className="--about-conditional-text-content">
            {textShown && props.aboutmeText}
         
          {!textShown && awardsText} </p>
        </div>
        <div className="--about-cont-img">
          <img src={props.aboutPhoto} className="--about-photo" alt="pablo coronel photo" />
        </div>
      </div>
    </div>
  );
}
