import AddFile from '../components/AddFile';
import { useState, useEffect } from 'react';
import File from '../components/File'

const Uploads = () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        fetch('/api/files')
        .then(response => response.json())
        .then(files => {
            setFiles(files)
        });
    }, [])
    return (
        <>
      
        <div className="container"></div>
            <header className="container mx-auto">
                <h1 className="text-3xl text-primary my-8">Upload new files</h1>
                <AddFile />
                <h1 className="text-3xl text-primary my-8">MY uploads</h1>
                <div className="grid grid-cols-5 gap-10">
                    {
                        files.map(file => <File key={file._id} file={file} />)
                    }
                </div>
            </header>
        </>
    )
}

export default Uploads