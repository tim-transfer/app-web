import Toast from "./Toast";

const ShowToast = () => {
    const [toast, setToast] = useState(null);

    const showToast = (type, message) => {
        setToast({ type, message });
    };

    const handleCloseToast = () => {
        setToast(null);
    };

    return (
        <>
            {/* Votre contenu */}
            {toast && <Toast type={toast.type} message={toast.message} onClose={handleCloseToast} />}
        </>
    );
}
export default ShowToast;