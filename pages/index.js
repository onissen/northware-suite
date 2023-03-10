/* jshint esversion: 6 */
import Layout from "../components/common/Layout";
export default function Index() {
  return(
    <Layout service={'cockpit'} siteTitle={'Home'}>
      Test
    </Layout>
  )
}
Index.theme = 'cockpit_theme'