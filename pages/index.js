import FrontPage from '../UX/frontPage.jsx'
import styles from '../styles/Home.module.css'
import Header from '../UX/header'
 import Footer from '../UX/footer'


export default function Home() {
  return (
    
    <div className={styles.container}>
           
     
                                  <Header />  
                                        
                         
                                <FrontPage />         
                                                                    
                                   <Footer/>                                 
                      
        </div>
  )
}
