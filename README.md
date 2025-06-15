# 📘 DevConnect – Kullanıcı Yönetim Uygulaması (Next.js + Redux Toolkit)

Bu proje, TypeScript destekli olarak **Next.js 14 App Router**, **Redux Toolkit**, ve **Tailwind CSS** kullanılarak geliştirdiğim bir kullanıcı yönetim sistemidir. Kullanıcılar listelenebilir, eklenebilir, güncellenebilir ve silinebilir. Mobil uyumlu hamburger menüsü ile modern bir kullanıcı arayüzü sunar.

---

## 🚀 Kullanılan Teknolojiler

- **Next.js 14 (App Router)**
- **TypeScript**
- **Redux Toolkit & Thunks**
- **Tailwind CSS**
- **Lucide React** (ikon için)
- **React Hooks** (useState, useEffect, useDispatch, useSelector)

---

## 📂 Klasör Yapısı

```
src/
│
├── app/
│   ├── users/              # UsersPage (kullanıcı listeleme, ekleme, düzenleme)
│   ├── store/              # Redux store & thunk işlemleri
│   ├── type/               # Tip tanımları (User tipi)
│   └── components/         # Ortak bileşenler (Navbar gibi)
│
├── public/                 # Gerekli görseller vs.
└── styles/                # Tailwind ile styling
```

---

## ✨ Özellikler

### ✅ Kullanıcı Listeleme

- Uygulama açıldığında API'den kullanıcı verileri çekilir ve listelenir.

### ➕ Kullanıcı Ekleme

- `Add User` butonuyla açılan form üzerinden yeni kullanıcı eklenebilir.

### ✏️ Kullanıcı Güncelleme

- Listelenen kullanıcıların yanına “Edit” butonu eklenerek form üzerinden bilgileri güncellenebilir.

### 🗑️ Kullanıcı Silme (isteğe bağlı olarak eklenebilir)

- Silme işlemi planlanabilir veya eklenebilir.

### 📱 Mobil Uyumlu Hamburger Menü

- Küçük ekranlarda hamburger ikonuyla menü açılır, büyük ekranlarda yatay menü gösterilir.

---

## 🧠 Redux Toolkit Mantığı

- Tüm async işlemler (`fetchUsers`, `addUser`, `updateUser`) thunk fonksiyonları ile yönetiliyor.
- Her thunk için `pending`, `fulfilled`, `rejected` durumları `.addMatcher()` ile global olarak handle ediliyor.
- Kullanıcılar `createSlice` içindeki reducer’larla güncelleniyor.

---

## 🧪 Geliştirme Sücrecinde Yapılanlar

## 1. Proje Planlama ve Tasarlama

- Proje gereksinimlerinin belirlenmesi
- Kullanıcı odaklı arayüz geliştirilmesi
- Responsive tasarım odaklı prensiplerin belirlenmesi (mobil uyumlu hambuger menü gibi)

## 2. Teknoloji Seçimi

- Nexj.js ve React ile projeyi oluşturulması
- Redux Toolkit ile global state yönetimlerinin sağlanması
- TypeScript ile tip güvenliğinin sağlanması
- Tailwind CSS ile hızlı ve tutarlı, kullanıcı odaklı stillerin oluşturulması

## 3. CRUD İşlemlerinin Geliştirilmesi

- Kullanıcı listeleme, ekleme, güncelleme ve silme işlemlerinin backedn API ile yani McokAPI ile entegre edilmesi
- Asenkron işlemler için `createAsyncThunk` kullanımı
- Tekrarlayan durumları yönetip, optimize ve sade kod yazımına uygun olması için `.addMatcher` kullanımı

## 4. Form Yönetimi ve Kullanıcı Etkileşimi

- Form durumlarının yönetimi için React state kullanımı
- Form doğrulama ve hata yönetimi
- Modal form tasarımı ile kullanıcı odaklı deneyimlerin iyileştirilmesi

## 5. Navigasyon ve UI iyileştirmeleri

- Navbar oluşturulması ve React Router ile sayfa geçişlerinin sağlanması
- Hamburger menü tasarımı ile mobil uyumluluk kazandırılması
- Tailwind CSS ile görsel iyileştirmelerle beraber animasyonlar eklenmesi

## 6. Hata Ayıklama ve Performans Optimizasyonu

- API çağrılarında hata ayıklama ve kulanıcı bilgilendirmesi
- State güncellemelerinin doğru ve efektif yapılması
- Gereksiz renderların önlenmesi için React ve Redux best-practices uygulanması

## 7. Kod Kalitesi ve Tip Güvenliği

- TypeScript ile yazım hatalarının erken yakalanması
- Fonksiyonel ve okunabilir kod yazımı
- Anlaşılabilir olması için yorum satırlarıyla desteklenmesi
- Ortak fonksiyonların ve state yönetiminin modüler hale getirilmesi

---

## 👨‍💻 Geliştirici

**H. Furkan Yaman**\
Front-End Developer\
🇹🇷 Türkiye\
💼 [LinkedIn](www.linkedin.com/in/hüseyin-furkan-yaman-3775a22b7)
