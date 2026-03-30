import Image from 'next/image'
import Link from '@/components/link'

export default function NotFound() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center space-y-4">
      <Image src="/oh-naw.jpg" alt="404" width={200} height={200} />
      <div className="flex max-w-md flex-col items-center justify-center">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">Page not found</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
