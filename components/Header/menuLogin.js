import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/outline';
import classNames from '../../utils/classsesNames';

import { supabase } from '../../utils/initSupabase';

const MenuLogin = () => (
  <Menu as="div" className="ml-3 relative">
    {({ open }) => (
      <>
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
          </Menu.Button>
        </div>
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/profile"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/setavatar"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Set Avatar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Media Locker
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Marketplace
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Chat
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Blog
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/#"
                  className={classNames(
                    active ? 'bg-gray-400' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Events
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={() => supabase.auth.signOut()}
                className="rounded-full bg-green-500 hover:bg-green-700 block px-4 py-2 text-sm text-white"
              >
                Sign out
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </>
    )}
  </Menu>
)

export default MenuLogin;
