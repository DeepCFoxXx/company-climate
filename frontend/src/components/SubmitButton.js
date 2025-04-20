import '../styles/SubmitButton.css';

function SubmitButton({ onClick, disabled }) {
  return (
    <button className="submit-button" onClick={onClick} disabled={disabled}>
      {disabled ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export default SubmitButton;
