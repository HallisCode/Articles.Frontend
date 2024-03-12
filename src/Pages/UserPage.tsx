import React, { useState } from "react";
import getUserById from "../API/Requests/Users/getById.ts";
import IUser from "../API/Schemas/Response/user.ts";
import { useLoaderData } from "react-router-dom";

function UserPage() {

    // Hooks

    const { user } = useLoaderData() as { user : IUser };




    return (
        <div>
            {user.nickname}
        </div>
    );
}

async function loader({ params }) : Promise<{user : IUser}> {

    const user = await getUserById(params.userId);

    return {user};
}

export default UserPage;


export { loader as userLoader };