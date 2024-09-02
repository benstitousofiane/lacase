interface ImageRenderInterface{
    src : string
    width : string
}

const ImageRender = (prop : ImageRenderInterface) => {
    return (
        <img className="rounded" src={prop.src} alt="image non rendu" width={prop.width}/>
    )
}

export default ImageRender