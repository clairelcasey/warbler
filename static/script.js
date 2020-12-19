"use strict";

const $likeForm = $(".like-form");
console.log('like form', $likeForm);

const BASE_URL = "http://127.0.0.1:5000";

/* Function makes a post request to server */

async function create_or_remove(path) {
  console.debug('create_or_remove')
  const response = await axios.post(path);
}

/* Handles a form submission. */
async function handleFormSubmit(evt) {
  console.debug('handleFormSubmit')
  evt.preventDefault();
  let path = evt.target.action;
  await create_or_remove(path);
  let $form = $(evt.target);
  console.log($form);
  let $icon = $form.closest('i');
  debugger;
  $icon.toggleClass('text-secondary');
  console.log($icon, 'form after toggle');
}

function start() {
  for (let form of $likeForm) {
    let $form = $(form);
    $form.on('submit', handleFormSubmit);
    console.log($form, 'form');
  }
}

start();