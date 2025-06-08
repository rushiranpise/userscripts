// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version    95.9
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_addStyle
// @grant      GM_openInTab
// @grant      GM_setClipboard
// @grant      GM_xmlhttpRequest
// @grant      window.onurlchange
// @grant      GM_registerMenuCommand
// @icon       https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require    https://update.greasyfork.org/scripts/528923/1579941/MonkeyConfig%20Mod.js
// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.
// @homepageURL    https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated
// @supportURL     https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues
// @include /^(?:https?:\/\/)?(?:www\.)?(?:google\.com|recaptcha\.net)\/recaptcha\/api2\/.*$/
// @match *://*/recaptcha/api2/*
// @match *://*.gocmod.com/*
// @match *://*.api.gplinks.com/*
// @match *://*.maloma3arbi.blogspot.com/*
// @include /^(https?:\/\/)(.+)?(inshort.in|youlinks.in|linkcents.com)(\/.*)/
// @match *://*.financenuz.com/*
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(headlinerpost.com|posterify.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @match *://*.dutchycorp.space/*
// @match *://*.financedoze.com/*
// @match *://*.shortfaster.net/*
// @match *://*.triggeredplay.com/*
// @match *://*.ouo.io/*
// @match *://*.adbtc.top/*
// @match *://*.linkbox.to/*
// @match *://*.upload.ee/*
// @match *://*.the2.link/*
// @match *://*.dayuploads.com/*
// @match *://*.keeplinks.org/*
// @match *://*.megaurl.win/*
// @match *://*.forex-22.com/*
// @match *://*.1shortlink.com/*
// @match *://*.dddrive.me/*
// @match *://*.uppit.com/*
// @match *://*.recut.ru/*
// @match *://*.krakenfiles.com/*
// @match *://*.1short.io/*
// @match *://*.disheye.com/*
// @match *://*.aysodamag.com/*
// @match *://*.file-upload.net/*
// @match *://*.hexupload.net/*
// @match *://*.gofile.io/*
// @match *://*.cryptonewssite.rf.gd/*
// @match *://*.rapidgator.net/*
// @match *://*.dbree.me/*
// @match *://*.dropgalaxy.com/*
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.revlink.pro/*
// @match *://*.megaupto.com/*
// @match *://*.panyhealth.com/*
// @match *://*.playpaste.com/*
// @match *://*.lanza.me/*
// @match *://*.karanpc.com/*
// @match *://*.lifeezee.com/*
// @match *://*.jioupload.icu/*
// @match *://*.douploads.net/*
// @match *://*.lolinez.com/*
// @match *://*.2linkes.com/*
// @match *://*.file-upload.in/*
// @match *://*.terabox.fun/*
// @match *://*.shortlinks2btc.somee.com/*
// @match *://*.kisalt.digital/*
// @match *://*.buzzheavier.com/*
// @match *://*.lksfy.com/*
// @match *://*.linksly.co/*
// @match *://*.apkadmin.com/*
// @match *://*.dataupload.net/*
// @match *://*.rotizer.net/*
// @match *://*.filemoon.sx/*
// @match *://*.render-state.to/*
// @match *://*.linkforearn.com/*
// @match *://*.bowfile.com/*
// @match *://*.downfile.site/*
// @match *://*.importantclass.com/*
// @match *://*.enlacito.com/*
// @match *://*.adtival.network/*
// @match *://*.imagereviser.com/*
// @match *://*.amanguides.com/*
// @match *://*.stockmarg.com/*
// @match *://*.8tm.net/*
// @match *://*.dailyuploads.net/*
// @match *://*.bestfonts.pro/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.paycut.pro/*
// @match *://*.explorerlives.com/*
// @match *://*.vuotnhanh.com/*
// @match *://*.uploadev.org/*
// @match *://*.megaup.net/*
// @match *://*.forex-trnd.com/*
// @match *://*.files.fm/*
// @match *://*.gdflix.dad/*
// @match *://*.mohtawaa.com/*
// @match *://*.mega4upload.net/*
// @match *://*.sharetext.me/*
// @match *://*.filespayouts.com/*
// @match *://*.apkw.ru/*
// @match *://*.comohoy.com/*
// @match *://*.linkforearn.click/*
// @match *://*.4fnet.org/*
// @match *://*.alorra.com/*
// @match *://*.uploady.io/*
// @match *://*.adoc.pub/*
// @match *://*.programasvirtualespc.net/*
// @match *://*.pdfcoffee.com/*
// @match *://*.boost.ink/*
// @match *://*.file-upload.org/*
// @match *://*.fansonlinehub.com/*
// @match *://*.mexa.sh/*
// @match *://*.up-4ever.net/*
// @match *://*.udrop.com/*
// @match *://*.hitfile.net/*
// @match *://*.mirrored.to/*
// @match *://*.mboost.me/*
// @match *://*.karyawan.co.id/*
// @match *://*.drop.download/*
// @match *://*.oii.io/*
// @match *://*.slink.bid/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.workupload.com/*
// @match *://*.mp4upload.com/*
// @match *://*.creditsgoal.com/*
// @match *://*.adfoc.us/*
// @match *://*.zegtrends.com/*
// @match *://*.mega4up.org/*
// @match *://*.uploadhaven.com/*
// @match *://*.k2s.cc/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.newassets.hcaptcha.com/*
// @match *://*.bigbtc.win/*
// @match *://*.linkspy.cc/*
// @match *://*.katfile.com/*
// @match *://*.jobinmeghalaya.in/*
// @match *://*.dinheiromoney.com/*
// @match *://*.itijobalert.in/*
// @match *://*.anonym.ninja/*
// @match *://*.flamebook.eu.org/*
// @match *://*.rekonise.com/*
// @match *://*.vosan.co/*
// @match *://*.exblog.jp/*
// @match *://*.upfion.com/*
// @match *://*.takefile.link/*
// @match *://*.modcombo.com/*
// @match *://*.techxploitz.eu.org/*
// @match *://*.1fichier.com/*
// @match *://*.fileresources.net/*
// @match *://*.freepreset.net/*
// @match *://*.doodrive.com/*
// @match *://*.sub2get.com/*
// @match *://*.o-pro.online/*
// @match *://*.infonerd.org/*
// @match *://*.qiwi.gg/*
// @match *://*.yitarx.com/*
// @match *://*.videolyrics.in/*
// @match *://*.coinsrev.com/*
// @match *://*.indobo.com/*
// @match *://*.playnano.online/*
// @match *://*.mazen-ve3.com/*
// @match *://*.m.flyad.vip/*
// @match *://*.easylink.gamingwithtr.com/*
// @match *://*.turbobit.net/*
// @match *://*.sharemods.com/*
// @match *://*.mediafire.com/*
// @match *://*.downloader.tips/*
// @match *://*.modsbase.com/*
// @match *://*.filedm.com/*
// @match *://*.firefaucet.win/*
// @match *://*.cryptorotator.website/*
// @match *://*.onlinetechsolution.link/*
// @match *://*.desiupload.co/*
// @match *://*.tempatwisata.pro/*
// @match *://*.bewbin.com/*
// @match *://*.lajangspot.web.id/*
// @match *://*.inshortnote.com/*
// @match *://*.jioupload.com/*
// @match *://*.teknoasian.com/*
// @match *://*.socialwolvez.com/*
// @match *://*.bitcotasks.com/*
// @match *://*.shortit.pw/*
// @match *://*.newsminer.uno/*
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.flickr.com/*
// @include /^(https?:\/\/)(.+)?((g34new|dlgamingvn|v34down|phimsubmoi).com|nashib.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(earnbee.xyz|zippynest.online|getunic.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ify.ac|go.linkify.ru)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?(userscloud.com|dosya.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fc-lc|thotpacks).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offerwall.me|ewall.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(surl.li|surl.gd)(\/.*)/
// @include /^(https?:\/\/)(.+)?((devnote|formshelp|rcccn).in|djbassking.live)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogsward|coinjest).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dogefury.com|go.tfly.link|thanks.tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((dramaticqueen|emubliss).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((grtjobs|jksb).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth|freebitco).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tejtime24|drinkspartner).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(loanifyt.site|topshare.in|btcon.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((techleets|bonloan).xyz|sharphindi.in|nyushuemu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((jobmatric|carjankaari).com|techsl.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cutnet.net|(cutyion|cutynow).com|(exego|cety).app|(jixo|gamco).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(oxy\.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financewada|utkarshonlinetest).com|financenova.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(financedoze.com|(techhype|mukhyasamachar).in|svream.net|rtjks.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(setroom.biz.id|travelinian.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(wp.thunder-appz.eu.org|blog.adscryp.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|baristakesehatan|merekrut|indobo).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech|cointox.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(solidcoins.net|fishingbreeze.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((superheromaniac|spatsify|mastkhabre|ukrupdate).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bestloansoffers|worldzc).com|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(autodime.com|cryptorex.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bchlink|usdlink).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(pubghighdamage.com|anmolbetiyojana.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(aylink.co|cpmlink.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|owoanime|hyperkhabar|hamroguide).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(litecoin.host|cekip.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tmail|labgame).io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub).com|dvjobs.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ez4mods|game5s|sharedp|fastcars1).com|tech5s.co|a4a.site|rcccn.in|creditbay.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((marketrook|governmentjobvacancies|swachataparnibandh).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp).in|biharhelp.co|wastenews.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(4hi.in|(10short|animerigel|encurt4).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ecryptly|equickle).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?(revly.click|(clikern|kiddyshort).com|mitly.us|link.whf.bz|shortex.in|easyshort.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((askpaccosi|wellness4live|akash.classicoder).com|2the.space|inicerita.online|cryptomonitor.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.kim|dekhe.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|sproutworkers.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinybc|phimne).com|(mgame|sportweb|bitcrypto).info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp).net|(atomicatlas|timbertales).xyz|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tutwuri.id|(besargaji|link2unlock).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lyricsbaazaar|ezeviral).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((playonpc|yolasblog).online|quins.us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday).com|gally.shop|freeat30.org|ivnlnews.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|(beingtek|encurt4|10short).com|(zagl|shrinkforearn|beinglink).in|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?((remixsounds|helpdeep|thinksrace).com|uprwssp.org|gkfun.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stly.link|(snaplessons|atravan|airevue|carribo|amalot).net|(stfly|shrtlk).biz|veroan.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte).com|(allnotes|sewdamp3.com).in|(pisple|cirdro).xyz|taiyxd.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|zaku.pro|veganab.co|cegen.org|skyfreecoins.top|manga4nx.site)(\/.*)/
// @match *://*.multiup.io/*
// @match *://*.modsfire.com/*
// @match *://*.social-unlock.com/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.bloggerpemula.pythonanywhere.com/*
// @exclude /^(https?:\/\/)([^\/]+\.)?((cloudflare|github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|stripecdn|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet|docs|workspace|gemini|adservice|tagmanager).google|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|proton.me|stripe.network|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
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
// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc
// Say thank you to the donors by leaving good feedback, because of them I am more enthusiastic to improve the quality and add new features to the script.
// My Scripts Works in All Browsers and All Userscript Extensions , But Better if You Use Firefox Browser and Violentmonkey

(function() {
'use strict';
  const cfg = new MonkeyConfig({title: 'Bypass All Shortlinks Version 95.9 Settings',menuCommand: 'Open Bypass Settings',shadowWidth: '600px',shadowHeight: '450px',iframeWidth: '500px',iframeHeight: '350px',
  params: {Announcements: {type: 'textarea',label: 'Announcements',fontColor: "#0000ff",default: '1. Support My Works Via https://saweria.co/Bloggerpemula\n2. Colored Features=> Sometimes Causes Problems , use Your own Trial Error\n3. Please Enable the Auto Solve Captcha Feature only when you need it',column: 'top',labelAlign: 'center',rows: 3,cols: 50},
    BlogDelay: {label: 'Auto Delay in My Blog', type: 'checkbox', default: false,column: 'right&top'},
    SetDelay: {label: '=', type: 'number', default: 5,column: 'right&top', inputWidth: '40px'},
    TimerFC: {label: 'Enable Fast Timer', type: 'checkbox', fontColor: "#ff0000", default: false, column: 'left&top'},
    TDelay: {label: '=', type: 'number', fontColor: "#ff0000", default: 1000, column: 'left&top'},
    Audio: {label: 'Auto Solve Recaptcha Audio Mode',type: 'checkbox',default: true,column: 'bottom'},
    Images: {label: 'Auto Solve Recaptcha Images Mode',type: 'checkbox',default: false,column: 'bottom'},
    NopeCHA: {label: 'NopeCHA API Key =', type: 'text', default: '', column: 'bottom', inputHeight: '15px'},
    NoCaptcha: {label: 'NoCaptcha AI Key =', type: 'text', default: '', column: 'bottom', inputHeight: '15px'},
    RightFC: {label: 'Enable Context Menu',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    BlockFC: {label: 'Enable Always Ready',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    BlockPop: {label: 'Enable Popup Blocker',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    AntiDebug: {label: 'Enable Anti Debug & Log Cleared',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    YTShort: {label: 'Disable Youtube Short',type: 'checkbox',default: false,column: 'left&bottom', fontColor: "#FF6347"},
    Adblock: {label: 'Disable Adblock Detections',type: 'checkbox',default: false,column: 'right&bottom', fontColor: "#FF6347"},
    Prompt: {label: 'Disable Prompts & Notifications',type: 'checkbox',default: false,column: 'right&bottom', fontColor: "#FF6347"},
    Anima: {label: 'Disable All Animations',type: 'checkbox',default: false,column: 'left&bottom', fontColor: "#FF6347"},
    hCaptcha: {label: 'Auto Open Hcaptcha',type: 'checkbox',default: false,column: 'right'},
    reCAPTCHA: {label: 'Auto Open Recaptcha',type: 'checkbox',default: false,column: 'right'},
    SameTab: {label: 'Auto Open Links Same Tabs',type: 'checkbox',default: false,column: 'right'},
    Flickr: {label: 'Auto Save Images From Flickr',type: 'checkbox',default: false,column: 'right'},
    YTDown: {label: 'Auto Download Youtube Video',type: 'checkbox',default: false,column: 'right'},
    AutoDL: {label: 'Auto Download For Supported Sites',type: 'checkbox',default: true,column: 'right'}}});
  const bp = function(query, all = false) {const containsMatch = query.match(/:contains\("([^"]+)"\)$/);const innerTextMatch = query.match(/:innerText\("([^"]+)"\)$/);const hasMatch = query.match(/:has\(([^)]+)\)$/);let baseQuery, text, childSelector, useInnerText;
    if (containsMatch) {baseQuery = query.replace(/:contains\("[^"]+"\)$/, '');text = containsMatch[1];useInnerText = false;} else if (innerTextMatch) {baseQuery = query.replace(/:innerText\("[^"]+"\)$/, '');text = innerTextMatch[1];useInnerText = true;} else if (hasMatch) {
    baseQuery = query.replace(/:has\([^)]+\)$/, '');childSelector = hasMatch[1];text = null;useInnerText = false;} else {baseQuery = query;text = null;useInnerText = false;}const elements = document.querySelectorAll(baseQuery);if (!text && !childSelector && !all) return document.querySelector(baseQuery);
    if (all && !text && !childSelector) return elements;if (hasMatch) {const filtered = Array.from(elements).filter(el => el.querySelector(childSelector));return all ? filtered : filtered[0] || null;}
    if (text) {const filtered = Array.from(elements).filter(el => {const content = (useInnerText ? el.innerText : el.textContent).trim();return content.toLowerCase().includes(text.toLowerCase());});return all ? filtered : filtered[0] || null;}return all ? elements : elements[0] || null;};
  const BpParams = new URLSearchParams(location.search);const elementExists = query => bp(query) !== null;const BpT = query => document.getElementsByTagName(query);
  function BpBlock() {return 1;}
  function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms));}
  function fakeHidden() {Object.defineProperty(document, "hidden", {get: () => true,configurable: true});}
  function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), {name: 'referrer',content: 'origin'}));
    Object.assign(document.createElement('a'), {href}).click();}
  function redirect(url, blog = false) {location = blog && cfg.get('BlogDelay') ? '' + url : url;}
  function setActiveElement(selector) {elementReady(selector).then(element => {const temp = element.tabIndex;element.tabIndex = 0;element.focus();element.tabIndex = temp;});}
  function elementReady(selector) {return new Promise(function(resolve, reject) {let element = bp(selector);
      if (element) {resolve(element); return;} new MutationObserver(function(_, observer) {element = bp(selector);
      if (element) {resolve(element); observer.disconnect();}}).observe(document.documentElement, {childList: true, subtree: true});});}
  function DecodeBase64(string, times = 1) {let decodedString = string;for (let i = 0; i < times; i++) {decodedString = atob(decodedString);}return decodedString;}
  function Decrypter(string, shift = 13) {return string.replace(/[a-z]/gi, c => {const base = c <= 'Z' ? 90 : 122;return String.fromCharCode(base >= (c = c.charCodeAt(0) + shift) ? c : c - 26);});}
  function waitForElm(query, callback, maxWaitTime = 15, initialDelay = 5) {const startTime = Date.now();const maxWaitTimeMs = maxWaitTime * 1000;const initialDelayMs = initialDelay * 1000;
    setTimeout(() => {const observer = new MutationObserver(() => {if (elementExists(query)) {observer.disconnect();callback(bp(query));} else if (Date.now() - startTime >= maxWaitTimeMs + initialDelayMs) {
          observer.disconnect();BpNote(`Element ${query} not found within ${maxWaitTime + initialDelay} seconds`, 'warn');}});observer.observe(document.body, {childList: true,subtree: true});
      if (elementExists(query)) {observer.disconnect();callback(bp(query));}}, initialDelayMs);}
  function SameTab() {Object.defineProperty(unsafeWindow, 'open', {value: function(url) {if (url) {location.href = url;BpNote(`Forced window.open to same tab: ${url}`);}return null;},writable: false,configurable: false});
    document.addEventListener('click', (e) => {const target = e.target.closest('a[target="_blank"]');if (target && target.href) {e.preventDefault();location.href = target.href;BpNote(`Redirected target="_blank" to same tab: ${target.href}`);}}, true);
    document.addEventListener('submit', (e) => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();location.href = form.action;BpNote(`Redirected form target="_blank" to same tab: ${form.action}`);}}, true);}
  function BlockRead(SearchString, nameFunc) {if (CloudPS(true, true, false)) return;try {if (typeof window[nameFunc] !== 'function') {BpNote(`Function ${nameFunc} not found or not a function`, 'warn');return;}const target = window[nameFunc];
    window[nameFunc] = function(...args) {try {const callback = args[0];const stringFunc = callback && typeof callback === 'function' ? callback.toString() : '';const regex = new RegExp(SearchString, 'i');if (regex.test(stringFunc)) {args[0] = function() {};}
    return target.call(this, ...args);} catch (err) {console.error(`Error in overridden ${nameFunc}:`, err);return target.call(this, ...args);}};} catch (err) {console.error('Error in BlockRead:', err);}}
  function strBetween(s, front, back, trim = false) {if (typeof s !== 'string' || s.indexOf(front) === -1 || s.indexOf(back) === -1) return '';const start = s.indexOf(front) + front.length;const end = s.indexOf(back, start);
    if (start >= end) return '';let result = s.slice(start, end);if (trim) {result = result.replaceAll(' ', '');result = result.trim();result = result.replaceAll('\n', ' ');} else {result = result.trim();}return result.replace(/['"]/g, '');}
  function ReadytoClick(selector, sleepTime = 0) {const events = ["mouseover", "mousedown", "mouseup", "click"];const userEvents = ["mousemove", "touchstart"];const selectors = selector.split(', ');if (selectors.length > 1) {return selectors.forEach(ReadytoClick);}
    if (sleepTime > 0) {return sleep(sleepTime * 1000).then(function() {ReadytoClick(selector, 0);});}userEvents.forEach(eventName => {const eventObject = new Event(eventName, {bubbles: true});document.dispatchEvent(eventObject);});
    elementReady(selector).then(function(element) {element.removeAttribute('disabled');element.removeAttribute('target');events.forEach(eventName => {const eventObject = new MouseEvent(eventName, {bubbles: true,cancelable: true,});element.dispatchEvent(eventObject);});});}
  function StopAnima() {const addStyles = () => {const style = document.createElement('style');style.textContent = '* { animation: none !important; transition: none !important; }';(document.head || document.documentElement).appendChild(style);};
    const removeAnimationClasses = () => {bp('[class*="animate"], [class*="fade"], [class*="slide"], [class*="particles-js"], [class*="background"], [id*="animate"], [id*="fade"], [id*="slide"], [id*="particles-js"], [id="canvas"], [id="background"]',true).forEach(el => {
    el.classList.remove(...Array.from(el.classList).filter(cls => cls.includes('animate') || cls.includes('fade') || cls.includes('slide') || cls.includes('particles-js') || cls.includes('background')));if (el.classList.contains('particles-js-canvas-el') ||
    el.id === 'particles-js' || el.id === 'canvas' || el.id === 'background' || el.tagName.toLowerCase() === 'canvas') {el.remove();}});};const disableParticleEngines = () => {if (unsafeWindow.particlesJS) {unsafeWindow.particlesJS = () => {BpNote('Particles.js initialization blocked');};}
    if (unsafeWindow.tsParticles) {unsafeWindow.tsParticles.load = () => {BpNote('tsParticles initialization blocked');return Promise.resolve();};unsafeWindow.tsParticles.domItem = () => null;}};const execute = () => {addStyles();removeAnimationClasses();disableParticleEngines();};
    if (document.readyState !== 'loading' && document.head && document.body) {execute();} else {document.addEventListener('DOMContentLoaded', execute, { once: true });}new MutationObserver(removeAnimationClasses).observe(document, { childList: true, subtree: true });}
  function BpNote(message, level = 'info', caller = 'BloggerPemula') {const timestamp = new Date().toLocaleTimeString();const context = window.self === window.top ? 'top' : 'iframe';
    const BpMessage = `[BASS V95.9] ${timestamp} [${context}] - ${level.toUpperCase()} From ${caller}: ${message}`;switch (level) {case 'warn':console.warn(BpMessage);break;case 'error':console.error(BpMessage);break;case 'debug':console.log(BpMessage);break;default:console.log(BpMessage);}}
  function EnableRCF() {if (CloudPS(true, true, false)) return;var events = ['contextmenu', 'copy', 'cut', 'paste', 'select', 'selectstart','dragstart', 'drop'];function preventDefaultActions(event) {event.stopPropagation();}events.forEach(function(eventName) {document.addEventListener(eventName, preventDefaultActions, true);});}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function Listener(callback) {if (CloudPS(true, true, true)) return;const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", () => { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}
  function RSCookie(action, name, value = null, days = null) {if (action === 'set') {if (!name || value === null) {BpNote('Nama cookie dan nilai harus disediakan untuk mode "set".', 'error');return;}const date = new Date();date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = days ? `; expires=${date.toUTCString()}` : '';document.cookie = `${name}=${value}${expires}; path=/`;BpNote(`Cookie "${name}" telah diatur dengan nilai "${value}".`);} else if (action === 'read') {
    if (!name) {BpNote('Nama cookie harus disediakan untuk mode "read".', 'error');return;}const cookieName = name + "=";const decodedCookie = decodeURIComponent(document.cookie);const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {let cookie = cookieArray[i];while (cookie.charAt(0) === ' ') {cookie = cookie.substring(1);}if (cookie.indexOf(cookieName) === 0) {return cookie.substring(cookieName.length, cookie.length);}}return "";} else {BpNote('Mode tidak valid. Gunakan "set" atau "read".', 'error');}}
  function CloudPS(checkFrames = false, captchaSite = false, checkFlare = true) {if (checkFrames && window.self !== window.top) {BpNote('Bypass Function Canceled Because Iframe Detected ', 'info');return true;}if (checkFlare && elementExists('.spacer-top.spacer.core-msg')) {BpNote("Bypass Function Canceled on Cloudflare Page ", 'info');return true;}
    if (captchaSite) {const captchaDomains = [/\.google\.com$/,/\.recaptcha\.net$/,/\.hcaptcha\.com$/,/\.cloudflare\.com$/];const host = location.host.toLowerCase();if (captchaDomains.some(regex => regex.test(host))) {BpNote(`Bypass Function Canceled on This Sites`, 'info');return true;}}return false;}
  function notify(txt, clicktocopy = false, clicktoclose = false, duration = cfg.get('SetDelay')) {const m = document.createElement('div');m.style.padding = '10px 20px';m.style.zIndex = 10000;m.style.position = 'fixed';m.style.width = `970px`;m.style.top = '10px';m.style.transform = 'translateX(-50%)';
    m.style.left = '50%';m.style.fontFamily = 'Arial, sans-serif';m.style.fontSize = '16px';m.style.color = 'white';m.style.textAlign = 'center';m.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';m.style.boxSizing = 'border-box';m.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';m.style.cursor = 'pointer';
    const mainText = document.createElement('div');mainText.innerText = txt.replace('@', duration);m.appendChild(mainText);const actionText = document.createElement('span');actionText.style.position = 'absolute';actionText.style.right = '10px';actionText.style.bottom = '5px';actionText.style.fontSize = '12px';actionText.style.color = 'white';actionText.style.userSelect = 'none';
    if (clicktocopy) {actionText.innerText = 'Click to Copy';} else if (clicktoclose) {actionText.innerText = 'Click to Close';}m.appendChild(actionText);document.body.appendChild(m);m.addEventListener('click', () => {if (clicktocopy) {navigator.clipboard.writeText(txt.replace('@', duration)).then(() => {mainText.innerText = 'Copied to clipboard!';
    setTimeout(() => {document.body.removeChild(m);clearInterval(timerId);}, 1000);}).catch(err => {console.error('Failed to copy text: ', err);});}if (clicktoclose) {document.body.removeChild(m);clearInterval(timerId);}});const timerId = setInterval(() => {duration -= 1;if (duration <= 0) {clearInterval(timerId);} else {mainText.innerText = txt.replace('@', duration);}}, 1000);}
  function NoFocus() {if (CloudPS(true, true, false)) return;window.mouseleave = true;window.onmouseover = true;document.hasFocus = () => true;if (!Object.getOwnPropertyDescriptor(document, 'webkitVisibilityState')?.get) {Object.defineProperty(document, 'webkitVisibilityState', {get: () => 'visible',configurable: true});}
    if (!Object.getOwnPropertyDescriptor(document, 'visibilityState')?.get) {Object.defineProperty(document, 'visibilityState', {get: () => 'visible',configurable: true});}if (!Object.getOwnPropertyDescriptor(document, 'hidden')?.get) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}
    const eventOptions = {capture: true,passive: true};const ensureVisibility = () => {if (document.hidden !== false) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}};ensureVisibility();window.addEventListener('focus', e => e.stopImmediatePropagation(), eventOptions);window.addEventListener('blur', e => e.stopImmediatePropagation(), eventOptions);}
  function CaptchaDone(callback, checkInterval = 1000) {if (CloudPS()) return;const window = unsafeWindow;if (typeof callback !== 'function') {BpNote('Callback harus berupa fungsi', 'error');return;}let intervalId;
    const checkCaptcha = () => {try {if (elementExists('.iconcaptcha-modal__body-checkmark')) {clearInterval(intervalId);callback();return;}
    if (elementExists("iframe[src^='https://newassets.hcaptcha.com']")) {if (window.hcaptcha && typeof window.hcaptcha.getResponse === 'function') {const response = window.hcaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("input[name='cf-turnstile-response']")) {if (window.turnstile && typeof window.turnstile.getResponse === 'function') {const response = window.turnstile.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("iframe[title='reCAPTCHA']")) {if (window.grecaptcha && typeof window.grecaptcha.getResponse === 'function') {const response = window.grecaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}} catch (error) {console.error('Error checking captcha:', error);}};intervalId = setInterval(checkCaptcha, checkInterval);}
  function BpAnswer(input, mode = 'math') {if (mode === 'math') {let text = input.replace(/^(Solve:|What is)\s*/i, '').replace(/[=?]/g, '').trim();text = text.replace(/[x×]/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');if (text.startsWith('sqrt(')) {const num = parseFloat(text.match(/sqrt\((\d+\.?\d*)\)/)?.[1]);return { result: num ? Math.floor(Math.sqrt(num)) : null, op: null, a: null, b: null };}
    const match = text.match(/(\d+\.?\d*)\s*([+\-*/%^])\s*(\d+\.?\d*)/);if (!match) return { result: null, op: null, a: null, b: null };const [, n1, op, n2] = match, a = parseFloat(n1), b = parseFloat(n2);const isRounded = text.includes('rounded to integer');let result;switch (op) {case '+': result = a + b; break;case '-': result = a - b; break;case '*': result = a * b; break;case '/': result = isRounded ? Math.floor(a / b) : a / b; break;
    case '%': result = a % b; break;case '**': result = Math.pow(a, b); break;default:BpNote('Operator tidak dikenal: ' + op, 'error');result = null;}return { result, op, a, b };} else if (mode === 'sum') {const numbers = input.replace(/\s/g, '').match(/[+\-]?(\d+\.?\d*)/g) || [];return numbers.reduce((sum, val) => parseFloat(sum) + parseFloat(val), 0);} else if (mode === 'captcha') {const numcode = bp('input.captcha_code');
    if (!numcode) return null;const digits = numcode.parentElement.previousElementSibling.children[0].children;return Array.from(digits).sort((d1, d2) => parseInt(d1.style.paddingLeft) - parseInt(d2.style.paddingLeft)).map(d => d.textContent).join('');}return null;}
  function DebugLog() {if (CloudPS(true, true, false)) return;const STORAGE_KEY = 'protection_tracker';let attemptCount = GM_getValue(STORAGE_KEY, 0);if (attemptCount > 0) setTimeout(() => GM_setValue(STORAGE_KEY, 0), 60000);const SavedMethods = {
    output: BpNote,trace: typeof console.debug === 'function' ? console.debug : BpNote,alert: console.warn,notice: console.info,issue: console.error,grid: typeof console.table === 'function' ? console.table : BpNote,wipe: console.clear,funcBuilder: Function.prototype.constructor,makeElement: document.createElement};
    const limits = {grid: { max: 5, timeframe: 5000 },wipe: { max: 5, timeframe: 5000 },filteredOutput: { max: 5, timeframe: 5000 },blocker: { max: 1, timeframe: 15000, count: 0, timestamp: 0 }};function canReport(category) {const restriction = limits[category] || {count: 0};if (restriction.stopped) return false;
    const currentTime = Date.now();restriction.timestamp = restriction.timestamp || currentTime;if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count > restriction.max) {restriction.stopped = true;SavedMethods.alert(`Max limit hit for ${category}`);return false;}return true;}
    Object.defineProperty(window, 'onbeforeunload', { configurable: false, writable: false, value: null });['output', 'trace', 'alert', 'notice', 'issue', 'grid'].forEach(method => {if (typeof SavedMethods[method] === 'function') {console[method] = new Proxy(SavedMethods[method], {apply: (target, context, params) => {const adjustedParams = params.map(item => {if (typeof item === 'function') return "Hidden Function";
    if (typeof item !== 'object' || !item) return item;const attributes = Object.getOwnPropertyDescriptors(item);if (attributes.toString || 'get' in attributes) return "Hidden Accessor";if (Array.isArray(item) && item.length === 50 && typeof item[0] === "object") return "Hidden BigArray";return item;});if (params.length - adjustedParams.filter(x => x === params[params.indexOf(x)]).length >= Math.max(params.length - 1, 1)) {
    if (!canReport("filteredOutput")) return;}return SavedMethods[method].apply(context, adjustedParams);}});}});['wipe'].forEach(method => {console[method] = () => canReport(method) && SavedMethods.alert(`Blocked ${method}`);});window.Function.prototype.constructor = new Proxy(SavedMethods.funcBuilder, {apply: (target, context, inputs) => {const codeText = inputs[0];if (codeText?.includes('debugger')) {attemptCount++;
    GM_setValue(STORAGE_KEY, attemptCount);if (canReport("blocker")) SavedMethods.alert(`Blocked debugger (count: ${attemptCount})`);if (attemptCount > 100) {GM_setValue(STORAGE_KEY, 0);throw new Error("Debugger overload detected");}setTimeout(() => GM_setValue(STORAGE_KEY, Math.max(0, attemptCount - 1)), 1);inputs[0] = codeText.replaceAll("debugger", "");}return target.apply(context, inputs);}});
    document.createElement = new Proxy(SavedMethods.makeElement, {apply: (target, context, args) => {const newNode = target.apply(context, args);if (args[0].toLowerCase() === "iframe") {newNode.addEventListener("load", () => {try {newNode.contentWindow.console = { ...console };newNode.contentWindow.Function.prototype.constructor = window.Function.prototype.constructor;} catch (err) {}});}return newNode;}});
    Object.keys(SavedMethods).forEach(method => {if (method in console) Object.defineProperty(console, method, { configurable: false, writable: false });});if (cfg.get('AntiDebug')) {const baseTiming = performance.now;BpNote("Performance Modified For Anti-Debug Protection");performance.now = () => baseTiming() + Math.random() * 2;}}
  function CheckVisibility(selector, operatorOrCallback, textCondition, callback, actionOnVisible = true) {if (CloudPS()) return;function isElementVisible(elem) {if (!elem) return false;if (!elem.offsetHeight && !elem.offsetWidth) return false;if (getComputedStyle(elem).visibility === 'hidden') return false;return true;}
    function checkTextCondition(textCondition) {try {const conditionParts = textCondition.split(/(==|!=)/);if (conditionParts.length !== 3) {console.error('Invalid text condition format:', textCondition);return false;}const selectorPart = conditionParts[0].trim();const selector = selectorPart.replace("bp('", "").replace("').innerText", "").trim();
    const expectedValue = conditionParts[2].trim().replace(/['"]/g, '');const elem = bp(selector);if (!elem) return false;const actualValue = elem.innerText.trim();if (conditionParts[1].trim() === '==') {return actualValue.includes(expectedValue);} else if (conditionParts[1].trim() === '!=') {return !actualValue.includes(expectedValue);}return false;} catch (error) {
    console.error('Error evaluating text condition:', error);return false;}}if (typeof operatorOrCallback === 'function') {const callbackFn = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);if ((actionOnVisible && isVisible) || (!actionOnVisible && !isVisible)) {clearInterval(intervalId);callbackFn();}} catch (error) {
    console.error('Error checking visibility:', error);}}, checkInterval);} else if (typeof operatorOrCallback === 'string' && (operatorOrCallback === '&&' || operatorOrCallback === '||')) {const operator = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);const isTextConditionMet = checkTextCondition(textCondition);
    if ((operator === '&&' && isVisible && isTextConditionMet) || (operator === '||' && (isVisible || isTextConditionMet))) {clearInterval(intervalId);callback();}} catch (error) {console.error('Error checking visibility and text condition:', error);}}, checkInterval);} else {console.error('Parameter tidak valid.');}}
  function TrustMe() {if (CloudPS(true, true, true)) return;const sandbox = new Proxy(window, {get(target, key) {if (key === 'Object') {return new Proxy(Object, {get(objTarget, objKey) {if (objKey === 'freeze') {return function(obj) {BpNote("Object.freeze disabled in sandbox.", 'warn');return obj;};}return Reflect.get(objTarget, objKey);}});}return Reflect.get(target, key);}});
    const originalAddEventListener = EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener = function(type, listener, options) {if (type === 'message' || typeof listener !== 'function') {return originalAddEventListener.call(this, type, listener, options);}const wrappedListener = function(event) {let clonedEvent;try {if (event instanceof MessageEvent) {
    clonedEvent = new MessageEvent(event.type, {data: event.data,origin: event.origin,source: event.source,lastEventId: event.lastEventId,ports: event.ports,bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed});} else if (event instanceof MouseEvent) {clonedEvent = new MouseEvent(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed,clientX: event.clientX,
    clientY: event.clientY,button: event.button,buttons: event.buttons,target: event.target,currentTarget: event.currentTarget,relatedTarget: event.relatedTarget});} else if (event instanceof KeyboardEvent) {clonedEvent = new KeyboardEvent(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed,key: event.key,code: event.code,ctrlKey: event.ctrlKey,shiftKey: event.shiftKey,altKey: event.altKey,
    metaKey: event.metaKey});} else {clonedEvent = new Event(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed});['target', 'currentTarget', 'eventPhase', 'timeStamp'].forEach(prop => {if (event[prop] !== undefined) {Object.defineProperty(clonedEvent, prop, {value: event[prop],writable: true,configurable: true});}});}clonedEvent = new Proxy(clonedEvent, {
    get(target, prop) {if (prop === 'isTrusted') {return true;}return Reflect.get(target, prop);}});} catch (e) {BpNote(`Failed to clone event: ${e.message}`, 'error');return listener.call(this, event);}return listener.call(this, clonedEvent);};return originalAddEventListener.call(this, type, wrappedListener, options);};return sandbox;}
  function NoPrompts() {let timeoutInterval = 1000;unsafeWindow.onbeforeunload = null;timeoutInterval = (timeoutInterval + timeoutInterval) || 1000;setTimeout(NoPrompts, timeoutInterval);window.alert = () => {};window.confirm = () => true;window.prompt = () => null;if (window.Notification) {Notification.requestPermission = () => Promise.resolve('denied');Object.defineProperty(window, 'Notification', {value: null,writable: false});}if (document.readyState !== 'loading' && document.body) {
    bp('[class*="cookie"], [id*="cookie"], [class*="consent"], [id*="consent"], [class*="banner"], [id*="banner"], [class*="gdpr"], [id*="gdpr"], [class*="privacy"], [id*="privacy"], [role="dialog"], [aria-label*="cookie"], [aria-label*="consent"], [aria-label*="privacy"], [class*="notice"], [id*="notice"]',true).forEach(banner => {if (banner.textContent.match(/cookie|consent|tracking|gdpr|privacy|accept|agree|decline|manage|preferences/i)) {banner.style.display = 'none';banner.remove();}});}}
  function BoostTimers(targetDelay) {if (CloudPS(true, true, false)) return;const limits = {setTimeout: { max: 1, timeframe: 5000, count: 0, timestamp: 0 },setInterval: { max: 1, timeframe: 5000, count: 0, timestamp: 0 }};function canLog(type) {const restriction = limits[type];const currentTime = Date.now();
    if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count <= restriction.max) {return true;}return false;}const wrapTimer = (orig, type) => (func, delay, ...args) => orig(func, (typeof delay === 'number' && delay >= targetDelay) ? (canLog(type) && BpNote(`[BoostTimers] Accelerated ${type} from ${delay}ms to ${targetDelay}ms`), 50) : delay, ...args);
    try {Object.defineProperties(unsafeWindow, {setTimeout: { value: wrapTimer(unsafeWindow.setTimeout, 'setTimeout'), writable: true, configurable: true },setInterval: { value: wrapTimer(unsafeWindow.setInterval, 'setInterval'), writable: true, configurable: true }});} catch (e) {const proxyTimer = (orig, type) => new Proxy(orig, {
            apply: (t, _, a) => t(a[0], (typeof a[1] === 'number' && a[1] >= targetDelay) ? (canLog(type) && BpNote(`[BoostTimers] Accelerated ${type} from ${a[1]}ms to ${targetDelay}ms`), 50) : a[1], ...a.slice(2))});unsafeWindow.setTimeout = proxyTimer(unsafeWindow.setTimeout, 'setTimeout');unsafeWindow.setInterval = proxyTimer(unsafeWindow.setInterval, 'setInterval');}}
  function AIORemover(action, target = null, attributes = null) {switch (action) {case 'removeRef':delete document.referrer;document.__defineGetter__('referrer', () => target || '');BpNote('Referrer removed or set to:', target || 'empty');break;case 'removeBp':if (!target) {BpNote('Selector is required for removeBp action.', 'error');return;}var elements = bp(target, true);elements.forEach(element => element.remove());BpNote(`Elements with selector "${target}" removed.`);break;
    case 'delCookie':if (!target) {BpNote('Cookie name is required for delCookie action.', 'error');return;}document.cookie = `${target}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;BpNote(`Cookie "${target}" deleted.`);break;case 'removeAttr':if (!target || !attributes) {BpNote('Selector and attributes are required for removeAttr action.', 'error');return;}var attrs = Array.isArray(attributes) ? attributes : [attributes];var validAttrs = ['onclick', 'class', 'target', 'id'];var invalidAttrs = attrs.filter(a => !validAttrs.includes(a));
    if (invalidAttrs.length) {BpNote(`Invalid attributes: ${invalidAttrs.join(', ')}`, 'error');return;}var attrElements = bp(target, true);if (!attrElements.length) {BpNote(`No elements found for selector "${target}"`, 'error');return;}attrElements.forEach(element => {attrs.forEach(attr => element.removeAttribute(attr));});BpNote(`Attributes ${attrs.join(', ')} Removed`);break;case 'noAdb':var blockPattern, allowedDomains = null;if (target instanceof RegExp) {blockPattern = target;} else if (target && target.blockPattern) {
    blockPattern = target.blockPattern;allowedDomains = target.allowedDomains || null;} else {BpNote('blockPattern is required for noAdb action.', 'error');return;}var currentDomain = window.location.hostname;if (allowedDomains && !allowedDomains.test(currentDomain)) {BpNote(`NoAdb: Domain ${currentDomain} not allowed.`, 'info');return;}var regAdb = new RegExp(blockPattern);new MutationObserver(mutations => {mutations.forEach(mutation => {mutation.addedNodes.forEach(node => {
    if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {const source = node.src || node.textContent || '';if (regAdb.test(source)) {node.remove();}}});});}).observe(document, {childList: true,subtree: true});bp('script, iframe', true).forEach(element => {const source = element.src || element.textContent || '';if (regAdb.test(source)) {element.remove();}});BpNote(`NoAdb: Initialized blocking for pattern "${blockPattern}".`);break;default: BpNote('Invalid action. Use Existing Cases', 'error');}}
  function DoIfExists(query, actionOrTime = 'click', timeInSecOrFuncName = 1, funcName = 'setTimeout') {let action = 'click';let time = 1;let timerFuncName = 'setTimeout';if (typeof actionOrTime === 'number') {time = actionOrTime;timerFuncName = typeof timeInSecOrFuncName === 'string' ? timeInSecOrFuncName : 'setTimeout';} else if (typeof actionOrTime === 'string') {action = actionOrTime;time = typeof timeInSecOrFuncName === 'number' ? timeInSecOrFuncName : 1;timerFuncName = typeof funcName === 'string' ? funcName : 'setTimeout';}
    function GetForm(FormName) {const forms = document.forms;for (let i = 0; i < forms.length; i++) {if (FormName === 'mdn') {const form = forms[i].innerHTML;if (form.includes('Step')) {return forms[i];}} else if (FormName === 'Allin1') {const bait = forms[i].action;if (/bypass.html|adblock.html/.test(bait)) continue;return forms[i];}}return null;}
    let element;if (query === 'mdn' || query === 'Allin1') {element = GetForm(query);} else {element = bp(query);}if (element) {if (typeof element[action] === 'function') {if (timerFuncName === 'setTimeout' || timerFuncName === 'setInterval') {const timerFunc = window[timerFuncName];if (timerFuncName === 'setTimeout') {timerFunc(() => {
    try {element[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');
    clearInterval(intervalId);}} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);clearInterval(intervalId);}}, time * 1000);BpNote(`Interval ID: ${intervalId}`);}} else {BpNote(`Timer tidak valid. Gunakan "setTimeout" atau "setInterval".`,'error');}} else {BpNote(`Elemen "${query}" tidak memiliki metode "${action}".`,'error');}} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');}}
  function BypassedByBloggerPemula(match, exclude, data, url = '', blog = false, all = false) {if (CloudPS()) return;if (typeof exclude === 'function') {data = exclude;exclude = null;url = '';blog = false;all = false;}if (!new RegExp(match).test(location.host)) return;if (exclude && new RegExp(exclude).test(location.host)) {BpNote(`Domain ${location.host} Excluded`, 'info');return;}if (typeof data === 'function') {try {data();} catch (e) {BpNote(`Error executing function data: ${e.message}`, 'error');}return;}
    if (typeof data === 'string') {const params = data.split(',');if (params.every(p => BpParams.has(p.replace(/\+[0-9]+/, '')))) {const use = params[0];let value = all ? BpParams.getAll(use.replace(/\+[0-9]+/, '')).find(u => new RegExp(match).test(u)) : BpParams.get(use.replace(/\+[0-9]+/, ''));if (!value || value.includes('st?')) {value = extractFlexibleUrl(use);}if (value) redirect(url + value, blog);} else {const value = extractFlexibleUrl(data);if (value) redirect(url + value, blog);}return;}let dataObj = data;
    if (Array.isArray(data)) {dataObj = {'/': data};}if (typeof dataObj !== 'object' || dataObj === null) {BpNote('Invalid data type: data must be a function, string, array, or object', 'error');return;}if (!(location.pathname in dataObj)) {BpNote(`Pathname ${location.pathname} not found in data`, 'info');return;}const [key, value] = dataObj[location.pathname];let finalValue = '';if (typeof key === 'object' && key.test(location.search)) {finalValue = value + RegExp.$1;} else if (BpParams.has(key)) {finalValue = value + BpParams.get(key);} else {finalValue = extractFlexibleUrl('url');}
    if (finalValue) redirect(url + finalValue, blog);function extractFlexibleUrl(dataString) {const currentUrl = window.location.href;const urlParams = currentUrl.split('&url=');if (urlParams.length < 2) {BpNote('Not enough URL parameters to extract', 'warn');return null;}let partsToTake = 1;if (dataString.match(/url\+(\d+)/)) {partsToTake = parseInt(dataString.match(/url\+(\d+)/)[1]);}if (partsToTake > urlParams.length - 1) {BpNote(`Requested parts (${partsToTake}) exceed available URL parameters (${urlParams.length - 1})`, 'warn');partsToTake = urlParams.length - 1;}let extractedUrl = '';
    if (partsToTake === 1) {extractedUrl = urlParams[urlParams.length - 1];} else {const startIndex = urlParams.length - partsToTake;extractedUrl = urlParams.slice(startIndex).join('&url=');}try {extractedUrl = decodeURIComponent(extractedUrl);} catch (e) {BpNote('Error decoding extracted URL: ' + e, 'error');}return extractedUrl;}}
  function BlockPopup() {const window = unsafeWindow;const originalOpen = window.open;function createNotification(url, callback) {const div = document.createElement('div');div.className = 'popup-notification';const shadow = div.attachShadow({mode: 'open'});
      shadow.innerHTML = `<style>:host { position: fixed; top: 15px; right: 15px; z-index: 9999; font-family: Arial, sans-serif; }.popup { background: #fff; border: 2px solid #333; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 350px; border-radius: 5px; }.title { font: bold 16px Arial; color: #000; margin-bottom: 10px; padding-right: 20px; position: relative; }.url { font-size: 14px; color: #222; word-break: break-all; background: #f5f5f5; padding: 8px; border-radius: 3px; margin-bottom: 15px; }.buttons { display: flex; gap: 10px; }
      button { font: bold 14px Arial; padding: 8px 15px; cursor: pointer; border: none; border-radius: 3px; transition: background 0.2s; }.allow { background: #4CAF50; color: #fff; } .allow:hover { background: #45a049; }.block { background: #f44336; color: #fff; } .block:hover { background: #da190b; }.whitelist { background: #2196F3; color: #fff; opacity: 0.6; cursor: not-allowed; }.reload { background: #FFC107; color: #000; } .reload:hover { background: #FFB300; }.close { position: absolute; top: 0; right: 0; background: none; border: none; font-size: 16px; cursor: pointer; color: #333; }.close:hover { color: #f44336; }
      </style><div class="popup"><div class="title">Popup Request<button class="close">✕</button></div><div class="url">${url || 'about:blank'}</div><div class="buttons"><button class="allow">Open</button><button class="whitelist" title="Sementara Belum Bisa di Gunakan">Whitelist</button><button class="block">Block</button><button class="reload">Reload</button></div></div>`;const remove = () => div.remove();shadow.querySelector('.allow').onclick = () => {callback(true);remove();};shadow.querySelector('.block').onclick = () => {callback(false);remove();};shadow.querySelector('.reload').onclick = () => {window.location.reload();remove();};
      shadow.querySelector('.close').onclick = () => {callback(false);remove();};bp('.popup-notification')?.remove();document.body.appendChild(div);}window.open = (url, name, features) => new Promise(resolve => createNotification(url, shouldOpen => resolve(shouldOpen ? originalOpen(url, name, features) : (BpNote(`Blocked popup to: ${url}`), null))));document.addEventListener('click', e => {const target = e.target;if (target.tagName === 'A' && target.target === '_blank' && target.href) {e.preventDefault();createNotification(target.href, shouldOpen => shouldOpen ? originalOpen(target.href) : BpNote(`Blocked onclick popup to: ${target.href}`));}}, true);
      document.addEventListener('submit', e => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();createNotification(form.action, shouldOpen => shouldOpen ? originalOpen(form.action) : BpNote(`Blocked form popup to: ${form.action}`));}}, true);}

  BypassedByBloggerPemula('gocmod.com', null, 'urls', '');
  BypassedByBloggerPemula('api.gplinks.com', null, 'url', '');
  BypassedByBloggerPemula('maloma3arbi.blogspot.com', null, 'link', '');
  BypassedByBloggerPemula('inshort.in|youlinks.in|linkcents.com', null, 'url+2', '');
  BypassedByBloggerPemula('financenuz.com', null, 'url', 'https://financenuz.com/?web=');
  BypassedByBloggerPemula(/t.me/, () => {if (BpParams.has('url')) {location = decodeURIComponent(BpParams.get('url'));}});
  BypassedByBloggerPemula(/dutchycorp.space/, () => {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});
  //BypassedByBloggerPemula(/tiktok.com/, () => {if (BpParams.has('target')) {location = decodeURIComponent(BpParams.get('target'));}});
  //BypassedByBloggerPemula(/(facebook|instagram).com/, () => {if (BpParams.has('u')) {location = decodeURIComponent(BpParams.get('u'));}});
  BypassedByBloggerPemula(/financedoze.com/, () => {if (BpParams.has('id')) {location = 'https://www.google.com/url?q=https://financedoze.com';}});
  BypassedByBloggerPemula(/vk.com/, () => {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));}});
  BypassedByBloggerPemula(/shortfaster.net/, () => {const twoMinutesAgo = Date.now() - 2 * 60 * 1000;localStorage.setItem('lastRedirectTime_site1', twoMinutesAgo.toString());});
  BypassedByBloggerPemula(/(g34new|dlgamingvn|v34down|phimsubmoi).com|nashib.xyz/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
  BypassedByBloggerPemula(/earnbee.xyz|zippynest.online|getunic.info/, () => {localStorage.setItem('earnbee_visit_data', JSON.stringify({firstUrl: window.location.href,timestamp: Date.now() - 180000}));});
  BypassedByBloggerPemula(/triggeredplay.com/, () => {if (location.href.includes('#')) {let trigger = new URLSearchParams(window.location.hash.substring(1));
      let redplay = trigger.get('url');if (redplay) {let decodedUrl = DecodeBase64(redplay);window.location.href = decodedUrl;}}});
  BypassedByBloggerPemula(/ouo.io/, () => {if (BpParams.has('s') && location.href.includes('link.nevcoins.club')) {location = 'https://' + BpParams.getAll('s');} else if (BpParams.has('s')) {location = BpParams.getAll('s');}});
  BypassedByBloggerPemula(/adbtc.top/, () => {if (CloudPS(true, true, true)) return;CaptchaDone(() => {DoIfExists("input[class^=btn]");});let count = 0; setInterval(function() {if (bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")) {count = 0;
    bp("div.col.s4> a").click();} else {count = count + 1;}}, 5000); window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin; unsafeWindow.coinwin = {}; popc.close();}};});
  BypassedByBloggerPemula(/linkbox.to/, () => {Listener(function(object) {if (object.url.includes('api/file/detail?itemId')) {BpNote(object.responseText);const {data: {itemInfo}} = JSON.parse(object.responseText);BpNote(itemInfo); redirect(itemInfo.url, false);}});});
  BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;const features = [{key: 'Adblock',action: () => AIORemover('noAdb', /adblock-modal|AdblockReg|AntiAdblock|blockAdBlock|checkAdBlock|detectAnyAdb|detectAdBlock|justDetectAdb|FuckAdBlock|TestAdBlock|DisableDevtool/),log: 'Adblock Feature'}, {
    key: 'Anima',action: StopAnima,log: 'Disable All Animations'}, {key: 'Prompt',action: () => {const runNoPrompts = () => NoPrompts();if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', runNoPrompts, {once: true});} else {runNoPrompts();}new MutationObserver(runNoPrompts).observe(document, {childList: true,subtree: true});},
    log: 'Disable Prompts & Notifications'}, {key: 'SameTab',action: SameTab,log: 'SameTab'},{key: 'TimerFC',action: () => BoostTimers(cfg.get('TDelay')),log: 'Fast Timer'}, {key: 'AntiDebug',action: DebugLog,log: 'Anti-Debug'}, {key: 'BlockFC',action: NoFocus,log: 'Focus Control'}, {key: 'RightFC',action: EnableRCF,log: 'Right Click Control'}, {key: 'BlockPop',
    action: BlockPopup,log: 'Popup Blocker'}];const activated = features.filter(({key}) => cfg.get(key)).map(({action,log}) => {action();return log;});if (activated.length) {BpNote(`Activated Features: ${activated.join(', ')}`, 'info');}});
  BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, () => {Object.defineProperty(document, 'hidden', {value: false,writable: false});Object.defineProperty(document, 'visibilityState', {value: 'visible',writable: false});document.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);const waitForEl = (sel, cb, t = 1e4) => {const start = Date.now();const check = () => {const elm = bp(sel);if (elm) return cb(elm);if (Date.now() - start > t) BpNote(`Timeout: ${sel}`, 'warn'); else setTimeout(check, 500);}; setTimeout(check, 1e3);};
    const addDownloadButton = () => waitForEl('ytd-subscribe-button-renderer', elm => {if (bp('#dl-bp-button')) return;elm.parentElement.style.cssText = 'display: flex; align-items: center; gap: 8px';elm.insertAdjacentHTML('afterend', '<button id="dl-bp-button" style="background: #ff0000; color: white; border: none; padding: 8px 12px; border-radius: 2px; cursor: pointer; font-size: 13px; line-height: 18px;">DL BP</button>');bp('#dl-bp-button').addEventListener('click', showDownloadDialog);});const showDownloadDialog = () => {if (bp('#dl-bp-dialog')) return;
    const dialog = document.createElement('div');dialog.id = 'dl-bp-dialog';const shadow = dialog.attachShadow({mode: 'open'});shadow.innerHTML = `<style>.dialog { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.3); z-index: 1000; width: 90%; max-width: 400px; text-align: center; }.input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; }.btns { display: flex; gap: 10px; justify-content: center; }
    .btn { background: #ff0000; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; }.btn:hover { background: #cc0000; }.close { position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 20px; }</style><div class="dialog"><span class="close">X</span><h3>Download YouTube Video or Audio</h3><input class="input" type="text" value="${location.href}"><div class="btns"><button class="btn" id="video-btn">Video</button><button class="btn" id="audio-btn">Audio</button></div></div>`;
    document.body.appendChild(dialog);shadow.querySelector('.close').addEventListener('click', () => dialog.remove());shadow.querySelector('#video-btn').addEventListener('click', () => startDownload(shadow.querySelector('.input').value, 'video') && dialog.remove());shadow.querySelector('#audio-btn').addEventListener('click', () => startDownload(shadow.querySelector('.input').value, 'audio') && dialog.remove());};const startDownload = (url, type) => {const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/shorts/')[1]?.split('?')[0];
    if (!videoId) return BpNote('Invalid video ID', 'warn');const downloadUrl = type === 'video' ? `https://bloggerpemula.pythonanywhere.com/youtube/video/${videoId}` : `https://bloggerpemula.pythonanywhere.com/youtube/audio/${videoId}`;const a = document.createElement('a');a.href = downloadUrl;a.target = '_blank';a.click();};if (cfg.get('YTDown')) {addDownloadButton();document.addEventListener('yt-navigate-finish', addDownloadButton);document.addEventListener('yt-page-data-updated', addDownloadButton);}
    if (cfg.get('YTShort')) {const bypassShorts = () => {if (!location.pathname.startsWith('/shorts')) return;const vidId = location.pathname.split('/')[2];if (vidId) window.location.replace(`https://www.youtube.com/watch?v=${vidId}`);};bypassShorts();document.addEventListener('yt-navigate-start', bypassShorts);}});
  BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si', TrustMe);
  const sl = (h => {switch (h.host) {case 'multiup.io': if (h.href.includes('/download/')) return h.href.replace('download/', 'en/mirror/'); break;case 'modsfire.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://modsfire.com/d/' + RegExp.$1;} break;//case 'pixeldrain.com': if (h.href.includes('/u/')) return h.href.replace('u/', '/api/file/') + '?download'; break;case 'social-unlock.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://social-unlock.com/redirect/' + RegExp.$1;} break;//case 'work.ink': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://adbypass.org/bypass?bypass=' + location.href.split('?')[0];} break;
      case 'www.google.com': if (h.pathname === '/url' && h.searchParams.has('q')) {return h.searchParams.get('q');} else if (h.pathname === '/url' && h.searchParams.has('url')) {return h.searchParams.get('url');}break;default: break;}})(new URL(location.href));if (sl) {location.href = sl;}
  // Injecting code from start and the end of document coded by @Konf
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
    switch (h.host) {case 'shrs.link': case 'shareus.io':if (/^\/old\/([^\/]+)/.test(h.pathname)) {return 'https://jobform.in/?link=' + RegExp.$1;} break;
      case 'bloggerpemula.pythonanywhere.com': if (h.pathname === '/' && h.searchParams.has('BypassResults')) {result.link = decodeURIComponent(location.href.split('BypassResults=')[1].replace('&m=1', ''));
      result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; return result;} break;default: break;}})(new URL(location.href)); if (bas) {const {isNotifyNeeded, redirectDelay, link} = bas;
      if (isNotifyNeeded) {notify(`Please Wait You Will be Redirected to Your Destination in @ Seconds , Thanks`);}setTimeout(() => {location.href = link;}, redirectDelay * 1000);}

    BypassedByBloggerPemula(/upload.ee/, () => {DoIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/the2.link/, () => {DoIfExists('#get-link-btn',3);});
    BypassedByBloggerPemula(/dayuploads.com/, () => {DoIfExists('#ad-link2', 2);});
    BypassedByBloggerPemula(/keeplinks.org/, () => {DoIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/megaurl.win/, () => {DoIfExists('#generate_link', 2);});
    BypassedByBloggerPemula(/forex-22.com/, () => {DoIfExists('#continuebutton',3);});
    BypassedByBloggerPemula(/ify.ac|go.linkify.ru/, () => {unsafeWindow.open_href();});
    BypassedByBloggerPemula(/1shortlink.com/, () => {DoIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/1ink.cc|cuturl.cc/, () => {DoIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/dddrive.me/, () => {DoIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/uppit.com/, () => {DoIfExists('.btn-primary.btn-xl.btn', 2);});
    BypassedByBloggerPemula(/recut.ru/, () => {DoIfExists('#open_link > span > span', 2);});
    BypassedByBloggerPemula(/krakenfiles.com/, () => {DoIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/1short.io/, () => {DoIfExists('#countDownForm', 'submit', 7);});
    BypassedByBloggerPemula(/disheye.com/, () => {DoIfExists('#redirectForm', 'submit', 3);});
    BypassedByBloggerPemula(/aysodamag.com/, () => {DoIfExists('#link1s-form', 'submit',3);});
    BypassedByBloggerPemula(/file-upload.net/, () => {DoIfExists('#downbild.g-recaptcha', 2);});
    BypassedByBloggerPemula(/userscloud.com|dosya.co/, () => {DoIfExists('#btn_download', 2);});
    BypassedByBloggerPemula(/hexupload.net/, () => {DoIfExists('.btn-success.btn-lg.btn', 1);});
    BypassedByBloggerPemula(/gofile.io/, () => {waitForElm('a.me-1', gfBtn => gfBtn.click());});
    BypassedByBloggerPemula(/cryptonewssite.rf.gd/, () => {DoIfExists('#dynamic-button a', 2);});
    BypassedByBloggerPemula(/rapidgator.net/, () => {DoIfExists('.btn-free.act-link.link', 2);});
    BypassedByBloggerPemula(/dbree.me/, () => {DoIfExists('.center-block.btn-default.btn', 2);});
    BypassedByBloggerPemula(/dropgalaxy.com/, () => {DoIfExists("button[id^='method_fre']", 2);});
    BypassedByBloggerPemula(/1bitspace.com/, () => {DoIfExists('.button-element-verification',3);});
    BypassedByBloggerPemula(/cshort.org/, () => {DoIfExists('.timer.redirect', 3, 'setInterval');});
    BypassedByBloggerPemula(/revlink.pro/, () => {DoIfExists('#main-content-wrapper > button',2);});
    BypassedByBloggerPemula(/megaupto.com/, () => {DoIfExists('#direct_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/panyhealth.com/, () => {DoIfExists("form[method='get']", 'submit',3);});
    BypassedByBloggerPemula(/playpaste.com/, () => {CaptchaDone(() => {DoIfExists('button.btn');});});
    BypassedByBloggerPemula(/lanza.me/, () => waitForElm('a#botonGo', lz => redirect(lz.href, false)));
    BypassedByBloggerPemula(/karanpc.com/, () => {DoIfExists('#downloadButton > form', 'submit', 2);});
    BypassedByBloggerPemula(/lifeezee.com/, () => waitForElm('.get-link', lifz => redirect(lifz.href)));
    BypassedByBloggerPemula(/jioupload.icu/, () => {CaptchaDone(() => {DoIfExists('#continueBtn');});});
    BypassedByBloggerPemula(/douploads.net/, () => {DoIfExists('.btn-primary.btn-lg.btn-block.btn', 2);});
    BypassedByBloggerPemula(/lolinez.com/, () => waitForElm('p#url a', lol => redirect(lol.href, false)));
    BypassedByBloggerPemula(/(fc-lc|thotpacks).xyz/, () => {DoIfExists('#invisibleCaptchaShortlink', 3);});
    BypassedByBloggerPemula(/2linkes.com/, () => {DoIfExists('.box-body > form:nth-child(2)', 'submit', 2);});
    BypassedByBloggerPemula(/file-upload.in/, () => waitForElm('#getlink', fui => redirect(fui.href, false)));
    BypassedByBloggerPemula(/terabox.fun/, async function() {await sleep(3000);ReadytoClick('.active.btn');});
    BypassedByBloggerPemula(/offerwall.me|ewall.biz/, () => {CaptchaDone(() => {DoIfExists('#submitBtn');});});
    BypassedByBloggerPemula(/shortlinks2btc.somee.com/, () => {CaptchaDone(() => {DoIfExists('#btLogin');});});
    BypassedByBloggerPemula(/kisalt.digital/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/buzzheavier.com/, () => {waitForElm('#download-link', bhvBtn => bhvBtn.click());});
    BypassedByBloggerPemula(/lksfy.com/, () => {CaptchaDone(() => {DoIfExists('.get-link.btn-primary.btn');});});
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/surl.li|surl.gd/, () => waitForElm('#redirect-button', surl => redirect(surl.href)));
    BypassedByBloggerPemula(/apkadmin.com/, () => waitForElm('div.text.text-center a', apk => redirect(apk.href)));
    BypassedByBloggerPemula(/dataupload.net/, async function() {await sleep(5000);ReadytoClick('.downloadbtn');});
    BypassedByBloggerPemula(/(devnote|formshelp|rcccn).in|djbassking.live/, () => {DoIfExists('#getlinks.btn', 2);});
    BypassedByBloggerPemula(/rotizer.net/, () => {CaptchaDone(() => {DoIfExists('button:innerText("Confirm")');});});
    BypassedByBloggerPemula(/(blogsward|coinjest).com/, () => {waitForElm('#continueBtn', afBtn => afBtn.click());});
    BypassedByBloggerPemula(/filemoon.sx/, () => waitForElm('div.download2 a.button', fm => redirect(fm.href, false)));
    BypassedByBloggerPemula(/render-state.to/, () => {SameTab();if (BpParams.has('link')) {unsafeWindow.goToLink();}});
    BypassedByBloggerPemula(/linkforearn.com/, () => waitForElm('#shortLinkSection a', linkf => redirect(linkf.href)));
    BypassedByBloggerPemula(/bowfile.com/, () => {ReadytoClick('.download-timer > .btn--primary.btn > .btn__text', 2);});
    BypassedByBloggerPemula(/downfile.site/, () => {DoIfExists('button.h-captcha', 2);DoIfExists('#megaurl-submit', 3);});
    BypassedByBloggerPemula(/importantclass.com/, () => {waitForElm('a#my-btn', vnshor => redirect(vnshor.href, false));});
    BypassedByBloggerPemula(/enlacito.com/, () => {setTimeout(() => {redirect(unsafeWindow.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/adtival.network/, () => {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/imagereviser.com/, () => {CheckVisibility('.tick.wgicon', () => {DoIfExists('.bottom_btn');});});
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/stockmarg.com/, () => {DoIfExists('#codexa', 'submit', 3);DoIfExists('#open-continue-btn', 4);});
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/dogefury.com|go.tfly.link|thanks.tinygo.co/, () => {DoIfExists('#form-continue', 'submit', 2);});
    BypassedByBloggerPemula(/(dramaticqueen|emubliss).com/, () => {DoIfExists('#notarobot.button',3);DoIfExists('#btn7',4);});
    BypassedByBloggerPemula(/(grtjobs|jksb).in/, () => {CheckVisibility('.step', () => {unsafeWindow.handleContinueClick();});});
    BypassedByBloggerPemula(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/, () => {CaptchaDone(() => {DoIfExists('#continue');});});
    BypassedByBloggerPemula(/(bnbfree|freeth|freebitco).in/, () => {CaptchaDone(() => {DoIfExists('#free_play_form_button');});});
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/dailyuploads.net/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#fbtn1', 2);});
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    BypassedByBloggerPemula(/gofile.io/, () => {elementReady('#filemanager').then(() => ReadytoClick('button.item_download', 2));});
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/paycut.pro/, () => {if (location.href.includes('/ad/')) {location = location.href.replace('ad/', '');}});
    BypassedByBloggerPemula(/explorerlives.com/, () => {DoIfExists('#link.tp-blue.tp-btn', 3);DoIfExists('#btn6.tp-blue.tp-btn', 4);});
    BypassedByBloggerPemula(/vuotnhanh.com/, () => waitForElm('a#result.safelink.btn.btn-lg.btn-success', vuot => redirect(vuot.href)));
    BypassedByBloggerPemula(/uploadev.org/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#direct_link > a', 2);});
    BypassedByBloggerPemula(/megaup.net/, () => {waitForElm('a.btn.btn-default', muBtn => muBtn.click());DoIfExists('#btndownload', 7);});
    BypassedByBloggerPemula(/forex-trnd.com/, () => {elementReady('#exfoary-snp').then(() => DoIfExists('#exfoary-form', 'submit', 3));});
    BypassedByBloggerPemula(/(kongutoday|proappapk|hipsonyc).com/, () => {if (BpParams.has('safe')) {meta(atob(BpParams.get('safe')));}});
    BypassedByBloggerPemula(/files.fm/, () => waitForElm('#head_download__all-files > div > div > a:nth-child(1)', flBtn => flBtn.click()));
    BypassedByBloggerPemula(/(tejtime24|drinkspartner).com/, () => {DoIfExists('#bottomButton',2);ReadytoClick('#open-link > .pro_btn',3);});
    BypassedByBloggerPemula(/gdflix.dad/, () => {elementReady('#cf_captcha.card').then(() => ReadytoClick('a.btn.btn-outline-success', 2));});
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/mega4upload.net/, () => {DoIfExists("input[name=mega_free]",2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    //BypassedByBloggerPemula(/financemonk.net/, () => {CaptchaDone(() => {DoIfExists('#downloadBtnClick');});DoIfExists('#dllink', 'submit', 3);});
    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){DoIfExists('#tp-snp2.tp-blue.tp-btn', 2);DoIfExists('.tp-white.tp-btn', 3);});
    BypassedByBloggerPemula(/loanifyt.site|topshare.in|btcon.online/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/(techleets|bonloan).xyz|sharphindi.in|nyushuemu.com/, () => waitForElm('a#tp-snp2', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/(jobmatric|carjankaari).com|techsl.online/, () => {DoIfExists("form[name='rtg']", 'submit', 3);DoIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/sharetext.me/, () => {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/filespayouts.com/, () => {DoIfExists("input[name='method_free']", 2);CaptchaDone(() => {ReadytoClick('#downloadbtn');});});
    BypassedByBloggerPemula(/usersdrive.com|ddownload.com/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('.btn-download.btn', 1);});
    BypassedByBloggerPemula(/apkw.ru/, () => {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw));}});
    BypassedByBloggerPemula(/comohoy.com/, () => {if (location.href.includes('/view/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/cutnet.net|(cutyion|cutynow).com|(exego|cety).app|(jixo|gamco).online/, () => {ReadytoClick("#submit-button:not([disabled])",2);});
    BypassedByBloggerPemula(/linkforearn.click/, () => waitForElm('#shortLinkSection.short-link-section a.btn', linkforearn => redirect(linkforearn.href, false)));
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/4fnet.org/, () => {if (location.href.includes('/goto')) {let fnet = location.href.split('/').slice(-1);redirect(atob(fnet),false);}});
    BypassedByBloggerPemula(/oxy\.*/, () => {if (elementExists('#divdownload')) {let oxy = bp('.ocdsf233').getAttribute('data-source_url');redirect(oxy, false);}});
    BypassedByBloggerPemula(/alorra.com/, () => {CheckVisibility('.ast-post-format- > button', () => {DoIfExists('.single-layout-1.ast-post-format- > button');});});
    BypassedByBloggerPemula(/largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in/, () => {DoIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/uploady.io/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#free_dwn', 2);DoIfExists('.rounded.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/adoc.pub/, () => {DoIfExists('.btn-block.btn-success.btn', 2);CaptchaDone(() => {DoIfExists('.mt-15.btn-block.btn-success.btn-lg.btn');});});
    BypassedByBloggerPemula(/programasvirtualespc.net/, () => {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);}});
    BypassedByBloggerPemula(/pdfcoffee.com/, () => {DoIfExists('.btn-block.btn-success.btn', 2);CaptchaDone(() => {DoIfExists('.my-2.btn-block.btn-primary.btn-lg.btn');});});
    BypassedByBloggerPemula(/(financewada|utkarshonlinetest).com|financenova.online/, () => {DoIfExists('.get_btn.step_box > .btn', 2);ReadytoClick('.get_btn a[href]', 3);});
    BypassedByBloggerPemula(/financedoze.com|(techhype|mukhyasamachar).in|svream.net|rtjks.xyz/, () => {DoIfExists('#rtg', 'submit', 3);DoIfExists('#open-continue-btn', 4);});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/setroom.biz.id|travelinian.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm(' a:nth-child(1) > button', setr => setr.click());});
    BypassedByBloggerPemula(/file-upload.org/, () => {DoIfExists("button[name='method_free']", 2);DoIfExists('.download-btn',2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/mexa.sh/, () => {parent.open = BpBlock();DoIfExists('#Downloadfre', 2);DoIfExists('#direct_link', 2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/up-4ever.net/, () => {DoIfExists("input[name='method_free']", 2);DoIfExists('#downLoadLinkButton', 5);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/udrop.com/, () => waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`), false)));
    BypassedByBloggerPemula(/wp.thunder-appz.eu.org|blog.adscryp.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm('#button3 > a', thun => redirect(thun.href, false));});
    BypassedByBloggerPemula(/up-load.io|downloadani.me/, () => {DoIfExists("input[name='method_free']", 2);DoIfExists('.btn-dow.btn', 1);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics/, () => {DoIfExists('#getlink', 3);});
    BypassedByBloggerPemula(/hitfile.net/, () => {CaptchaDone(() => {DoIfExists('#submit');});DoIfExists('.nopay-btn.btn-grey',2);waitForElm('#popunder2', hfl2 => redirect(hfl2.href, false),37);});
    BypassedByBloggerPemula(/mirrored.to/, () => {waitForElm('div.col-sm.centered.extra-top a', mirr => redirect(mirr.href, false)); waitForElm('div.centerd > a', mir => redirect(mir.href, false));});
    BypassedByBloggerPemula(/(fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in/, () => {ReadytoClick('#continue-show', 3);});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks).com/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/(keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists('#tp-snp2',4);});
    BypassedByBloggerPemula(/mboost.me/, () => {if (elementExists('#firstsection')){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo).com|deltabtc.xyz|bit4me.info/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/karyawan.co.id/, () => {
      DoIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/drop.download/, () => {
      DoIfExists('#method_free', 2);DoIfExists('.btn-download', 2);});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, () => {
      DoIfExists('#yuidea', 'submit', 2);DoIfExists('#btn6', 2);});
    BypassedByBloggerPemula(/oii.io/, () => {if (!cfg.get('reCAPTCHA')) {
      DoIfExists('button.g-recaptcha.btn.btn-primary', 2);}});
    BypassedByBloggerPemula(/slink.bid/, () => {
      DoIfExists('#btn-generate', 1);DoIfExists('.btn-success.btn', 5);});
    BypassedByBloggerPemula(/blog.yurasu.xyz/, () => {
      DoIfExists('#wcGetLink', 2);DoIfExists('#gotolink', 3);});
    BypassedByBloggerPemula(/workupload.com/, () => {
      if (elementExists('#download')) {DoIfExists('.btn-prio.btn', 2);}});
    BypassedByBloggerPemula(/mp4upload.com/, () => {
      DoIfExists('#todl', 2);DoIfExists("form[name='F1']", 'submit', 1);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech|cointox.net/, () => {
      waitForElm('.mb-sm-0.mt-3.btnBgRed', ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/solidcoins.net|fishingbreeze.com/, () => {
      CaptchaDone(() => {DoIfExists('form[action]', 'submit');});
      if (!elementExists('.g-recaptcha')) {DoIfExists('mdn', 'submit', 17);}});
    BypassedByBloggerPemula(/creditsgoal.com/, () => {
      DoIfExists('#tp-snp2', 3);DoIfExists('button:innerText("Continue")', 4);});
    BypassedByBloggerPemula(/adfoc.us/, () => {
      if (elementExists('#skip')) {let adf = bp('.skip').href; redirect(adf);}});
    BypassedByBloggerPemula(/zegtrends.com/, () => {DoIfExists('#cln', 'submit', 5);
      DoIfExists('#bt1', 5);DoIfExists('#go', 5);});
    BypassedByBloggerPemula(/mega4up.org/, () => {
      DoIfExists('input.btn.btn-info.btn-sm', 2);DoIfExists('.btn-dark.btn', 2);});
    BypassedByBloggerPemula(/docs.google.com/, () => {
      if (elementExists('#uc-dl-icon')) {DoIfExists('#downloadForm', 'submit', 1);}});
    BypassedByBloggerPemula(/uploadhaven.com/, () => {
      DoIfExists('.alert > a:nth-child(1)', 2);DoIfExists('#form-download', 'submit', 1);});
    BypassedByBloggerPemula(/k2s.cc/, () => {DoIfExists('.button-download-slow', 2);
      waitForElm('a.link-to-file', k2s => redirect(k2s.href, false));});
    BypassedByBloggerPemula(/ac.totsugeki.com/, () => {let $ = unsafeWindow.jQuery;
      $("a[target='_blank']").removeAttr("target");DoIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {
      if (!cfg.get('hCaptcha')) return;await sleep(2000);ReadytoClick('#checkbox');});
    BypassedByBloggerPemula(/bigbtc.win/, () => {CaptchaDone(() => {DoIfExists('#claimbutn');});
      if (location.href.includes('/bonus')) {DoIfExists('#clickhere', 2);}});
    BypassedByBloggerPemula(/linkspy.cc/, () => {
      if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/katfile.com/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});
      DoIfExists('#fbtn1', 2);waitForElm('#dlink', katf => redirect(katf.href, false));});
    BypassedByBloggerPemula(/(superheromaniac|spatsify|mastkhabre|ukrupdate).com/, () => {
      DoIfExists('#tp98', 10);DoIfExists('#btn6', 12);DoIfExists("form[name='tp']", 'submit', 11);});
    BypassedByBloggerPemula(/(bestloansoffers|worldzc).com|earningtime.in/, () => {
      DoIfExists('#rtg', 'submit', 2);DoIfExists('#rtg-form', 'submit', 3);
      DoIfExists('.rtg-blue.rtg-btn', 4);DoIfExists('#rtg-snp21 > button', 5);});
    BypassedByBloggerPemula(/(exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online/, () => {
      DoIfExists('#invisibleCaptchaShortlink', 2);DoIfExists('#before-captcha', 'submit', 3);});
    BypassedByBloggerPemula(/jobinmeghalaya.in/, () => {DoIfExists('#wpsafelink-landing', 'submit', 2);
      DoIfExists('#wpsafe-link > .bt-success', 3);});
    BypassedByBloggerPemula(/dinheiromoney.com/, () => {DoIfExists("div[id^='button'] form", 'submit', 3);
      waitForElm("div[id^='button'] center a", postazap => redirect(postazap.href, false));});
    BypassedByBloggerPemula(/itijobalert.in/, () => {ReadytoClick('#waiting > div > .bt-success', 2);
      ReadytoClick('#pop-button > .bt-success', 3);ReadytoClick('#gotolink.bt-success', 4);});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in/, () => {
      DoIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/www.google.com|recaptcha.net/, async function() {
      if (!cfg.get('reCAPTCHA')) return;await sleep(2000);ReadytoClick('.recaptcha-checkbox-border');});
    BypassedByBloggerPemula(/anonym.ninja/, () => {
      if (location.href.includes('download/')) {var fd = window.location.href.split('/').slice(-1)[0];
      redirect(`https://anonym.ninja/download/file/request/${fd}`);}});
    BypassedByBloggerPemula(/flamebook.eu.org/, async () => {const flame = ['#button1', '#button2', '#button3'];
      for (const fbook of flame) {await sleep(3000);ReadytoClick(fbook);}});
    BypassedByBloggerPemula(/rekonise.com/, () => {let xhr = new XMLHttpRequest();
      xhr.onload = () => redirect(JSON.parse(xhr.responseText).url);
      xhr.open("GET", "https://api.rekonise.com/social-unlocks" + location.pathname, true);xhr.send();});
    BypassedByBloggerPemula(/vosan.co/, () => {bp('.elementor-size-lg').removeAttribute('target');
      DoIfExists('.elementor-size-lg', 2);DoIfExists('.wpdm-download-link', 2);});
    BypassedByBloggerPemula(/exblog.jp/, () => {AIORemover('removeAttr', 'div.post-main div a', 'target');
      DoIfExists('a:innerText("NEST ARTICLE")', 3);DoIfExists('a:innerText("Continue To")', 4);});
    BypassedByBloggerPemula(/upfion.com/, () => {if (elementExists('.file-main.form-main')) {
        DoIfExists('.my-2.text-center > .btn-primary.btn', 2);CaptchaDone(() => {DoIfExists('#link-button');});}});
    BypassedByBloggerPemula(/takefile.link/, () => {
      if (elementExists('#F1')) {DoIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)', 'submit', 1);}});
    BypassedByBloggerPemula(/modcombo.com/, () => {
      if (location.href.includes('download/')) {waitForElm('div.item.item-apk a', mc => redirect(mc.href, false));
        DoIfExists('a.btn.btn-submit', 6);} else {DoIfExists('a.btn.btn-red.btn-icon.btn-download.br-50', 2);}});
    BypassedByBloggerPemula(/techxploitz.eu.org/, () => {CheckVisibility('#hmVrfy', () => {DoIfExists('.pstL.button', 2);});
      CheckVisibility('#aSlCnt', () => {DoIfExists('.pstL.button', 2);ReadytoClick('.safeGoL.button', 3);});});
    BypassedByBloggerPemula(/1fichier.com/, () => {
      if (elementExists('#pass')) {} else {DoIfExists('.btn-orange.btn-general.ok', 1);DoIfExists('.alc', 'submit', 1);}});
    BypassedByBloggerPemula(/fileresources.net/, () => {
      if (elementExists('.download-timer')) {waitForElm('a.btn.btn-default', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/freepreset.net/, () => {
      if (elementExists('#button_download')) {waitForElm('a#button_download', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/doodrive.com/, () => {DoIfExists('.tm-button-download.uk-button-primary.uk-button', 3);
      waitForElm('.uk-container > div > .uk-button-primary.uk-button', ddr => redirect(ddr.href, false));});
    BypassedByBloggerPemula(/autodime.com|cryptorex.net/, () => {CaptchaDone(() => {DoIfExists('#button1');});
      elementReady('#fexkominhidden2').then(() => ReadytoClick('.mb-sm-0.mt-3.btnBgRed', 2));});
    BypassedByBloggerPemula(/(bchlink|usdlink).xyz/, () => {AIORemover('removeAttr', '#antiBotBtnBeta', 'onclick');
      DoIfExists('#antiBotBtnBeta > strong', 2);CaptchaDone(() => {DoIfExists('#invisibleCaptchaShortlink');});});
    BypassedByBloggerPemula(/pubghighdamage.com|anmolbetiyojana.in/, () => {SameTab();
      DoIfExists('#robot', 2);DoIfExists('#notarobot.button', 2);ReadytoClick('#gotolink.bt-success.btn', 3);});
    BypassedByBloggerPemula(/aylink.co|cpmlink.pro/, () => {DoIfExists('.btn.btn-go', 2);ReadytoClick('.btn-go', 3);
      waitForElm("#main", Aylink => redirect(strBetween(Aylink.onclick.toString(), 'window.open("', '"'), false));});
    BypassedByBloggerPemula(/sub2get.com/, () => {
      if (elementExists('#butunlock')) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/o-pro.online/, () => {waitForElm('#newbutton > a', opo => redirect(opo.href, false));
      waitForElm('a.btn.btn-default.btn-sm', opo2 => redirect(opo2.href, false));});
    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|owoanime|hyperkhabar|hamroguide).com/, () => {
      DoIfExists('#pro-continue', 3);waitForElm('a#pro-btn', vnshort => redirect(vnshort.href));DoIfExists('#my-btn', 5);});
    BypassedByBloggerPemula(/infonerd.org/, () => {EnableRCF();
      CheckVisibility('#redirectButton', '||', "bp('#countdown').innerText == '0'", () => {unsafeWindow.redirectToUrl();});});
    BypassedByBloggerPemula(/(blogmado|kredilerim|insuranceleadsinfo).com/, () => {
      CaptchaDone(() => {DoIfExists('button.btn');});waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false));});
    BypassedByBloggerPemula(/litecoin.host|cekip.site/, () => {CaptchaDone(() => {DoIfExists('#ibtn');});
      if (elementExists('.pt-5.card-header')) {CheckVisibility('.btn-primary.btn', () => {DoIfExists('.btn-primary.btn');});}});
    BypassedByBloggerPemula(/gocmod.com/, () => {
      if (elementExists('.view-app')) {bp('#no-link').removeAttribute('target');DoIfExists('.download-line-title', 2);}});
    BypassedByBloggerPemula(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, () => {DoIfExists('.mngez-free-download', 2);
      let $ = unsafeWindow.jQuery;DoIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
    BypassedByBloggerPemula(/qiwi.gg/, () => {if (elementExists("div [class^='page_DownloadPage']")) {
      DoIfExists("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
        let qiwi = bp("a[class^='DownloadButton_DownloadButton']"); setTimeout(() => {redirect(qiwi.href, false);}, 3 * 1000);}});
    BypassedByBloggerPemula(/yitarx.com/, () => {if (location.href.includes('enlace/')) {let yitar = location.href.split('#!')[1];
      let arxUrl = DecodeBase64(yitar,3);redirect(arxUrl);}});
    BypassedByBloggerPemula(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com/, () => {
      CaptchaDone(() => {DoIfExists('#lview > form', 'submit');});waitForElm('.get-link > a', tig => redirect(tig.href, false));});
    BypassedByBloggerPemula(/videolyrics.in/, () => {ReadytoClick('a:contains("Continue")', 3);
      CheckVisibility("button[class^='py-2 px-4 font-semibold']", () => {DoIfExists('div[x-html="isTCompleted"] button');});});
    BypassedByBloggerPemula(/(tmail|labgame).io|(gamezizo|fitdynamos).com/, () => {DoIfExists('#surl', 5);
      if (elementExists('#next')) {DoIfExists('form.text-center', 'submit', 3);DoIfExists('#next', 2);DoIfExists('#glink', 15);}});
    BypassedByBloggerPemula(/coinsrev.com/, () => {parent.open = BpBlock();CaptchaDone(() => {DoIfExists('#wpsafelinkhuman > input');});
      DoIfExists('#wpsafe-generate > a > img', 3);DoIfExists('input#image3', 13);});
    BypassedByBloggerPemula(/indobo.com/, () => {const scriptElement = bp('#wpsafegenerate > script:nth-child(4)');if (scriptElement) {
      const scriptContent = scriptElement.textContent;const url = strBetween(scriptContent, 'window.location.href = "', '";', true);
        if (url && url.startsWith('https://indobo.com?safelink_redirect=')) {setTimeout(() => redirect(url), 2000);}}});
    BypassedByBloggerPemula(/playnano.online/, () => {DoIfExists('#watch-link', 2);
      DoIfExists('.watch-next-btn.btn-primary.button', 2);DoIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/mazen-ve3.com/, () => {EnableRCF();let maze = setInterval(() => {
        if (bp('.filler').innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick('#btn6');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net/, () => {
      DoIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/m.flyad.vip/, () => {
      waitForElm('#captchaDisplay', (display) => {const number = display.textContent.trim();waitForElm('#captchaInput', (input) => {input.value = number;
      waitForElm('button[onclick="validateCaptcha()"]', (button) => {sleep(1000).then(() => button.click());}, 15, 1);}, 15, 1);}, 15, 1);});
    BypassedByBloggerPemula(/(goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub).com|dvjobs.in/, () => {
      elementReady('a #tp-snp2').then(() => DoIfExists('a #tp-snp2', 2));elementReady('a#btn7').then(() => DoIfExists('a#btn7', 3));});
    BypassedByBloggerPemula(/easylink.gamingwithtr.com/, () => {DoIfExists('#countdown', 2);
      waitForElm('a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center', gtr => redirect(gtr.href, false));});
    BypassedByBloggerPemula(/turbobit.net/, () => {if (elementExists('#turbo-table')) {let tb = bp('#nopay-btn').href;redirect(tb, false);}
      CaptchaDone(() => {DoIfExists('#submit');});waitForElm('#free-download-file-link', tur => redirect(tur.href, false));});
    BypassedByBloggerPemula(/sharemods.com/, () => {DoIfExists('#dForm', 'submit', 2);
      if (elementExists('.download-file-holder')) {waitForElm('a#downloadbtn.btn.btn-primary', smd => redirect(smd.href, false));}});
    BypassedByBloggerPemula(/mediafire.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (location.href.includes('file/')) {let mf = bp('.download_link .input').getAttribute('href');BpNote(mf);location.replace(mf);}});
    BypassedByBloggerPemula(/downloader.tips/, () => {CaptchaDone(() => {DoIfExists('button.btn.btn-primary');});
      let downloader = setInterval(() => {if (bp('#count').innerText == '0') {clearInterval(downloader);DoIfExists('.btn-primary.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/modsbase.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('.file-panel')) {DoIfExists('.download-file-btn', 2);waitForElm('#downloadbtn > a', mba => redirect(mba.href, false));}});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn/, () => {
      AIORemover('removeAttr', '#monetiza', 'onclick');CheckVisibility('#monetiza', () => {ReadytoClick('#monetiza.btn-primary.btn');});
      elementReady('#monetiza-generate').then(() => setTimeout(() => {unsafeWindow.monetizago();}, 3 * 1000));});
    BypassedByBloggerPemula(/filedm.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#dlbutton')) {waitForElm('#dlbutton', fdm => redirect('http://cdn.directfiledl.com/getfile?id=' + fdm.href.split('_')[1], false));}});
    BypassedByBloggerPemula(/(ez4mods|game5s|sharedp|fastcars1).com|tech5s.co|a4a.site|rcccn.in|creditbay.xyz/, () => {DoIfExists('div.text-center form', 'submit', 2);
      ReadytoClick('#go_d', 1);waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href));waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href));});
    BypassedByBloggerPemula(/(marketrook|governmentjobvacancies|swachataparnibandh).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp).in|biharhelp.co|wastenews.xyz/, () => {
      DoIfExists('#btn6.ce-blue.ce-btn', 2);DoIfExists('#btn7 > .ce-blue.ce-btn', 3);DoIfExists('a #tp-snp2', 4);});
    BypassedByBloggerPemula(/firefaucet.win/, () => {ReadytoClick('button:innerText("Continue")', 2);ReadytoClick('button:innerText("Go Home")', 2);
      CaptchaDone(() => {waitForElm('button[type=submit]:not([disabled]):innerText("Get Reward")', (element) => {ReadytoClick('button[type=submit]:not([disabled])',1);},10,1);});});
    BypassedByBloggerPemula(/drive.google.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}var dg = window.location.href.split('/').slice(-2)[0];
      if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https://drive.usercontent.google.com/download?id=${dg}&export=download`, false).replace('<br />', '');
      } else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {DoIfExists('#download-form', 'submit', 1);}});
    BypassedByBloggerPemula(/4hi.in|(10short|animerigel|encurt4).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site/, () => {
      DoIfExists('#form-continue', 'submit', 2);CaptchaDone(() => {DoIfExists('#link-view', 'submit');});});
    BypassedByBloggerPemula(/cryptorotator.website/, () => {DoIfExists('div.btn:contains("Click here to unlock")', 2);
      CheckVisibility('#alf_continue', () => {ReadytoClick("#alf_continue:not([disabled])");});CaptchaDone(() => {DoIfExists('#invisibleCaptchaShortlink');});});
    BypassedByBloggerPemula('(on-scroll|diudemy|maqal360).com', () => {
      if (elementExists('.alertAd')) {notify('BloggerPemula : Try to viewing another tab if the countdown does not work');}
      ReadytoClick('#append a', 2);ReadytoClick('#_append a', 3);elementReady('.alertAd').then(function() {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});
    BypassedByBloggerPemula(/onlinetechsolution.link/, () => {let Thunder = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Thunder.value)).linkr);}, 5 * 1000);});
    BypassedByBloggerPemula(/(ecryptly|equickle).com/, () => {if (BpParams.has('id')) {meta(atob(BpParams.get('id')));}waitForElm('#open-continue-form > input:nth-child(3)', Chain => redirect(atob(Chain.value)));
      elementReady('#open-continue-btn').then(button => {sleep(3000).then(() => {window.location.href = strBetween(button.getAttribute('onclick'), "window.location.href='", "';", false);});});DoIfExists('#rtg-snp2', 2);});
    BypassedByBloggerPemula(/(horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top/, () => {CaptchaDone(() => {unsafeWindow.wpsafehuman();});
      CheckVisibility('center > .wpsafelink-button', () => {DoIfExists('center > .wpsafelink-button', 1);});CheckVisibility('#wpsafe-generate > a', '||', "bp('.base-timer').innerText == '0:00'", () => {unsafeWindow.wpsafegenerate();
        if (location.href.includes('article24.online')) {DoIfExists('#wpsafelink-landing > .wpsafelink-button', 1);} else {DoIfExists('#wpsafelink-landing2 > .wpsafelink-button', 1);}});});
    BypassedByBloggerPemula(/revly.click|(clikern|kiddyshort).com|mitly.us|link.whf.bz|shortex.in|easyshort.xyz/, () => {
      if (elementExists('#link-view')) {CaptchaDone(() => {DoIfExists('#link-view', 'submit');});} else if (elementExists('button.btn.btn-primary')){DoIfExists('div.col-md-12 form', 'submit', 2);}});
    BypassedByBloggerPemula(/(askpaccosi|wellness4live|akash.classicoder).com|2the.space|inicerita.online|cryptomonitor.in/, () => {
      var tform = bp('#landing'); redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.kim|dekhe.click/, () => {DoIfExists('button.btn.btn-primary', 2);
      AIORemover('removeAttr', '.btn-captcha.btn-primary.btn', 'onclick');DoIfExists('#nextpage', 'submit', 2);DoIfExists('#getmylink', 'submit', 3);CaptchaDone(() => {DoIfExists('.btn-captcha.btn-primary.btn');});});
    BypassedByBloggerPemula(/desiupload.co/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/exactpay.online|neverdims.com|sproutworkers.co/, () => {let $ = unsafeWindow.jQuery;window.onscroll = BpBlock();unsafeWindow.check2();if (elementExists('#verify')) {
        $('.blog-details').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually');
        elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', unsafeWindow.check3);});}});
    BypassedByBloggerPemula(/(fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online/, () => {
      waitForElm("div[id^='rtg-'] > a:nth-child(1)", Linkpays => redirect(Linkpays.href, false));DoIfExists('#rtg', 'submit', 2);
      DoIfExists('#rtg-snp21 .rtg_btn', 3);DoIfExists('#rtg-snp2', 3);DoIfExists('#rtg-snp21 > button', 4);});
    BypassedByBloggerPemula(/tempatwisata.pro/, async () => {
      const buttons = ['button:innerText("Generate Link")', 'button:innerText("Continue")', 'button span:innerText("Continue")', 'button:innerText("Get Link")', 'button span:innerText("Get Link")', 'button:innerText("Next")'];
      for (const selector of buttons) {await sleep(2000);ReadytoClick(selector);}});
    BypassedByBloggerPemula(/(tinybc|phimne).com|(mgame|sportweb|bitcrypto).info/, () => {
      elementReady('#wpsafe-link a[onclick*="handleClick"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/handleClick\('([^']+)'\)/);
        if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/bewbin.com/, () => {elementReady('.wpsafe-top > script:nth-child(4)').then((script) => sleep(3000).then(() =>
      redirect('https://bewbin.com?safelink_redirect=' + script.textContent.match(/window\.open\("https:\/\/bewbin\.com\?safelink_redirect=([^"]+)"/)[1])));});
    BypassedByBloggerPemula(/lajangspot.web.id/, () => {elementReady('#wpsafe-link > script:nth-child(2)').then((script) => sleep(3000).then(() =>
      redirect('https://lajangspot.web.id?safelink_redirect=' + script.textContent.match(/window\.open\("https:\/\/lajangspot\.web\.id\?safelink_redirect=([^"]+)"/)[1])));});
    BypassedByBloggerPemula(/inshortnote.com/, () => {let clickCount = 0;const maxClicks = 7;function clickElement() {if (clickCount >= maxClicks) {BpNote("I'm tired of clicking, I need a break");return;}let element = bp('#htag > [style="left: 0px;"]') || bp('#ftag > [style="left: 0px;"]');
      if (element) {element.click();clickCount++;return;}for (let el of bp('.gaama [style*="left:"]', true)) {if (/^[a-zA-Z0-9]{5,6}$/.test(el.textContent.trim())) {el.click();clickCount++;return;}}}const intervalId = setInterval(() => {clickElement();if (clickCount >= maxClicks) clearInterval(intervalId);}, 3000);});
    BypassedByBloggerPemula(/(admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp).net|(atomicatlas|timbertales).xyz|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id/, () => {
      elementReady('#wpsafe-link a[onclick*="window.open"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/window\.open\('([^']+)'/);if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/jioupload.com/, () => {function calculateAnswer(text) {const parts = text.replace("Solve:", "").replace(/[=?]/g, "").trim().split(/\s+/);const [num1, op, num2] = [parseInt(parts[0]), parts[1], parseInt(parts[2])];return op === "+" ? num1 + num2 : num1 - num2;}
      elementReady('.file-details').then(() => {DoIfExists('form button.btn-secondary', 'click', 2);waitForElm('a.btn.btn-secondary[href*="/file/"]', (jiou) => redirect(jiou.href, false));});
      elementReady("#challenge").then((challenge) => {const answer = calculateAnswer(challenge.textContent);BpNote(`Solved captcha: ${challenge.textContent} Answer: ${answer}`);elementReady("#captcha").then((input) => {input.value = answer;elementReady("button[type='submit']").then((button) => sleep(3000).then(() => button.click()));});});});
    BypassedByBloggerPemula(/teknoasian.com/, () => {CheckVisibility('h4 > b', () => {DoIfExists('button:innerText("Continue")', 1);});CheckVisibility('.Skipper > h4 > b', () => {DoIfExists('button:innerText("Get Link")', 1);});
      CheckVisibility('.humanVerify button', '||', "bp('.humanVerify button').innerText == 'Click To'", () => {DoIfExists('button:innerText("Click To Verify")', 1);DoIfExists('button:innerText("Generate Link")', 2);});});
    BypassedByBloggerPemula(/tutwuri.id|(besargaji|link2unlock).com/, () => {ReadytoClick('#submit-button',2);ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > button ', 2);CaptchaDone(() => {DoIfExists('#btn-3');});});
    BypassedByBloggerPemula(/(lyricsbaazaar|ezeviral).com/, () => {CaptchaDone(() => {DoIfExists('#btn6');});
      waitForElm('div.modal-content a', lyri => redirect(lyri.href, false));});
    BypassedByBloggerPemula(/(mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online/, () => {const GPlinks = 2 / (24 * 60);RSCookie('set', 'adexp', '1', GPlinks);
      CheckVisibility('.VerifyBtn', () => {DoIfExists('#VerifyBtn', 2);ReadytoClick('#NextBtn', 3);});if (elementExists('#SmileyBanner')) {setActiveElement('[id="div-gpt-ad"]');fakeHidden();}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), true);xhr.send();});
    BypassedByBloggerPemula(/bitcotasks.com/, () => {if (location.href.includes('/firewall')) {CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => {DoIfExists('button:contains("Validate")');});}
      if (location.href.includes('/lead')) {CheckVisibility('#status .btn', () => {DoIfExists('button:contains("Start View")');});}CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => {unsafeWindow.continueClicked();});
      CheckVisibility('.alert-success.alert', '||', "bp('.alert-success').innerText == 'This offer was successfully'", () => {unsafeWindow.close();});});
    BypassedByBloggerPemula(/(playonpc|yolasblog).online|quins.us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday).com|gally.shop|freeat30.org|ivnlnews.xyz/, () => {CaptchaDone(() => {DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);});
      let playonpc = setInterval(() => {if (!elementExists('.h-captcha') && !elementExists('.core-msg.spacer.spacer-top') && bp('#formButtomMessage').textContent == "Well done! You're ready to continue!" && !bp('#cbt').hasAttribute('disabled')) {
          clearInterval(playonpc);DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);}}, 3 * 1000);});
    BypassedByBloggerPemula(/shortit.pw/, () => {if (elementExists('#captchabox')) {
        notify('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      DoIfExists('.pulse.btn-primary.btn', 3);CaptchaDone(() => {DoIfExists('#btn2');});});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, () => {let $ = unsafeWindow.jQuery;setInterval(() => {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(() => {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(() => {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
    BypassedByBloggerPemula(/crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz/, () => {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/dutchycorp.ovh|(beingtek|encurt4|10short).com|(zagl|shrinkforearn|beinglink).in|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link/, () => {
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(function() {try {clearInterval(ticker); unsafeWindow.grecaptcha.execute();} catch (e) {}}, 3000);}});
    BypassedByBloggerPemula(/(remixsounds|helpdeep|thinksrace).com|uprwssp.org|gkfun.xyz/, () => {DoIfExists('.m-2.btn-captcha.btn-outline-primary.btn', 2);DoIfExists('.tpdev-btn', 3);DoIfExists("#tp98 button[class^='bt']", 3);DoIfExists("form[name='tp']", 'submit', 3);
      DoIfExists('#btn6', 4);var wssp = bp('body > center:nth-child(6) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > center:nth-child(3) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > script:nth-child(5)');
      if (wssp) {var scriptContent = wssp.textContent;var Linkc = scriptContent.match(/var\s+currentLink\s*=\s*["'](.*?)["']/);if (Linkc && Linkc[1]) {var CLink = Linkc[1];redirect(CLink);} else {BpNote("currentLink Not Found.");}} else {BpNote("Element Not Found.");}});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {const window = unsafeWindow;let adsh = setInterval(() => {if (typeof window._sharedData == "object" && 0 in window._sharedData && "destination" in window._sharedData[0]) {clearInterval(adsh);document.write(window._sharedData[0].destination);
      redirect(document.body.textContent);} else if (typeof window.___reactjsD != "undefined" && typeof window[window.___reactjsD.o] == "object" && typeof window[window.___reactjsD.o].dest == "string") {clearInterval(adsh);redirect(window[window.___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/newsminer.uno/, () => {const window = unsafeWindow;CheckVisibility('#clickMessage', '&&', "bp('#clickMessage').innerText == 'Click any ad'", () => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});
      if (elementExists('input.form-control')) {notify('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually', false, true);window.onscroll = BpBlock();window.check2();elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/autofaucet.dutchycorp.space/, function () {let autoRoll = false;if (window.location.href.includes('/roll_game.php')) {window.scrollTo(0, 9999);
    if (!bp('#timer')) {CaptchaDone(() => {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}CheckVisibility('#claim_boosted', () => {bp('#claim_boosted').click();});});} else {
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/coin_roll.php');}, 3 * 1000);}}if (window.location.href.includes('/coin_roll.php')) {window.scrollTo(0, 9999);
    if (!bp("#timer")) {CaptchaDone(() => {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}CheckVisibility('#claim_boosted', () => {bp('#claim_boosted').click();});});} else {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/wall.php');}, 3 * 1000);}}
    if (window.location.href.includes('/ptc/wall.php')) {var ptcwall = bp(".col.s10.m6.l4 a[name='claim']", true);if (ptcwall.length >= 1) {ptcwall[0].style.backgroundColor = 'red';let match = ptcwall[0].onmousedown.toString().match(/'href', '(.+)'/);let hrefValue = match[1];
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space' + hrefValue);}, 3 * 1000);} else {CheckVisibility('div.col.s12.m12.l8 center div p', () => {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/');}, 3 * 1000);});}}
    if (location.href.includes('autofaucet.dutchycorp.space/ptc/')) {BpNote('Viewing Available Ads');if (elementExists('.fa-check-double')) {BpNote('All Available Ads Watched');
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/dashboard.php');}, 3 * 1000);}CaptchaDone(() => {CheckVisibility('#submit_captcha', () => {bp("button[type='submit']").click();});});}});
    BypassedByBloggerPemula(/stly.link|(snaplessons|atravan|airevue|carribo|amalot).net|(stfly|shrtlk).biz|veroan.com/, () => {CaptchaDone(() => {ReadytoClick('button[class^=mt-4]');DoIfExists('button.mt-4:nth-child(2)', 3);});CheckVisibility('button[class^=rounded]', () => {if (!bp('.g-recaptcha') || !bp('.cf-turnstile')) {DoIfExists('button[class^=rounded]', 2);}});
      CheckVisibility('button[class^=mt-4]', '&&', "bp('.progress-done').innerText == '100'", () => {ReadytoClick('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 4);});CheckVisibility('button[class^=mt-4]', '&&', "bp('#countdown-number').innerText == '✓'", () => {DoIfExists('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 3);});});
    BypassedByBloggerPemula(/(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro/, async function() {const window = unsafeWindow;const executor = async () => {let El = window?.livewire?.components?.components()[0];while (!El) {await sleep(100);BpNote(1);El = window?.livewire?.components?.components()[0];}
      const payload = {fingerprint: El.fingerprint,serverMemo: El.serverMemo,updates: [{payload: {event: 'getData',id: 'whathappen',params: [],},type: 'fireEvent',}, ],};const response = await fetch(location.origin + '/livewire/message/pages.show', {headers: {'Content-Type': 'application/json','X-Livewire': 'true','X-CSRF-TOKEN': window.livewire_token,},method: 'POST',body: JSON.stringify(payload),});
      const json = await response.json();const url = new URL(json.effects.emits[0].params[0]);redirect(url.href);};if (location.host === 'wp.sekilastekno.com') {if (elementExists("form[method='post']")) {const a = bp("form[method='post']");BpNote('addRecord...');const input = document.createElement('input');input.value = window.livewire_token;input.name = '_token';input.hidden = true;a.appendChild(input);a.submit();}
      if (elementExists("button[x-text]")) {BpNote('getLink..');executor();}return;}if (elementExists("div[class='max-w-5xl mx-auto']")) {BpNote('Executing..');executor();}});
    //BypassedByBloggerPemula(/(shrinke|shrinkme)\.\w+|(paid4link|linkbulks|linclik|up4cash|smoner|minimonetize|encurtadorcashlinks|yeifly|themesilk|linkpayu).com|(wordcounter|shrink).icu|(dutchycorp|galaxy-link).space|dutchycorp.ovh|pahe.plus|(pwrpa|snipn).cc|paylinks.cloud|oke.io|tinygo.co|tlin.me|wordcount.im|link.freebtc.my.id|get.megafly.in|skyfreeshrt.top|learncrypto.blog|link4rev.site/, () => {
      //CaptchaDone(() => {if (/^(shrinke|shrinkme)\.\w+/.test(window.location.host)) {DoIfExists('#invisibleCaptchaShortlink');}else {DoIfExists('#link-view', 'submit');}});});
    BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('p.mb-2:nth-child(2) > strong > a');
      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(BpT('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));
      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https://www.google.com/url?q=https://geekgrove.net' : t.includes('vitalityvista') ? 'https://www.google.com/url?q=https://vitalityvista.net' : t.includes('coinhub') ? 'https://www.google.com/url?q=https://coinhub.wiki' : 'https://www.google.com/url?q=https://geekgrove.net', false);});}});}
      if (['geekgrove.net', 'vitalityvista.net', 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);DoIfExists('#btn_link_start', 2);CaptchaDone(() => {DoIfExists('#btn_link_continue');});CheckVisibility('#btn_link_continue', () => {if (!elementExists('.iconcaptcha-modal')) {DoIfExists('#btn_link_continue');} else {DoIfExists('.iconcaptcha-modal__body');}});
      CheckVisibility('.alert-success.alert-inline.alert', () => {DoIfExists('#btn_lpcont');});sleep(1000).then(() => {const input = bp('#link_input.form-control');if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp('.btn-primary.btn-ripple')?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp('.link_code');
      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});
    BypassedByBloggerPemula('headlinerpost.com|posterify.net', () => {let dataValue = '';for (let script of bp('script', true)) {if (script.textContent.includes('data:')) {dataValue = strBetween(script.textContent, "data: '", "'", true); break;}}let stepValue = '', planValue = '';try {const plan = JSON.parse(RSCookie('read', 'plan') || '{}');stepValue = plan.lid || '';planValue = plan.page || '';} catch {}if (!dataValue || !stepValue) return;
      const postData = {data: dataValue};const sid = RSCookie('read', 'sid');postData[sid ? 'step_2' : 'step_1'] = stepValue;if (sid) postData.id = sid;const isHeadliner = location.host === 'headlinerpost.com';const headers = {'Content-Type': 'application/x-www-form-urlencoded','Referer': isHeadliner ? 'https://headlinerpost.com/' : 'https://posterify.net/','Origin': isHeadliner ? 'https://headlinerpost.com' : 'https://posterify.net'};
      GM_xmlhttpRequest({method: 'POST',url: 'https://shrinkforearn.in/link/new.php',headers,data: Object.keys(postData).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(postData[k])}`).join('&'),withCredentials: true, onload: ({responseText}) => {try {const result = JSON.parse(responseText);if (result.inserted_data?.id) {RSCookie('set', 'sid', result.inserted_data.id, 10 / (24 * 60));}
      if ((result.inserted_data?.id || result.updated_data) && (sid || result.inserted_data?.id)) {const ShrinkUrl = isHeadliner ? `https://posterify.net/?id=${encodeURIComponent(stepValue)}&sid=${encodeURIComponent(result.inserted_data?.id || sid)}&plan=${encodeURIComponent(planValue)}` : `https://shrinkforearn.in/${encodeURIComponent(stepValue)}?sid=${encodeURIComponent(result.inserted_data?.id || sid)}`;setTimeout(() => redirect(ShrinkUrl), 3000);}} catch {}}});});
    BypassedByBloggerPemula(/(mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte).com|(allnotes|sewdamp3.com).in|(pisple|cirdro).xyz|taiyxd.net/, async () => {ReadytoClick('#age.progress-button', 2);ReadytoClick('.active.reward-link', 3);async function handleQuiz() {const questionEl = bp('#question');if (!questionEl) return;const { result: answer, op, a, b } = BpAnswer(questionEl.textContent.trim());
      if (answer === null) return;let radioSelector = `input[type="radio"][name="option"][value="${answer}"]`;let radio = bp(radioSelector);if (!radio && op === '/') {const altAnswer = Math.round(a / b);radioSelector = `input[type="radio"][name="option"][value="${altAnswer}"]`;radio = bp(radioSelector);}if (!radio) {const options = Array.from(bp('input[type="radio"][name="option"]', true)).map(r => parseInt(r.value));
      const closest = options.reduce((p, c) => Math.abs(c - answer) < Math.abs(p - answer) ? c : p);radioSelector = `input[type="radio"][name="option"][value="${closest}"]`;radio = bp(radioSelector);}if (!radio) {BpNote('Tidak ada opsi yang valid untuk dipilih', 'error');return;}ReadytoClick(radioSelector);await sleep(3000);ReadytoClick('#next-page-btn.progress-button');}await handleQuiz();});
    BypassedByBloggerPemula(/flickr.com/, () => {if (!cfg.get('Flickr')) return;function createDownloadLinks() {const finalizeContainer = (container, sizesLink) => {if (!container.children.length) return;const parent = sizesLink.parentElement;if (parent) {parent.insertBefore(container, sizesLink);} else {document.body.appendChild(container);}BpNote('The Image is Ready to Save', 'info');};
      waitForElm('a[href*="/sizes/"]', sizesLink => {if (!sizesLink) return BpNote('View all sizes link not found', 'error');GM_xmlhttpRequest({method: 'GET',url: sizesLink.href,onload: response => {try {const sizesDoc = new DOMParser().parseFromString(response.responseText, 'text/html');const sizeItems = sizesDoc.querySelectorAll('.sizes-list li ol li');if (!sizeItems.length) return BpNote('No size items found', 'warn');
      const container = document.createElement('div');container.style.cssText = 'background:white;border:1px solid #ccc;padding:10px;z-index:1000;margin-bottom:5px;position:relative';const header = document.createElement('div');header.textContent = 'Bloggerpemula Script';header.style.cssText = 'text-align:center;font-weight:bold;margin-bottom:0px;color:#333';container.appendChild(header);
      const closeButton = document.createElement('button');closeButton.textContent = 'X';closeButton.style.cssText = 'position:absolute;top:0px;right:0px;background:none;border:none;font-size:14px;cursor:pointer;color:#333';closeButton.onclick = () => container.remove();container.appendChild(closeButton);let processed = 0;sizeItems.forEach(item => {const sizeLink = item.querySelector('a');
      const sizeText = sizeLink ? sizeLink.textContent.trim() : item.textContent.trim();const sizeName = `${sizeText} ${item.querySelector('small')?.textContent.trim() || ''}`;const sizeUrl = sizeLink?.href;if (!sizeUrl) {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);return;}GM_xmlhttpRequest({method: 'GET',url: sizeUrl,onload: sizeResponse => {try {const sizeDoc = new DOMParser().parseFromString(sizeResponse.responseText, 'text/html');
      const img = sizeDoc.querySelector('#allsizes-photo img[src]');if (!img) return;const saveLink = document.createElement('a');saveLink.href = img.src;saveLink.textContent = `Save ${sizeName}`;saveLink.style.cssText = 'display:block;margin:5px 0';saveLink.onclick = e => {e.preventDefault();GM_openInTab(img.src, {active: true});};container.appendChild(saveLink);} catch (e) {}processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);},
      onerror: () => {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);}});});} catch (e) {BpNote(`Error processing sizes page: ${e.message}`, 'error');}},onerror: () => BpNote('Failed to fetch sizes page', 'error')});});}if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', createDownloadLinks, {once: true});} else {createDownloadLinks();}});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|zaku.pro|veganab.co|cegen.org|skyfreecoins.top|manga4nx.site/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula(/upfion.com/, () => {if (CloudPS(true, true, true)) return;let List = ['lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'], List1 = ['ay.live'], $ = unsafeWindow.jQuery;if (List.includes(location.host)) {ReadytoClick("a.btn.btn-success.btn-lg.get-link:not([disabled])", 3);} else if (List1.includes(location.host)) {let form = $('form[id=go-link]');$.ajax({type: 'POST', async: true, url: form.attr('action'), data: form.serialize(), dataType: 'json', success: data => redirect(data.url)});}
      else if (elementExists('form[id=go-link]')) {$('form[id=go-link]').off('submit').on('submit', function(e) {e.preventDefault();let form = $(this), url = form.attr('action'), pesan = form.find('button'),notforsale = $(".navbar-collapse.collapse"), blogger = $(".main-header"), pemula = $(".col-sm-6.hidden-xs");$.ajax({type: "POST", url: url, data: form.serialize(), dataType: 'json',beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
      let btn = '<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>';notforsale.replaceWith(btn); blogger.replaceWith(btn); pemula.replaceWith(btn);},success: function(result, status, xhr) {let finalUrl = result.url;if (finalUrl.includes('swiftcut.xyz')) {finalUrl = finalUrl.replace(/[?&]i=[^&]*/g, '').replace(/[?]&/, '?').replace(/&&/, '&').replace(/[?&]$/, '');location.href = finalUrl;}
      else if (xhr.responseText.match(/(a-s-cracks.top|mdiskshortner.link|exashorts.fun|bigbtc.win|slink.bid|clockads.in)/)) {location.href = finalUrl;} else {redirect(finalUrl);}},error: function(xhr, status, error) {BpNote(`AJAX request failed: ${status} - ${error}`, 'error');}});});}});
    BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si', () => {
      CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => ReadytoClick('button:contains("Verify")',2));const tano = window.location.href;if (['dailytech-news.eu','wii.si', 'bubblix.eu', 'bitwidgets.net', 'virtuous-tech.net', 'carfocus.site', 'biit.site'].some(tino => tano.includes(tino))) {elementReady('#loadingDiv[style*="display:block"] button, #loadingDiv[style*="display: block"] button').then(ReadytoClick.bind(this, 'button', 2));} else {CheckVisibility('#loadingDiv[style^="display"] > span', () => {const buttonText = strBetween(bp('#loadingDiv[style^="display"] > span').textContent, "Click", "To Start", false);elementReady(`#loadingDiv[style^="display"] .btn.btn-primary:contains("${buttonText}")`).then(buttonElement => {
      const buttons = Array.from(bp('#loadingDiv[style^="display"] .btn.btn-primary', true));const index = buttons.indexOf(buttonElement);if (index === -1) return;const selectorOptions = ['button.btn:nth-child(2)', 'button.btn:nth-child(3)', 'button.btn:nth-child(4)', 'button.btn:nth-child(5)', 'button.btn:nth-child(6)'];const chosenSelector = selectorOptions[index];if (chosenSelector) sleep(2000).then(() => ReadytoClick(`#loadingDiv[style^="display"] ${chosenSelector}`));});});}elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});}})();
