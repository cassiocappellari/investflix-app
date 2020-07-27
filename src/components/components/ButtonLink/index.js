import React from 'react'

function ButtonLink(props) {
    // props: {className: "ButtonLink", href: "/", children: New Video}
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink