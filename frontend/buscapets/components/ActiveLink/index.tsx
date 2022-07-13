import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  href: string;
}

export function ActiveLink({
  children,
  href,
  ...otherProps
}: IActiveLinkProps) {
  return (
    <Link prefetch href={href} {...otherProps}>
      {cloneElement(children)}
    </Link>
  );
}
