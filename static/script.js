"use strict";

const $likeBtns = $(".like-btn");
const BASE_URL = "http://127.0.0.1:5000";

/* Function makes a post request to server */

async function create_or_remove(id) {
  const response = await axios({
    url: `${BASE_URL}/likes/${id}`,
    method: "POST"
  });
}

/* Handles a form submission. */

async function handleBtnClick(evt) {
  let $btn = $(evt.target).closest('button');
  let id = $btn.attr('data-id');
  await create_or_remove(id);
  let $icon = $(evt.target);
  $icon.toggleClass('text-secondary');
}

/* On starting page, add event listener on like buttons */

function start() {
  for (let btn of $likeBtns) {
    let $btn = $(btn);
    $btn.on('click', handleBtnClick);
  }
}

start();