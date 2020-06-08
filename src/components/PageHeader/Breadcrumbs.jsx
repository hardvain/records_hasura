import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/core'
import Link from "next/link"
export default ({ links, ...rest }) => (
  <Breadcrumb color="gray.500" fontSize="sm" {...rest} separator={<Icon color="gray.300" name="chevron-right" />}>
    {links.map(({ name, href }, i) => {
      const active = i === links.length - 1
      return (
        <BreadcrumbItem key={name} isCurrentPage={active}>
          <Link as={href} href={href} >
            <a>{name}</a>
          </Link>
        </BreadcrumbItem>
      )
    })}
  </Breadcrumb>
)
