import '../components/Editor.css'
import '../components/prism.css'
<<<<<<< HEAD
<<<<<<< HEAD
import '../components/AddFile/AddFile.css' 
=======
=======
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
 


import '../components/AddFile/AddFile.css' 
 
<<<<<<< HEAD
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
=======
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
import { Provider } from 'react-redux'
import { store } from '../store/store'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

