import Link from 'next/link'
import React from 'react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string | object
  prefetch?: boolean
}

export default React.forwardRef(
  ({ to, prefetch, ...props }: LinkProps, ref: any) => {
    return (
      <Link href={to} prefetch={prefetch || false}>
        <a {...props} ref={ref} />
      </Link>
    )
  }
)
