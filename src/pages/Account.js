import { useState, useEffect } from "react"

const Account = () => {
    const [me, setMe] = useState({});
    useEffect(() => {
        fetch('/api/me')
        .then(response => response.json())
        .then(me => {
            setMe(me)
            console.log(me)
        })
    });
    return (
        <>
            <header className="account container mx-auto">
                <div className="card w-72 h-72 bg-secondary my-8 rounded-lg m-32 mt-16">
                    <div className="text-content pl-6 flex flex-col justify-evenly pt-6">
                        <h2 className="text-xl pt-4">Name: Risk Taker</h2>
                        <h2 className="text-xl pt-4">Email: risk123@gmail.com</h2>
                        <h2 className="text-xl pt-4">Phone no.: 7898-897-567</h2>
                        <h2 className="text-xl pt-4">Password: **********</h2>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Account