import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function AdminHome(){

    const [data,setData] = useState({
        active1:false,
        active2:true,
    });
    return(
        <div className="adminhome">
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-buttons">
                        <button
                        onClick={() => setData({
                            ...data,
                            active1:true,
                            active2:false
                        })}
                        className={data.active1===true?"selector-active":"selector"}>
                            CASHIER</button>
                        <button
                        onClick={() => setData({
                            ...data,
                            active2:true,
                            active1:false
                        })}
                        className={data.active2===true?"selector-active":"selector"}>
                            ADMIN</button>
                    </div>

                    {/* CONDITIONAL RENDERING */}
                    {
                        data.active1 === true?
                        (
                            <div className="signin-forms-container">
                                <p>CASHIER</p>
                                <form className="signin-forms" >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <input type="submit" className="signin-btn" value="CASHIER SIGN IN"/>
                                </form>
                            </div>
                        ):(
                            <div className="signin-forms-container">
                                <form className="signin-forms">
                                    <p>ADMIN</p>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        // value={email}
                                        // onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        // value={pass}
                                        // onChange={e => setPass(e.target.value)}
                                        required
                                    />
                                    <input type="submit" className="signin-btn" value="ADMIN SIGN IN"/>
                                </form>
                            </div>
                        )
                    }
                    </div>
            </div>
        </div>
    );
}

export default AdminHome;