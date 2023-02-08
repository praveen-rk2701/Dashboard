import React from "react";
import "./tweet.css";
import Tweet from "./tweet.json"
function Twitter() {
    return (
        <div>
            <div className="search">

                
<input className="input" type="text" placeholder="Search.." />
&nbsp;
<button type="button" className="button" onclick="submit">Search</button>
</div>
            {
                Tweet.map(tweet => {
                    return (
                        <div className="grid_tweet">
                        <div className="box" key={tweet.id}><br />
                            <strong>URL: </strong>{tweet.url}<br />
                            <strong>Tweet_link: </strong>{tweet.tweet_link}<br />
                            <strong>User_id: </strong>{tweet.user_id}<br />
                            <strong>Hastag: </strong>{tweet.hastag}<br />
                            <strong>Retweet_count: </strong>{tweet.retweet_count}<br />
                            <strong> Share_count: </strong>{tweet.share_count}<br />
                            <strong>Description: </strong>{tweet.description}<br />
                            <strong>Following: </strong>{tweet.following}<br />
                            <strong>Followers: </strong>{tweet.followers}
                        </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Twitter;