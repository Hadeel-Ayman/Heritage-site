import React from 'react'
import { useEditContext } from './../../../context/editContext';

const About = () => {
    const [isEditing, setIsEditing] = useEditContext();
    return (
        <div className="about">
            <div className="titleItem">About</div>
            {isEditing ? <>
                <div className="editButton" onClick={() => setIsEditing(false)}>Done</div>
                <div className="wrapper">
                    <div className="detailItem">
                        <span className="itemKey">First Name:</span>
                        <span className="itemValue"><input type="text" value="John"/></span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Last Name:</span>
                        <span className="itemValue"><input type="text" value="Joe"/></span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Gender:</span>
                        <span className="itemValue"><input type="text" value="male"/></span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue"><input type="tel" value="+1 2345 67 89"/></span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue"><input type="email" value="janedoe@gmail.com"/></span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">
                        <input type="text" value="Elton St. 234 Garden Yd. NewYork"/>
                        </span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Country:</span>
                        <span className="itemValue"><input type="text" value="USA"/></span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Birthday:</span>
                        <span className="itemValue"><input type="date" value="May 03,2000"/></span>
                    </div>
                </div></>: <>
                <div className="editButton" onClick={() => setIsEditing(true)}>Edit</div>
                <div className="wrapper">
                    <div className="detailItem">
                        <span className="itemKey">First Name:</span>
                        <span className="itemValue">John</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Last Name:</span>
                        <span className="itemValue">Joe</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Gender:</span>
                        <span className="itemValue">male</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">+1 2345 67 89</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">janedoe@gmail.com</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">
                            Elton St. 234 Garden Yd. NewYork
                        </span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Country:</span>
                        <span className="itemValue">USA</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Birthday:</span>
                        <span className="itemValue">May 03,2000</span>
                    </div>
                </div></>}

        </div>
    )
}

export default About