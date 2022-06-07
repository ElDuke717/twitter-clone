// This file is loaded server-side, gets all tweets sorted by order
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
        // Cursor-based pagination uses cursor and take to return a limited set of results before or after a given cursor.
        // See the Prisma docs for more info.  https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination
        take,
        cursor,
        skip: cursor ? 1 : 0,
    })
}


export const getUserTweets = async (name, prisma) => {
    const tweets = await prisma.tweet.findMany({
        where: {
            parent: null,
            author: {
                name: name,
            },
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