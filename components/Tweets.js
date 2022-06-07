import Tweet from 'components/Tweet'

export default function Tweets({ tweets, nolink }) {
    // if no tweets, return null
    if (!tweets) return null

    return (
        <>
            {/* fragment is needed for JavaScript */}
            {tweets.map((tweet, index) => (
                // using parenthesis for an implicit return
                <Tweet key={index} tweet={tweet} nolink={nolink} />
            ))}
        </>
    )
}