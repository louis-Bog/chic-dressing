jQuery(function(a){function t(){flag=!1,a(".batch-select td").children().each(function(){a(this).hasClass("display")&&(flag=!0)}),flag?a(".batch-select").show():a(".batch-select").hide()}function e(){a("#force_select_all").is(":checked")&&a(".checkboxselec, #user-id input, #force_select_all").attr("checked",!1),subscriberCount=a("#posts-filter input.checkboxselec:checked").length,a(".batch-select div.clear_select_all").removeClass("display").hide(),0<subscriberCount?a(".batch-select div.force_to_select_all_link").removeClass("display").addClass("display").show():a(".batch-select div.force_to_select_all_link").removeClass("display").hide(),t()}var i=a("#_wpnonce").attr("disabled","disabled"),s=a(".global-action");s.change(function(){var e=s.val();"delete"==e||"bulk_delete"==e?i.prop("disabled",null):i.attr("disabled","disabled")}),a(".orderlink").click(function(){return a(this).parent("th.sortable , th.sorted").click(),!1}),a("#posts-filter").submit(function(){a("#wysija-pagination").length&&parseInt(a("#wysija-pagination").val())>parseInt(a("#wysija-pagination-max").val())&&a("#wysija-pagination").val(a("#wysija-pagination-max").val())}),a(".bulksubmit").click(function(){var e=s.data("locale"),t=s.val(),l=a("#posts-filter .check-column input:checked");if(0===l.length)return alert(wysijatrans.selecmiss),!1;switch(t){case"deleteusers":if(!confirm(1===l.length?e["delete"]:e.delete_bulk))return!1}return a("<input/>",{type:"hidden",name:"action",value:s.val()}).insertAfter(a(this)),i.prop("disabled",null),a("#_wpnonce").val(a(".global-action option:selected").data("nonce")),!0}),a('.check-column input[type="checkbox"]').click(function(){}),a("#user-id").click(e),a(".checkboxselec").click(function(){a(this).is(":checked")||(a("#user-id input, #force_select_all").attr("checked",!1),a(".batch-select div.force_to_select_all_link").removeClass("display").hide(),a(".batch-select div.clear_select_all").removeClass("display").hide()),t()}),a(".force_to_select_all_link a").click(function(e){e.preventDefault(),a(".checkboxselec, #user-id input, #force_select_all").attr("checked","checked"),a(".batch-select div.force_to_select_all_link").removeClass("display").hide(),a(".batch-select div.clear_select_all").removeClass("display").addClass("display").show(),t()}),a(".clear_select_all a").click(function(){a(".batch-select div.force_to_select_all_link").removeClass("display").hide(),a(".batch-select div.clear_select_all").removeClass("display").hide(),a(".checkboxselec, #user-id input, #force_select_all").attr("checked",!1),t()}),a("th.sortable , th.sorted").click(function(){var e="";e=a(this).hasClass("sorted")?a(this).hasClass("asc")?"desc":"asc":"desc";var t=a(this).attr("id");a("#wysija-orderby").length?(a("#wysija-orderby").val(t),a("#wysija-ordert").val(e)):(a("#posts-filter").append('<input id="wysija-ordert" type="hidden" name="ordert" value="'+e+'" />'),a("#posts-filter").append('<input id="wysija-orderby" type="hidden" name="orderby" value="'+t+'" />')),a("#posts-filter").submit()}),a("a.page-numbers").click(function(){var e=a(this).attr("alt");return a("#wysija-pagination").length?a("#wysija-pagination").val(e):a("#posts-filter").append('<input id="wysija-pagination" type="hidden" name="pagi" value="'+e+'" />'),a("#posts-filter").submit(),!1}),a("a.page-limit").click(function(){var e=a(this).html();return a("#wysija-pagelimit").length?a("#wysija-pagelimit").val(e):a("#posts-filter").append('<input id="wysija-pagelimit" type="hidden" name="limit_pp" value="'+e+'" />'),a("#posts-filter").submit(),!1}),a(document).ready(function(){a("a.exported-file").length&&window.open(a("a.exported-file").attr("href"),"Download")}),a(".searchbox").blur(function(){a(this).val(trim(a(this).val()))}),t()});