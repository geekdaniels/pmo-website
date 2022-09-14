import Image from 'next/image'
const ImageComp = ({src, height, width}) => {
    return (
        <div className="">
            <Image 
                src={src}
                height={height}
                width={width}
                className="rounded-lg xl:rounded-none"
            />
        </div>
    )
}

export default ImageComp
