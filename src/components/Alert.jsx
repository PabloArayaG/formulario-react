
function Alert({ type, message }) {
    const alertClass = `alert alert-${type}`;
    return (
    <div className={alertClass}>
        {message}
    </div>
    );
}

export default Alert;