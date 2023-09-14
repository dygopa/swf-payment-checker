import React from 'react'
import Main from '../../components/home/main'
import Layout from '../../components/layouts/Layout'
import HomeProvider from '../../components/home/context/HomeContext'

function HomeIndex() {
  return (
    <Layout>
      <HomeProvider>
        <Main/>
      </HomeProvider>
    </Layout>
  )
}

export default HomeIndex