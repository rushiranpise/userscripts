// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version        93.4
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          window.onurlchange
// @grant          GM_registerMenuCommand
// @icon           https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require        https://update.greasyfork.org/scripts/439099/1203718/MonkeyConfig%20Modern%20Reloaded.js
// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.
// @homepageURL    https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated
// @supportURL     https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues
// @match *://*.mixrootmods.com/*
// @match *://*.go.link4rev.site/*
// @match *://*.infinityskull.com/*
// @match *://*.sakarnewz.com/*
// @match *://*.link.linksfire.co/*
// @match *://*.dutchycorp.space/*
// @include /^(https?:\/\/)(.+)?((teachsansar|technicalatg|foodxor).com)(\/.*)/
// @match *://*.paster.gg/*
// @match *://*.ouo.io/*
// @match *://*.linkbox.to/*
// @include /^(https?:\/\/)(.+)?((desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link)(\/.*)/
// @match *://*.adbtc.top/*
// @match *://*.upload.ee/*
// @include /^(https?:\/\/)(.+)?(appdrive\.*)/
// @match *://*.dddrive.me/*
// @match *://*.uppit.com/*
// @match *://*.krakenfiles.com/*
// @match *://*.gofile.io/*
// @match *://*.birlink.vip/*
// @match *://*.karanpc.com/*
// @match *://*.file-upload.net/*
// @include /^(https?:\/\/)(.+)?(userscloud.com|dosya.co)(\/.*)/
// @match *://*.hexupload.net/*
// @match *://*.rapidgator.net/*
// @match *://*.dbree.me/*
// @match *://*.megaupto.com/*
// @match *://*.dataupload.net/*
// @match *://*.douploads.net/*
// @match *://*.linkerload.com/*
// @match *://*.buzzheavier.com/*
// @match *://*.filemoon.sx/*
// @match *://*.bestfonts.pro/*
// @match *://*.oyroid.com/*
// @match *://*.files.fm/*
// @match *://*.megaup.net/*
// @match *://*.4fnet.org/*
// @include /^(https?:\/\/)(.+)?(oxy\.*)/
// @include /^(https?:\/\/)(.+)?(gdtot\.*)/
// @match *://*.mp4upload.com/*
// @match *://*.drop.download/*
// @match *://*.workupload.com/*
// @include /^(https?:\/\/)(.+)?(hxfile.co|ex-load.com|megadb.net)(\/.*)/
// @match *://*.send.cm/*
// @match *://*.racaty.io/*
// @match *://*.racedepartment.com/*
// @match *://*.mega4up.org/*
// @match *://*.uploadhaven.com/*
// @match *://*.novafile.org/*
// @match *://*.k2s.cc/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.mega4upload.com/*
// @match *://*.uploady.io/*
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
// @match *://*.anonym.ninja/*
// @match *://*.vosan.co/*
// @match *://*.apkmody.io/*
// @match *://*.mdfx9dc8n.net/*
// @match *://*.takefile.link/*
// @match *://*.chedrives.com/*
// @match *://*.appsblaze.com/*
// @match *://*.modcombo.com/*
// @match *://*.userupload.net/*
// @match *://*.1fichier.com/*
// @include /^(https?:\/\/)(.+)?(upload-4ever.com|up-4ever.net)(\/.*)/
// @match *://*.fileresources.net/*
// @match *://*.3upload.com/*
// @match *://*.freepreset.net/*
// @match *://*.doodrive.com/*
// @match *://*.gocmod.com/*
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
// @match *://*.dailyuploads.net/*
// @match *://*.9xupload.asia/*
// @match *://*.mediafire.com/*
// @match *://*.qiwi.gg/*
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @match *://*.sharemods.com/*
// @match *://*.mexa.sh/*
// @include /^(https?:\/\/)(.+)?((kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*)/
// @match *://*.pdfcoffee.com/*
// @match *://*.adoc.pub/*
// @include /^(https?:\/\/)(.+)?(clickndownload.org|clicknupload\.*)/
// @match *://*.leechpub.com/*
// @match *://*.uploadev.org/*
// @match *://*.rawlazy.si/*
// @match *://*.modsbase.com/*
// @match *://*.dropgalaxy.com/*
// @include /^(https?:\/\/)(.+)?(file-upload.com|file-upload.org)(\/.*)/
// @match *://*.downloader.tips/*
// @match *://*.hitfile.net/*
// @include /^(https?:\/\/)(.+)?((thecubexguide|miuiflash).com|(djxmaza|jytechs).in)(\/.*)/
// @match *://*.filedm.com/*
// @match *://*.gogodl.com/*
// @match *://*.turbobit.net/*
// @match *://*.4shared.com/*
// @match *://*.megaurl.win/*
// @match *://*.keeplinks.org/*
// @match *://*.1short.io/*
// @match *://*.earnlink.io/*
// @match *://*.mkomsel.com/*
// @match *://*.onimports.com.br/*
// @match *://*.1shortlink.com/*
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.linegee.net/*
// @include /^(https?:\/\/)(.+)?(bedrat.xyz|uhtrdr47.online)(\/.*)/
// @match *://*.pro.sh/*
// @include /^(https?:\/\/)(.+)?(proappapk.com|meclipstudy.in)(\/.*)/
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.render-state.to/*
// @match *://*.linkpay.cc/*
// @include /^(https?:\/\/)(.+)?(cooklike.info|model-tas-terbaru.com)(\/.*)/
// @match *://*.kisalt.digital/*
// @include /^(https?:\/\/)(.+)?(bildirim.in|bildirim.eu|bildirim.link)(\/.*)/
// @match *://*.enlacito.com/*
// @match *://*.webhostingtips.club/*
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @match *://*.shareus.io/*
// @match *://*.adtival.network/*
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @match *://*.gameblog.in/*
// @match *://*.sharetext.me/*
// @include /^(https?:\/\/)(.+)?((cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(sfl.gl|moneyblink.com)(\/.*)/
// @match *://*.comohoy.com/*
// @match *://*.apkw.ru/*
// @include /^(https?:\/\/)(.+)?(cryptomonitor.in|2the.space|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((newsbawa|utkarshonlinetest|techbezzie).com)(\/.*)/
// @match *://*.programasvirtualespc.net/*
// @include /^(https?:\/\/)(.+)?(horoscop.info|infonerd.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcrypto.info|offerinfo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitzite.com|cryptoad.org|article24.online|dailytechz.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinycmd|tinybc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coingraph.us|eblog.pro|writeprofit.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nullscript.info|freebinance.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?((10short|lollty).pro|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptfaucet.com|izseo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in)(\/.*)/
// @match *://*.fansonlinehub.com/*
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|earnme.club|usanewstoday.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @match *://*.terabox.fun/*
// @match *://*.ayelads.com/*
// @match *://*.karyawan.co.id/*
// @match *://*.icerik.site/*
// @match *://*.ponselharian.com/*
// @match *://*.assettoworld.com/*
// @match *://*.adfoc.us/*
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @match *://*.oii.io/*
// @match *://*.cpu-miner.leaks.work/*
// @include /^(https?:\/\/)(.+)?(mrproblogger.com|themezon.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-golds.com|forex-trnd.com)(\/.*)/
// @match *://*.1link.club/*
// @match *://*.slink.bid/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.zegtrends.com/*
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bcvc.xyz|bcvc.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dear-lottery.org|(superheromaniac|spatsify).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcoinfaucet.fun|freebitcoin.win)(\/.*)/
// @match *://*.bestadvise4u.com/*
// @match *://*.linkspy.cc/*
// @include /^(https?:\/\/)(.+)?((webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @match *://*.4hi.in/*
// @include /^(https?:\/\/)(.+)?((chooyomi|blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kiktu|techcyan).com)(\/.*)/
// @match *://*.fexkomin.xyz/*
// @match *://*.100puan.com/*
// @match *://*.sub2get.com/*
// @include /^(https?:\/\/)(.+)?((fc-lc|loaninsurehub).com|fc-lc.xyz)(\/.*)/
// @match *://*.mneyvip.com/*
// @match *://*.jobform.in/*
// @match *://*.go.shareus.in/*
// @match *://*.playpaste.com/*
// @match *://*.suratresmi.id/*
// @include /^(https?:\/\/)(.+)?(examkhata.com|gamelopte.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rancah.com|menjelajahi.com|shortly.xyz|nyawang.com)(\/.*)/
// @match *://*.cryptotracker.space/*
// @match *://*.stfly.me/*
// @include /^(https?:\/\/)(.+)?(khaddavi.net|contentmenarik.com)(\/.*)/
// @match *://*.leitup.com/*
// @match *://*.offeroc.com/*
// @include /^(https?:\/\/)(.+)?(azmath.info|expertvn.com)(\/.*)/
// @match *://*.newassets.hcaptcha.com/*
// @include /^(https?:\/\/)(.+)?((ez4mods|tensailab|game5s|supermodsmenus).com|tech5s.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth).in)(\/.*)/
// @match *://*.freebitco.in/*
// @match *://*.mazen-ve3.com/*
// @match *://*.soft3arbi.com/*
// @include /^(https?:\/\/)(.+)?((120898|141989|161989|131989|121989|151989).xyz)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?((coinsward|blogsward).com|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1bit.space|mgnet.xyz)(\/.*)/
// @match *://*.bigbtc.win/*
// @match *://*.firefaucet.win/*
// @include /^(https?:\/\/)(.+)?(uptobhai\.*|uplinkto\.*|shortlinkto\.*)/
// @include /^(https?:\/\/)(.+)?((tmail|labgame).io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(falpus|exe-urls).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|(offeergames|todogame).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((leaveadvice|mensventure).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(jameeltips.us|cryptonworld.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hynews.biz|chamcuuhoc.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li)(\/.*)/
// @match *://*.skiplink.me/*
// @match *://*.apanmusic.in/*
// @match *://*.o-pro.online/*
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com)(\/.*)/
// @match *://*.easyworldbusiness.com/*
// @match *://*.getzen.cash/*
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(deportealdia.live|noweconomy.live|techgeek.digital)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|importantclass).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club)(\/.*)/
// @match *://*.linkatla.com/*
// @match *://*.claimfreetrx.online/*
// @include /^(https?:\/\/)(.+)?(offers4crypto.xyz|ewall.biz)(\/.*)/
// @match *://*.dl.lk21static.xyz/*
// @match *://*.easylink.gamingwithtr.com/*
// @match *://*.cryptednews.space/*
// @include /^(https?:\/\/)(.+)?((mangareleasedate|freemodapp|zutiza|phixshop|uskloans|sabkiyojana).com|(myfirstname|ignoupur).in|sarkarisahayata.org|kisannews.net|bloxstrap.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?((remixsounds|helpdeep|thinksrace).com|uprwssp.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stly.link|snaplessons.net|atravan.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly|linkbulks).com|wordcounter.icu|pwrpa.cc|paylinks.cloud)(\/.*)/
// @include /^(https?:\/\/)(.+)?((computerpedia|techconnection).in|(myprivatejobs|advicefunda|moneymatteronline|mahikinews).com|bestloanoffer.net|bhulekhnaksha.org)(\/.*)/
// @match *://*.revly.click/*
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn|ziggame).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy.me|(askpaccosi|halosenja|sainny|wellness4live|briceka).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|briceka).com|galaxy-link.space|oke.io|forextrader.site|tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.wiki|(oko|aii).sh|clk.kim|dekhe.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((calmgram|adbitfly|blogsward|coinjest).com|adbitfly.in)(\/.*)/
// @match *://*.shorterall.com/*
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun)(\/.*)/
// @include /^(https?:\/\/)(.+)?((btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online)(\/.*)/
// @match *://*.playnano.online/*
// @include /^(https?:\/\/)(.+)?(donia2tech.com|blog.techeysub.online|minersim.com)(\/.*)/
// @match *://*.rekonise.com/*
// @match *://*.acortalink.me/*
// @include /^(https?:\/\/)(.+)?(tutwuri.id|besargaji.com)(\/.*)/
// @match *://*.autodime.com/*
// @match *://*.amritadrino.com/*
// @include /^(https?:\/\/)(.+)?(hunterkiller.me|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(lyricsbaazaar.com|ezeviral.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|tempatwisata.pro)(\/.*)/
// @match *://*.coinsrev.com/*
// @match *://*.zubatecno.com/*
// @include /^(https?:\/\/)(.+)?((wooseotools|woowebtools).com)(\/.*)/
// @match *://*.adwerty.com/*
// @include /^(https?:\/\/)(.+)?((pernahsukses|alpinecorporate).com|aoutoqw.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(altechen.com|entutes.com)(\/.*)/
// @match *://*.socialwolvez.com/*
// @include /^(https?:\/\/)(.+)?((mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online)(\/.*)/
// @match *://*.bitcotasks.com/*
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @include /^(https?:\/\/)(.+)?((hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com|(blogbux|blogesque|exploreera|explorosity|torovalley).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(link.goto.com.np|(appkamods|bankvacency|otomi-games).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lootlinks|onepiecered).co|(loot-links|links-loot|loot-link|mega-guy|utopianleaks|eofmukindwo|realiukzemydre|kmendation|bstlar|tonordersitye|bleleadersto|daughablelea).com|(lootdest|lootlink|best-links).org|lootdest.info|linksloot.net|free-content.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?((homeculina|ionclub777|ineedskin|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze|unhearduniversity).com|(financewrapper|recipes4all|solidcoins).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol)(\/.*)/
// @include /^(https?:\/\/)(.+)?(playonpc.online|quins.us|retrotechreborn.com)(\/.*)/
// @match *://*.shortit.pw/*
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io)(\/.*)/
// @match *://*.ify.ac/*
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.file-upload.in/*
// @match *://*.linksly.co/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.sugarona.com/*
// @match *://*.cekip.site/*
// @match *://*.techleets.xyz/*
// @match *://*.amanguides.com/*
// @match *://*.flybid.net/*
// @match *://*.8tm.net/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @include /^(https?:\/\/)(.+)?(thebloggerspoint.in|ezeviral.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @match *://*.sub2unlock.com/*
// @match *://*.rockmods.net/*
// @match *://*.doodjob.com/*
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bluemedialink.online|bluemediafile\.*)/
// @match *://*.boost.ink/*
// @match *://*.blog.textpage.xyz/*
// @match *://*.foodupe.com/*
// @include /^(https?:\/\/)(.+)?((cricketgurupro|travelkuku).com)(\/.*)/
// @match *://*.freethailottery.live/*
// @match *://*.udrop.com/*
// @match *://*.mirrored.to/*
// @match *://*.sub2unlock.net/*
// @include /^(https?:\/\/)(.+)?((starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link)(\/.*)/
// @match *://*.mboost.me/*
// @include /^(https?:\/\/)(.+)?((disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mbantul.my.id|videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz)(\/.*)/
// @match *://*.aiimgvlog.fun/*
// @include /^(https?:\/\/)(.+)?(dutchycorp.space|dutchycorp.ovh|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort).net|(s2fly|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|zumpa|tlin|weezo|adnews|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(shrinkme|tfly).link|(playstore|adsy|clik).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|addurl.biz)(\/.*)/
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.gocmod.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.diglies.com/*
// @match *://*.ruwet.us/*
// @match *://*.autodime.com/*
// @match *://*.techstudify.com/*
// @match *://*.zubatecno.com/*
// @match *://*.olhonagrana.com/*
// @match *://*.1apple.xyz/*
// @match *://*.dilmibriva.store/*
// @match *://*.caraccidants.xyz/*
// @match *://*.videolyrics.in/*
// @match *://*.trendtrove.vip/*
// @match *://*.blogsward.com/*
// @match *://*.nisnisin.com/*
// @match *://*.candleoflife.fun/*
// @match *://*.suntechu.in/*
// @match *://*.market.finclub.in/*
// @match *://*.bantenexis.com/*
// @match *://*.indirasari.com/*
// @match *://*.wikitraveltips.com/*
// @match *://*.smallinfo.in/*
// @match *://*.mvplaylink.in.net/*
// @match *://*.ww1.linktrims.com/*
// @match *://*.healthynepal.in/*
// @match *://*.missionhight.in/*
// @match *://*.tech.techwhom.com/*
// @match *://*.encurtaclik.com/*
// @match *://*.appkamods.com/*
// @match *://*.cybertechng.com/*
// @match *://*.conghuongtu.net/*
// @match *://*.loan.filmypoints.in/*
// @match *://*.cinemapettai.in/*
// @match *://*.market.gorating.in/*
// @match *://*.videoslyrics.com/*
// @match *://*.earn.tensailab.com/*
// @match *://*.postazap.com/*
// @match *://*.mamahawa.com/*
// @match *://*.prakasheditingtamizhan.com/*
// @match *://*.mmdrive.xyz/*
// @match *://*.reminimod.co/*
// @match *://*.tech.filmypoints.in/*
// @match *://*.dpbossreal.com/*
// @match *://*.tbhlabsnews.com/*
// @match *://*.interestingfactsare.com/*
// @match *://*.dealprice.co/*
// @match *://*.djnonstopmusic.in/*
// @match *://*.tech.filohappy.in/*
// @match *://*.earn.hostadviser.net/*
// @match *://*.kelasadsense.com/*
// @match *://*.viralsinfo.com/*
// @match *://*.www.filmypoints.in/*
// @match *://*.cafe.warrenrahul.in/*
// @match *://*.techurlshort.in/*
// @match *://*.onlinerecruiters.in/*
// @match *://*.battleroyal.online/*
// @match *://*.rajdhanimaja.com/*
// @include /^(https?:\/\/)(.+)?(apasih.my.id|healthydad.my.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((webbooki|webwooks|pranarevitalize|economyeye|techhubcap|surfsees).com|castlemodapk.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nguyenvanbao.com|nghiencar.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @include /^(https?:\/\/)(.+)?(mdn.lol|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vailonxx.com|fun88.bio)(\/.*)/
// @match *://*.multiup.org/*
// @match *://*.modsfire.com/*
// @match *://*.snipn.cc/*
// @match *://*.social-unlock.com/*
// @match *://*.nft.blogyindia.com/*
// @match *://*.my.dropz.xyz/*
// @match *://*.go.blogyindia.com/*
// @match *://*.patak.dropz.xyz/*
// @match *://*.blogyindia.com/*
// @match *://*.sub2unlock.com/*
// @match *://*.crypto.webseriesreel.in/*
// @match *://*.uii.io/*
// @match *://*.shortano.link/*
// @match *://*.shortino.link/*
// @match *://*.clk.st/*
// @match *://*.clks.pro/*
// @match *://*.chainfo.xyz/*
// @match *://*.clicksfly.com/*
// @match *://*.tryshort.in/*
// @match *://*.dailytime.store/*
// @match *://*.ez4short.com/*
// @match *://*.fc.lc/*
// @match *://*.cutp.in/*
// @match *://*.saly.io/*
// @match *://*.earnow.online/*
// @match *://*.exe.io/*
// @match *://*.gplinks.in/*
// @match *://*.linkfly.me/*
// @match *://*.linksfire.co/*
// @match *://*.adlink.click/*
// @match *://*.linkjust.com/*
// @match *://*.linkbulks.com/*
// @match *://*.traffic1s.com/*
// @match *://*.link4rev.site/*
// @match *://*.linkrex.net/*
// @match *://*.opli.xyz/*
// @match *://*.linksly.co/*
// @match *://*.ninjaurl.net/*
// @match *://*.shortyearn.com/*
// @match *://*.upshrink.com/*
// @match *://*.tr.link/*
// @match *://*.megaurl.in/*
// @match *://*.adshort.co/*
// @match *://*.atglinks.com/*
// @match *://*.shrinkforearn.in/*
// @match *://*.shorti.io/*
// @match *://*.try2link.com/*
// @match *://*.terafly.me/*
// @match *://*.www.wts.pw/*
// @match *://*.clk.sh/*
// @match *://*.web1s.com/*
// @match *://*.rocklinks.net/*
// @match *://*.megafly.in/*
// @match *://*.usalink.io/*
// @match *://*.adrinolinks.in/*
// @match *://*.10short.com/*
// @match *://*.urlpay.in/*
// @match *://*.mdiskshortner.link/*
// @match *://*.cbshort.com/*
// @match *://*.droplink.co/*
// @match *://*.adpaylink.com/*
// @match *://*.paid4link.com/*
// @match *://*.cuty.io/*
// @match *://*.doshrink.com/*
// @match *://*.revly.click/*
// @match *://*.shorterall.com/*
// @match *://*.shrinkearn.com/*
// @match *://*.shrinkme.io/*
// @match *://*.shortox.com/*
// @match *://*.linksfly.link/*
// @match *://*.oii.io/*
// @match *://*.ay.live/*
// @match *://*.urlstox.com/*
// @match *://*.gamerfang.in/*
// @match *://*.blog.mphealth.online/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.www.gifans.com/*
// @match *://*.www.pythondunyasi.com/*
// @match *://*.free4u.nurul-huda.or.id/*
// @match *://*.rotator.nurul-huda.sch.id/*
// @match *://*.jrlinks.in/*
// @match *://*.hr.vikashmewada.com/*
// @match *://*.sclick.crazyblog.in/*
// @match *://*.ser7.crazyblog.in/*
// @match *://*.freeltc.top/*
// @match *://*.freecrypto.top/*
// @match *://*.insfly.pw/*
// @match *://*.Insfly.pw/*
// @match *://*.mdiskshortner.link/*
// @match *://*.clockads.in/*
// @match *://*.exashorts.fun/*
// @match *://*.videolyrics.in/*
// @match *://*.terafly.me/*
// @match *://*.adnews.me/*
// @match *://*.kyshort.xyz/*
// @match *://*.eazyurl.xyz/*
// @match *://*.linksfly.top/*
// @match *://*.playstore.pw/*
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|substitutefor|github|freeoseocheck|greenenez|aliyun|reddit|bing|yahoo|microsoft|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google|basketballsavvy|healthyfollicles|hauntingrealm|pluginmixer|boredboard|boardgamechick|healthyfollicles|atlassian|pinterest|twitter|facebook|tiktok|instagram|linkedin|fastbull|tradingview|deskmir|chatgpt|openai|playghub).com|(linksfly|shortsfly|urlsfly|wefly|proton).me|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|misterio.ro|doubleclick.net|adoptimum.top|codepen.io|chefknives.expert|(year21|3zone|blueside).xyz|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude *://x.com/*
// @exclude *://*.live.com/*
// @downloadURL https://github.com/rushiranpise/userscripts/raw/main/Bypass_All_Shortlinks.user.js
// @updateURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js
// ==/UserScript==
// ================================================================================================================================================================
//                                          PLEASE READ SCRIPT INFO BEFORE USE
//                                      PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                 PLEASE DON'T REMOVE OR CHANGE MY BLOG, DISABLE YOUR ADBLOCK IN MY BLOG , THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 , @juansi , @NotYou , @cunaqr And @Rust1667 for Helping me , make my script even better
//                        Thanks so much to @varram for providing a Great Bypass Site bypass.city and adbypass.org
//                                And also Thank you to everyone who has Contributed with Good Feedback.
// =================================================================================================================================================================
// NOTES
// Try to Enable Fast Timer if My Script not Working on besargaji.com
// Popup should be Allowed for render-state.to and coincroco.com sites
// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc
// Debloated Script from Amm0ni4 Just Make Broken My Script and Made Me Lazy to Update, His Debloated Not Working Correctly and He Don't Know how to Fix it

   const window = unsafeWindow; // Some of My Codes Not Running Well Without this , Please Let Me Know if You Find any Bugs
   const cfg = new MonkeyConfig({title: 'Bypass Version 93.4 Settings :', menuCommand: true,
   params: {Announcements : {type: 'text', default: 'Add Your ApiKey from nocaptchaai to use Auto Solve Hcaptcha', long: 3},
    ApiKey: {label: "noCaptcha Ai KEY", type: "text", default: "",},
    SetDelay: {label: "Redirect Delay ", type: "number", default: 5,},
    BlogDelay: {label: "Use My Blogs For Delays", type: "checkbox", default: false,},
    reCAPTCHA: {label: "Auto Open/Solve Recaptcha", type: "checkbox", default: false,}, // Auto Solve Recaptcha Not Yet Ready
    hCaptcha: {label: "Auto Open/Solve Hcaptcha", type: "checkbox", default: false, },
    YTShort: {label: "Disable Youtube Short", type: "checkbox", default: false,},
    RightFC: {label: "Enable Context Menu ", type: "checkbox", default: false,},
    BlockFC: {label: "Enable Always Ready", type: "checkbox", default: false,},
    TimerFC: {label: "Enable Fast Timer ", type: "checkbox", default: false,},
    AutoDL: {label: "Auto Download For Supported Sites", type: "checkbox", default: false,},},});
(function(){function BoostTimers() {const FsT = window.setTimeout; const FsI = window.setInterval;
  Object.defineProperty(window, 'setTimeout', {value: function(func, delay) {if (delay === 1000) {delay = 50;} return FsT.apply(this, arguments);}});
  Object.defineProperty(window, 'setInterval', {value: function(func, delay) {if (delay === 1000) {delay = 50;} return FsI.apply(this, arguments);}});}
  if (cfg.get('TimerFC') == true) {BoostTimers();} else {}})();
(function() { // Please Remember , My Scripts Works Better Using Firefox Browser and Violentmonkey Extension
'use strict';
  const APIKEY = cfg.get('ApiKey'); const bp = query => document.querySelector(query);const BpAll = query => document.querySelectorAll(query);
  const BpParams = new URLSearchParams(location.search);const BpParamd = new URLSearchParams(document.location.search);const RexBp = new RegExp(/^\?([^&]+)/);
  const BpT = query => document.getElementsByTagName(query);const elementExists = query => bp(query) !== null;const domainCheck = domains => new RegExp(domains).test(location.host);
  function BpBlock() {return 1;}
  function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms));}
  function waitForElm(query, callback) {setTimeout(function() {
    if (elementExists(query)) {callback(bp(query));} else {waitForElm(query, callback);}}, 1000);}
  function ClickIfExists(query, timeInSec = 1, funcName = 'setTimeout') {
    if (elementExists(query)) {window[funcName](function() {bp(query).click();}, timeInSec * 1000);}}
  function SubmitIfExists(query, timeInSec = 1, funcName = 'setTimeout') {
    if (elementExists(query)) {window[funcName](function() {bp(query).submit();}, timeInSec * 1000);}}
  function Checkvisibility(elem) {if (!elem.offsetHeight && !elem.offsetWidth) {return false;}
    if (getComputedStyle(elem).visibility === 'hidden') {return false;} return true;}
  function XPathBp(b,p) {p = document; return p.evaluate(b,p,null,9,null).singleNodeValue;}
  function RemoveRef(value) {delete document.referrer; document.__defineGetter__('referrer', () => value);}
  function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), {name: 'referrer',content: 'origin'}));
    Object.assign(document.createElement('a'), {href}).click();}
  function RemoveBp(domain, selector) {const re_domain = new RegExp(domain); if (!re_domain.test(location.host)) return;
    const elements = BpAll(selector);for (const element of elements) {element.remove();}}
  function redirect(url, blog = false) {location = blog && cfg.get('BlogDelay') ? '' + url : url;}
  function BpCalc(sbp) {return (sbp.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || []).reduce(function(sum, value) {return parseFloat(sum) + parseFloat(value);});}
  function BlockRead(SearchString, nameFunc) {var target = window[nameFunc]; window[nameFunc] = function(...args) {const stringFunc = String(args);
    if ((new RegExp(SearchString)).test(stringFunc)) args[0] = function() {}; return target.call(this, ...args);};}
  function DecodeBase64(string, times) {let StringDecoded = string;for (let i = 0; i < times; i++) {StringDecoded = atob(StringDecoded);}return StringDecoded;}
  function SubmitBp(selector, time = 1) {let elem = (typeof selector === 'string') ? bp(selector).closest('form') : selector; console.log(elem); setTimeout(() => {elem.submit();}, time * 1000);}
  function ReadCV(cname) {let name = cname + "=";let decodCV = decodeURIComponent(document.cookie);
    let cv = decodCV.split(';');for (var i = 0; i < cv.length; i++) {let c = cv[i]; while (c.charAt(0) == ' ') {c = c.substring(1);}
      if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}} return "";}
  function elementReady(selector) {return new Promise(function(resolve, reject) {let element = bp(selector);
      if (element) {resolve(element); return;} new MutationObserver(function(_, observer) {element = bp(selector);
      if (element) {resolve(element); observer.disconnect();}}).observe(document.documentElement, {childList: true, subtree: true});});}
  function SetCookie(name, value, days) {if (days) {var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toGMTString();} else {var expires = ""; document.cookie = name + "=" + value + expires + "; path=/";}}
  function DelCookie(name) {SetCookie(name, "", -1);}
  function ReadytoClick(selector, sleepTime = 0) {const events = ["mouseover", "mousedown", "mouseup", "click"];const selectors = selector.split(', ');
    if (selectors.length > 1) {return selectors.forEach(ReadytoClick);}if (sleepTime > 0) {return sleep(sleepTime * 1000).then(function() {ReadytoClick(selector, 0);});}
    elementReady(selector).then(function(element) {element.removeAttribute('disabled');element.removeAttribute('target');
        events.forEach(eventName => {const eventObject = new MouseEvent(eventName, {bubbles: true}); element.dispatchEvent(eventObject);});});}
  function Decrypter(string) {const shift = 13;let decipheredString = ''; for (let i = 0; i < string.length; i++) {let charCode = string.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {decipheredString += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);}
    else if (charCode >= 65 && charCode <= 90) {decipheredString += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);}else {decipheredString += string[i];}}return decipheredString;}
  function Decrypter2(string, Length = 5) {var decrypteds = '',base64 = atob(string),subs = base64.substring(0, Length),encrypted = base64.substring(Length);
    for (let i = 0; i < encrypted.length; i++) {let charCode = encrypted.charCodeAt(i),charCodeKey = subs.charCodeAt(i % subs.length),decrypted = charCode ^ charCodeKey;decrypteds += String.fromCharCode(decrypted);} return decrypteds;}
  function NoFocus() {window.mouseleave = true; window.onmouseover = true; document.hasFocus = function() {return true;}; Object.defineProperty(document, 'webkitVisibilityState', {get() {return 'visible';}});
    Object.defineProperty(document, 'visibilityState', {get() {return 'visible';}}); window.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true);
    window.addEventListener('focus', onfocus, true);document.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true); Object.defineProperty(document, 'hidden', {get() {return false;}});}
  function strBetween(s, front, back, trim = false) {if (trim) {s = s.replaceAll(' ', '');s = s.trim();s = s.replaceAll('\n', ' ');}
      return s.slice(s.indexOf(front) + front.length, s.indexOf(back, s.indexOf(front) + front.length));}
  function BypassedByBloggerPemula(re_domain, data, blog) {if (!re_domain.test(location.host)) return;
    if (typeof data === 'function') return data();if (Array.isArray(data)) data = { '/': data }; if (!(location.pathname in data)) return;const [key, value] = data[location.pathname];
    if (typeof key === 'object' && key.test(location.search)) return redirect(value + RegExp.$1, blog); if (BpParams.has(key)) redirect(value + BpParams.get(key), blog);}
  function BloggerPemula(domains, data, url = '', blog = false, all = false) {if (!domainCheck(domains)) return;
    if (typeof data === 'string' && data.split(',').every(p => BpParams.has(p))) {const use = data.split(',').at(0);
    const def = all ? BpParams.getAll(use).find(u => new RegExp(domains).test(u)) : BpParams.get(use);
    redirect(url + def, blog);} else if (typeof data === 'object') {const o = data[location.pathname]; if (!o) return;BloggerPemula(domains, ...o);}}
  function BypassHD(selector, time) {if (elementExists('.g-recaptcha')) {let gc = setInterval(() => {if (window.grecaptcha.getResponse().length !== 0) {
    clearInterval(gc); SubmitBp('.g-recaptcha', 1);}}, 1000);} else if (elementExists('.h-captcha')) {let hc = setInterval(() => {if (window.hcaptcha.getResponse().length !== 0) {
    clearInterval(hc); SubmitBp('.h-captcha', 1);}}, 1000);} else if (elementExists('.cf-turnstile')) {let tc = setInterval(() => {if (window.turnstile.getResponse().length !== 0) {
    clearInterval(tc); SubmitBp('.cf-turnstile', 1);}}, 1000);} else if (elementExists('input[name=_iconcaptcha-token]')) {Captchacheck(selector);} else {SubmitBp(selector, time);}}
  function GetForm(FormName) {var forms = document.forms; for (var i = 0; i < forms.length; i++) {if (FormName === 'mdn') {var form = forms[i].innerHTML;
      if (form.includes('Step')) {return forms[i];}} else if (FormName === 'Allin1') {var bait = forms[i].action; if (/bypass.html|adblock.html/.test(bait)) continue; return forms[i];} else {return;}}}
  function Captchacheck(selector) {if (elementExists("iframe[src^='https://newassets.hcaptcha.com']")) {return window.hcaptcha.getResponse().length !== 0;
    } else if (elementExists("input[name='cf-turnstile-response']") && !elementExists('.loading-spinner.spacer')) {return window.turnstile.getResponse().length !== 0;} else if (elementExists("iframe[title='reCAPTCHA']")) {return window.grecaptcha.getResponse().length !== 0;
    } else if (elementExists('#iconcaptcha')) {let b = setInterval(() => {let p = bp('.iconcaptcha-holder.iconcaptcha-theme-light.iconcaptcha-success'); if (p) {clearInterval(b); SubmitBp(selector, 1);}}, 1000);} else {return;}}
  function notify(txt, duration = cfg.get('SetDelay')) {const m = document.createElement('div'); m.style.padding = '1px'; m.style.zIndex = 99999999; m.style.position = 'fixed';
    m.style.width = `970px`; m.style.top = '275px'; m.style.left = `${innerWidth / 2 - 485}px`; m.style.font = 'normal bold 17px sans-serif'; m.style.backgroundColor = 'gold'; m.style.boxSizing = 'border-box';
    m.innerText = txt.replace('@', duration); document.documentElement.appendChild(m); const timerId = setInterval(() => {duration -= 1; if (duration <= 0) {clearInterval(timerId);} else {m.innerText = txt.replace('@', duration);}}, 1000);}
  function Listener(callback) {const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", function() { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function EnableRCF() {[].forEach.call(['contextmenu', 'visibilitychange', 'cut', 'paste', 'blur', 'mouseleave', 'keyup', 'drag', 'dragstart', 'hasFocus', 'focus', 'select', 'selectstart', 'webkitvisibilitychange', 'mozvisibilitychange'], function(event) {document.addEventListener(event, function(e) {e.stopPropagation();}, true);});}

  BloggerPemula('gocmod.com', 'urls', '');
  BloggerPemula('writedroid.in', 'token', '');
  BloggerPemula('web1s.com', 'token,url', '');
  BloggerPemula('modmania.eu.org', 'token', '');
  BlockRead('(4d-bl0ck3r|ad-blocker)', 'setTimeout');
  BloggerPemula('diglies.com', 'id', 'https://linkpays.in/');
  BloggerPemula('ruwet.us', 'link', 'https://yo.adlinku.com/');
  BloggerPemula('autodime.com', 'go', 'https://go.linkrex.net/');
  BloggerPemula('techstudify.com', 'link', 'https://rplink.in/');
  BloggerPemula('zubatecno.com', 'link', 'https://go.flyzu.icu/');
  BloggerPemula('olhonagrana.com', 'link', 'https://syflink.com/');
  //BloggerPemula('veganab.co', 'link', 'https://techy.veganab.co/');
  BloggerPemula('1apple.xyz', 'link', 'https://link.turkdown.com/');
  BloggerPemula('dilmibriva.store', 'post', 'https://cutplus.xyz/');
  BloggerPemula('caraccidants.xyz', 'link', 'https://shorterx.com/');
  BloggerPemula('videolyrics.in', 'p', 'https://ser3.crazyblog.in/');
  BloggerPemula('trendtrove.vip', 'post', 'https://tinylinker.pro/');
  BloggerPemula('blogsward.com', 'adlinkfly', 'https://linkpay.top/');
  BloggerPemula('nisnisin.com', 'link', 'https://link.ezlinkad.com/');
  BloggerPemula('candleoflife.fun', 'token', 'https://shortsurl.pro/');
  BloggerPemula('suntechu.in', 'post', 'https://web.urllinkshort.in/');
  BloggerPemula('market.finclub.in', 'link', 'https://go.tnshort.net/');
  BloggerPemula('bantenexis.com', 'link', 'https://link.youshort.net/');
  BloggerPemula('indirasari.com', 'link', 'https://link.paid4link.com/');
  BloggerPemula('wikitraveltips.com', 'link', 'https://adrinolinks.in/');
  BloggerPemula('smallinfo.in', 'link', 'https://filmypoints.in/?link=');
  BloggerPemula('mvplaylink.in.net', 'post', 'https://mplaylink.com/s/');
  BloggerPemula('ww1.linktrims.com', 'link', 'https://go.linktrims.com/');
  BloggerPemula('healthynepal.in', 'link', 'https://go.tgshortener.com/');
  BloggerPemula('missionhight.in', 'link', 'https://playdisk.url2go.in/');
  BloggerPemula('tech.techwhom.com', 'jeton', 'https://we.techwhom.com/');
  BloggerPemula('encurtaclik.com', 'link', 'https://go.encurtaclik.com/');
  BloggerPemula('appkamods.com', 'link', 'https://go.shorturllinks.com/');
  BloggerPemula('cybertechng.com', 'link', 'https://go.cybertechng.com/');
  BloggerPemula('conghuongtu.net', 'adlinkfly', 'https://bitlinks.site/');
  BloggerPemula('loan.filmypoints.in', 'link', 'https://link.e2share.in/');
  BloggerPemula('cinemapettai.in', 'post', 'https://getlink.sxslink.com/');
  BlockRead('(/adblock|/ad-now.php|/bypass|/detected.html)', 'setInterval');
  BloggerPemula('market.gorating.in', 'link', 'https://go.onepagelink.in/');
  BloggerPemula('videoslyrics.com', 'postid', 'https://ser3.crazyblog.in/');
  BloggerPemula('earn.tensailab.com', 'adlinkfly', 'https://go.snaply.in/');
  BloggerPemula('postazap.com', 'link', 'https://encurtador.postazap.com/');
  BloggerPemula('mamahawa.com', 'get', 'https://forextrader.site/SkipLink/');
  BloggerPemula('prakasheditingtamizhan.com', 'link', 'https://kpslink.in/');
  BloggerPemula('mmdrive.xyz', 'link', 'https://techleets.xyz/no.php?link=');
  BloggerPemula('reminimod.co', 'land', 'https://insurance.techymedies.com/');
  BloggerPemula('tech.filmypoints.in', 'go', 'https://finance.smallinfo.in/');
  BloggerPemula('dpbossreal.com', 'adlinkfly', 'https://short.adslinko.com/');
  BloggerPemula('tbhlabsnews.com', 'link', 'https://getlink.tbhlabsnews.com/');
  BloggerPemula('interestingfactsare.com', 'link', 'https://m.urlbharat.xyz/');
  BloggerPemula('dealprice.co', 'adlinkfly', 'https://cryptorotator.website/');
  BloggerPemula('djnonstopmusic.in', 'link', 'https://gadgets.ishortify.com/');
  BloggerPemula('tech.filohappy.in', 'link', 'https://happyfiles.dtglinks.in/');
  BloggerPemula('earn.hostadviser.net', 'token', 'https://go.hostadviser.net/');
  BloggerPemula('kelasadsense.com', 'adlinkfly', 'https://link.paid4link.com/');
  BloggerPemula('viralsinfo.com', 'token', 'https://getslinks.online/download/');
  BloggerPemula('www.filmypoints.in', 'post', 'https://tech.filmypoints.in/?go=');
  BloggerPemula('cafe.warrenrahul.in', 'adlinkfly', 'https://go.warrenrahul.in/');
  BloggerPemula('techurlshort.in', 'grey', 'https://hrpunjab.in/savise.php?grey=');
  BloggerPemula('onlinerecruiters.in', 'link', 'https://diglies.com/token.php?id=');
  BloggerPemula('battleroyal.online', 'link', 'https://zubatecno.com/safe.php?link=');
  BloggerPemula('rajdhanimaja.com', 'grey', 'https://techurlshort.in/inuser.php?grey=');
  //BloggerPemula('highkeyfinance.com', 'landhere', 'https://insurance.techymedies.com/');
  BloggerPemula('apasih.my.id|healthydad.my.id', 'link', 'https://link.get4llink.com/');
  //BloggerPemula('financeyogi.net', 'link', 'https://market.finclub.in/safe2.php?link=');
  BloggerPemula('(gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com', 'link', '');
  BypassedByBloggerPemula(/mixrootmods.com/, function() {EnableRCF();window.checkStatus = window.off;});
  BypassedByBloggerPemula(/go.link4rev.site/, function() {location = location.href.replace('go.', '');});
  BypassedByBloggerPemula(/infinityskull.com/, {'/safe.php': ['link', 'https://go.publicearn.com/'],}, false);
  BypassedByBloggerPemula(/sakarnewz.com/, {'/multi/': [RexBp, 'http://multiquality.xyz/download/'],}, false);
  BypassedByBloggerPemula(/link.linksfire.co/, function() {location = location.href.replace('link', 'blog');});
  BypassedByBloggerPemula(/dutchycorp.space/, function() {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});
  BypassedByBloggerPemula(/(teachsansar|technicalatg|foodxor).com/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
  BloggerPemula('(webbooki|webwooks|pranarevitalize|economyeye|techhubcap|surfsees).com|castlemodapk.co', 'post', 'https://diglies.com/token.php?id=');
  BypassedByBloggerPemula(/vk.com/, function() {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));} else {}});
  BypassedByBloggerPemula(/paster.gg/, () => {if (BpParams.has('link') && location.href.includes('/dynamic-user')) {location = decodeURIComponent(BpParams.get('link'));} else {}});
  BypassedByBloggerPemula(/ouo.io/, function() {if (BpParams.has('s') && location.href.includes('link.nevcoins.club')) {location = 'https://' + BpParams.getAll('s');} else if (BpParams.has('s')) {location = BpParams.getAll('s');}});
  BypassedByBloggerPemula(/linkbox.to/, function() {Listener(function(object) {if (object.url.includes('api/file/detail?itemId')) {console.log(object.responseText);const {data: {itemInfo}} = JSON.parse(object.responseText);console.log(itemInfo); redirect(itemInfo.url, false);}});});
  BypassedByBloggerPemula(/(desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link/, function() {if (BpParams.has('i')) {let Decipher = DecodeBase64(BpParams.get('i'), 5); let dbq = Decrypter(Decipher).split('|')[0];redirect(dbq,false);} else {}});
  BypassedByBloggerPemula(/adbtc.top/, function() {let count = 0; setInterval(function() {if (bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")) {count = 0;
    bp("div.col.s4> a").click();} else {count = count + 1;}}, 5000); window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}
      if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin; unsafeWindow.coinwin = {}; popc.close();}};});
  BypassedByBloggerPemula(/youtube.com/, function() {if (location.href.includes('/shorts/') && cfg.get('YTShort')) {if (cfg.get('YTShort') == true) {location = location.href.replace('/shorts/', '/watch?v=');let Tubeshort = location.href;
    var observer = new MutationObserver(() => {if (location.href !== Tubeshort) {Tubeshort = location.href; if (location.href.includes('/shorts/')) location = location.href.replace('/shorts/', '/watch?v=');}});
    var short = {subtree: true,childList: true}; observer.observe(document, short);}} else {}});
  Object.defineProperty(HTMLFormElement.prototype, 'submit', { writable: false });
  Object.defineProperty(document, 'querySelector', { value: document.querySelector, configurable: false, writable: false });
  const sl = (h => {
    switch (h.host) {case 'multiup.org': if (h.href.includes('/download/')) return h.href.replace('download/', 'en/mirror/'); break;
      case 'modsfire.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://modsfire.com/d/' + RegExp.$1;} break;
      case 'snipn.cc': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://digest.briceka.com/' + RegExp.$1;} break;
      //case 'pixeldrain.com': if (h.href.includes('/u/')) return h.href.replace('u/', '/api/file/') + '?download'; break;
      case 'www.google.com': if (h.pathname === '/url' && h.searchParams.has('q')) {return h.searchParams.get('q');} break;
      case 'social-unlock.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://social-unlock.com/redirect/' + RegExp.$1;} break;
      //case 'work.ink': if (/^\/([^\/]+)/.test(h.pathname) && !location.href.includes('/token/') && !location.href.includes('?r=') && !location.href.includes('?ref=')) {return 'https://adbypass.org/bypass?bypass=' + encodeURIComponent(location.href);} break;
      case 'nft.blogyindia.com':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://go.urlpay.in/' + h.searchParams.get('link');} break;
      case 'my.dropz.xyz':
        if (h.href.includes('/checkpoint') && location.search === '') {return 'https://my.dropz.xyz/checkpoint?redir=/site-friends';} break;
      case 'go.blogyindia.com':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://go.urlblink.com/' + h.searchParams.get('link');} break;
      case 'patak.dropz.xyz':
        if (h.href.includes('/checkpoint') && location.search === '') {return 'https://patak.dropz.xyz/checkpoint?redir=/site-friends';} break;
      case 'blogyindia.com':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://link.blogyindia.com/' + h.searchParams.get('link');} break;
      case 'sub2unlock.com':
        if (/^\/([^\/]+)/.test(h.pathname) && !location.href.includes('/unlock')) {return 'https://sub2unlock.com/link/unlock/' + RegExp.$1;} break;
      case 'crypto.webseriesreel.in':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://nft.blogyindia.com/safe.php?link=' + h.searchParams.get('link');} break;
      case 'uii.io': case 'shortano.link': case 'shortino.link': case 'clk.st': case 'clks.pro': case 'chainfo.xyz': case 'clicksfly.com': case 'tryshort.in':
      case 'dailytime.store': case 'ez4short.com': case 'fc.lc': case 'cutp.in': case 'saly.io': case 'earnow.online': case 'exe.io': case 'gplinks.in':
      case 'linkfly.me': case 'linksfire.co': case 'adlink.click': case 'linkjust.com': case 'linkbulks.com': case 'traffic1s.com': case 'link4rev.site':
      case 'linkrex.net': case 'opli.xyz': case 'linksly.co': case 'ninjaurl.net': case 'shortyearn.com': case 'upshrink.com': case 'tr.link': case 'megaurl.in':
      case 'adshort.co': case 'atglinks.com': case 'shrinkforearn.in': case 'shorti.io': case 'try2link.com': case 'terafly.me': case 'www.wts.pw':
      case 'clk.sh': case 'web1s.com': case 'rocklinks.net': case 'megafly.in': case 'usalink.io': case 'adrinolinks.in': case '10short.com': case 'urlpay.in':
      case 'mdiskshortner.link': case 'cbshort.com': case 'droplink.co': case 'adpaylink.com': case 'paid4link.com': case 'cuty.io': case 'doshrink.com':
      case 'revly.click': case 'shorterall.com': case 'shrinkearn.com': case 'shrinkme.io': case 'shortox.com': case 'linksfly.link': case 'oii.io':
      case 'ay.live': case 'urlstox.com': var ApiandUrl = h.searchParams.has('api') && h.searchParams.has('url');
        if (ApiandUrl && h.href.includes('hr.vikashmewada.com') || h.href.includes('sclick.crazyblog.in') || h.href.includes('ser7.crazyblog.in')) { return 'https://' + h.searchParams.getAll('url');
        } else if (ApiandUrl && h.href.includes('freeltc.top') || h.href.includes('freecrypto.top') || h.href.includes('insfly.pw') || h.href.includes('Insfly.pw') || h.href.includes('mdiskshortner.link') || h.href.includes('clockads.in') || h.href.includes('exashorts.fun') || h.href.includes('videolyrics.in')) {} else if (ApiandUrl && h.href.includes('terafly.me')) {
          return 'https://' + h.searchParams.getAll('url');
        } else if (ApiandUrl && h.href.includes('adnews.me')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/adnews.me/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('kyshort.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/kyshort.xyz/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('eazyurl.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/eazyurl.xyz/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('linksfly.top')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/linksfly.top/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('playstore.pw')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/playstore.pw/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('#')) {return h.searchParams.getAll('url') + window.location.hash;
        } else if (h.searchParams.has('api') && h.searchParams.has('url')) {return h.searchParams.getAll('url');} break; default: break;}})(new URL(location.href));if (sl) {location.href = sl;}
  // Injecting code from start and the end of document coded by @Konf
  if (cfg.get('BlockFC') == true) {NoFocus();} else {}
  if (cfg.get('RightFC') == true) {EnableRCF();} else {}
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    RemoveBp('nguyenvanbao.com|nghiencar.com', '.content-area,.site-content');
    RemoveBp('mohtawaa.com', 'div.form-group > div,.col-sm-12.col-lg-3.col,li,h3,h4,p,.col-sm-12.col-lg-8.col,h2');
    RemoveBp('mdn.lol|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org', "form input[value^='Continue'],form[id] div[style^='margin:']");
    RemoveBp('vailonxx.com|fun88.bio', '.page-header,div.col-xl-3.col-lg-3.col-md-4.col-6,.hero-text,#wrapper-navbar,.happy-section,#wrapper-footer,.col-12.d-md-block.d-none,.col-12.d-md-none.d-block,.modal-dialog');
    let Numcode = bp('input.captcha_code');let DigitNum; function getLeft(d) {return parseInt(d.style.paddingLeft);} if (Numcode) {DigitNum = Numcode.parentElement.previousElementSibling.children[0].children; Numcode.value = [].slice.call(DigitNum).sort(function(d1, d2) {return getLeft(d1) - getLeft(d2);}).map(function(d) {return d.textContent;}).join('');}
    let List = ['lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'];let List1 = ['ay.live', 'aylink.co', 'gitlink.pro']; let $ = window.jQuery; let respect = ''; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations!!!.
    if (List.includes(location.host)) {ClickIfExists('a.btn.btn-success.btn-lg.get-link', 3, 'setInterval');
    } else if (List1.includes(location.host)) { var form = $('form[id=go-link]');$.ajax({type: 'POST', async: true, url: form.attr('action'),data: form.serialize(),dataType: 'json',
        success: function(data) {redirect(data.url);}});} else if (elementExists('form[id=go-link]')) {$('form[id=go-link]').unbind().submit(function(e) {e.preventDefault();
        var form = $(this);var url = form.attr('action');const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse");const blogger = $(".main-header");const pemula = $(".col-sm-6.hidden-xs");
        $.ajax({type: "POST", url: url, data: form.serialize(), beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
            notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');},
          success: function(result, status, xhr) {if (xhr.responseText.match('(insfly|Insfly).pw|(freecrypto|freeltc|a-s-cracks).top|mdiskshortner.link|(oscut|exashorts).fun|bigbtc.win|adbitfly.com|slink.bid|clockads.in|(promo-visits|rexlink).site')) {location.href = result.url;} else {redirect(result.url);}}});});}
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
      switch (h.host) {
        case 'gamerfang.in': if (b) {meta('https://faux.gamerfang.in/tech/' + RegExp.$1);} break;
        case 'blog.mphealth.online': if (b) {meta('https://techyuth.xyz/blog/' + RegExp.$1);} break;
        case 'mphealth.online': if (b) {meta('https://blog.mphealth.online/verify/?' + RegExp.$1);} break;
        case 'shrs.link': case 'shareus.io':
          if (/^\/old\/([^\/]+)/.test(h.pathname)) {return 'https://jobform.in/?link=' + RegExp.$1;} break;
        case 'www.gifans.com':
          if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://shortlink.prz.pw/' + RegExp.$1;} break;
        case 'www.pythondunyasi.com':
          if (h.pathname === '/p/blog-page_22.html' && h.searchParams.has('url')) {return h.searchParams.get('url').substring(1);} break;
        case 'free4u.nurul-huda.or.id': case 'rotator.nurul-huda.sch.id': if (h.pathname === '/' && h.searchParams.has('BypassResults')) {
          result.link = decodeURIComponent(location.href.split('BypassResults=')[1].replace('&m=1', ''));
          result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; return result;} break;
        case 'jrlinks.in':
          if (h.pathname === '/safe2.php' && h.searchParams.has('link')) {meta('https://internet.webhostingtips.club/' + h.searchParams.get('link'));} break;
        default: break;}})(new URL(location.href)); if (bas) {const {isNotifyNeeded, redirectDelay, link} = bas;
      if (isNotifyNeeded) {notify(`Please Wait in @ Seconds , Tell Amm0ni4 to Delete His Debloated if You Want My Script to be Updated Regularly , Thanks`);}
      setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    // My Script will automatically download from the site below , Enable it from the Settings
    if (cfg.get('AutoDL') == true) {
    BypassedByBloggerPemula(/upload.ee/, function() {ClickIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/appdrive\.*/, function() {ClickIfExists('#drc', 2);});
    BypassedByBloggerPemula(/dddrive.me/, function() {ClickIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/uppit.com/, function() {ClickIfExists('.btn-primary.btn-xl.btn', 2);});
    BypassedByBloggerPemula(/krakenfiles.com/, function() {ClickIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/gofile.io/, function() {waitForElm('a.me-1', gfBtn => gfBtn.click());});
    BypassedByBloggerPemula(/birlink.vip/, function() {ClickIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/karanpc.com/, function() {SubmitIfExists('#downloadButton > form', 2);});
    BypassedByBloggerPemula(/file-upload.net/, function() {ClickIfExists('#downbild.g-recaptcha', 2);});
    BypassedByBloggerPemula(/userscloud.com|dosya.co/, function() {ClickIfExists('#btn_download', 2);});
    BypassedByBloggerPemula(/hexupload.net/, function() {ClickIfExists('.btn-success.btn-lg.btn', 1);});
    BypassedByBloggerPemula(/rapidgator.net/, function() {ClickIfExists('.btn-free.act-link.link', 2);});
    BypassedByBloggerPemula(/dbree.me/, function() {ClickIfExists('.center-block.btn-default.btn', 2);});
    BypassedByBloggerPemula(/megaupto.com/, function() {ClickIfExists('#direct_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/dataupload.net/, async function() {await sleep(5000);ReadytoClick('.downloadbtn');});
    BypassedByBloggerPemula(/douploads.net/, function() {ClickIfExists('.btn-primary.btn-lg.btn-block.btn', 2);});
    BypassedByBloggerPemula(/linkerload.com/, function() {ClickIfExists("#download form input[id='button1']", 2);});
    BypassedByBloggerPemula(/buzzheavier.com/, function() {waitForElm('#download-link', bhvBtn => bhvBtn.click());});
    BypassedByBloggerPemula(/filemoon.sx/, () => waitForElm('div.download2 a.button', fm => redirect(fm.href, false)));
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    BypassedByBloggerPemula(/oyroid.com/, function() {window.triggerFreeDownload();ReadytoClick('.py-3.w-100.btn-success.btn', 5);});
    BypassedByBloggerPemula(/files.fm/, () => waitForElm('#head_download__all-files > div > div > a:nth-child(1)', flBtn => flBtn.click()));
    BypassedByBloggerPemula(/megaup.net/, function() {waitForElm('a.btn.btn-default', muBtn => muBtn.click());ClickIfExists('#btndownload', 7);});
    BypassedByBloggerPemula(/4fnet.org/, function() {if (location.href.includes('/goto')) {let fnet = location.href.split('/').slice(-1);redirect(atob(fnet),false);}});
    BypassedByBloggerPemula(/oxy\.*/, function() {if (elementExists('#divdownload')) {let oxy = bp('.ocdsf233').getAttribute('data-source_url');redirect(oxy, false);}});
    BypassedByBloggerPemula(/gdtot\.*/, function() {let gdt = setInterval(() => {if (Captchacheck()) {clearInterval(gdt);SubmitIfExists("form[action='/ondl']");}}, 1 * 1000);
      if (location.href.includes('/ondl')) {waitForElm('#dirdown', gdt2 => redirect(strBetween(gdt2.onclick.toString(), `myDl('`, `')`),false));}});
    BypassedByBloggerPemula(/mp4upload.com/, function() {
      ClickIfExists('#todl', 2);SubmitIfExists("form[name='F1']", 1);});
    BypassedByBloggerPemula(/drop.download/, function() {
      ClickIfExists('#method_free', 2);ClickIfExists('.btn-download', 2);});
    BypassedByBloggerPemula(/workupload.com/, function() {
      if (elementExists('#download')) {ClickIfExists('.btn-prio.btn', 2);}});
    BypassedByBloggerPemula(/hxfile.co|ex-load.com|megadb.net/, function() {
      ClickIfExists('.btn-dow.btn', 2);SubmitIfExists("form[name='F1']", 1);});
    BypassedByBloggerPemula(/send.cm/, function() {
      if (elementExists('#fileinfo')) {ClickIfExists('#downloadbtn', 1);} else {}});
    BypassedByBloggerPemula(/racaty.io/, function() {
      if (elementExists('#getExtoken')) {ClickIfExists('#downloadbtn', 1);} else {}});
    BypassedByBloggerPemula(/racedepartment.com/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('.button--cta', 2);});
    BypassedByBloggerPemula(/mega4up.org/, function() {
      ClickIfExists('input.btn.btn-info.btn-sm', 2);ClickIfExists('.btn-dark.btn', 2);});
    BypassedByBloggerPemula(/docs.google.com/, function() {
      if (elementExists('#uc-dl-icon')) {SubmitIfExists('#downloadForm', 1);} else {}});
    BypassedByBloggerPemula(/uploadhaven.com/, function() {
      ClickIfExists('.alert > a:nth-child(1)', 2);SubmitIfExists('#form-download', 1);});
    BypassedByBloggerPemula(/novafile.org/, function() {let nf = setInterval(() => {
        if (Captchacheck()) {clearInterval(nf);ClickIfExists('.xbtn-green');}}, 1 * 1000);
      ClickIfExists('#btnddl', 90);ClickIfExists('a.btn.btn-green', 1);});
    BypassedByBloggerPemula(/k2s.cc/, function() {ClickIfExists('.button-download-slow', 2);
      waitForElm('a.link-to-file', k2s => redirect(k2s.href, false));});
    BypassedByBloggerPemula(/ac.totsugeki.com/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/mega4upload.com/, function() {
      let mu = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);
      ClickIfExists('.btn-sm.btn-info.btn', 1);ClickIfExists('.btn-dark.btn-sm.btn', 1);});
    BypassedByBloggerPemula(/uploady.io/, function() {
      let udy = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);
      ClickIfExists('.fa-turtle.fas', 2);ClickIfExists('.mb-4.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/up-load.io|downloadani.me/, function() {ClickIfExists("input[name='method_free']", 2);
      ClickIfExists('.btn-dow.btn', 1);let upi = setInterval(() => {
        if (Captchacheck()) {clearInterval(upi);ClickIfExists('#downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/anonym.ninja/, function() {
      if (location.href.includes('download/')) {var fd = window.location.href.split('/').slice(-1)[0];
      redirect(`https://anonym.ninja/download/file/request/${fd}`);} else {}});
    BypassedByBloggerPemula(/vosan.co/, function() {bp('.elementor-size-lg').removeAttribute('target');
      ClickIfExists('.elementor-size-lg', 2);ClickIfExists('.wpdm-download-link', 2);});
    BypassedByBloggerPemula(/apkmody.io/, function() {
      if (elementExists('div.wp-block-buttons > div')) {location = location.href + '/download/mod';}});
    BypassedByBloggerPemula(/mdfx9dc8n.net/, () => {ClickIfExists('.download-btn', 2);
      setTimeout(() => {let md = bp('.download-btn.btn3.btn');redirect(md.href, false);}, 6 * 1000);});
    BypassedByBloggerPemula(/takefile.link/, function() {
      if (elementExists('#F1')) {SubmitIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)', 1);} else {}});
    BypassedByBloggerPemula(/chedrives.com/, function() {ClickIfExists('.downloadbtn', 3, 'setInterval');
      ClickIfExists('.mngez-free-download', 2);waitForElm('span#direct_link a', cd => redirect(cd.href, false));});
    BypassedByBloggerPemula(/appsblaze.com/, function() {
      if (elementExists('#box-0')) {waitForElm("input[name='slink']", abl => redirect(abl.href, false));} else {}});
    BypassedByBloggerPemula(/modcombo.com/, function() {
      if (location.href.includes('download/')) {waitForElm('div.item.item-apk a', mc => redirect(mc.href, false));
        ClickIfExists('a.btn.btn-submit', 6);} else {ClickIfExists('a.btn.btn-red.btn-icon.btn-download.br-50', 2);}});
    BypassedByBloggerPemula(/userupload.net/, function() {
      let upl = setInterval(() => {if (Captchacheck()) {clearInterval(upl);ClickIfExists('#downloadbtn');}}, 1 * 1000);
      waitForElm('a.btn.btn-primary.btn-block.mb-4', upl2 => redirect(upl2.href, false));});
    BypassedByBloggerPemula(/1fichier.com/, function() {
      if (elementExists('#pass')) {} else {ClickIfExists('.btn-orange.btn-general.ok', 1);SubmitIfExists('.alc', 1);}});
    BypassedByBloggerPemula(/upload-4ever.com|up-4ever.net/, function() {
      ClickIfExists("input[name='method_free']", 2);ClickIfExists('#downLoadLinkButton', 5);
      let up4 = setInterval(() => {if (Captchacheck()) {clearInterval(up4);ClickIfExists('#downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/fileresources.net/, function() {
      if (elementExists('.download-timer')) {waitForElm('a.btn.btn-default', fpr => redirect(fpr.href, false));} else {}});
    BypassedByBloggerPemula(/3upload.com/, function() {ClickIfExists('.btn-info.btn', 2);
      let plc = setInterval(() => {if (Captchacheck()) {clearInterval(plc);ClickIfExists('#downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/freepreset.net/, function() {
      if (elementExists('#button_download')) {waitForElm('a#button_download', fpr => redirect(fpr.href, false));} else {}});
    BypassedByBloggerPemula(/doodrive.com/, function() {ClickIfExists('.tm-button-download.uk-button-primary.uk-button', 3);
      waitForElm('.uk-container > div > .uk-button-primary.uk-button', ddr => redirect(ddr.href, false));});
    BypassedByBloggerPemula(/gocmod.com/, function() {
      if (elementExists('.view-app')) {bp('#no-link').removeAttribute('target');ClickIfExists('.download-line-title', 2);}});
    BypassedByBloggerPemula(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, function() {ClickIfExists('.mngez-free-download', 2);
      ClickIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
    BypassedByBloggerPemula(/dailyuploads.net/, function() {let du = setInterval(() => {
        if (Captchacheck()) {clearInterval(du);ClickIfExists('#downloadBtnClickOrignal');}}, 500);ClickIfExists('.inner > a', 2);});
    BypassedByBloggerPemula(/9xupload.asia/, function() {SubmitIfExists("form[name='F1']", 1);
      ClickIfExists('#container > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/mediafire.com/, function() {var bass;var md = function closeWindows() {window.close();clearInterval(bass);};
      var mf = bp('.download_link .input').getAttribute('href');console.log(mf);location.replace(mf);bass = setInterval(md, 1000 * 5);});
    BypassedByBloggerPemula(/qiwi.gg/, function() {if (elementExists("div [class^='page_DownloadPage']")) {
      ClickIfExists("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
        let qiwi = bp("a[class^='DownloadButton_DownloadButton']"); setTimeout(() => {redirect(qiwi.href, false);}, 3 * 1000);} else {}});
    BypassedByBloggerPemula(/usersdrive.com|ddownload.com/, function() {
      let ud = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);ClickIfExists('.btn-download.btn', 1);});
    BypassedByBloggerPemula(/sharemods.com/, function() {SubmitIfExists('#dForm', 2);
      if (elementExists('.download-file-holder')) {waitForElm('a#downloadbtn.btn.btn-primary', smd => redirect(smd.href, false));} else {}});
    BypassedByBloggerPemula(/mexa.sh/, function() {parent.open = BpBlock();ClickIfExists('#Downloadfre', 2);ClickIfExists('#direct_link', 2);
      let mx = setInterval(() => {if (Captchacheck()) {clearInterval(mx);ClickIfExists('.downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/(kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*/, function() {
      waitForElm('.bg-gb.dwto.sdw', kmBtn => kmBtn.click());waitForElm('a.sdw.dwto.bg-gb', kmk => redirect(kmk.href, false));});
    BypassedByBloggerPemula(/pdfcoffee.com/, function() {ClickIfExists('.btn-block.btn-success.btn', 2);
      let pdf = setInterval(() => {if (Captchacheck()) {clearInterval(pdf);ClickIfExists('.my-2.btn-block.btn-primary.btn-lg.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/adoc.pub/, function() {ClickIfExists('.btn-block.btn-success.btn', 2);
      let adp = setInterval(() => {if (Captchacheck()) {clearInterval(adp);ClickIfExists('.mt-15.btn-block.btn-success.btn-lg.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/clickndownload.org|clicknupload\.*/, function() {if (elementExists('.download')) {ClickIfExists('span.downloadbtn', 10);
      ClickIfExists('#method_free', 2);waitForElm('a.downloadbtn', cnu => redirect(cnu.href, false));}});
    BypassedByBloggerPemula(/leechpub.com/, function() {
      if (elementExists('.text-center.py-6')) {waitForElm('a.btn.btn-lg.btn-success.mb-1.px-6.lh-10', lpub => redirect(lpub.href, false));} else {}});
    BypassedByBloggerPemula(/uploadev.org/, function() {let ude = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);
      ClickIfExists('#dspeed > input:nth-child(3)', 1);ClickIfExists('.directl', 1);});
    BypassedByBloggerPemula(/rawlazy.si/, function() {
      if (elementExists('#captcha_form')) {ClickIfExists('.go-to-captcha-form', 2);} else {waitForElm('.color-btn', rlz => redirect(rlz.href, false));}});
    BypassedByBloggerPemula(/modsbase.com/, function() {
      if (elementExists('.file-panel')) {ClickIfExists('.download-file-btn', 2);waitForElm('#downloadbtn > a', mba => redirect(mba.href, false));} else {}});
    BypassedByBloggerPemula(/dropgalaxy.com/, function() {ClickIfExists("button[id^='method_fre']", 2);
      ClickIfExists("button[name='fs_download_file']", 3, 'setInterval');waitForElm('a.btn.btn-block.btn-lg.btn-primary', dg => redirect(dg.href, false));});
    BypassedByBloggerPemula(/file-upload.com|file-upload.org/, function() {ClickIfExists('.m-2.submit-btn.btn-outline-primary.btn', 2);ClickIfExists('.download-btn', 2);
      let fu = setInterval(function() {if (Captchacheck()) {clearInterval(fu);ClickIfExists('#downloadbtn');}}, 500);});
    BypassedByBloggerPemula(/downloader.tips/, () => {let downloader = setInterval(() => {if (Captchacheck()) {clearInterval(downloader);
      ClickIfExists('.mb-1 > .btn-primary.btn');} else if (bp('#count').innerText == '0') {clearInterval(downloader); ClickIfExists('.btn-primary.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/hitfile.net/, function() {let hf = setInterval(() => {if (Captchacheck()) {clearInterval(hf);ClickIfExists('#submit');}}, 1 * 1000);
      waitForElm('a.btn-grey.nopay-btn', hfl => redirect(hfl.href, false));waitForElm('#popunder2', hfl2 => redirect(hfl2.href, false));});
    BypassedByBloggerPemula(/(thecubexguide|miuiflash).com|(djxmaza|jytechs).in/, function() {if (elementExists('.premium')) {
        ReadytoClick('a#dlbtn.btn.btn-secondary.btn-block.mb-4', 2);ClickIfExists('#downloadbtnf', 3);ClickIfExists('#downloadbtn', 4, 'setInterval');} else {}});
    BypassedByBloggerPemula(/filedm.com/, function() {
      if (elementExists('#dlbutton')) {waitForElm('#dlbutton', fdm => redirect('http://cdn.directfiledl.com/getfile?id=' + fdm.href.split('_')[1], false));} else {}});
    BypassedByBloggerPemula(/gogodl.com/, () => {waitForElm('a.crumina-button.button--green.button--bordered.button--m.w-100', godl => redirect(godl.href, false));
      ClickIfExists('.w-100.button--m.button--bordered.button--green.crumina-button', 5, 'setInterval');
      let gogo = setInterval(() => {if (Captchacheck()) {clearInterval(gogo);ClickIfExists('.w50.button--m.button--bordered.button--green.crumina-button');}}, 1 * 1000);});
    BypassedByBloggerPemula(/turbobit.net/, () => {if (elementExists('#turbo-table')) {let tb = bp('#nopay-btn').href;redirect(tb, false);}
      let tbb = setInterval(() => {if (Captchacheck()) {clearInterval(tbb);ClickIfExists('#submit');}}, 500); waitForElm('#free-download-file-link', tur => redirect(tur.href, false));});
    BypassedByBloggerPemula(/drive.google.com/, function() {var dg = window.location.href.split('/').slice(-2)[0];
      if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https://drive.usercontent.google.com/download?id=${dg}&export=download`, false).replace('<br />', '');
      } else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {SubmitIfExists('#download-form', 1);} else {}});
    BypassedByBloggerPemula(/4shared.com/, function() {if (elementExists('.d3topTitle')) {
        $('.premium').text('IMPORTANT TRICKS By BloggerPemula : Updated Feb 2023, Look like now not working ,so Sorry at This Time i Dont have Idea to fix it . Regards...');}
      ClickIfExists('.jsDownloadButton', 2);if (elementExists('.freeDownloadButton')) {SubmitIfExists("form[name^='redirectToD3Form']", 3);}});
    } else {} // Does Nothing if You Not Tick Auto Download From Menu Settings
    // End of Auto Download , Leave Good Feedback if Your Favorite Sites Not yet Supported or Error on Downloading Process

    BypassedByBloggerPemula(/megaurl.win/, () => {ClickIfExists('#generate_link', 2);});
    BypassedByBloggerPemula(/keeplinks.org/, function() {ClickIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/1short.io/, function() {SubmitIfExists('#countDownForm', 7);});
    BypassedByBloggerPemula(/earnlink.io/, function() {ClickIfExists('.btn-secondary', 3);});
    BypassedByBloggerPemula(/mkomsel.com/, function() {ClickIfExists('#downloadfile', 12);});
    BypassedByBloggerPemula(/onimports.com.br/, function() {ClickIfExists('#finalLink', 2);});
    BypassedByBloggerPemula(/1shortlink.com/, function() {ClickIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/1ink.cc|cuturl.cc/, function() {ClickIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/jameeltips.us/, function() {ClickIfExists('#continue_button_1', 1);});
    BypassedByBloggerPemula(/post.copydev.com/, function() {ClickIfExists('.btn-success.btn', 6);});
    BypassedByBloggerPemula(/linegee.net/, function() {ClickIfExists('.btn-xs.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/bedrat.xyz|uhtrdr47.online/, function() {ClickIfExists('#link1112', 5);});
    BypassedByBloggerPemula(/pro.sh/, function() {ClickIfExists('.btn-secondary', 3, 'setInterval');});
    BypassedByBloggerPemula(/proappapk.com|meclipstudy.in/, function() {ClickIfExists('#gotolink', 5);});
    BypassedByBloggerPemula(/1bitspace.com/, function() {ClickIfExists('.button-element-verification',3);});
    BypassedByBloggerPemula(/cshort.org/, function() {ClickIfExists('.timer.redirect', 3, 'setInterval');});
    BypassedByBloggerPemula(/render-state.to/, function() {if (BpParams.has('link')) {window.goToLink();}});
    BypassedByBloggerPemula(/linkpay.cc/, function() {parent.open = BpBlock(); SubmitIfExists('#link-view', 1);});
    BypassedByBloggerPemula(/cooklike.info|model-tas-terbaru.com/, {'/': ['link', 'https://yousm.link/'],}, false);
    BypassedByBloggerPemula(/kisalt.digital/, function() {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/bildirim.in|bildirim.eu|bildirim.link/, function() {ClickIfExists('#btnPermission', 1);});
    BypassedByBloggerPemula(/enlacito.com/, function() {setTimeout(() => {redirect(window.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/webhostingtips.club/, {'/safe.php': ['link', 'https://jrlinks.in/safe2.php?link='],}, false);
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/shareus.io/, function() {if (BpParams.has('sid')) {ReadytoClick('button.MuiButtonBase-root', 2);}});
    BypassedByBloggerPemula(/adtival.network/, function() {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online/, function() {ClickIfExists('#mdt', 3);});
    BypassedByBloggerPemula(/gameblog.in/, function() {EnableRCF();SubmitBp('input[type=hidden]', 3);ClickIfExists("div[id^=wpsafe-link] > a", 4);});
    BypassedByBloggerPemula(/sharetext.me/, function() {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/(cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online/, function(){ClickIfExists('#submit-button', 5, 'setInterval');});
    BypassedByBloggerPemula(/sfl.gl|moneyblink.com/, function() {if (location.href.includes('/ready') && BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/comohoy.com/, function() {if (location.href.includes('/grab/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/apkw.ru/, function() {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw),false);}});
    BypassedByBloggerPemula(/cryptomonitor.in|2the.space|imbb.online/, function() {EnableRCF();SubmitIfExists("form[name='dsb']", 3);ClickIfExists('#wpsafe-link > a', 4);});
    BypassedByBloggerPemula(/(newsbawa|utkarshonlinetest|techbezzie).com/, function() {ClickIfExists('#citr-click', 2);ClickIfExists('#citr-click-f', 3);ClickIfExists('#GetLink', 4);});
    BypassedByBloggerPemula(/programasvirtualespc.net/, function() {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);} else {}});
    BypassedByBloggerPemula(/horoscop.info|infonerd.org/, function() {let horos = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(horos.value)).linke,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/(blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro/, function() {if (BpParams.has('r')) {meta(atob(BpParams.get('r')));}});
    BypassedByBloggerPemula(/bitcrypto.info|offerinfo.net/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", bitcry => redirect(strBetween(bitcry.onclick.toString(), `handleClick('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/bitzite.com|cryptoad.org|article24.online|dailytechz.info/, function() {let bitzite = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(bitzite.value)).linkr,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/(tinycmd|tinybc).com/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `handleClick('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/coingraph.us|eblog.pro|writeprofit.org/, function() {let Alcatraz = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Alcatraz.value)).linke,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com/, function() {let hostrat = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(hostrat.value)).linkr,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/nullscript.info|freebinance.top/, function() {waitForElm('div#wpsafe-link > a', function(element) {const regex = /redirect=(.*)',/;const m = regex.exec(element.onclick.toString())[1];location.href = JSON.parse(atob(m)).safelink;});});
    BypassedByBloggerPemula(/(10short|lollty).pro|mamahawa.com/, function() {ReadytoClick('center > .btn-success.btn', 3);waitForElm('a#makingdifferenttimer', st1 => redirect(st1.href, false));waitForElm('a#proceed', st2 => redirect(st2.href, false));});
    BypassedByBloggerPemula(/(aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/cryptfaucet.com|izseo.net/, function() {window.checkTimeRemaining = true;let cryptf = bp("div[id^=wpsafe] > a[rel=nofollow]");setTimeout(() => {redirect(strBetween(cryptf.onclick.toString(), `window.open('`, `', '_self')`), false);}, 5 * 1000);});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst).com|ss7.info|sololevelingmanga.pics/, () => {ClickIfExists('#getlink', 3);});
    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){ClickIfExists('#tp-snp2.tp-blue.tp-btn', 2);ClickIfExists('.tp-white.tp-btn', 3);});
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/largestpanel.in|earnme.club|usanewstoday.club/, function() {ClickIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/paste1s.com|note1s.com/, function() {ClickIfExists('.btn-lg.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/terabox.fun/, async function() {await sleep(3000);ReadytoClick('.active.btn');});
    BypassedByBloggerPemula(/ayelads.com/, function() {
      ClickIfExists('.btn-bl.btn-primary.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/karyawan.co.id/, function() {
      ClickIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/icerik.site/, function() {
      ClickIfExists('#csubmit', 2);ClickIfExists('#get_link_btn', 2);});
    BypassedByBloggerPemula(/ponselharian.com/, function() {
      if (elementExists('#link-view')) {window.scrollTo(0, 9999);}});
    BypassedByBloggerPemula(/assettoworld.com/, function() {
      ClickIfExists('.text-capitalize.btn-outline-success.btn', 3);});
    BypassedByBloggerPemula(/adfoc.us/, function() {
      if (elementExists('#skip')) {let adf = bp('.skip').href; redirect(adf);}});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, function() {
      SubmitIfExists('#yuidea', 2);ClickIfExists('#btn6', 2);});
    BypassedByBloggerPemula(/oii.io/, function() {parent.open = BpBlock();
      ClickIfExists('button.g-recaptcha.btn.btn-primary', 2);});
    BypassedByBloggerPemula(/cpu-miner.leaks.work/, function() {
      ClickIfExists('.xbtt.btn-primary.btn-lg.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/mrproblogger.com|themezon.net/, function() {
      waitForElm('#btn2.tp-btn', mrBp => mrBp.click());
      waitForElm('div.center-link-items a', thz => redirect(thz.href, false));});
    BypassedByBloggerPemula(/forex-golds.com|forex-trnd.com/, function() {
      parent.open = BpBlock();ClickIfExists('.g-recaptcha', 2);});
    BypassedByBloggerPemula(/1link.club/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('#download', 1);});
    BypassedByBloggerPemula(/slink.bid/, function() {
      ClickIfExists('#btn-generate', 1);
      ClickIfExists('.btn-success.btn', 5);});
    BypassedByBloggerPemula(/blog.yurasu.xyz/, function() {
      ClickIfExists('#wcGetLink', 2);ClickIfExists('#gotolink', 3);});
    BypassedByBloggerPemula(/zegtrends.com/, function() {SubmitIfExists('#cln', 5);
      ClickIfExists('#bt1', 5);ClickIfExists('#go', 5);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech/, function() {
      waitForElm('.mb-sm-0.mt-3.btnBgRed', ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/bcvc.xyz|bcvc.ink/, function() {
      ClickIfExists('.js-scroll-trigger.btn-xl.btn-outline.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/dear-lottery.org|(superheromaniac|spatsify).com/, function() {
      ClickIfExists('#tp98', 10);SubmitIfExists("form[name='tp']", 11);});
    BypassedByBloggerPemula(/bitcoinfaucet.fun|freebitcoin.win/, function() {
      ClickIfExists('#continue2', 3, 'setInterval');ClickIfExists('#continue', 4, 'setInterval');});
    BypassedByBloggerPemula(/bestadvise4u.com/, function() {ClickIfExists('.rd_btn', 1);
      waitForElm('.rd_btn', ba4 => redirect(ba4.href, false));});
    BypassedByBloggerPemula(/linkspy.cc/, function() {
      if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/(webhostingpost|tophostingapp|digitalmarktrend).com/, function() {
      SubmitIfExists('form.text-center', 3);ClickIfExists('#surl', 5, 'setInterval');});
    BypassedByBloggerPemula(/4hi.in/, () => {SubmitIfExists('#form-continue', 2);let ahi = setInterval(() => {
        if (Captchacheck()) {clearInterval(ahi);ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);});
    BypassedByBloggerPemula(/(chooyomi|blogmado|kredilerim|insuranceleadsinfo).com/, function() {
      let bm = setInterval(() => {if (Captchacheck()) {clearInterval(bm); ClickIfExists('button.btn');}}, 1 * 1000);
      waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false));});
    BypassedByBloggerPemula(/(kiktu|techcyan).com/, function() {let kkt = setInterval(() => {
      if (Checkvisibility(bp('.tick.wgicon'))) {clearInterval(kkt); ReadytoClick('.bottom_btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/fexkomin.xyz/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('.btn-captcha.btn-danger.btn', 3);});
    BypassedByBloggerPemula(/100puan.com/, function() {
      ClickIfExists('.big-text', 3);waitForElm('div.bb-sticky-el a', pbz => redirect(pbz.href, false));});
    BypassedByBloggerPemula(/sub2get.com/, function() {
      if (elementExists('#butunlock')) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/(fc-lc|loaninsurehub).com|fc-lc.xyz/, function() {ClickIfExists('#invisibleCaptchaShortlink', 3);
      ClickIfExists('#getlink', 3);ClickIfExists('#glink', 4);ClickIfExists('#surl', 5);});
    BypassedByBloggerPemula(/mneyvip.com/, function() {
      ClickIfExists('.get-link.btn-lg.btn-success.btn', 6);SubmitIfExists('.box-main > form:nth-child(1)', 1);});
    BypassedByBloggerPemula(/jobform.in/, function() {ClickIfExists('#scanURL', 1);
      ClickIfExists('#topClickButton', 1);ClickIfExists('#bottomClickButton', 27);});
    BypassedByBloggerPemula(/go.shareus.in/, function() {
      if (BpParams.has('shortid') && BpParams.has('link')) {meta(atob(BpParams.get('link')));}});
    BypassedByBloggerPemula(/playpaste.com/, function() {
      let pps = setInterval(() => {if (Captchacheck()) {clearInterval(pps);ClickIfExists('button.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/suratresmi.id/, function() {
      ClickIfExists('button#hmn.btn-more', 3, 'setInterval');ClickIfExists('a#hmn.btn-more', 3, 'setInterval');});
    BypassedByBloggerPemula(/examkhata.com|gamelopte.com/, function() {
      ClickIfExists('#btn6', 3);waitForElm('a.yu-btn.yu-blue', exa => redirect(exa.href, false));});
    BypassedByBloggerPemula(/rancah.com|menjelajahi.com|shortly.xyz|nyawang.com/, function() {
      ClickIfExists('.get-link.btn-lg.btn-success.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/cryptotracker.space/, function() {
      let cts = setInterval(() => {if (Captchacheck()) {clearInterval(cts);SubmitIfExists('#form-continue');}}, 1 * 1000);});
    BypassedByBloggerPemula(/stfly.me/, function() {
      if (elementExists('.g-recaptcha')) {} else {ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3);}});
    BypassedByBloggerPemula(/khaddavi.net|contentmenarik.com/, function() {parent.open = BpBlock();
      setInterval(function() {if (Captchacheck()) {ClickIfExists('#slu-btn');}}, 500);});
    BypassedByBloggerPemula(/leitup.com/, function() {
      if (elementExists('#button_timer')) {waitForElm('input.form-control', leit => redirect(leit.placeholder, false));}});
    BypassedByBloggerPemula(/offeroc.com/, function() {let ofr = setInterval(() => {
        if (Captchacheck()) {clearInterval(ofr);ClickIfExists('.mt-2.btn-success.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/azmath.info|expertvn.com/, () => {if (elementExists('#megaurl-verified-captcha')) {
      ClickIfExists('button.h-captcha', 3);} else {SubmitIfExists('#megaurl-banner-page', 2);}});
    BypassedByBloggerPemula(/www.google.com|recaptcha.net/, async function() {await sleep(3000) && cfg.get('reCAPTCHA') && cfg.get('ApiKey');
      if (!APIKEY && cfg.get('reCAPTCHA') == true) {ReadytoClick('.recaptcha-checkbox-border');} else {}});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {await sleep(3000) && cfg.get('hCaptcha') && cfg.get('ApiKey');
      if (!APIKEY && cfg.get('hCaptcha') == true) {ReadytoClick('#checkbox');} else {}});
    BypassedByBloggerPemula(/(ez4mods|tensailab|game5s|supermodsmenus).com|tech5s.co/, function() {SubmitIfExists('div.text-center form', 2);ReadytoClick('#go_d', 1);
      waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href, false));
      waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href, false));});
    BypassedByBloggerPemula(/(bnbfree|freeth).in/, function() {if (elementExists('.h-captcha')) {let btc = setInterval(() => {
      if (Captchacheck()) {clearInterval(btc);ClickIfExists('#free_play_form_button');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/freebitco.in/, function() {if (elementExists('#freeplay_form_cf_turnstile')) {let freebtc = setInterval(() => {
      if (Captchacheck()) {clearInterval(freebtc);ClickIfExists('#free_play_form_button');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/mazen-ve3.com/, function() {EnableRCF();let maze = setInterval(() => {
        if (bp('.filler').innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick('#btn6');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/soft3arbi.com/, function() {EnableRCF();let arbi = setInterval(() => {
        if (bp('.progress-done').innerText == '100%') {clearInterval(arbi);ReadytoClick('#continue-button');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/(120898|141989|161989|131989|121989|151989).xyz/, function() {if (elementExists('.g-recaptcha')) {let bitad = setInterval(() => {
      if (Captchacheck()) {clearInterval(bitad);SubmitIfExists('.mt-4');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/shortearn.net/, function() {parent.open = BpBlock();ClickIfExists('#adBtn', 3, 'setInterval');
      ClickIfExists('#appBtn', 1);ClickIfExists('button.btn.btn-primary.btn-block.btn-lg', 3);ClickIfExists('#extensionBtn', 5, 'setInterval');});
    BypassedByBloggerPemula(/(coinsward|blogsward).com|imbb.online/, async function() {if (elementExists('.g-recaptcha')) {var bw = bp("input[name=newwpsafelink]");
      redirect(JSON.parse(atob(bw.value)).linkr, false);} else {window.incrementRedirectCount(); await sleep(2000); window.handleButtonClick();}});
    BypassedByBloggerPemula(/1bit.space|mgnet.xyz/, function() {let bsp = setInterval(() => {if (captcha_solved) {ReadytoClick('button.button');clearInterval(bsp);}}, 2000);
      let mgn = setInterval(() => {if (captcha_solved && bp('button.button').innerText.includes('Get Link')) {ReadytoClick('button.button');clearInterval(mgn);}}, 2000);});
    BypassedByBloggerPemula(/bigbtc.win/, function() {if (elementExists('.h-captcha')) {let bb = setInterval(() => {
          if (Captchacheck()) {clearInterval(bb);ReadytoClick('#claimbutn');}}, 1 * 1000);} else {ClickIfExists('#clickhere', 2);}});
    BypassedByBloggerPemula(/firefaucet.win/, function() {if (elementExists("form[method='post']")) {let firefaucet = setInterval(() => {
      if (Captchacheck()) {ClickIfExists('button[type=submit]');}}, 2 * 1000);} else {ClickIfExists('#get_reward_button', 1);}});
    BypassedByBloggerPemula(/uptobhai\.*|uplinkto\.*|shortlinkto\.*/, function() { ClickIfExists('.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/(tmail|labgame).io|(gamezizo|fitdynamos).com/, function() {
      if (elementExists('#next')) {SubmitIfExists('form.text-center', 3);ClickIfExists('#next', 2);ClickIfExists('#glink', 15);} else {ClickIfExists('#surl', 5, 'setInterval');}});
    BypassedByBloggerPemula(/(exeo|exego).app|(falpus|exe-urls).com/, function() {ClickIfExists('#invisibleCaptchaShortlink', 2);SubmitIfExists('#before-captcha', 3);
      let exeo = setInterval(() => {if (bp('.timer').innerText == '0') {clearInterval(exeo);ReadytoClick('#submit-button');}}, 2 * 1000);});
    BypassedByBloggerPemula(/(on-scroll|diudemy|maqal360).com/, function() {EnableRCF();let adlink = setInterval(() => {
        if (bp('#countdown').innerText == '0') {clearInterval(adlink);ReadytoClick('#append > :nth-child(1)');}}, 2 * 1000);});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|(offeergames|todogame).online/, function() {
      ClickIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/(leaveadvice|mensventure).com/, function() {let lav = setInterval(() => {
        if (bp('#timer').innerText == '0') {ReadytoClick('#method_free.free-download-btn.download-btn');
          clearInterval(lav); if (!elementExists('.h-captcha')) window.openLink();}}, 2000);});
    /*BypassedByBloggerPemula(/itscybertech.com/, () => {let itscyber = setInterval(() => {if (Captchacheck()) {clearInterval(itscyber);
      ClickIfExists('.visit.medium.button');} else if (Checkvisibility(bp('#gtbtn2'))) {clearInterval(itscyber); window.fngo();}}, 1 * 1000);});*/
    BypassedByBloggerPemula(/jameeltips.us|cryptonworld.space/, function() {
      ClickIfExists('#alf_continue', 3, 'setInterval');});
    BypassedByBloggerPemula(/hynews.biz|chamcuuhoc.com/, function() {
      var bypasslinks = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`);redirect(bypasslinks);});
    BypassedByBloggerPemula(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li/, function() {if (elementExists('#link-view')) {
        let sbf = setInterval(function() {if (Captchacheck()) {clearInterval(sbf);ClickIfExists('#continue');}}, 500);}});
    BypassedByBloggerPemula(/skiplink.me/, function() {
      ClickIfExists('#alf_continue_captcha', 2);ClickIfExists('#alf_continue', 3, 'setInterval');});
    BypassedByBloggerPemula(/apanmusic.in/, function() {waitForElm('a#notarobot.button', ams => redirect(ams.href, false));
      ClickIfExists('#getlink', 3, 'setInterval');ClickIfExists('#gotolink', 30);});
    BypassedByBloggerPemula(/o-pro.online/, function() {waitForElm('#newbutton > a', opo => redirect(opo.href, false));
      waitForElm('a.btn.btn-default.btn-sm', opo2 => redirect(opo2.href, false));});
    BypassedByBloggerPemula(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com/, function() {
      if (elementExists('.g-recaptcha')) {let trg = setInterval(() => {if (Captchacheck()) {clearInterval(trg);
            SubmitIfExists('#lview > form');}}, 1 * 1000);} else {waitForElm('.get-link > a', tig => redirect(tig.href, false));}});
    BypassedByBloggerPemula(/easyworldbusiness.com/, function() {
      if (elementExists('.g-recaptcha')) {waitForElm('a.yu-btn.yu-blue', ewb => redirect(ewb.href, false));} else {ClickIfExists('.yu-blue.yu-btn', 15);}});
    BypassedByBloggerPemula(/getzen.cash/, function() {if (elementExists('#form-claim-zen')) {let gzc = setInterval(() => {
          if (Captchacheck()) {clearInterval(gzc);ClickIfExists('.btn-claim');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/(kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online/, function() {
      if (BpParams.has('safe')) {meta(atob(BpParams.get('safe')));}});
    BypassedByBloggerPemula(/deportealdia.live|noweconomy.live|techgeek.digital/, function() {SubmitIfExists('div.text-center div form', 2);
      waitForElm('a#surl1.btn-main.get-link', dep => redirect(dep.href, false));});
    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|importantclass).com/, function() {waitForElm('#my-btn', nsk => redirect(nsk.href, false));
      ClickIfExists('#pro-continue', 3);ClickIfExists('#pro-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club/, function() {
      ClickIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/linkatla.com/, function() {let katla = bp('head > script:nth-child(7)');let linka = strBetween(katla.text, '"', '"');
      if (elementExists('#redirectButton')) {setTimeout(() => {redirect(atob(linka), false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/claimfreetrx.online/, function() {SubmitIfExists('#molien', 2);ClickIfExists('#verify > .mb-2.btn-primary.btn-lg.btn', 3);});
    //BypassedByBloggerPemula(/adclicker\.*|yourihollier.com/, function() {if (location.href.includes('url/')) {const adc = atob(atob(atob(location.hash.slice(1))));
      //redirect(new URLSearchParams(adc).get('url'));} else {}});
    BypassedByBloggerPemula(/offers4crypto.xyz|ewall.biz/, function() {
      if (elementExists('.g-recaptcha')) {let ofc = setInterval(() => {if (Captchacheck()) {clearInterval(ofc);
            ClickIfExists('#submitBtn');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/dl.lk21static.xyz/, function() {
      if (!location.href.includes('get/') && location.pathname != '/') {location = location.href.replace('yz/', 'yz/get/');}});
    BypassedByBloggerPemula(/easylink.gamingwithtr.com/, function() {ClickIfExists('#countdown', 2);
      waitForElm('a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center', gtr => redirect(gtr.href, false));});
    BypassedByBloggerPemula(/cryptednews.space/, function() {
      if (elementExists('.g-recaptcha')) {let cpf = setInterval(() => {if (Captchacheck()) {clearInterval(cpf);
            ClickIfExists('form center button');}}, 1 * 1000);} else {setTimeout(() => {ClickIfExists('form center button');}, 11 * 1000);}});
    BypassedByBloggerPemula(/(mangareleasedate|freemodapp|zutiza|phixshop|uskloans|sabkiyojana).com|(myfirstname|ignoupur).in|sarkarisahayata.org|kisannews.net|bloxstrap.cc/, () => {let gplinks = setInterval(() => {
      if (bp('#myTimer').innerText == '3') {clearInterval(gplinks);ClickIfExists('#VerifyBtn');ClickIfExists('#NextBtn', 2);}}, 1 * 1000);});
    BypassedByBloggerPemula(/(remixsounds|helpdeep|thinksrace).com|uprwssp.org/, function() {EnableRCF();
      ClickIfExists('.m-2.btn-captcha.btn-outline-primary.btn', 2);ClickIfExists('.tpdev-btn', 3);ClickIfExists("#tp98 button[class^='bt']", 3); SubmitIfExists("form[name='tp']", 3); ClickIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/stly.link|snaplessons.net|atravan.net/, () => {ClickIfExists('button[class^=rounded]', 2);let stly = setInterval(() => {if (Captchacheck()) {clearInterval(stly);ClickIfExists('button[class^=mt-4]');}}, 1 * 1000);});
    BypassedByBloggerPemula(/shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly|linkbulks).com|wordcounter.icu|pwrpa.cc|paylinks.cloud/, function() {let shk = setInterval(() => {
        if (Captchacheck()) {clearInterval(shk);ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);});
    BypassedByBloggerPemula(/(computerpedia|techconnection).in|(myprivatejobs|advicefunda|moneymatteronline|mahikinews).com|bestloanoffer.net|bhulekhnaksha.org/, () => {
      let nanolinks = setInterval(() => {if (Captchacheck()) {clearInterval(nanolinks);ClickIfExists('#tp-snp2');
        } else if (Checkvisibility(bp('#tp-generate')) && !elementExists('.g-recaptcha')) {clearInterval(nanolinks);ClickIfExists('#tp-snp2.tp-blue.tp-btn-2', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/revly.click/, function() {
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {SubmitIfExists('#link-view');}}, 1 * 1000);} else {SubmitIfExists('div.col-md-12 form', 2);}});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn|ziggame).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn/, function() {EnableRCF();
      let trangchu = setInterval(() => {if (bp('#monetiza-time').innerText == '0') {clearInterval(trangchu);ReadytoClick('#monetiza');} else if (elementExists('#monetiza-generate')) {window.monetizago();}}, 1 * 1000);});
    BypassedByBloggerPemula(/theconomy.me|(askpaccosi|halosenja|sainny|wellness4live|briceka).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id/, function() {
      var tform = bp('#landing');redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|briceka).com|galaxy-link.space|oke.io|forextrader.site|tinygo.co/, function() {
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {ClickIfExists('#invisibleCaptchaShortlink');}}, 1 * 1000);}});
    BypassedByBloggerPemula(/(blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.wiki|(oko|aii).sh|clk.kim|dekhe.click/, function() {ClickIfExists('button.btn.btn-primary', 2);SubmitIfExists('#nextpage', 2);
      SubmitIfExists('#getmylink', 3);let enit = setInterval(function() {if (Captchacheck()) {clearInterval(enit);ClickIfExists('.btn-captcha.btn-primary.btn');}}, 500);});
    BypassedByBloggerPemula(/techyreviewx.com|desiupload.co/, function() {ClickIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);
      waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/(calmgram|adbitfly|blogsward|coinjest).com|adbitfly.in/, function() {
      waitForElm('#continueBtn', afBtn => afBtn.click());ClickIfExists('#captcha-btn', 4, 'setInterval');
      ClickIfExists('.btn-captcha.btn-primary.btn', 8, 'setInterval');});
    BypassedByBloggerPemula(/shorterall.com/, function() {if (!elementExists('input[name=awnswer]') && !elementExists('#link-view')) {SubmitIfExists('div.col-md-12 form', 3);}
      if (elementExists('input[name=awnswer]')) {let strl = bp('input[name=awnswer]').getAttribute('placeholder').split('=')[0]; bp('input[name=awnswer]').value = BpCalc(strl); SubmitIfExists('div.col-md-12 form', 3);}
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);}});
    BypassedByBloggerPemula(/exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun/, function() {EnableRCF();window.onscroll = BpBlock();window.check2();if (elementExists('#verify')) {
        $('.blog-details').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually');
        elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/(btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online/, function() {
      parent.open = BpBlock();SubmitIfExists('#link1s-form', 1);ClickIfExists('#next-step-button', 3);});
    BypassedByBloggerPemula(/playnano.online/, function() {ClickIfExists('#watch-link', 2);
      ClickIfExists('.watch-next-btn.btn-primary.button', 2);ClickIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/donia2tech.com|blog.techeysub.online|minersim.com/, function() {
      var form = document.getElementById('wpsafelink-landing');redirect(JSON.parse(atob(form.newwpsafelink.value)).linkr);});
    BypassedByBloggerPemula(/rekonise.com/, () => {let xhr = new XMLHttpRequest();
      xhr.onload = () => redirect(JSON.parse(xhr.responseText).url);
      xhr.open("GET", "https://api.rekonise.com/social-unlocks" + location.pathname, true);xhr.send();});
    BypassedByBloggerPemula(/acortalink.me/, () => {let acorta = setInterval(() => {let script = bp('body > script');
        if (script) {let text = script.text.trim(); let lines = text.split('\n'); let i = lines.findIndex(x => x.includes('acortalink.me'));
          let link = lines[i + 2].trim().split(',')[6].trim(); if (window[link]) {clearInterval(acorta); redirect(window[link]);}}}, 100);});
    BypassedByBloggerPemula(/tutwuri.id|besargaji.com/, function() {ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > button ', 2);
      let tutwuri = setInterval(() => {if (Captchacheck()) {clearInterval(tutwuri);ClickIfExists('#btn-3');}}, 1 * 1000);});
    BypassedByBloggerPemula(/autodime.com/, function() {
      let atd = setInterval(function() {if (Captchacheck()) {clearInterval(atd);ClickIfExists('#button1');}}, 500);
      waitForElm('a.btn-hover.color-1.btn-captcha', odim => redirect(odim.href, false));});
    BypassedByBloggerPemula(/amritadrino.com/, function() {
      if (elementExists('.g-recaptcha')) {waitForElm('body > b:nth-child(10) > center:nth-child(4) > a:nth-child(64)', amd => redirect(amd.href, false));} else {waitForElm('#tp-snp2', amBtn => amBtn.click());}});
    BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, function() {if (window.hasOwnProperty('_lact')) {window.setInterval(() => {window._lact = Date.now();}, 5 * 1000);
      } else if (elementExists('#redirect-main-text')) {waitForElm('a#invalid-token-redirect-goto-site-button', yt => redirect(yt.href, false));} else {}});
    BypassedByBloggerPemula(/hunterkiller.me|surflink.tech/, function() {
      waitForElm('div#showw center a.btn.btn-danger.btn-captcha', hun => redirect(hun.href, false));
      waitForElm('div#wpsafe-snp center a', hunt => redirect(hunt.href, false));});
    BypassedByBloggerPemula(/lyricsbaazaar.com|ezeviral.com/, function() {
      let lyr = setInterval(function() {if (Captchacheck()) {clearInterval(lyr);ClickIfExists('#btn6');}}, 500);
      waitForElm('div.modal-content a', lyri => redirect(lyri.href, false));});
    BypassedByBloggerPemula(/(sekilastekno|miuiku|vebma|majalahhewan).com|tempatwisata.pro/, async function() {const executor = async () => {let El = window?.livewire?.components?.components()[0];
        while (!El) {await sleep(100); console.log(1); El = window?.livewire?.components?.components()[0];}
        const payload = {fingerprint: El.fingerprint, serverMemo: El.serverMemo, updates: [{payload: {event: 'getData', id: 'whathappen', params: [],}, type: 'fireEvent',}, ],};
        const response = await fetch(location.origin + '/livewire/message/pages.show', {headers: {'Content-Type': 'application/json', 'X-Livewire': 'true', 'X-CSRF-TOKEN': window.livewire_token,},
            method: 'POST', body: JSON.stringify(payload),}); const json = await response.json(); const url = new URL(json.effects.emits[0].params[0]); redirect(url.href);};
      if (location.host === 'wp.sekilastekno.com') {if (elementExists("form[method='post']")) {const a = bp("form[method='post']"); console.log('addRecord...'); const input = document.createElement('input');
          input.value = window.livewire_token; input.name = '_token'; input.hidden = true; a.appendChild(input); a.submit();}
      if (elementExists("button[x-text]")) { console.log('getLink..'); executor();} return;} if (elementExists("div[class='max-w-5xl mx-auto']")) {console.log('Executing..'); executor();}});
    BypassedByBloggerPemula(/coinsrev.com/, function() {parent.open = BpBlock();
      if (elementExists('.g-recaptcha')) {let csr = setInterval(() => {if (Captchacheck()) {clearInterval(csr);
            ClickIfExists('#wpsafelinkhuman > input');}}, 1 * 1000);} else {ClickIfExists('#wpsafe-generate > a > img', 3);ClickIfExists('input#image3', 13);}});
    BypassedByBloggerPemula(/zubatecno.com/, function() {if (elementExists('#mdncaptcha')) {let zbt = setInterval(() => {
          if (Captchacheck()) {clearInterval(zbt);ClickIfExists('#link1s-snp1');}}, 1 * 1000);} else {SubmitIfExists('#link1s-form', 3);}});
    BypassedByBloggerPemula(/(wooseotools|woowebtools).com/, function() {if (elementExists('.g-recaptcha')) {let wst = setInterval(() => {
          if (Captchacheck()) {clearInterval(wst);ClickIfExists('div form button');}}, 500);} else {ClickIfExists('div form button', 3, 'setInterval');}});
    BypassedByBloggerPemula(/adwerty.com/, function() {let adw = setInterval(() => {if (Captchacheck()) {clearInterval(adw);ClickIfExists('#hidden_btn');}}, 500);
      waitForElm('#hidden_btn', adw2 => redirect(strBetween(adw2.onclick.toString(), `window.open('`, `', '_blank')`)));});
    BypassedByBloggerPemula(/(pernahsukses|alpinecorporate).com|aoutoqw.xyz/, function() {if (elementExists('.g-recaptcha')) {let ps = setInterval(() => {if (Captchacheck()) {clearInterval(ps);
            ClickIfExists('#alf_continue_captcha');}}, 1 * 1000);} else {window.showScrollToGetLinkText(); SubmitIfExists('#alf_continue_form_outer', 3);}});
    BypassedByBloggerPemula(/altechen.com|entutes.com/, function() {parent.open = BpBlock();
      if (elementExists('.h-captcha')) {let ale = setInterval(() => {if (Captchacheck()) {clearInterval(ale);
            ClickIfExists('#cs-btn');}}, 1 * 1000);} else {ClickIfExists('button#cs-btn', 3, 'setInterval');}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), true);xhr.send();});
    BypassedByBloggerPemula(/(mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online/, function() {
      ClickIfExists('.submitBtn', 2);ClickIfExists('#go_d', 3);});
    BypassedByBloggerPemula(/bitcotasks.com/, function() {if (location.href.includes('/shortlink/')) {
        let bitco = setInterval(() => {if (bp('.mb-2').innerText == 'Verified!') {clearInterval(bitco);window.continueClicked();}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/suaurl.com/, function() {parent.open = BpBlock();
      let su = setInterval(function() {if (Captchacheck()) {bp('#comment_form').removeAttribute('target');clearInterval(su);
          ClickIfExists('#btn-capcha > .b-b', 1);}}, 500);ClickIfExists('#btn > button', 3, 'setInterval');});
    BypassedByBloggerPemula(/letsboost.net/, function() {waitForElm('body > script', () => {let stepDat = BpT('script')[BpT('script').length - 1];
      let stepname = stepDat.innerHTML;let lbDat = JSON.parse(stepname.match(/stepDat = '(.*)';/)[1]); let lbo = lbDat[lbDat.length - 1].url;redirect(lbo,false);});});
    /*BypassedByBloggerPemula(/web1s.asia/, function() {
      if (location.href.includes('api-mode/') || elementExists('.mb-20')) {SubmitIfExists('.submit-form', 3);ClickIfExists('#submit',3);} else if (!BpParamd.has('code')) {let iKey = '.mb-5.text-center.keyword-image', dWeb='fun88.info.vn';
      if (bp(iKey)) {if (bp(iKey).innerHTML.includes('7TmoFNC')) dWeb = 'hookeaudio.com'; if (bp(iKey).innerHTML.includes('81EoTp9')) dWeb = 'pennbookcenter.com';
      if (bp(iKey).innerHTML.includes('wYfNKAO')) dWeb = 'publicananker.com'; window.location.assign(`https://${dWeb}?xref=https://google.com/&wsa=${location.href}`);}
      if (elementExists('.col-xxl-9 > .text-center')) {let wa1 = setInterval(() => {if (Captchacheck()) {clearInterval(wa1);SubmitIfExists('form.text-center');}}, 1 * 1000);}
      if (elementExists('.col-xxl-9 > .text-center') && !elementExists('.g-recaptcha')) {ClickIfExists('#submit',3);}} else if (BpParamd.has('code')) {ClickIfExists('#submit-button');
      let inp = 'input.form-control:nth-child(2)', btn = 'form.submit-form:nth-child(2) > button:nth-child(16)'; if (bp(inp)) { bp(inp).value = decodeURIComponent(BpParamd.get('code')); ClickIfExists(btn,2); }}});
    BypassedByBloggerPemula(/(hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn/, function() {RemoveRef('https://google.com');
      if (BpParams.has('xref') && BpParams.has('wsa')) {let b = '.textwidget button', pLink = `li.menu-item > a:nth-child(1)`, gDiv = 'p > div > div', tCode;
      setTimeout(() => {if (bp(b) && bp(b).innerText.includes('CONTINUE')) {bp(b).click();}}, 3000);
      let pClick = setInterval(() => {if (bp(b) && bp(b).innerHTML.includes(`ANY PAGE TO GET`)) {bp(pLink).href = bp(pLink).href + document.location.search;
            bp(pLink).click();clearInterval(pClick);}}, 2000);
      let gCode = setInterval(() => {if (bp(gDiv) && !bp(gDiv).innerText.includes('ontinue after')) {tCode = strBetween(bp(gDiv).parentElement.innerHTML, `!important;">`, `<svg`, true);
      window.location.assign(`${decodeURIComponent(BpParamd.get('wsa'))}?code=${tCode}`); clearInterval(gCode);}}, 2000);}});*/
    BypassedByBloggerPemula(/stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com|(blogbux|blogesque|exploreera|explorosity|torovalley).net/, function() {if (elementExists('.g-recaptcha') || elementExists('.h-captcha')) {
        let stf = setInterval(() => {if (Captchacheck()) {clearInterval(stf);ReadytoClick('.form-send.m-2.btn-captcha.btn-outline-primary.btn');}}, 500);} else {
        ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3, 'setInterval');}});
    BypassedByBloggerPemula(/slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com/, function() {EnableRCF();
      let sw = setInterval(() => {if (Captchacheck()) {clearInterval(sw); ClickIfExists('.hidden-continue-button');}}, 1 * 1000); waitForElm('#yuidea-btmbtn', swBtn => swBtn.click());});
    BypassedByBloggerPemula(/link.goto.com.np|(appkamods|bankvacency|otomi-games).com/, () => {
      waitForElm('div#wpsafe-link a', bitz => redirect(bitz.href, false));
      waitForElm('#wpsafe-link input', bit2 => redirect(strBetween(bit2.onclick.toString(), `window.open('`, `', '_blank')`), false));});
    BypassedByBloggerPemula(/hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org/, function() {
      ClickIfExists('#my-btn', 2);ClickIfExists('#wpsafe-link > .btn-secondary.btn', 2);
      waitForElm('#pro-link', nhk => redirect(nhk.href, false));waitForElm('#wpsafe-link a', hrl => redirect(strBetween(hrl.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/(lootlinks|onepiecered).co|(loot-links|links-loot|loot-link|mega-guy|utopianleaks|eofmukindwo|realiukzemydre|kmendation|bstlar|tonordersitye|bleleadersto|daughablelea).com|(lootdest|lootlink|best-links).org|lootdest.info|linksloot.net|free-content.pro/, function() {
      if (/^\/([^\/]+)/.test(location.pathname)) {redirect('https://adbypass.org/bypass?bypass=' + location.href, false);}});
    BypassedByBloggerPemula(/(homeculina|ionclub777|ineedskin|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze|unhearduniversity).com|(financewrapper|recipes4all|solidcoins).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol/, () => {EnableRCF();
      if (elementExists('.g-recaptcha')) {let mdn = setInterval(() => {if (Captchacheck()) {clearInterval(mdn);BypassHD('form[action]', 1);}}, 1 * 1000);} else {setTimeout(() => {BypassHD(GetForm('mdn'));}, 17 * 1000);}});
    BypassedByBloggerPemula(/playonpc.online|quins.us|retrotechreborn.com/, function() {window.assholeWhoReadsThis = false;ClickIfExists('#ytcontinueButton', 2);if (elementExists('.h-captcha') && !bp('#cbt').hasAttribute('disabled')) {
      let profitsfly = setInterval(() => {if (Captchacheck()) {clearInterval(profitsfly);ClickIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);}}, 3 * 1000);} else {
      let playonpc = setInterval(() => {if (!elementExists('.h-captcha') && !bp('#cbt').hasAttribute('disabled')) {clearInterval(playonpc);ReadytoClick('button#cbt.pfbutton-primary', 1);}}, 2 * 1000);}});
    BypassedByBloggerPemula(/shortit.pw/, function() {if (elementExists('.bg-light.container')) {
        $('.text-center.text-muted').text('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      ClickIfExists('.pulse.btn-primary.btn', 3);let sorti = setInterval(function() {if (Captchacheck()) {clearInterval(sorti);ClickIfExists('#btn2');}}, 500);});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, function() {setInterval(function() {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(function() {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(function() {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {let adsh = setInterval(() => {
        if (typeof window._sharedData == "object" && 0 in window._sharedData && "destination" in window._sharedData[0]) {clearInterval(adsh);
          document.write(window._sharedData[0].destination);redirect(document.body.textContent);
        } else if (typeof window.___reactjsD != "undefined" && typeof window[window.___reactjsD.o] == "object" && typeof window[window.___reactjsD.o].dest == "string") {clearInterval(adsh);redirect(window[window.___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io/, () => { parent.open = BpBlock();waitForElm('.py-2.bg-blue-600', tBtn => tBtn.click());
      waitForElm('form:nth-child(1) > a:nth-child(3)', vBtn => vBtn.click());waitForElm('button.py-2:nth-child(3)', bBtn => bBtn.click()); waitForElm('div > a.py-2.bg-blue-600', crb => redirect(crb.href, false));
      let craz = setInterval(() => {if (elementExists('button.py-2')) {clearInterval(craz); SubmitIfExists('div.rounded > div:nth-child(9) > form:nth-child(1)', 2);}}, 500);});
    BypassedByBloggerPemula(/ify.ac/, function() {window.open_href();});
    BypassedByBloggerPemula(/lanza.me/, () => waitForElm('a#botonGo', lz => redirect(lz.href, false)));
    BypassedByBloggerPemula(/lifeezee.com/, () => waitForElm('.get-link', lifz => redirect(lifz.href)));
    BypassedByBloggerPemula(/lolinez.com/, () => waitForElm('p#url a', lol => redirect(lol.href, false)));
    BypassedByBloggerPemula(/file-upload.in/, () => waitForElm('#getlink', fui => redirect(fui.href, false)));
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/appsinsta.com/, function() {waitForElm('.yu-blue.yu-btn', apBtn => apBtn.click());});
    BypassedByBloggerPemula(/apkadmin.com/, () => waitForElm('div.text.text-center a', apk => redirect(apk.href)));
    BypassedByBloggerPemula(/sugarona.com/, function() {waitForElm('a#my-btn', sgr => redirect(sgr.href, false));});
    BypassedByBloggerPemula(/cekip.site/, () => waitForElm('a#aGo.badge.bg-success', cek => redirect(cek.href, false)));
    BypassedByBloggerPemula(/techleets.xyz/, () => waitForElm('#tp-snp2 > center > a', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/flybid.net/, () => waitForElm('a#continue-button.continue-button', flb => redirect(flb.href, false)));
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/thebloggerspoint.in|ezeviral.com/, () => waitForElm('#wpsafe-snp > a', tbs => redirect(tbs.href, false)));
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/sub2unlock.com/, function() {if (location.href.includes('/unlock')) {waitForElm('a#link', s2l => redirect(s2l.href, false));}});
    BypassedByBloggerPemula(/rockmods.net/, function() {if (location.href.includes('/rblink.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/doodjob.com/, () => waitForElm('a.linky.buttonpanel.buttonpanel-block.btn-lg.get-link.disabled', doo => redirect(doo.href, false)));
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com/, () => waitForElm('a#proceed', offr => redirect(offr.href, false)));
    BypassedByBloggerPemula(/bluemedialink.online|bluemediafile\.*/, function() {if (BpParams.has('url')) {waitForElm('input#nut[src]', blum => blum.parentNode.submit());}});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/blog.textpage.xyz/, () => waitForElm('#wpsafe-link1 a', bt => redirect(strBetween(bt.onclick.toString(), `window.open('`, `', '_blank')`), false)));
    BypassedByBloggerPemula(/foodupe.com/, function() {if (elementExists('.containerpanel')){let fdp = bp('#donead').href;setTimeout(() => {redirect(fdp,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(cricketgurupro|travelkuku).com/, function() {SubmitIfExists("form[name='tp']", 3);waitForElm('#page > center > a', cgp => redirect(cgp.href, false));});
    BypassedByBloggerPemula(/freethailottery.live/, function() {if (elementExists('.g-recaptcha')){let ftl = ReadCV('JSON_fetch');setTimeout(() => {redirect(ftl,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/udrop.com/, () => waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`), false)));
    BypassedByBloggerPemula(/mirrored.to/, () => {waitForElm('div.col-sm.centered.extra-top a', mirr => redirect(mirr.href, false)); waitForElm('div.centerd > a', mir => redirect(mir.href, false));});
    BypassedByBloggerPemula(/sub2unlock.net/, function() {if (elementExists('.linkDiv_btns.col-xs-12.col-sm-12.col-md-12')){let stu = bp('#theLinkID').textContent;setTimeout(() => {redirect(stu,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in/, function() {SubmitIfExists("form[name='tp']", 3); waitForElm('a#btn6', bkz => redirect(bkz.href, false));});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/mboost.me/, function() {if (elementExists('#firstsection')){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io/, () => waitForElm('#wpsafelink-landing > input', dis => redirect(JSON.parse(atob(dis.value)).linkr, false)));
    BypassedByBloggerPemula(/mbantul.my.id|videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz/, function() {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/aiimgvlog.fun/, function() {EnableRCF(); window.onload = setInterval(() => {if (elementExists('.h-captcha') && Checkvisibility(bp('.h-captcha'))) {BypassHD('#overlay', 1);} if (elementExists("div[id^='count']") && bp("div[id^='count']").innerHTML == 0) {ReadytoClick('input:nth-of-type(3)', 1);}}, 1 * 1000);
        if (elementExists('input.form-control')) {window.onscroll = BpBlock();window.check2(); $('#clickMessage').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually'); elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/dutchycorp.space|dutchycorp.ovh|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link/, function() {
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(function() {try {clearInterval(ticker); window.grecaptcha.execute();} catch (e) {}}, 3000);}});
    BypassedByBloggerPemula(/dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort).net|(s2fly|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|zumpa|tlin|weezo|adnews|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(shrinkme|tfly).link|(playstore|adsy|clik).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|addurl.biz/, function() {parent.open = BpBlock();
      if (elementExists('.g-recaptcha') || elementExists('#captchaShortlink')) {let frm = setInterval(() => {if (Captchacheck()) {clearInterval(frm);SubmitIfExists('#link-view');}}, 1 * 1000);} else {let FMode = ['#link-view', '#form-continue', '.col-md- > form', '#nextstepform', '#submit-form', '.text-center.row > form', 'div.col-md-6 form', 'div.col-md-12 form', 'div.text-center form', '#before-captcha', '#yuidea', '#exfoary-form', '#submit_first_page', '#hidden form', '#test', 'form.text-center'];for (let i = 0; i < FMode.length; i++) {SubmitIfExists(FMode[i],2);}}});
    BypassedByBloggerPemula(/autofaucet.dutchycorp.space/, function() {let autoRoll = false; if (window.location.href.includes('/roll.php')) {window.scrollTo(0, 9999);
      if (!bp('#timer')) {setInterval(() => {if (Captchacheck()) {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}if (Checkvisibility(bp('#claim_boosted'))) {bp('#claim_boosted').click();}}}, 3 * 1000);} else { setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/coin_roll.php');}, 3 * 1000);}}
      if (window.location.href.includes('/coin_roll.php')) {window.scrollTo(0, 9999);if (!bp("#timer")) {setInterval(() => {if (Captchacheck()) {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}
      if (Checkvisibility(bp('#claim_boosted'))) {bp('#claim_boosted').click();}}}, 3 * 1000);} else { setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/wall.php');}, 3 * 1000);}} if (window.location.href.includes('/ptc/wall.php')) {var ptcwall = BpAll(".col.s10.m6.l4 a[name='claim']");
      if (ptcwall.length >= 1) {ptcwall[0].style.backgroundColor = 'red'; let match = ptcwall[0].onmousedown.toString().match(/'href', '(.+)'/);let hrefValue = match[1];
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space' + hrefValue);}, 3 * 1000);} else {if (Checkvisibility !== null) {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/');}, 3 * 1000);}}}
      if (location.href.includes('autofaucet.dutchycorp.space/ptc/')) {console.log('Viewing Available Ads'); if (elementExists('.fa-check-double')) {console.log('All Available Ads Watched'); setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/dashboard.php');}, 3 * 1000);}
      setInterval(() => {if (Checkvisibility(bp('#submit_captcha'))) {bp("button[type='submit'].g-recaptcha").click();}}, 5 * 1000);}}); const headers = {"Content-Type": "application/json", "apikey": APIKEY};
    elementReady('iframe[data-hcaptcha-response]').then(async function(element) {if (!APIKEY || !Checkvisibility(element) || !cfg.get('hCaptcha')) return;
    const settings = Object.fromEntries(new URLSearchParams(element.src)); let data = await Request("https://token.nocaptchaai.com/token", { method: "POST", headers,
    data: JSON.stringify({url: settings.host, type: "hcaptcha", sitekey: settings.sitekey, softid: "bloggerPemula-diego"})}); const url = data.url;
    while (data.status != "processed") {await sleep(1); data = await Request(url, { headers, responseType: 'json'}); console.log(data);}
    window.postMessage(JSON.stringify({ "source": "hcaptcha", "label": "challenge-closed", "id": settings.id, "contents": { "event": "challenge-passed", "response": data.token, "expiration": 120}}));});

}})();
