import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"


const Course = () => {
    return (
        <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="relative">
                <img
                    src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
                    alt="Course"
                    className="w-full h-36 object-cover rounded-t-lg"
                />
            </div>
            <CardContent className="px-5 py-4 space-y-3">
                <h1 className="hover:underline font-bold text-lg truncate">Nextjs Complete Course in Hindi 2025</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-6 w-6">
                            <AvatarImage
                                src="https://github.com/evilrabbit.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <h1 className="font-medium text-sm">Tony Stark</h1>
                    </div>
                    <Badge variant="second" className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                        Advance
                    </Badge>
                </div>
                <div className="text-lg font-bold">
                    <span>₹499</span>
                </div>

            </CardContent>
        </Card>
    )
}

export default Course
