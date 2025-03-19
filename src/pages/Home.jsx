/*componenets*/
import VideoBackground from "../components/VideoBackground";
import About from "../components/About";
import Works from "../components/Works/Works";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Portfolio from '../components/Portfolio/Portfolio'
import AboutNew from "../components/AboutNew";
import ServicesNew from "../components/ServicesNew";


export default function Home(props){
    return (
        <>
        <VideoBackground />
      
      <AboutNew
        aboutPhoto={props.data.aboutPhoto}
        logoPhoto={props.data.logoPhoto}
        awardsLogo={props.data.awardsLogo}
        aboutmeText={props.data.aboutmeText}
        awards={props.data.awards}
      /> 
   
       
      <ServicesNew
        title="Awards"
        finalText={props.data.services.finalText}
        eachService={props.data.services.eachService}
        awards={props.data.awards}
      />
    
      
         {/* 
      <Portfolio
        portfolio={props.data.portfolio}
      />
    */}
      
      <Works 
      works={props.data.works} 
       />
     
     
      <Contact 
      contactInfo={props.data.contactInfo} 
      />
      </>
    )
}