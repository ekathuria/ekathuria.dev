import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
class HomeIndex extends React.Component {

  render() {
    const siteTitle = "E Kathuria"
    const siteDescription = "Personal website for E Kathuria"

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        {/* <div id="main">
        </div> */}
      </Layout>
    )
  }
}

export default HomeIndex