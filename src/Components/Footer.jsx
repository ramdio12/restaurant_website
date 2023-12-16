

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=" w-full py-4 bg-cyan-600 text-center text-white text-xl">
            <span>&copy; {currentYear} </span>  <span>Created by Diomar</span>
        </div>
    )
}

export default Footer
