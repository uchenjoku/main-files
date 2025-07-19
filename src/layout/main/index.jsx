import React from 'react'
import classNames from 'classnames'
import AppRoot from '../global/AppRoot'
import AppContent from '../global/AppContent'
import Appbar from './Appbar'
import AppFooter from './Footer'

import { Helmet, HelmetProvider } from "react-helmet-async"

function Default({title,content, fullscreen, footer, ...props}) {
  const contentClass = classNames({
    "tyn-content-full-height": fullscreen,
    [`${content}`]: content,
});

  return (
    <HelmetProvider>
      <Helmet>
          <title>{`${title ? title + " | " : '' }2025 | African Music and Cultural Festival`}</title>
      </Helmet>
      <AppRoot>     
        <AppContent className={contentClass}>
            {props.children}
        </AppContent>
        {footer && <AppFooter />}
      </AppRoot>
    </HelmetProvider>
  )
}

export default Default