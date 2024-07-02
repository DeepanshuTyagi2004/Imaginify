'use client';

import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { dataUrl, getImageSize } from '@/lib/utils'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
type MediaUploadProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
}

const MediaUploader = ({
  publicId,
  onValueChange,
  setImage,
  image,
  type
} : MediaUploadProps) => {
  const { toast } = useToast()
  const onUploadSuccessHandler = (result: any) => {
    setImage((prev: any) => (
      {
        ...prev,
        publicId: result?.info?.public_id,
        secureURL: result?.info?.secure_url,
        width: result?.info?.width,
        height: result?.info?.height,
      }
    ))
    onValueChange(result?.info?.public_id)
    toast({
      title: 'Image uploaded successfully',
      description: 'Your image has been uploaded successfully',
      duration: 5000,
      className: "success-toast"
    })
  }
  const onUploadErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading the image',
      description: 'Please try again',
      duration: 5000,
      className: "error-toast"
    })
  }
  return (
    <CldUploadWidget
      uploadPreset='imaginify'
      options={ 
        {
          multiple: false,
          resourceType: "image",
        }
      }
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {
        ({ open }) => {
          return (
            <div className='flex flex-col gap-4'>
              <h3 className="h3-bold text-dark-600">
                Original
              </h3>
              {
                publicId ?
                  <>
                    <div className='cursor-pointer overflow-hidden rounded-[10px]'>
                      <CldImage
                        width={getImageSize(type, image, 'width')}
                        height={getImageSize(type, image, 'height')}
                        src={publicId}
                        alt='image'
                        sizes={"(max-width: 767px) 100vw, 50vw"}
                        placeholder={dataUrl as PlaceholderValue}
                        className='media-uploader_cldImage'
                        
                      />
                    </div>

                </>
                  :
                  <div className='media-uploader_cta'
                    onClick={() => open()}
                  >
                    <div className='media-uploader_cta-image flex flex-col gap-4 items-center justify-center'>
                      <Image
                        src='/assets/icons/add.svg'
                        alt='Add Image'
                        width={24}
                        height={24}
                      />
                      <p className='p-14-medium'>
                        Click here to upload image
                      </p>
                    </div>
                  
                </div>
              }
            </div>
          )
        }
      }
    </CldUploadWidget>
  )
}

export default MediaUploader