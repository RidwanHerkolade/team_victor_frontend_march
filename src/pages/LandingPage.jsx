import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className='landing-container'>
      <h4 className='landing-logo'>Logo</h4>

      <h1 className='landing-title'>Learn Graphic Design with Real Projects</h1>
      <p className='landing-subtitle'>Master branding, typography, and UI/UX from industry experts</p>

      {/*buttons*/}
      <div className='landing-btns'>
        <button className='landing-signup-btn' onClick={() => navigate("/signup")}>
          Sign up
        </button>
        <button className='landing-login-btn' onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      {/*icons*/}
      <div className='landing-icons'>
        <div className='landing-stat'>
          <img src='/images/vector-icon.png' alt='Courses icon' className='landing-icon' />
          50 Courses
        </div>
        <div className='landing-stat'>
          <img src='/images/group-icon.png' alt='Learners icon' className='landing-icon' />
          10k+ Learners
        </div>
        <div className='landing-stat'>
          <img src='/images/star-icon.png' alt='Rating icon' className='landing-icon' />
          4.8 Rating
        </div>
      </div>
    </div>
  );
}
