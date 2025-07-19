import React from 'react'
import classNames from 'classnames';

function Footer({className}) {
    const compClass = classNames({
        "tyn-footer": true,
        [className]: className,
    });
  return (
    <div className={compClass}>
        <div className="bg-white text-center py-3">
            <p className="mb-0 small">2025 &copy; African Music and Cultural Festival.</p>
        </div>
    </div>
  )
}

export default Footer