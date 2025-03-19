import addImg from "/add-round.svg";
import doneImg from "/done.svg";
import camera from "/services-svgs/camera.svg";
import scripts from "/services-svgs/script.svg";
import edition from "/services-svgs/edition.svg";
import logo from '/logo.png'

export default function ServicesNew(props) {
  const makeEachService = props.eachService.map((it) => {
    return (
      <div className="--services-cathegory-container" key={it.id}>     
        <p className="--services-each-description"><span>{it.title}. </span><br />{it.description}</p>
      </div>
    );
  });


  
  const awardsText = props.awards.map((it) => {
    return (
      <>
        <ul className="--about-each-full-prize" key={it}>
          <li className="--about-prizes-lis --services-cathegory-container">
            <strong className="biggerFont">
              {it.opus.toUpperCase()}{" "}
            </strong>
            </li><li className="--about-prizes-lis --services-cathegory-container">
            <em><small>({it.opusSubtitle})</small></em>
          </li>
          {it.prizes.map((it) => {
            return (
              <p className="--services-each-description" key={it.id}>
                · <strong>{it.prizeName}</strong> - {it.place} - {it.date} 
              </p>
            );
          })}
        </ul>
        <br />
      </>
    );
  });


  return (
    <div className="--services-background-img" id="services">
      <div className="--services-text-and-footer-container">
        <div className="--services-all-text-container">
          <h1 className="--services-main-title">{props.title.toUpperCase()}</h1>
          {awardsText}
        </div>
       
      </div>
    </div>
  );
}
