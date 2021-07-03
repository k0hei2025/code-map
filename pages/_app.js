import '../components/Editor.css'
import '../components/prism.css'

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

