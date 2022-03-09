import React from "react";

export default function Layout(props) {

    return <>

        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 ">

            {props.children}

        </div>

    </>

}

