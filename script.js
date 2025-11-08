// Чекаємо, поки весь HTML-вміст завантажиться
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. JAVASCRIPT ДЛЯ КНОПКИ "ПОДЗВОНИТИ" ---
    const callButton = document.getElementById("callButton");
    if (callButton) {
        callButton.addEventListener("click", function() {
            // Це створить ПОСИЛАННЯ "tel:", яке ініціює дзвінок на мобільних
            window.location.href = "tel:+380991234567";
        });
    }

    // --- 2. JAVASCRIPT ДЛЯ ВАЛІДАЦІЇ ФОРМИ ---
    const form = document.getElementById("feedbackForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Повідомлення про помилки
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const successMessage = document.getElementById("form-success");

    if (form) {
        form.addEventListener("submit", function(event) {
            // Зупиняємо стандартну відправку форми
            event.preventDefault();
            
            let isValid = true;
            
            // Скидаємо попередні помилки
            nameError.style.display = "none";
            emailError.style.display = "none";
            messageError.style.display = "none";
            successMessage.style.display = "none";

            // 1. Валідація імені
            if (name.value.trim() === "") {
                nameError.style.display = "block";
                isValid = false;
            }

            // 2. Валідація Email (проста перевірка)
            if (email.value.trim() === "" || !email.value.includes("@")) {
                emailError.style.display = "block";
                isValid = false;
            }

            // 3. Валідація повідомлення
            if (message.value.trim() === "") {
                messageError.style.display = "block";
                isValid = false;
            }

            // Якщо все гаразд
            if (isValid) {
                successMessage.style.display = "block";
                // Очищуємо форму
                form.reset();
                
                // У реальному проекті тут був би fetch-запит на сервер
                // console.log("Форма валідна, надсилаємо...");
            }
        });
    }
});