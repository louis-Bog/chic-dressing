jQuery(function(e){function s(a){a?(e(".wysija-premium-activate").addClass("wysija-button-loading"),e(".wysija-premium-activate").html(wysijatrans.premium_activating+"<span>.</span><span>.</span><span>.</span>")):(e(".wysija-premium-activate").removeClass("wysija-button-loading"),e(".wysija-premium-activate").html(wysijatrans.premium_activate))}e("#wysija-app .submitdelete").click(function(){return confirm(wysijatrans.suredelete)}),e("#wysija-app .linkignore, .wysija-version .linkignore").click(function(){var a=this;return wysijaAJAX.controller="config",wysijaAJAX.task="linkignore",wysijaAJAX.ignorewhat=e.trim(e(this).attr("class").replace(/linkignore/g,"")),wysijaAJAX._wpnonce=wysijanonces.config.linkignore,e.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(){0<e(a).parents(".removeme").length?e(a).parents(".removeme").fadeOut():0<e(a).parents("li").siblings().size()?e(a).parents("li").fadeOut():e(a).parents("div.updated").fadeOut()},error:function(a){alert("Request error not JSON:"+a.responseText),wysijaAJAXcallback.onSuccess=""},dataType:"json"}),!0}),e(document).on("click","#wysija-app .premium-tab, .wysija-msg .premium-tab, #theme-view .premium-tab",function(){e("#wysija-app .wysija-premium img").hide(),e(this).hasClass("ispopup")?(window.parent.tb_remove(),window.parent.location.href=wysijatrans.urlpremium):0<e("#wysija-tabs").length?e('#wysija-tabs a[href="#premium"]').trigger("click"):window.location.href=wysijatrans.urlpremium}),e(".wysija-premium-activate").click(function(){wysijaAJAX.controller="config",wysijaAJAX.task="validate",wysijaAJAX._wpnonce=wysijanonces.config.validate,s(!0);var i=this;return e.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(a){a.result.result?window.location.href="admin.php?page=wysija_campaigns&sp=1":(a.result.nocontact?window.location.href="admin.php?page=wysija_campaigns&nocontact=1":(displaychange=0,e.WYSIJA_HANDLE_RESPONSE(a)),s(!1)),e(i).removeClass("wysija-button-loading")},error:function(a){alert(a.responseText),delete wysijaAJAXcallback.onSuccess,s(!1)},dataType:"json"}),!1}),e("#install-wjp").click(function(){return confirm(e(this).data("warn"))&&(tb_show(e(this).attr("title"),e(this).attr("href")+"&KeepThis=true&TB_iframe=true&height=400&width=600",null),tb_showIframe()),!1}),e("#share_analytics").click(function(){var i=this;return wysijaAJAX.controller="config",wysijaAJAX.task="share_analytics",wysijaAJAX._wpnonce=wysijanonces.config.share_analytics,e(i).addClass("disabled"),e("#update-loading-icon").show(),e.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(){e(i).after("<h2>Thanks!</h2>"),e(i).hide(),e("#update-loading-icon").hide()},error:function(a){alert("Request error not JSON:"+a.responseText),wysijaAJAXcallback.onSuccess="",e(i).removeClass("disabled")},dataType:"json"}),!0})});