import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-green-950 text-white py-4 shadow-lg border-b-4 border-green-800">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-200 transition">
          Portfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-green-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-200 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-200 transition">
              Projects & Skills
            </Link>
          </li>
          <li>
            <Link href="/interests" className="hover:text-green-200 transition">
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
