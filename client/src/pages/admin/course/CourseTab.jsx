import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { useState } from 'react'
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseTab = () => {
    const [input, setInput] = useState({
        courseTitle: "",
        subTitle: "",
        description: "",
        category: "",
        courseLevel: "",
        coursePrice: "",
        courseThumbnail: ""
    });
    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const navigate= useNavigate();
    const isPublished = true;
    const isLoading = false;
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <div>
                    <CardTitle>
                        Basic Course Information
                    </CardTitle>
                    <CardDescription>
                        Make changes to your courses here. Click save when you're done.
                    </CardDescription>
                </div>
                <div className='space-x-2'>
                    <Button variant="outline">
                        {
                            isPublished ? "Unpublished" : "Publish"
                        }
                    </Button>
                    <Button>
                        Remove Course
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='space-y-4 mt-5'>
                    <div>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="courseTitle"
                            value={input.courseTitle}
                            onChange={changeEventHandler}
                            placeholder="Ex. Fullstack developer"
                        />
                    </div>
                    <div>
                        <Label>Subtitle</Label>
                        <Input
                            type="text"
                            name="subTitle"
                            value={input.subTitle}
                            onChange={changeEventHandler}
                            placeholder="Ex. Become a fullstack developer from zero to hero."
                        />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <RichTextEditor input={input} setInput={setInput} />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className=''>
                            <Label>Category</Label>
                            <Select>
                                <SelectTrigger className="w-[180px] mt-1">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        <SelectItem value="Next JS">Next JS</SelectItem>

                                        <SelectItem value="Data Science">Data Science</SelectItem>

                                        <SelectItem value="Frontend Development">Frontend Development</SelectItem>

                                        <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>

                                        <SelectItem value="MERN Stack Development">MERN Stack Development</SelectItem>

                                        <SelectItem value="Javascript">Javascript</SelectItem>

                                        <SelectItem value="Python">Python</SelectItem>

                                        <SelectItem value="Docker">Docker</SelectItem>

                                        <SelectItem value="MongoDB">MongoDB</SelectItem>

                                        <SelectItem value="HTML">HTML</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className=''>
                            <Label>Course Level</Label>
                            <Select>
                                <SelectTrigger className="w-[180px] mt-1">
                                    <SelectValue placeholder="Select a Course Level" />
                                </SelectTrigger>
                                <SelectContent side="top" >
                                    <SelectGroup>
                                        <SelectLabel>Course Level</SelectLabel>
                                        <SelectItem value="Beginner">Beginner</SelectItem>

                                        <SelectItem value="Intermediate">Intermediate</SelectItem>

                                        <SelectItem value="Advance">Advance</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Price in (INR)</Label>
                            <Input
                                type="number"
                                name="coursePrice"
                                onChange={changeEventHandler}
                                placeholder="199"
                                className="w-fit"
                            />
                        </div>
                    </div>
                     <div>
                        <Label>
                            Course Thumbnail
                        </Label>
                        <Input
                            accept="image/*"
                            className="w-fit"
                            type="file" />
                    </div>
                    <div>
                        <Button variant="outline" onClick={()=>navigate("/admin/course")}>Cancel</Button>
                        <Button disabled={isLoading}>
                            {
                                isLoading?(
                                    <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait...
                                    </>
                                ):(
                                    "Save"
                                )
                            }
                        </Button> 
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}

export default CourseTab