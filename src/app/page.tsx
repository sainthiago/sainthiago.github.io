"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setLoadingStage(3); // Animation complete
    }, 400);

    return () => {
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main
        className={`flex-1 flex flex-col max-w-3xl mx-auto px-4 py-8 transition-all duration-700 ease-out
          ${
            loadingStage < 2
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }`}
      >
        {/* Minimal Landing Section */}
        <div className="space-y-16 mb-8">
          {/* Profile Image and Name */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/teal.jpeg"
                  alt="Rui Santiago profile picture"
                  width={128}
                  height={128}
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <p className="md:text-2xl font-medium">Rui Santiago</p>

                  <div className="bg-gray-800 px-2 py-1 rounded text-white text-sm">
                    UTC+1
                  </div>
                </div>
                <p className="text-gray-400 mt-2">Frontend Engineer</p>
              </div>
            </div>
          </div>

          {/* Brief Intro */}
          <div className="flex items-center md:gap-12">
            <div className="space-y-8">
              <div className="text-xl text-gray-300 flex items-center justify-between">
                hi 👋,
              </div>

              <p className="text-gray-300">
                I build frontend digital experiences at the intersection of
                web3, blockchain and AI. My work prioritizes intuitive UX,
                pixel-perfect design and clean, scalable code.
              </p>

              <p className="text-gray-300">
                Currently leading frontend at Bitte Protocol, where we&apos;ve
                launched a{" "}
                <Link
                  href="https://wallet.bitte.ai/"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  NEAR wallet <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>{" "}
                with 100K+ users, an{" "}
                <Link
                  href="https://www.bitte.ai/"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  on-chain AI agent platform{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                , and{" "}
                <Link
                  href="https://github.com/BitteProtocol/chat"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  developer-focused SDK tools{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                .
              </p>

              <p className="text-gray-300">
                Previously at Mintbase, I built{" "}
                <Link
                  href="https://www.mintbase.xyz/"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  NFT Marketplace <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>{" "}
                ,{" "}
                <Link
                  href="https://ui.mintbase.io/"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  UI component systems <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>{" "}
                and{" "}
                <Link
                  href="https://github.com/Mintbase/mintbase-js"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  a powerfull JS SDK <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>{" "}
                that power dozens of web3 applications.
              </p>

              <p className="text-gray-300">
                Find all other projects on{" "}
                <Link
                  href="https://github.com/sainthiago"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  GitHub <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                , and my packages on{" "}
                <Link
                  href="https://www.npmjs.com/~sainthiago"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  npm <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                .
              </p>

              {/* Contact Information */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link
                  href="https://x.com/snthgo"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  X <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                <Link
                  href="https://linkedin.com/in/sainthiago"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  Linkedin <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                <Link
                  href="mailto:ruisantiagomr@gmail.com"
                  className="text-white hover:text-gray-300 underline underline-offset-4 inline-flex items-center"
                  target="_blank"
                >
                  Email <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
