import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { CategoriesProvider } from '../context/categoriesContext'

function MyApp({ Component, pageProps }) {
  return (
    <CategoriesProvider>
      <Component {...pageProps} />
    </CategoriesProvider>
  )
}

export default MyApp
