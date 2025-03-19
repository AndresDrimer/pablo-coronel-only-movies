/*componenets*/
import VideoBackground from "../components/VideoBackground";
import About from "../components/About";
import Works from "../components/Works/Works";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Portfolio from '../components/Portfolio/Portfolio'


export default function Home(props){
    return (
        <>
        <VideoBackground />
      
      <About
        aboutPhoto={props.data.aboutPhoto}
        logoPhoto={props.data.logoPhoto}
        awardsLogo={props.data.awardsLogo}
        aboutmeText={props.data.aboutmeText}
        awards={props.data.awards}
      /> 
   
       
      <Services
        title={props.data.services.title}
        finalText={props.data.services.finalText}
        eachService={props.data.services.eachService}
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