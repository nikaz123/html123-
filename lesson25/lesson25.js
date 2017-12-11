(function () {
  `use strict`;
//
// let $editor = $(`#editor`),
//     $result = $ (`#result`);
//
//
// $editor.on(`input`, function () {
//     $result.html($(this).html());
//
// });



//
// let $buttons = $(`#buttons`);
// $buttons.on(`click`, `button`, function () {
//     $(this).toggleClass(`active`);
// });




let $tabs = $(`.tabs`),
    $contentPlaceholder = $(`.content-placeholder`);


down


$tabs.on (`click`, `button`, function () {
let  tab = $(this),
    contentId = tab.attr(`data-content-id`);
$tabs.find(`button.active`).removeClass(`active`);
tab.addClass(`active`);
$.ajax({
    url: `content/content-${contentId}.html`,
    method: `GET`
})
    .fail(function (err) {
        console.log(err);

    })
    .done(function (data) {
        $contentPlaceholder.html(data);
    });
     });

$tabs.find(`button.active`).click();




}());