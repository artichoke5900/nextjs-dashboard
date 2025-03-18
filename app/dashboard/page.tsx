import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col p-6">
    <p>Dashboard Page</p>
        <Link
            href="/"
            className="flex items-center gap-5 self-start rounded-lg bg-white-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-red-400 hover:text-white md:text-base"
          >
            <ArrowLeftIcon className="w-5 md:w-6" /><span>Home</span> 
          </Link>
    </main>
    );
  }