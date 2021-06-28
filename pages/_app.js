import '../components/Editor.css'
import '../components/prism.css'
import {Provider} from 'react-redux'
import  store from '../store/store'
import withRedux from 'next-redux-wrapper'

import { Store } from '@material-ui/icons'
function MyApp({ Component, pageProps }) {
  return <Provider  store={store}> <Component {...pageProps} /> </Provider>
}

export default withRedux(store) (MyApp) 
