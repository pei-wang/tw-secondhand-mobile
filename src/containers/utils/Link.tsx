import * as React from 'react'

interface LinkProps {
  to?: string
  children: React.Component
}

const Link = (props: LinkProps) => {
  const { children as ChildrenNode } = props
}
export default connect()(Link)