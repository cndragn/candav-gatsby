/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script type="text/javascript">
      var sc_project=3844398; var sc_invisible=1; var sc_security="34f6984a";
    </script>,
    <script
      type="text/javascript"
      src="https://www.statcounter.com/counter/counter.js"
      async
    ></script>,
    <noscript>
      <div class="statcounter">
        <a
          title="Web Analytics"
          href="https://statcounter.com/"
          target="_blank"
        >
          <img
            class="statcounter"
            src="https://c.statcounter.com/3844398/0/34f6984a/1/"
            alt="Web Analytics"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>
    </noscript>,
  ])
}
