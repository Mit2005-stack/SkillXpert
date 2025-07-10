import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Profile = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 my-24'>
        <h1 className='font-bold text-2xl text-center md:text-left'>Profile</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 mt-6'>
            <div className='flex flex-col items-center'>
                <Avatar className='w-24 h-24 md:w-32 md:h-32 mb-4'>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <div>
                    <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                        Name: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>John Doe</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile