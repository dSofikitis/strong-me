import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavLink from '@/components/NavLink';

export default function NavBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
	return (
		<>
			<header className={`fixed w-full z-50 ${isOpen ? '' : 'bg-black/25 backdrop-blur-3xl'}`}>
				<div className="container mx-auto flex items-center justify-between p-8">
					<Link href="/" className="text-4xl font-bold text-white">
					<Image
						src="/logo.webp"
						alt="Strong Me Logo"
						width={180}
						height={90}
						className="inline-block mr-4"
					/>
					</Link>
					{!isOpen && (
					<nav className="space-x-6">
					<NavLink href="/about">ΠΟΙΟΙ ΕΙΜΑΣΤΕ</NavLink>
					<NavLink href="/events">ΔΡΑΣΕΙΣ</NavLink>
					<NavLink href="/newsroom">ΕΠΙΚΑΙΡΟΤΗΤΑ</NavLink>
					<NavLink href="/support-us">ΥΠΟΣΤΗΡΙΞΕ ΜΑΣ</NavLink>
					<NavLink href="/contact-us">ΕΠΙΚΟΙΝΩΝΙΑ</NavLink>
					</nav>
					)}
					<button title='Menu' onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-between cursor-pointer w-8 h-6 focus:outline-none">
					<span className={`block h-1 bg-amber-700 transform transition duration-300 rounded ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
					<span className={`block h-1 bg-amber-700 transition-opacity duration-300 rounded ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
					<span className={`block h-1 bg-amber-700 transform transition duration-300 rounded ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
					</button>
				</div>
			</header>
			{isOpen && (
				<motion.div
					initial={{ y: -300, backgroundColor: 'none' }}
					animate={{ y: 0, backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
					exit={{ y: -300, backgroundColor: 'none' }}
					transition={{ duration: 0.3 }}
					className="fixed top-0 pt-40 left-0 w-full h-fit py-20 backdrop-blur-3xl z-30 flex flex-col items-center justify-center space-y-4"
				>
					<NavLink href="/about">ΠΟΙΟΙ ΕΙΜΑΣΤΕ</NavLink>
					<NavLink href="/events">ΔΡΑΣΕΙΣ</NavLink>
					<NavLink href="/newsroom">ΕΠΙΚΑΙΡΟΤΗΤΑ</NavLink>
					<NavLink href="/support-us">ΥΠΟΣΤΗΡΙΞΕ ΜΑΣ</NavLink>
					<NavLink href="/contact-us">ΕΠΙΚΟΙΝΩΝΙΑ</NavLink>
				</motion.div>
			)}
		</>
	);
}