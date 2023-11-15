import React from 'react'
import { ShowServiceCenters, MainHeader } from "@/components/index";
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'


interface fetchedDatasType {
    centersData2: any
}

export default function serviceCenters({ centersData2 }: fetchedDatasType) {

    return (
        <main className='px-10'>
            <MainHeader />
            <ShowServiceCenters serviceCenters={centersData2} />
        </main>
    )
}


export async function getStaticProps() {

    const Get_serviceCentersDATA = gql`
    {
        serviceCenters {
            edges {
              node {
                title
                serviceCenterId
                serviceCenterMeta {
                  image {
                    sourceUrl
                  }
                }
              }
            }
          }
    }
    `

    const { data } = await client.query({
        query: Get_serviceCentersDATA,
        fetchPolicy: 'no-cache'
    });


    return {
        props: {
            centersData2: data.serviceCenters.edges,
        },
    };

}
