import HTMLReactParser from "html-react-parser";
import React from "react";




import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";


const FeatureFour = ({ details }) => {


    function getText(text) {
        var htmlString = text;
        var plainString = htmlString?.replace(/<[^>]+>/g, "");
        return plainString;
    }

    return (
        <div>
            <div className="post-container mx-auto">

                <div className="p-4 text-justify leading-8">

                    {/* {HTMLReactParser(details)} */}
                    {/* <div className="custom-html-content" dangerouslySetInnerHTML={{ __html: details }}></div> */}
                    <div className="prose" style={{ maxWidth: 'none', textAlign: 'justify' }}>
                        {HTMLReactParser(details)}
                    </div>
                </div>


                <ul className="post-meta">
                    <li className="meta-block tags">
                        <ul>
                        </ul>
                    </li>
                </ul>
                <ul className="next-prev-post-nav">

                </ul>
            </div >
        </div >
    )
}


export default FeatureFour;