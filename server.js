const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();app.use
app.use(express.json());
app.use(express.static('.'));

// VERİ DEPOLARI
let videolar = [];
let raporlar = [];

// --- ANA YÖNLENDİRME ---
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// --- KAYIT MODÜLÜ ---
app.post('/kayit', (req, res) => {
    const { user, pass } = req.body;
    fs.appendFileSync('kullanicilar.txt', `Kullanıcı: ${user}, Şifre: ${pass}\n`);
    res.send({ mesaj: "Başarıyla giriş yapıldı!" });
});

// --- YAZAR MODÜLÜ (VİDEO YÜKLEME) ---
app.postapp.post('/video-yukle', (req, res) => {
    const { kitap, link, kapak, yazar, email } = req.body;
    
    const yeniVideo = {
        id: Date.now(), // Her videoya benzersiz bir numara
        kitap: kitap,
        link: link,
        kapak: kapak || 'default-cover.jpg', // Görsel yoksa varsayılan resim
        yazar: yazar,
        email: email,
        tarih: new Date().toLocaleDateString()
    };
    
    videolar.push(yeniVideo);
    console.log("Yeni video eklendi:", yeniVideo);
    res.status(200).json({ mesaj: "Başarıyla yüklendi!" });
});
    if (gelenSifre === GERCEK_SIFRE) {
        res.json(raporlar);
    } else {
        res.status(401).send("Yetkisiz erişim! Şifre yanlış.");
    }
});
});

app.get('/videolari-listele', (req, res) => res.json(videolar));

// --- GÜVENLİK MODÜLÜ (REPORT) ---
app.post('/sikayet-et', (req, res) => {
    raporlar.push({ ...req.body, tarih: new Date().toLocaleString() });
    res.send({ mesaj: "Rapor admine iletildi." });
});

app.get('/admin-verileri', (req, res) => res.json(raporlar));
// Yeni hali (İnternet uyumlu):
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 Watch Me yayında: Port ${PORT}`));


