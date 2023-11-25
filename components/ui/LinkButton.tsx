'use client'
import { LinkButton } from '@/types'
import Link from 'next/link'

const LinkButton = ({ title, containerStyle, path}: LinkButton) => {
  return (
    <Link
        type={"button"}
        className={`px-8 py-3 bg-gradient-to-r from-custom-blue to-custom-green rounded-lg	text-center	hover:opacity-70	font-semibold	dark:text-custom-dark-3 text-custom-dark-2 transition duration-300	ease ${containerStyle}`}
        href={`${path}`}
    >
      {title}
    </Link>
  )
}

export default LinkButton
