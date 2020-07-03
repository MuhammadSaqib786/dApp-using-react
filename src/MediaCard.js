import React from 'react';

function MediaCard({title,body,url}) {
return <div> 
<h2> {title} (title)</h2>
<p> {body} (body) </p>
<img src={url} alt="secondPic" width="200px" height="200px"/> (image)
 </div>
}

export default MediaCard;
