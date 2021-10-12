import File from '../components/File'
import { useState, useEffect } from 'react';


const Home = () => {
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
            <header className="container mx-auto">
                <h1 className="text-3xl text-primary my-8">Highly downloads</h1>
                <div className="grid grid-cols-5 gap-10">
                    {
                        files.map(file => <File key={file._id} file={file} />)
                    }
                </div>
            </header>
        </>
    )
}

export default Home;
