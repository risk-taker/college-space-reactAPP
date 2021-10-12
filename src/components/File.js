import { Link } from "react-router-dom"


const File = (props) => {
    const { file } =props;
    return (
        <>
            <div className="card w-56 h-56 bg-secondary my-8 rounded-lg">
                <div className="flex justify-between items-center p-4">
                    <img src="/images/file_icon.svg" alt="icon" />
                    <Link to={`/api/files/${file._id}`}><img src="/images/download_icon.svg" alt="icon" /></Link>
                </div>
                <div>
                    <h1 className="text-2xl text-heading pl-4">{file.notes_name} </h1>
                    <h3 className="text-xl text-content pl-4 pt-2">{file.desc} </h3>
                    <h3 className="text-xl text-content pl-4 pt-2">{file.teacher_name}</h3>
                </div>
            </div>
        </>
    )
}


export default File
