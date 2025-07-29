
document.querySelectorAll('textarea').forEach(textarea => {
    const key = textarea.dataset.key;
    const saved = localStorage.getItem(key);
    if (saved) textarea.value = saved;

    textarea.addEventListener('input', () => {
        localStorage.setItem(key, textarea.value);
    });
});
