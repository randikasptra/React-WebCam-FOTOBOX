import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useLocation, useNavigate } from 'react-router-dom';

const TakePage = () => {
    const webcamRef = useRef(null);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { frame, count } = state || {};

    const [photos, setPhotos] = useState([]);
    const [isCounting, setIsCounting] = useState(false);
    const [timer, setTimer] = useState(3);

    // Fungsi countdown 3 detik
    const startCountdown = () => {
        setIsCounting(true);
        let countdown = 3;
        const interval = setInterval(() => {
            setTimer(countdown);
            if (countdown === 0) {
                clearInterval(interval);
                capturePhoto();
                setTimer(3);
                setIsCounting(false);
            }
            countdown--;
        }, 1000);
    };

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPhotos((prev) => [...prev, imageSrc]);
    };

    // Jika sudah ambil semua foto, lanjut ke halaman edit
    useEffect(() => {
        if (photos.length === count) {
            navigate('/edit', { state: { frame, photos } });
        }
    }, [photos]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
            <h1 className="text-2xl font-bold text-pink-700 mb-4">Ambil Foto ({photos.length}/{count})</h1>

            <div className="relative border-4 border-pink-500 rounded mb-4">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    width={400}
                    height={300}
                    videoConstraints={{
                        width: 1280,
                        height: 720,
                        facingMode: "user"
                    }}
                />
                {frame && (
                    <img
                        src={frame}
                        alt="Frame"
                        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    />
                )}
            </div>

            {isCounting ? (
                <div className="text-4xl font-bold text-pink-600 mb-4 animate-pulse">
                    {timer}
                </div>
            ) : (
                <button
                    onClick={startCountdown}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-2 rounded"
                >
                    Ambil Foto
                </button>
            )}
        </div>
    );
};

export default TakePage;
