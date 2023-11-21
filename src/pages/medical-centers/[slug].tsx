import React from 'react'
import Link from 'next/link'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { CenterModal } from '@/components'


const Get_Path = gql`
{
    medicalCenters {
        edges {
          node {
            slug
          }
        }
      }
}
`;

const Get_CenterDetail = gql`
query MyQuery6($slug: String!) {
    medicalCenterBy(slug: $slug) {
      title
      medicalCenterMeta {
        address
        desc
        phoneNumber
        image {
          sourceUrl(size: MEDIUM_LARGE)
        }
      }
    }
  }
`;



function Center({ centerData }: any) {

    return (
        <>
            <CenterModal MedicalCenterData={centerData} />
        </>
    )
}


export async function getStaticPaths() {

    const { data } = await client.query({
        query: Get_Path,
    })

    const paths = data.medicalCenters.edges.map(
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
            centerData: centerData.medicalCenterBy,
        }
    }

}

export default Center