"use client";
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Events() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
			<Footer />
		</>
	);
}