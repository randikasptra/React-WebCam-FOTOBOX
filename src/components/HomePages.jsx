import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Dummy image URLs (ganti dengan image kamu nanti)
const frameImages = [
    '/frames/frame1.png',
    '/frames/frame2.png',
    '/frames/frame3.png',
];

function HomePage() {
    const navigate = useNavigate();
    const [selectedFrame, setSelectedFrame] = useState(null);
    const [photoCount, setPhotoCount] = useState(3);

    const handleStart = () => {
        if (selectedFrame) {
            navigate('/take', { state: { frame: selectedFrame, count: photoCount } });
        } else {
            alert('Pilih frame dulu ya!');
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Pilih Frame</h1>
            <div className="flex gap-4 mb-6">
                {frameImages.map((frame, index) => (
                    <img
                        key={index}
                        src={frame}
                        alt={`Frame ${index + 1}`}
                        className={`w-32 border-4 ${selectedFrame === frame ? 'border-blue-500' : 'border-transparent'}`}
                        onClick={() => setSelectedFrame(frame)}
                    />
                ))}
            </div>
            <h2 className="mb-2 font-semibold">Jumlah Foto</h2>
            <div className="flex gap-4 mb-4">
                <Button onClick={() => setPhotoCount(3)} variant={photoCount === 3 ? 'default' : 'outline'}>
                    3 Foto
                </Button>
                <Button onClick={() => setPhotoCount(4)} variant={photoCount === 4 ? 'default' : 'outline'}>
                    4 Foto
                </Button>
            </div>
            <Button onClick={handleStart}>Mulai Ambil Foto</Button>
        </div>
    );
}

function TakePage() {
    // Implementasi webcam capture, timer 3 detik, dan gabung foto ke frame nanti
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Ambil Foto</h1>
            {/* Tambahkan Webcam dan Timer di sini */}
            <p>Halaman ini akan menampilkan kamera, countdown 3 detik dan hasil foto digabungkan ke dalam frame.</p>
        </div>
    );
}

function FilterPage() {
    // Implementasi pemilihan filter dan stiker, serta tombol simpan atau buang
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Filter & Stiker</h1>
            {/* Pilihan filter dan stiker */}
            <div className="flex gap-4">
                <Button>Simpan Foto</Button>
                <Button variant="destructive">Buang Foto</Button>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/take" element={<TakePage />} />
                <Route path="/filter" element={<FilterPage />} />
            </Routes>
        </Router>
    );
}
