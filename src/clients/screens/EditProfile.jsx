import React from "react";
import EditProfileCSS from '../css/EditProfile.module.css';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';

function EditProfile (){
    return(
        <div className="container">
            <Header/>
            <div className={EditProfileCSS.EditProfile}>
                <div className={EditProfileCSS.mainInfo}>
                    <div className={EditProfileCSS.profileImage}></div>

                    <div className={EditProfileCSS.flexContainer}>
                        <h3>NAME</h3>
                        <h3>EMAIL ADDRESS</h3>
                    </div>
                </div>

                <div className={EditProfileCSS.subInfo}>
                    <form className={EditProfileCSS.profileForms}>
                        <div className={EditProfileCSS.flexRowContainer}>
                            <div className={EditProfileCSS.flexContainer}>
                                <label>DEFAULT ADDRESS</label>
                                <input
                                    type="text"
                                    name="address"
                                    className={EditProfileCSS.margin}
                                    placeholder="Lorem impsum dolor sit amet"
                                />
                            </div>
                            
                            <div className={EditProfileCSS.flexContainer}>
                                <label>CONTACT NUMBER</label>
                                <input
                                    type="text"
                                    name="contactnumber"
                                    placeholder="09123456789"
                                />
                            </div>
                        </div>

                        <div className={EditProfileCSS.flexContainer}>
                            <label>OLD PASSWORD</label>
                            <input
                                type="password"
                                name="oldpassword"
                            />
                        </div>

                        <div className={EditProfileCSS.flexRowContainer}>
                            <div className={EditProfileCSS.flexContainer}>
                                <label>NEW PASSWORD</label>
                                <input
                                    type="password"
                                    name="newpassword"
                                    className={EditProfileCSS.margin}
                                />
                            </div>
                            
                            <div className={EditProfileCSS.flexContainer}>
                                <label>CONFIRM PASSWORD</label>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                />
                            </div>
                        </div>

                        <div className={EditProfileCSS.buttons}>
                            <button className={EditProfileCSS.cancelButton}>CANCEL</button>
                            <button className={EditProfileCSS.saveButton}>SAVE</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default EditProfile;