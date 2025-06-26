import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

const shared = 'text-amber-700 text-lg shadow-white hover:bg-amber-700 hover:text-white p-3 rounded-2xl transition';

interface NavLinkProps extends LinkProps { children: ReactNode; }

export default function NavLink({ href, children, ...props }: NavLinkProps) {
	return (
		<Link href={href} className={shared} {...props}>{children}</Link>
	);
}
