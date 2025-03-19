import photoIcon from "/camera-icon.svg";
import youtubeIcon from "/youtube.svg";
import phoneIcon from "/cell-phone.svg";
import mailIcon from "/mail-icon.svg";
import locationIcon from "/location-icon.svg";

export default function Footer(props) {
  return (
    <footer>
      {/*<!-- titulo-->*/}

      <div className="--footer-title-and-subtitle-container">
        <h4 className="--footer-title">{props.name.toUpperCase()}</h4>
        <h6 className="--footer-subtitle">{props.subtitle.toUpperCase()}</h6>
        
      </div>

      {/*   datos de contacto   */}

      <div className="footer-first-level-container">
<img src="/logo.png" alt="logo" width={40} height={40} />

        <div className="--foter-icon-text-container">
          <img src={phoneIcon} className="--footer-icon-tel" alt="phone icon" />

          <p className="--footer-p"> <a href="https://api.whatsapp.com/send?phone=4901792248351&text=Hello%20Pablo" role="link" aria-label="go to whastapp">{props.contactInfo.tel1}</a></p>
        </div>



        <div className="--foter-icon-text-container">
          <img src={locationIcon} className="--footer-icon-tel" alt="footer icon tel" />
          <p className="--footer-p"> {props.contactInfo.location}</p>
        </div>


        <div className="--foter-icon-text-container">
          <img src={mailIcon} className="--footer-icon-tel" alt="mail icon" />
          <p className="--footer-p"><a href="mailto:pabloignaciocoronel@gmail.com" role="link" aria-label="go to mail"> {props.contactInfo.mail}</a></p>
        </div>


        <div>
          <a href={props.contactInfo.youtube} role="link" aria-label="go to youtube">
            <img src={youtubeIcon} className="--footer-icon" alt="youtube icon" />
          </a>

          <a href={props.contactInfo.photoWeb} role="link" aria-label="go to photoweb">
            <img src={photoIcon} className="--footer-icon" id="fotoIcon" alt="photo icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
