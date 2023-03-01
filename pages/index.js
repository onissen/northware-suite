/* jshint esversion: 6 */
import { Router } from "next/router";
import Layout from "../components/common/Layout";
import { Tabs } from "../components/common/Tabs";
export default function Index({query}) {
  return(
    <Layout service={'cockpit'} siteTitle={'Home'}>
      <Tabs initialTab={query}>
        <div label="Tab 1">
          <h2>Tab1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate unde alias eos molestiae, commodi, eligendi consequuntur dolorum mollitia 
            et saepe a quasi est vero earum officia. Obcaecati, neque! Ex, doloribus.
          </p>
        </div>
        <div label="Tab 2">
          <h2>Tab2</h2>
          <p>Corrupti magnam est ipsam voluptatibus, eveniet iusto doloribus perspiciatis 
            cupiditate, aperiam corporis accusamus laborum nam sint! Aut, inventore incidunt 
            totam modi illum, quia officiis accusamus et, nihil iure culpa! Iure!
          </p>
        </div>
        <div label="Tab 3">
          <h2>Tab3</h2>
          <p>Ex deserunt aliquam vero molestiae officia, aut omnis rerum dicta deleniti quae
            provident porro cum temporibus ducimus beatae nulla? Reiciendis inventore libero
            fugiat aliquam possimus ducimus nisi facere amet similique.
          </p>
        </div>
      </Tabs>
    </Layout>
  )
}
Index.getInitialProps = ({query}) => {return{query}}
Index.theme = 'cockpit_theme'