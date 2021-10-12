import React from 'react'
import { useState } from 'react';

const AddFile = () => {
    const [notesName, setNotesName] = useState("");
    const [desc, setDesc] = useState("");
    const [teacherName, setTeacherName] = useState("");
    
    const [submit, setSubmit] = useState('false');
    const data = { notesName, desc, teacherName };

    const input = document.getElementById('myfile');

    const upload = (file) => {

        if (submit === 'true') {
            fetch('/api/file', {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data), file,
            }).then(
                response => response.json()
            ).then(
                success => console.log(success)
            ).catch(
                error => console.log(error)
            )
        }
    }

    const onSelectFile = () => upload(input.files[0]);

    input.addEventListener('change', onSelectFile, false)

    return (
        <>
            <form className="p-4 text-xl h-68 w-1/3 bg-secondary text-heading">
                <div>
                    <label htmlFor="notes_name">Notes Title: </label>
                    <input type="text" name="notes_name" id="notes_name" value={notesName} onChange={(e) => setNotesName(e.target.value)} className="ml-4 rounded focus:ring-2 focus:outline-none focus:border-blue-800 focus:border-transparent border-2 text-gray-900" />
                </div>
                <div className="mt-4 outline-none">
                    <label htmlFor="desc">Description:</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} name="desc" id="desc" className="ml-4 rounded focus:ring-2 focus:outline-none focus:border-blue-800 focus:border-transparent border-2 text-gray-900" />
                </div>
                <div className="mt-4">
                    <label htmlFor="teacher_name">Teacher's Name:</label>
                    <input type="text" value={teacherName} onChange={(e) => { setTeacherName(e.target.value) }} name="teacher_name" id="teacher_name" className="ml-4 rounded focus:ring-2 focus:outline-none focus:border-blue-800 focus:border-transparent border-2 text-gray-900" />
                </div>
                <div className="mt-4">
                    <label htmlFor="myfile">Add file:</label>
                    <input type="file" name="myfile" id="myfile" className=" pl-4" onChange={(e) => { addfile(e) }} />
                </div>
                <div className="flex justify-center mt-4">
                    {/* <input type="submit" id="ourfile" className=" bg-transparent text-primary border-primary border-2 p-1 rounded px-4 hover:opacity-70" /> */}
                    <button type="button" onClick={(e) => {submit}} className=" bg-transparent text-primary border-primary border-2 p-1 rounded px-4 hover:opacity-70">Submit</button>
                </div>
            </form>
        </>
    );

}


export default AddFile;
