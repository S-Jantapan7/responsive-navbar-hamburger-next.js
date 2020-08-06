import PageLayout from '../components/PageLayout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <contant className={styles.container}>
        <Component {...pageProps} />
      </contant>
    </PageLayout>
  )
}

export default MyApp
