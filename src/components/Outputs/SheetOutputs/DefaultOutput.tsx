interface DefaultOutputInterface {
    children : string
}

const DefaultOutput = (prop : DefaultOutputInterface) => {
    return (
        <div className="w-full h-full flex justify-center items-center text-3xl">
            {prop.children}
        </div>
    )
}

export default DefaultOutput