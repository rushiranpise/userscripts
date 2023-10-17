// ==UserScript==
// @name       Additional Bypass
// @namespace  Violentmonkey Scripts
// @match      *://cutdl.xyz/*
// @match      *://stfly.me/*
// @match      *://shrinke.me/*
// @match      *://gplinks.co/*
// @match      *://linksly.co/*
// @match      *://smgplaza.com/*
// @match      *://icutlink.com/*
// @match      *://*.hamody.pro/*
// @match      *://*.mealob.com/*
// @match      *://megablogme.com/*
// @match      *://tribuntekno.com/*
// @match      *://link.turkdown.com/*
// @match      *://safe.intipanime.com/*
// @grant      none
// @version    4.2
// @author     Bloggerpemula
// @run-at     document-start
// @description Bypass Addition for Bypass All Shortlinks
// @require    https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
// ==========================================================================================================================================
//                                      PLEASE READ SCRIPT INFO BEFORE USE
//                                  PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                            PLEASE DON'T REMOVE OR CHANGE MY BLOG, THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 for Helping me , make my script even better , and for All who has contributed via Feedback.
// ===========================================================================================================================================
(function() {
  'use strict';
  const bp = query => document.querySelector(query);
  const elementExists = query => bp(query) !== null;

  function submit(query) {
    bp(query).submit();
  }

  function redirect(url, blog = true) {
    location = blog ? 'https://free4u.nurul-huda.or.id/?url=' + url : url;
  }

  if (['interactive', 'complete'].includes(document.readyState)) {
    onHtmlLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', onHtmlLoaded);
  }

  function onHtmlLoaded() {
    let $ = window.jQuery;
    let respect = 'https://free4u.nurul-huda.or.id/?url='; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations.
    if (['safe.intipanime.com', 'intercelestial.com', 'tribuntekno.com', 'mealob.com', 'smgplaza.com', 'blackleadr.com', 'megablogme.com'].indexOf(location.host) > -1) {
      function Bypass() {
        $("#showlink").delay(80).fadeIn("fast");
        $("#pleasewait").fadeIn("fast");
      }
      Bypass();
      $('#landing').submit();
      $('#headimg').remove();
      $('#pleasewait').remove();
      $('body,html').animate({
        scrollTop: 0
      }, 100);
      bp('.soractrl').appendChild(document.querySelector('.spoint'));
      bp('.spoint').src = 'https://i.ibb.co/c1tm9mz/Bypassed-By-Bloggerpemula.png';
      bp('.spoint').title = 'Please Click Manually , Sorry at this time i dont have idea to make this auto, Silahkan di klik manual, maaf belum nemu ide biar bisa otomatis';
    }
    if (elementExists('#go-link')) {
      $('#go-link').submit(function() {
        var form = $(this);
        var url = form.attr('action');
        const pesan = form.find('button');
        const notforsale = $(".navbar-collapse.collapse");
        const blogger = $(".main-header");
        const pemula = $(".col-sm-6.hidden-xs");
        $.ajax({
          type: "POST",
          url: url,
          data: form.serialize(),
          beforeSend: function(xhr) {
            pesan.attr("disabled", "disabled");
            $('a.get-link').text('Bypassed by Bloggerpemula');
            notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
          },
          success: function(result, xhr) {
            location.href = respect + result.url;
          }
        });
      });
    }
  }
})();