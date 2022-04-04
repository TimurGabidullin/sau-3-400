import React from 'react';
import {useParams} from "react-router-dom";
import Paginator from "../ui-components/paginator/paginator.";


function Checks() {
    const params = useParams();
    console.log(params)

    return (
        <div>
            Checks
  <Paginator/>
        </div>
    );
}
export default Checks;