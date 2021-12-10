import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        
            {
            "source": {
            "id": null,
            "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Rolls Out Updated Maps Interface in Australia",
            "description": "Apple today announced that it has expanded its updated Apple Maps app to Australia, with Maps now offering more detailed road coverage, improved navigation, three-dimensional landmarks, and improved views of parks, buildings, airports, shopping centers, and m…",
            "url": "https://www.macrumors.com/2021/12/09/apple-maps-australia/",
            "urlToImage": "https://images.macrumors.com/t/Ixiqr85VqkZeNwLCUUCimT9TqXI=/1960x/article-new/2021/12/apple-maps-australia.jpg",
            "publishedAt": "2021-12-10T00:12:33Z",
            "content": "Apple today announced that it has expanded its updated Apple Maps app to Australia, with Maps now offering more detailed road coverage, improved navigation, three-dimensional landmarks, and improved … [+1620 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "This Chargeworx 10,000mAh Power Bank with AirPods Holder can be your new BFF",
            "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nLook, 2021 has proved to be frustrating enough without the presence of your scatterbrain. Losing charge of all your e…",
            "url": "https://boingboing.net/2021/12/09/this-chargeworx-10000mah-power-bank-with-airpods-holder-can-be-your-new-bff.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/12/product_183250_product_shots1.jpeg?fit=630%2C473&ssl=1",
            "publishedAt": "2021-12-10T03:53:00Z",
            "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nLook, 2021 has proved to be frustrating enough without the … [+1721 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Pxlnv.com"
            },
            "author": "John Gruber",
            "title": "More on Apple’s Political Dance With China",
            "description": "Samuel Axon, Ars Technica: Today, The Information published a lengthy report detailing Apple CEO Tim Cook’s efforts to establish strong relationships between Apple and Chinese government officials and agencies. Citing both interviews and direct access to inte…",
            "url": "https://pxlnv.com/linklog/information-cook-china-deal/",
            "urlToImage": null,
            "publishedAt": "2021-12-10T01:25:11Z",
            "content": "Nick Heer, writing at Pixel Envy:\n\n\n Ma reports that Apple acquiesced to many government demands, like\nbuilding research and development centres in the country — including one with the university whe… [+3454 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Lexfridman.com"
            },
            "author": "Lex Fridman",
            "title": "Fridman: #247 – Jamie Metzl: Lab Leak Theory",
            "description": "Jamie Metzl is an author specializing in topics of genetic engineering, biotechnology, and geopolitics. Please support this podcast by checking out our sponsors: – Mizzen+Main: https://mizzenandmain.com and use code LEX to get $35 off – NI: https://www.ni.com…",
            "url": "https://lexfridman.com/jamie-metzl/",
            "urlToImage": "https://lexfridman.com/wordpress/wp-content/uploads/2021/12/thumb_jamie_metzl.png",
            "publishedAt": "2021-12-10T00:42:15Z",
            "content": "Podcast: Play in new window | Download\r\nSubscribe: Google Podcasts | Spotify | Stitcher | TuneIn | RSS\r\nJamie Metzl is an author specializing in topics of genetic engineering, biotechnology, and geop… [+1901 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple Maps expands detailed coverage, Look Around, and other features to Australia",
            "description": "Apple on Thursday announced a major update to Apple Maps for users in Australia. The company is now officially expanding its detailed coverage with better navigation, Look Around, and other features to the country.\n more…\nThe post Apple Maps expands detailed …",
            "url": "https://9to5mac.com/2021/12/09/apple-maps-expands-detailed-coverage-look-around-and-other-features-to-australia/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/Apple-Maps-Australia-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-12-10T00:15:06Z",
            "content": "Apple on Thursday announced a major update to Apple Maps for users in Australia. The company is now officially expanding its detailed coverage with better navigation, Look Around, and other features … [+1526 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "New Apple Maps features available now in Australia",
            "description": "Australia now has the newest round of Apple Maps updates, boasting more detailed road coverage, better navigation, and features like Look Around and Share ETA.Image Credit: AppleWhile vigilant Apple Maps watchers previously spotted this update, Apple has offi…",
            "url": "https://appleinsider.com/articles/21/12/10/new-apple-maps-features-available-now-in-australia",
            "urlToImage": "https://photos5.appleinsider.com/gallery/46047-89632-header-xl.jpg",
            "publishedAt": "2021-12-10T00:46:50Z",
            "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1789 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Gizmodo.jp"
            },
            "author": "小暮ひさのり",
            "title": "iPhone 14の噂・リーク情報まとめ：発売日・価格・デザインはこうなるのか!?【12月10日更新】",
            "description": "これまでに出ている最新のiPhone 14情報をまとめていきます！",
            "url": "https://www.gizmodo.jp/2021/12/iphone-14-matome.html",
            "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2021/12/02/2021-09-09iopk01-w960.jpg",
            "publishedAt": "2021-12-10T03:00:00Z",
            "content": "2022AppleiPhoneiPhone 14Touch ID\r\n iPhone 14\r\niPhone\r\nAppleiPhone2022iPhone 14\r\niPhone 13iPhone 12iPhone 14\r\n iPhone 14\r\nImage: Apple\r\niPhoneiPhone 14\r\nAppleiPhone 14A16 Bionic20211026TSMCN4P5nm\r\niPh… [+1248 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BGR"
            },
            "author": "Andy Meek",
            "title": "A nationwide shortage of this crucial grocery item is making people nervous",
            "description": "For months now, supply chain woes have wreaked havoc across the US and global economies. The effects of which can be seen everywhere from empty grocery store shelves to some US farms and even the factories that make Apple’s all-important iPhones. This week, N…",
            "url": "https://bgr.com/business/a-nationwide-shortage-of-this-crucial-grocery-item-is-making-people-nervous/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2020/09/walmart-grocery-shopping.jpg?quality=82&strip=all",
            "publishedAt": "2021-12-10T01:11:26Z",
            "content": "For months now, supply chain woes have wreaked havoc across the US and global economies. The effects of which can be seen everywhere from empty grocery store shelves to some US farms and even the fac… [+3512 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BGR"
            },
            "author": "Jacob Siegal",
            "title": "This new, free streaming service has 500+ hours of shows and movies from around the world",
            "description": "There are far too many streaming services on the market to keep track of them all. Chances are that you subscribe to a few, are weighing a few others, and are in the middle of at least two free trials. To make matters even more complicated, new streaming serv…",
            "url": "https://bgr.com/entertainment/this-new-free-streaming-service-has-500-hours-of-shows-and-movies-from-around-the-world/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2021/12/Globi-Free-Streaming-Service.jpg?quality=82&strip=all",
            "publishedAt": "2021-12-10T02:13:38Z",
            "content": "There are far too many streaming services on the market to keep track of them all. Chances are that you subscribe to a few, are weighing a few others, and are in the middle of at least two free trial… [+3970 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Cnbeta.com"
            },
            "author": "raymon725",
            "title": "Apple Watch再次遭遇电池鼓包集体诉讼 因存在“重大人身伤害”隐患",
            "description": "一项针对苹果发起的新集体诉讼称，历代 Apple Watch 智能手表都存在着电池鼓胀的缺陷，因此造成的屏幕破损，或导致用户在操作时被锋利的边缘给划伤。虽然锂电池鼓包的情况并不罕见，但原告方指责苹果未能在 Apple Watch 内部预留足够的缓冲空间并落实相应的防护措施，因而相关后果并非用户“使用不当”所致。 阅读全文",
            "url": "https://www.cnbeta.com/articles/tech/1212873.htm",
            "urlToImage": "https://static.cnbetacdn.com/article/2021/1210/d915527da4eaaeb.png",
            "publishedAt": "2021-12-10T00:56:56Z",
            "content": "/ \r\n Chris Smith Apple Watch Series 3 \r\n Apple Watch \r\nApple Watch Series 7 / \r\nMacRumors Apple Watch \r\nApple Watch \r\n Apple Watch 2019"
            },
            {
            "source": {
            "id": null,
            "name": "Touchlab.jp"
            },
            "author": "Nakimo",
            "title": "¥120→無料：フィルム風カメラ「Polca」ほか［12月10日版］セール・お得情報",
            "description": "App Storeの値下げ中アプリおよびお得な情報を紹介します。価格は掲載時のもので既に変更されている場合があるので、購入前にご確認ください。 有料アプリの購入や課金をする際は、App Store・Appleのサブスク・ […]\nThe post ¥120→無料：フィルム風カメラ「Polca」ほか［12月10日版］セール・お得情報 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
            "url": "http://touchlab.jp/2021/12/iphone-ipad-app-sale-20211210/",
            "urlToImage": "http://touchlab.jp/wp-content/uploads/2021/12/app_sale_2021_12_10_0.jpg",
            "publishedAt": "2021-12-10T02:31:30Z",
            "content": "App Storeの値下げ中アプリおよびお得な情報を紹介します。価格は掲載時のもので既に変更されている場合があるので、購入前にご確認ください。\n\n有料アプリの購入や課金をする際は、App Store・Appleのサブスク・Apple公式ストアで使える「Apple Gift Card」を楽天で購入すると、ポイントがついてお得です。\nセール中のアプリ\nPolca \n写真／ビデオ：20.3 MB\n￥1… [+830 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "GSMArena.com"
            },
            "author": "Ricky",
            "title": "Check out this X-ray wallpaper for the Apple Watch Series 7",
            "description": "The Apple Watch Series 7 was announced alongside the new iPhone 13 and new iPad mini model, and it didn’t bring too many changes aside from the display size and a couple of internal design differences.\n\n\nSource: iFixit\n\niFixit already tore down the Series 7 b…",
            "url": "https://www.gsmarena.com/check_out_these_xrays_of_the_apple_watch_series_7-news-52223.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/21/12/apple-watch-series-7-x-ray/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2021-12-10T03:28:09Z",
            "content": "The Apple Watch Series 7 was announced alongside the new iPhone 13 and new iPad mini model, and it didnt bring too many changes aside from the display size and a couple of internal design differences… [+469 chars]"
            },
            {
            "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
            },
            "author": "Joe Schneider",
            "title": "Apple Sued Over Broken Watch Screens That Injured Customers",
            "description": "Apple Inc.’s watch isn’t all it’s cracked up to be, a group of customers claims in a lawsuit over an alleged defect that it says can cause injuries.",
            "url": "https://www.bloomberg.com/news/articles/2021-12-10/apple-sued-over-broken-watch-screens-that-injured-customers",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iEMVdmWDnW9M/v1/1200x800.jpg",
            "publishedAt": "2021-12-10T00:52:04Z",
            "content": "Apple Inc.s watch isnt all its cracked up to be, a group of customers claims in a lawsuit over an alleged defect that it says can cause injuries.\r\nThe customers say Apple, in its zeal for compactness… [+173 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Motley Fool Transcribing)",
            "title": "Comtech Telecommunication (CMTL) Q1 2022 Earnings Call Transcript",
            "description": "CMTL earnings call for the period ending September 30, 2021.",
            "url": "https://www.fool.com/earnings/call-transcripts/2021/12/09/comtech-telecommunication-cmtl-q1-2022-earnings-ca/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/1/featured-transcript-logo-template.jpg",
            "publishedAt": "2021-12-10T04:00:33Z",
            "content": "Image source: The Motley Fool.\r\nComtech Telecommunication ( CMTL -5.03% )Q1 2022 Earnings CallDec 09, 2021, 4:30 p.m. ET\r\nContents:\r\n<ul><li>Prepared Remarks</li><li>Questions and Answers</li><li>Cal… [+55458 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Motley Fool Transcribing)",
            "title": "Sprinklr, Inc. (CXM) Q3 2022 Earnings Call Transcript",
            "description": "CXM earnings call for the period ending September 30, 2021.",
            "url": "https://www.fool.com/earnings/call-transcripts/2021/12/09/sprinklr-inc-cxm-q3-2022-earnings-call-transcript/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/1/featured-transcript-logo-template.jpg",
            "publishedAt": "2021-12-10T04:00:24Z",
            "content": "Image source: The Motley Fool.\r\nSprinklr, Inc. (NYSE:CXM)Q3 2022 Earnings CallDec 09, 2021, 5:00 p.m. ET\r\nContents:\r\n<ul><li>Prepared Remarks</li><li>Questions and Answers</li><li>Call Participants</… [+54254 chars]"
            },
            {
            "source": {
            "id": "el-mundo",
            "name": "El Mundo"
            },
            "author": "Javier Attard",
            "title": "Canet, el pueblo 'indepe' que señala a un niño de 5 años por estudiar en español",
            "description": "En esta población catalana, una familia está siendo acosada por haber conseguido que en la escuela de su hijo se estudie un 25% de las horas en castellano, como consagró el Tribunal Supremo Leer",
            "url": "https://www.elmundo.es/podcasts/el-mundo-al-dia/2021/12/10/61b2b113e4d4d816368b45d6.html",
            "urlToImage": "https://phantom-elmundo.unidadeditorial.es/3439e7e0d2fae5de17daea20acd9a09e/resize/1200/f/jpg/assets/multimedia/imagenes/2021/12/10/16391004280785.jpg",
            "publishedAt": "2021-12-10T01:45:49Z",
            "content": "Todos los episodios de EL MUNDO al día están en la web de omnystudio. También en Google Podcast, Apple Podcast, Spotify, Ivoox, Podimo...\r\n¿Acatará la Generalitat la sentencia? ¿Qué ambiente se respi… [+575 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Impress.co.jp"
            },
            "author": null,
            "title": "Apple Watchの内部がスケスケな壁紙。Series 7向けにiFixitが配布",
            "description": "iFixitは、Apple Watch Series 7向けに、X線で透過したものなど筐体の内部が見える壁紙を公開した。",
            "url": "https://pc.watch.impress.co.jp/docs/news/1373201.html",
            "urlToImage": "https://pc.watch.impress.co.jp/img/pcw/list/1373/201/01.jpg",
            "publishedAt": "2021-12-10T04:14:41Z",
            "content": "iFixitApple Watch Series 7X \r\n 44mm2(/)X(Creative Electron)1341mm1 \r\n Apple Watch Series 7"
            },
            {
            "source": {
            "id": null,
            "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Apple AR headset will have advanced 3D sensors, gesture, motion detection system: Kuo",
            "description": "Apple’s upcoming AR headset, which will support augmented reality and virtual reality, will likely come with an array of advanced sensors, according to the latest note by Kuo.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/apple-ar-headset-will-have-advanced-3d-sensors-gesture-motion-detection-system-kuo-7665311/",
            "urlToImage": "https://images.indianexpress.com/2021/12/Apple_Logo_Reuters_NEW1.jpg",
            "publishedAt": "2021-12-10T04:20:10Z",
            "content": "Apples upcoming AR headset, which will support augmented reality and virtual reality, will likely come with an array of advanced sensors. The latest information comes from noted Apple analyst Ming Ch… [+1517 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "DIE WELT"
            },
            "author": "Anja Ettel, Daniel Eckert, Anja Ettel, Daniel Eckert",
            "title": "Bling-Effekt bei Daimler und Achterbahn-Fahren mit der Nasdaq",
            "description": "In der heutigen Folge „Alles auf Aktien“ berichten die Finanzjournalisten Daniel Eckert und Anja Ettel über den Absturz bei Peloton, einen Triumph für Bayer und einen Inflationsschutz der ganz anderen Art.",
            "url": "https://www.welt.de/podcasts/alles-auf-aktien/article235568246/Das-neue-Bling-von-Mercedes-an-der-Boerse.html",
            "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile228293623/4371353037-ci16x9-w1200/DWO-Podcast-AllesaufAktien-Eckert-Ettel.jpg",
            "publishedAt": "2021-12-10T04:00:21Z",
            "content": "Hier können Sie unsere WELT-Podcasts hören \r\n Wir nutzen den Player des Anbieters Podigee für unsere WELT-Podcasts. Damit Sie den Podcast-Player sehen können und um mit Inhalten aus Podigee und ander… [+1444 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Techbang.com"
            },
            "author": "極客公園",
            "title": "創辦 Apple 之後，沃茲尼克在做什麼？",
            "description": "做自己電視劇《矽谷》中有這麼一個橋段。 \n劇中角色 Erlich 說，「我會像史蒂芬一樣幹出一番大事業。」工程師出身的主角  Richard 反問，「你說的史蒂芬是誰？賈伯斯還是沃茲尼克？」 \n「賈伯斯只是一個簡報者，他其實一行程式碼都沒寫過。嚴格地說，是沃茲締造了蘋果。」Richard 接著說。 \n「蘋果的奠基人到底是誰？」，這個問題在 80 年代以前，或許還有討論的價值和空間。但從 1981 年之後，這個問題不再有意義，因為沃茲離開了蘋果。之後賈伯斯推出的那些劃時代的蘋果產品，都與沃茲無關。 \n今天，提到沃茲…",
            "url": "https://www.techbang.com/posts/92483-stephen-gary-wozniak",
            "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/92483/original/96596f7bb75fc1343e76a9154c22b7d9.jpg?1639104022",
            "publishedAt": "2021-12-10T02:45:00Z",
            "content": "Erlich   Richard  \r\nRichard  \r\n 80 1981  \r\nApple II  \r\n 1981 40  \r\nWoz\r\n1950  \r\n13  \r\n 60  \r\n1975  \r\n1975  \r\n Apple I \r\n 150 Apple I \r\n Apple II \r\nApple II \r\nApple II 80  \r\n GPS  \r\n AirTag \r\n 40  \r\nW… [+155 chars]"
            }
            ]
    
    constructor(){
        super();
        console.log("I am a constructor from news component!")
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='mb-3'>NewsEagle - Top Headlines</h2>
                <div className="row">
                            <div className="col-md-4">
                            <NewsItem title = "myTitle" description = "mydesc" imageUrl = "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/12/product_183250_product_shots1.jpeg?fit=630%2C473&ssl=1" newsUrl ="TODO"/>
                            </div>
                            <div className="col-md-4">
                            <NewsItem title = "myTitle" description = "mydesc" imageUrl ="https://assets.media-platform.com/gizmodo/dist/images/2021/12/02/2021-09-09iopk01-w960.jpg" />
                            </div>
                            <div className="col-md-4">
                            <NewsItem title = "myTitle" description = "mydesc" imageUrl = "https://bgr.com/wp-content/uploads/2021/12/Globi-Free-Streaming-Service.jpg?quality=82&strip=all" />
                            </div>
                 </div>
           </div>
        )
    }
}

export default News
