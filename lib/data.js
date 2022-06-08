// This file is loaded server-side, gets all tweets sorted by order
// Cursor-based pagination uses cursor and take to return a limited set of results before or after a given cursor.
// See the Prisma docs for more info.  https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination
export const getTweets = async (prisma, take, cursor) => {
    return await prisma.tweet.findMany({
        where: {
            parent: null,
        },
        orderBy: [
            {
                id: 'desc',
            },
        ],
        include: {
            author: true,
        },
        take,
        cursor,
        skip: cursor ? 1 : 0,
    })
}


export const getUserTweets = async (name, prisma) => {
    const tweets = await prisma.tweet.findMany({
        where: {
            author: {
                name: name,
            },
            parent: null,
        },
        orderBy: [
            {
                id: 'desc',
            },
        ],
        include: {
            author: true,
        },
    })

    return tweets
}

export const getTweet = async (id, prisma) => {
    const tweet = await prisma.tweet.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            author: true,
        },
    })

    return tweet
}

export const getReplies = async (id, prisma) => {
    const tweets = await prisma.tweet.findMany({
        where: {
            parent: parseInt(id),
        },
        orderBy: [
            {
                id: 'desc',
            },
        ],
        include: {
            author: true,
        },
    })

    return tweets
}