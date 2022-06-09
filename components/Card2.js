/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Link from '@/components/Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="" style={{ maxWidth: '500' }}>
    <div className="h-full overflow-hidden rounded-md border-2  border-gray-200 border-opacity-60 dark:border-gray-700">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={260}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={260}
        />
      )}
      <div className="p-2">
        <h2 className="text-lg font-bold leading-8 tracking-tight ">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className=" l mb-3 max-w-none leading-4 text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Läs mer &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
