import React from 'react'
import { CenterModal} from "@/components/index"
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'


const Get_Path = gql`
{
    serviceCenters{
        edges{
          node{
            slug
          }
        }
      }
}
`;

const Get_CenterDetail = gql`
query MyQuery6($slug: String!) {
    serviceCenterBy(slug: $slug) {
        title
        serviceCenterMeta {
          address
          desc
          phoneNumber
          image {
            sourceUrl(size: MEDIUM_LARGE)
          }
        }
      }
  }`;



function Center({ centerData }: any) {

    return (
        <>
         <CenterModal ServiceCenterData={centerData}/>
        </>
    )
}


export async function getStaticPaths() {

    const { data } = await client.query({
        query: Get_Path,
    })

    const paths = data.serviceCenters.edges.map(
        (edge: any) => ({
            params: { slug: edge.node.slug },
        })
    )

    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params }: any) {

    const { slug } = params as { slug: string }

    const { data: centerData } = await client.query({
        query: Get_CenterDetail,
        variables: {
            slug: slug,
        }
    })


    return {
        props: {
            centerData: centerData.serviceCenterBy,
        }
    }

}

export default Center