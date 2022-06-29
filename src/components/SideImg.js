import image from "../images/sideimg.png"

export default function SideImg() {
    return(
        <div className="bg-primary text-white col-md-6 side-div">
            <img src={image} alt="side image" />
            <h1 className="mt-4">Make your coding wishes come true</h1>
            <i className="fa-solid fa-code fa-beat fs-4"></i>
        </div>
    )
}