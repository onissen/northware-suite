/* jshint esversion: 6 */

import Layout from "../components/common/Layout";

function Index() {
  return(
    <Layout service='finance'>
      <h1>Test</h1>
      <a href="/test">Test</a>
    </Layout>
  )
}
Index.theme = 'cockpit'
export default Index;