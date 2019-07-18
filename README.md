# SAP HANA XS Node.js Database Application
Bu uygulama SAP HANA XS üzerinden oluşturulmuş bir Multi-Target Application projesidir. Bu projenin içine sonradan Node.js modülü eklenmiştir.

Node.js içerisinde express ile iki URL sunar. Bunlar:

```
GET / -> Burası listeler
GET /add -> burası ister
```

Bu requestler tarayıcıdan girilerek de çalıştırılabilir.

#### Önemli
Bu sistemin çalışması için hana veritabanının şifresini bilmek gerekir. Veritabanına test_table tablosunun oluşturulması gerekir. Bu Node.js üzerinde veya basit bir SQL çalıştırılarak yapılabilir. Ancak bu proje tablo zaten varmış gibi kabul ederek yazılmıştır.

Tabloyu oluşturmak için SQL sorgusu:

```
CREATE TABLE test_table (id INTEGER, name TEXT)
```

Tüm Node.js projesi **/server** dizininin içindedir.
