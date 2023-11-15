import React from 'react'
import { ShowMedicalCenters , MainHeader } from "@/components/index";
import client from '@/lib/apollo-client'
import { gql} from '@apollo/client'

interface fetchedDatasType {
  centersData: any
}

export default function MedicalCeters({ centersData }: fetchedDatasType) {


  return (
    <main className='px-10'>
      <MainHeader/>
      <ShowMedicalCenters medicalCenters={centersData} />
    </main>
  )
}

export async function getStaticProps() {

  const Get_centersDATA = gql`
  {
    medicalCenters {
      nodes {
        medicalCenterId
        title
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
      centersData : data.medicalCenters.nodes,
    },
  };

}

