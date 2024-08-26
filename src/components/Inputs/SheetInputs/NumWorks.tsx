interface NumWorksInterface {
    enableNumWorks : boolean
}

const NumWorks = (prop : NumWorksInterface) => {
    return (
        <div className={`fixed right-0 ${prop.enableNumWorks ? "right-0" : "right-[-100%]"} duration-1000`}>
            <iframe className="rounded" src="https://www.numworks.com/simulator/embed/" width="368px" height="720px"></iframe><script src="https://www.numworks.com/simulator/embed.js"></script>
        </div>
    )
}

export default NumWorks