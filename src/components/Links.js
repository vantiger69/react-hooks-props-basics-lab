import React from "react";

function Links ({links}){

    return(
        <div>
            <h3>Links</h3>
            <a href="URL" text content="URL">{links.github}</a>
            <div>
            <a href="URL" text content="URL">{links.linkedin}</a>
       </div>
        </div>
    )
}
export default Links;