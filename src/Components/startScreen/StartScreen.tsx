import { useNavigate } from 'react-router-dom';
import './startScreen.css';

const StartScreen = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/word-analyzer');
  };

  return (
    <div className='start-page-container'>
      <div className='inside-container'>
        <h1>
          <span>Lets dive in the</span> world of words
        </h1>

        <div className='button-container'>
          <button type='submit' onClick={handleClick}>
            Submit
          </button>
          <small>*Click the Submit button to dive in.</small>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
