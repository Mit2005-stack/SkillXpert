import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { DialogTitle } from '@radix-ui/react-dialog'
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
                <div className='mb-2'>
                    <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                        Name: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>John Doe</span>
                    </h1>
                </div>
                <div className='mb-2'>
                    <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                        Email: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>john123@gmail.com</span>
                    </h1>
                </div>
                <div className='mb-2'>
                    <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                        Role: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>Instructor</span>
                    </h1>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="sm" className="mt-2">
                            Edit Profile
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile information here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 item-centre gap-4'>
                                <Label>Name</Label>
                                <Input type="text"placeholder="Name" className="col-span-3"/>
                            </div>
                            <div className='grid grid-cols-4 item-centre gap-4'>
                                <Label>Profile Photo</Label>
                                <Input type="file" accept="image/*" className="col-span-3"/>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
  )
}

export default Profile