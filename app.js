document.getElementById('tgBtn').onclick = function() {
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.sendData("Привет из миниаппа!");
        Telegram.WebApp.close();
    } else {
        alert("Миниапп открыт не в Telegram!");
    }
};