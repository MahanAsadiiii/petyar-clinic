import React from 'react';
import { Hero, VoiceCall, CentersRoute, Header, VideoCall, GauidenceRouter } from '../components/index';
import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';

interface datasType {
  Voice_content: string;
  Video_content: string;
}

export default function Home({ Voice_content, Video_content }: datasType) {
  return (
    <main className='flex flex-col gap-20 lg:gap-0 mx-5 lg:mx-0'>
      <Header />
      <Hero />
      <VoiceCall voiceCallRulesAndTerms={Voice_content} />
      <VideoCall videoCallRullesAndTerms={Video_content} />
      <GauidenceRouter />
      <CentersRoute />
    </main>
  );
}


export async function getServerSideProps() {
  const VoiceCall_termsAndRules = gql`
    {
      postBy(postId: 37) {
        postMeta {
          content
        }
      }
    }
  `;

  const VideoCall_termsAndRules = gql`
    {
      postBy(postId: 50) {
        postMeta {
          content
        }
      }
    }
  `;

  const { data: voiceCall } = await client.query({
    query: VoiceCall_termsAndRules,
    fetchPolicy:'no-cache'
  });

  const { data: videoCall } = await client.query({
    query: VideoCall_termsAndRules,
    fetchPolicy:'no-cache'
  });

  return {
    props: {
      Voice_content: voiceCall.postBy.postMeta.content,
      Video_content: videoCall.postBy.postMeta.content,
    },
  };
}
