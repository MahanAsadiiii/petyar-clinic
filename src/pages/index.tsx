import React from 'react'
import { Hero, VoiceCall, CentersRoute, Header } from "../components/index";
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'

interface datasType{
  content: string
}

export default function Home({content}: datasType) {

  return (
    <main>
      <Header />
      <Hero />
      <VoiceCall rulesAndTerms={content} />
      <CentersRoute />
    </main>
  )
}



export async function getServerSideProps() {

  const termsAndRules = gql`
{
postBy(postId: 37) {
  postMeta {
    content
  }
}
}
`

  const { data } = await client.query({
    query: termsAndRules,
    fetchPolicy: 'no-cache'
  })

  return{
    props:{
      content : data.postBy.postMeta.content,
    }
  }

}