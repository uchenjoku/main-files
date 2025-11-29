import React from 'react'
import classNames from 'classnames';

function Footer({className}) {
    const compClass = classNames({
        "tyn-footer": true,
        [className]: className,
    });
    const currentYear = new Date().getFullYear();
  return (
    <div className={compClass}>
        <div className="bg-white text-center py-3">
            <p className="mb-0 small">{currentYear} &copy; African Music and Cultural Festival.</p>
        </div>
    </div>
  )
}

export default Footer