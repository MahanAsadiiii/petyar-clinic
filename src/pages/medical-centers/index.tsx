import React from 'react'
import { ShowCenters , Header } from "@/components/index";
import client from '@/lib/apollo-client'
import { gql} from '@apollo/client'

interface datasType {
  data: any
}

export default function MedicalCeters({ data }: datasType) {
console.log(data);

  return (
    <main className='px-10'>
      <Header/>
      <ShowCenters data={data} />
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
  });


  return {
    props: {
      data,
    }
  };

}

