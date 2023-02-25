/* jshint esversion: 6 */

import Layout from "../components/common/Layout";

export default function Index() {
  return(
    <Layout service={'cockpit'} siteTitle={'Home'}>
      <h1>Test</h1>
    </Layout>
  )
}
Index.theme = 'cockpit_theme'