import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Content.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";


function Content() {

    const header=useSelector((state:AppStateType)=>state.header)


    return (
        <div>
            Content
            {header.map((h)=><ul>{h.title}
            <li>1</li>
            <li>2</li>

            </ul>)}


        </div>
    );
}
export default Content;