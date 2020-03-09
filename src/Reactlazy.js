import React, { Suspense } from "react";

const List = React.lazy(() => import("./List"));

function Reactlazy() {
    return (
        <div>
            <p>I am React Lazy for dynamic imports</p>
            <Suspense fallback={<div>List loading....</div>}>
                <List list={['Deva', 'Arun', 'vijay']}></List>
            </Suspense>
        </div>
    )
}

export default Reactlazy;