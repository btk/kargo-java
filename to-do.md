
------------
**Tasks**
------------

- Sayfa tasarımları ve kullanıcı akışı oluşturulur
- Java üzerinde veritabanı sistemini kurulur
- Java ile Restful API oluşturulur
- Restful API mock texti oluşturulur
- Angular Route modülü ile sayfalandırma gerçekleştirilir
- AngularJS ile Mock API üzerinde uygulama bağlanır
- HTML & CSS ile Arayüz oluşturulur ve sayfa tasarımları kodlanır.
- Kullanılan teknolojiler ve ayrıntıları ile alakadar rapor hazırlanır
- Kullanıcı akışı ve UML Diyagramları rapor olarak hazırlanılır.


------------
**UI Design**
------------

sayfaların tasarımları
- sorgula
- hakkimizda
- index
- admin (giris) - Hilal
- adminlist (kargoların listelendiği) - Hilal


------------
**Rest Api**
------------

GET /app/kargo?id=X
ID'si verilen kargonun bilgilerini gönder.

GET /app/kargo?takipNo=X
Takip no'su verilen kargonun bilgilerini gönder.

GET /app/kargo
Tüm kargoların bilgilerini array olarak gönder.

POST /app/kargo
Yeni kargo ekle;
- gonderen
- gonderenAdres
- alici
- aliciAdres
- agirlik
- tarih

GET /app/kargo?id=X&emir=sil
ID'si belirtilen kargoyu sil.

POST /app/auth?user=X&pass=X
Kullanıcı adı ve şifre bilgisininin kontrol eder.



------------
**Database**
------------

--kargo-
id            (int)
takipNo       (varchar)
gonderen      (varchar)
gonderenAdres (text)
alici         (varchar)
aliciAdres    (text)
agirlik       (float)
tarih         (date)

--admin--
id            (int)
user          (varchar)
pass          (varchar/md5)



------------
**Documentation**
------------

- UML
- Kullanıcı akışı
- Veritabanı seçim analizi
...
