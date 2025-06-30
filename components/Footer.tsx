import Image from 'next/image';
import Link from 'next/link';

const shared = 'filter brightness-0 saturate-100 hover:filter-none transition';

export default function Footer() {
	return (
		<>
			<footer className="bg-gray-800 py-6 mt-auto">
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
					<div className="text-white text-center md:text-left mb-4 md:mb-0">
						&copy; {new Date().getFullYear()} Strong Me. All rights reserved.
					</div>
					<div className="flex space-x-6">
						<Link href="mailto:strongme2021@gmail.com" target="_blank" aria-label="Email">
						<Image src="email.svg" alt="Email" width={24} height={24} className={shared} />
						</Link>
						<Link href="https://www.facebook.com/strongmewoman" target="_blank" aria-label="Facebook">
						<Image src="facebook.svg" alt="Facebook" width={24} height={24} className={shared} />
						</Link>
						<Link href="https://www.instagram.com/strongme_woman/" target="_blank" aria-label="Instagram">
						<Image src="instagram.svg" alt="Instagram" width={24} height={24} className={shared} />
						</Link>
						<Link href="https://www.linkedin.com/company/strongmewoman/" target="_blank" aria-label="LinkedIn">
						<Image src="linkedin.svg" alt="LinkedIn" width={24} height={24} className={shared} />
						</Link>
						<Link href="https://www.youtube.com/@strongme233" target="_blank" aria-label="YouTube">
						<Image src="youtube.svg" alt="YouTube" width={24} height={24} className={shared} />
						</Link>
					</div>
				</div>
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-1 px-6">
					Designed and developed by{' '}
					<Link href="https://dsofikitis.github.io" target="_blank" className="relative inline-block group hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" aria-label="Dimitrios Sofikitis">
						Dimitrios (Dimitris) Sofikitis
						<span className="absolute left-0 bottom-0 h-[2px] w-full bg-current rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"/>
					</Link>
				</div>
			</footer>
		</>
    );
}