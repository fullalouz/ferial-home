let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.innerText = msg;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2000);
}

document.querySelectorAll('.add-btn, #packageBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartCountEl.innerText = cartCount;
    showToast('Item added to cart!');
  });
});

document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Thank you for subscribing!');
  e.target.reset();
});