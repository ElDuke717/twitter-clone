import { useState } from 'react'
import LoadMore from 'components/LoadMore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import NewTweet from 'components/NewTweet'
import Tweets from 'components/Tweets'
import prisma from 'lib/prisma'
import { getTweets } from 'lib/data.js'

export default function Home({ initialTweets }) {
  const [tweets, setTweets] = useState(initialTweets)
  const router = useRouter()
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  if (loading) {
    return null
  }

  if (!session) {
    return router.push('/')
  }

  if (session && !session.user.name) {
    router.push('/setup')
  }

  return (
    //  These are fragments <> </>
    <>
      <NewTweet tweets={tweets} setTweets={setTweets} />
      <Tweets tweets={tweets} />
      <LoadMore tweets={tweets} setTweets={setTweets} />
    </>
  )
}
// This is a Next.js feature that gets called when the page is loaded
export async function getServerSideProps() {
  let tweets = await getTweets(prisma, 2)
  // This must be serialized to JSON - see Flavio's blog post https://flaviocopes.com/nextjs-serialize-date-json/ for more info.  
  // then back to an object.
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      InitialTweets: tweets
    }
  }
}
