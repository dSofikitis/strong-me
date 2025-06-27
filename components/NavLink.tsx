import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

const shared = 'font-bold bg-gradient-to-br from-purple-700/75 to-pink-500/75 bg-clip-text text-transparent text-lg p-3 rounded-2xl transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]';

interface NavLinkProps extends LinkProps { children: ReactNode; }

export default function NavLink({ href, children, ...props }: NavLinkProps) {
	return (
		<Link href={href} className={shared} {...props}>{children}</Link>
	);
}
