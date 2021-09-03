import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <div className="statcounter">
          <script type="text/javascript">
            var sc_project=3844398; var sc_invisible=1; var
            sc_security="34f6984a";
          </script>
          <script
            type="text/javascript"
            src="https://www.statcounter.com/counter/counter.js"
            async
          ></script>
          <noscript>
            <div className="statcounter">
              <a
                title="Web Analytics"
                href="https://statcounter.com/"
                target="_blank"
              >
                <img
                  className="statcounter"
                  src="https://c.statcounter.com/3844398/0/34f6984a/1/"
                  alt="Web Analytics"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          </noscript>
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
