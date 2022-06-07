import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Tweets from 'components/Tweets'
import prisma from 'lib/prisma'
import { getTweets } from 'lib/data.js'

export default function Home({ tweets }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return null
  }

  if (session) {
    router.push('/home')
  }
  return (
    <div className='mt-10'>
      <Tweets tweets={tweets} />

      <div className='text-center p-4 border m-4'>
        <p className="mb-10"> Join the Conversation!</p>
        <a
          className='border px-8 py-2 mt-5 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker'
          href='/api/auth/signin'>
          login
        </a>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // You want to get all the 3 tweets from the database, not just get them from slicing the data returned from the API.
  // See the take parameter - it's used by Prisma to limit the number of records returned.
  const take = 3
  let tweets = await getTweets(prisma, take)
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      tweets,
    },
  }
}