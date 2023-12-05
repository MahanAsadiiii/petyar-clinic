import React, { Suspense } from 'react'
import { ShowMedicalCenters, MainHeader,Layout } from "@/components/index";
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'

interface fetchedDatasType {
  centersData: any
}

export default function MedicalCeters({ centersData }: fetchedDatasType) {


  return (
    <Layout>
      <main className='mx-5 lg:mx-10'>
        <MainHeader />
        <ShowMedicalCenters medicalCenters={centersData} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {

  const Get_centersDATA = gql`
  {
    medicalCenters {
      nodes {
        medicalCenterId
        title
        slug
        medicalCenterMeta {
          image {
            sourceUrl
          }
        }
      }
    }
  }
  `

  const { data } = await client.query({
    query: Get_centersDATA,
    fetchPolicy: 'no-cache'
  });


  return {
    props: {
      centersData: data.medicalCenters.nodes,
    },
  };

}

