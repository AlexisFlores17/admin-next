// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import {
  CiLogout
} from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { LogoutButton, SideBarItem } from "..";
import { IoCalendarClearOutline, IoCartOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const menuItem = [
  {
    icon: <IoCalendarClearOutline />,
    title: "dashboard",
    path: "/dashboard"
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Resto Todos",
    path: "/dashboard/rest-todos"
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos"
  },  {
    icon: <IoCodeWorkingOutline />,
    title: "Cookies",
    path: "/dashboard/cookies"
  },
  {
    icon: <IoCartOutline />,
    title: "Carrito",
    path: "/dashboard/products"
  },
  
  {
    icon: <IoPersonOutline />,
    title: "Perfil",
    path: "/dashboard/profile"
  },
]

export const Sidebar = async() => {

  const session = await getServerSession(authOptions);

  const userRoles = session?.user?.roles ?? ["usuario generico"]

  const avatarUrl = (session?.user?.image) ? session.user.image : "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";

  const userName = session?.user?.name ?? "usuario generico"

  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/dashboard" title="home">
              <Image
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-32"
                alt="tailus logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src={`${avatarUrl}` }
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={100}
              height={100}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {
                userName
              }
            </h5>
            <span className="hidden text-gray-400 lg:block capitalize">{userRoles.join(",")}</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            {
              menuItem.map((item)=>(
                <SideBarItem key={item.path} {...item}/>
              ))
            }
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <LogoutButton />
        </div>
      </aside>
    </>
  );
};
