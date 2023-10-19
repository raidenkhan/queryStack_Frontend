// Your JavaScript code goes here
const messageInput = document.querySelector('.message-input');
const hashtagInput = document.querySelector('.hashtag-input');
const hashtagList = document.querySelector('.hashtag-list');

messageInput.addEventListener('input', () => {
  const message = messageInput.value;
  const hashtags = message.match(/#\w+/g);
  if (hashtags) {
    const uniqueHashtags = [...new Set(hashtags)];
    hashtagList.innerHTML = '';
    uniqueHashtags.forEach(hashtag => {
      const li = document.createElement('li');
      li.textContent = hashtag;
      hashtagList.appendChild(li);
    });
  } else {
    hashtagList.innerHTML = '';
  }
});