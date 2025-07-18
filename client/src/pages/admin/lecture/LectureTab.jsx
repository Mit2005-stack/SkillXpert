import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'

const MEDIA_API="http://localhost:8080/api/v1/media"

const LectureTab = () => {
    const [title, setTitle] = useState("");
    const [uploadVideoInfo, setUploadVideoInfo] = useState(null);
    const [isFree, setIsFree] = useState(false);
    const [mediaProgress, setMediaProgress] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [btnDisable, setBtnDisable] = useState(true);

    const fileChangeHandler = async(e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        setMediaProgress(true);
        try {
            const res = await axios.post(`${MEDIA_API}/upload-video`, formData,{
                onUploadProgress: ({loaded, total})=>{
                    setUploadProgress(Math.round((loaded * 100)/total));
                }
            });

            if(res.data.success){
                console.log(res);
                setUploadVideoInfo({videoUrl :res.data.data.url, publicId:res.data.data.public_id});
                setBtnDisable(false);
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("video upload failed")
        }finally{
            setMediaProgress(false);
        }
    }

    return (
        <>
            <Card>
                <CardHeader className="flex justify-between">
                    <div>
                        <CardTitle>Edit Lecture</CardTitle>
                        <CardDescription className="mt-1">Make Changes and click save when done.</CardDescription>
                        <Button variant="destructive" className="mt-2">Remove Lecture</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div>
                        <Label>Title</Label>
                        <Input className="mt-1"
                            type="text"
                            placeholder="Ex. Introduction to Javascript"
                        />
                    </div>
                    <div className='mt-2'>
                        <Label>Video<span className='text-red-500' >*</span></Label>
                        <Input className="mt-1 w-fit"
                            type="file"
                            accept="video/*"
                            onChange = {fileChangeHandler}
                            placeholder="Ex. Introduction to Javascript"
                        />
                    {
                        mediaProgress && (
                            <div className='my-4'>
                                <Progress value={uploadProgress}/>
                                <p>{uploadProgress}% uploaded</p>
                            </div>
                        )
                    }
                    </div>
                    <div className='flex items-center space-x-2 my-5'>
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Is this video FREE</Label>
                    </div>
                    <div className='mt-4'>
                        <Button>Update Lecture</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default LectureTab