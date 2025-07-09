import React from 'react'
import { School } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import DarkMode from '@/DarkMode'
const Navbar = () => {
  const user = true;
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between h-full gap-10 px-4">
        <div className='flex items-center gap-2'>
          <School size={"30"} />
          <h1 className="hidden md:block font-extrabold text-2xl">BrightPath</h1>
        </div>
        <div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>


  


              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    My Learning
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem>
                  Dashboard
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='flex items-center gap-2'>
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode/>
        </div>
      </div>
    </div>
  )
}

export default Navbar