"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/NavLink';

export default function Newsroom() {
  return (
    <>
      <header className="fixed w-full bg-black/25 backdrop-blur-3xl z-50">
        <div className="container mx-auto flex items-center justify-between p-8">
          <Link href="/" className="text-4xl font-bold text-amber-700">
            <Image
              src="/logo.webp"
              alt="Strong Me Logo"
              width={60}
              height={60}
              className="inline-block mr-4"
            />
            Strong Me
          </Link>
          <nav className="space-x-6">
            <NavLink href="/about">ΠΟΙΟΙ ΕΙΜΑΣΤΕ</NavLink>
            <NavLink href="/events">ΔΡΑΣΕΙΣ</NavLink>
            <NavLink href="/newsroom">ΕΠΙΚΑΙΡΟΤΗΤΑ</NavLink>
            <NavLink href="/support-us">ΥΠΟΣΤΗΡΙΞΕ ΜΑΣ</NavLink>
            <NavLink href="/contact-us">ΕΠΙΚΟΙΝΩΝΙΑ</NavLink>
          </nav>
        </div>
      </header>

      <footer className="bg-gray-800 py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Strong Me. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="mailto:strongme2021@gmail.com" target="_blank" aria-label="Email">
              <Image src="email.svg" alt="Email" width={24} height={24} className="filter brightness-0 saturate-100 hover:filter-none transition" />
            </Link>
            <Link href="https://www.facebook.com/strongmewoman" target="_blank" aria-label="Facebook">
              <Image src="facebook.svg" alt="Facebook" width={24} height={24} className="filter brightness-0 saturate-100 hover:filter-none transition" />
            </Link>
            <Link href="https://www.instagram.com/strongme_woman/" target="_blank" aria-label="Instagram">
              <Image src="instagram.svg" alt="Instagram" width={24} height={24} className="filter brightness-0 saturate-100 hover:filter-none transition" />
            </Link>
            <Link href="https://www.linkedin.com/company/strongmewoman/" target="_blank" aria-label="LinkedIn">
              <Image src="linkedin.svg" alt="LinkedIn" width={24} height={24} className="filter brightness-0 saturate-100 hover:filter-none transition" />
            </Link>
            <Link href="https://www.youtube.com/@strongme233" target="_blank" aria-label="YouTube">
              <Image src="youtube.svg" alt="YouTube" width={24} height={24} className="filter brightness-0 saturate-100 hover:filter-none transition" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
