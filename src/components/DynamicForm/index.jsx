// import React from 'react'
// import './style.css'

// function DynamicForm() {
//     return (
//         <div>
//             <div className="container">
//                 {/* <!-- SIGN IN  --> */}
//                 <div className="user signinBox">
//                     {/* <!-- IMAGE BOX --> */}
//                     <div className="imgBox">
//                         <img src="signin.jpg" alt="Black Chair" />
//                     </div>
//                     {/* <!-- FORM BOX --> */}
//                     <div className="formBox">
//                         <form action="Designer-Sinin.php" method="POST">
//                             <h2>Sign In</h2>
//                             <input type="email" name="email" placeholder="Email Address" />
//                             <input type="password" name="password" placeholder="Password" />
//                             <input type="submit" value="Login" />
//                             <p className="signup">Don't have an account ? <a href="#" onclick="toggleForm()">Sign up.</a></p>
//                         </form>
//                     </div>
//                 </div>
//                 {/* <!-- SIGN UP --> */}
//                 <div className="user signupBox">
//                     {/* <!-- FORM BOX --> */}
//                     <div className="formBox">
//                         <form action="Designer-Sinup.php" method="POST">
//                             <h2>Create an account</h2>
//                             <input type="text" name="username" placeholder="Username" />
//                             <input type="text" name="phone" placeholder="Phone Number" />
//                             <input type="number" name="yearsEX" placeholder="Years of Experience" min="0" />
//                             <input type="email" name="email" placeholder="Email Address" />
//                             <input type="password" name="password" placeholder="Create Password" />
//                             <input type="password" name="repassword" placeholder="Confirm Password" />
//                             <input type="submit" value="Sign Up" />
//                             <p className="signup">Already have an account ? <a href="#" onclick="toggleForm()">Sign in.</a></p>
//                         </form>
//                     </div>
//                     {/* <!-- IMAGE BOX --> */}
//                     <div className="imgBox">
//                         <img src="signup.jpg" alt="Black Chair" />
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default DynamicForm