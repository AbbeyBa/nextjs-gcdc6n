import React from 'react'
import Link from 'next/link'

const MenuNotLogin = () => (
  <div className="flex space-x-4">
    <Link href="/verify">
      <a className="text-gray-400 hover:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium">
        LOGIN
      </a>
    </Link>
  </div>
)

export default MenuNotLogin
