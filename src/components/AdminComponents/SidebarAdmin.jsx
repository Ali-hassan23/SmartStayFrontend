'use client'
import Link from "next/link";
import React from "react";
import { MessageSquare } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SidebarAdmin = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/admin');
  }

  return (
    <div className="flex h-screen w-16 flex-col justify-between bg-gray-700 fixed">
      <div>
        <div className="inline-flex size-16 items-center justify-center">
          <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            A
          </span>
        </div>

        <div className="">
          <div className="px-2">

            <ul className="space-y-1 border-t border-gray-100 pt-4">
            <li>
                <Link
                  href={'/admin/dashboard'}
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Dashboard
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={'/admin/staff'}
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Staff
                  </span>
                </Link>
              </li>
              <li>
              <Link href={"/admin/queries"} className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
              <CalendarCheck className="size-5 opacity-75"/>
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Reservations
                </span>
              </Link>
              </li>
              <li>
              <Link href={"/admin/queries"} className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
              <MessageSquare className="size-5 opacity-75"/>
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Queries
                  </span>
              </Link>
              </li>
              <li>
              <Link href={"/admin/payments"} className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
              <CreditCard className="size-5 opacity-75"/>
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Payments
                  </span>
              </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 bg-gray-800 p-2">
        <form action="#">
          <button
            type="submit"
            onClick={handleLogout}
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarAdmin;
