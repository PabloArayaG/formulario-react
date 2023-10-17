import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialButton({ icon, url }) {
    const handleClick = () => {
    window.open(url, '_blank');
};

    return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="social-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={icon} size="2x" color="currentColor" />
    </div>
    </a>
);
}

export default SocialButton;