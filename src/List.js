import React from "react";

function List(props) {
    return (
        <ul>
            {
                props.list.map((data) => {
                    return <li>{data}</li>
                })
            }
        </ul>
    )
}

export default List;