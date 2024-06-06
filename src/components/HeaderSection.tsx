import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-amber-600 ">
      <div className=" max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="c">
          <Link href="/">
            <Image
              src="/images/jobs-board-logo.webp"
              alt="logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="c">menu</div>
      </div>
    </header>
  );
}
