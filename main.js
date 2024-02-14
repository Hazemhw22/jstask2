//نقوم بتعريف العملات //
var exchange = {
    dollar: 3.66,
    dinar: 5.15,
    nis: 1
};
//نضيف .preventDefault لثبات القيمة بعد تحويلها وحتى لا تختفي النتيجة // 
document.querySelector('.registerForm').addEventListener('submit', function(a) {a.preventDefault();
    
    var amount = parseFloat(document.querySelector('input[name="amount"]').value);
    var selectedCurrency = document.querySelector('select[name="exchange"]').value;
   // العملية ان يقوم بتقسيم المدخل من على قيمة العملة المعرفة فوق //
    var result = amount / exchange[selectedCurrency];
    // طباعة الناتج //
    document.querySelector('.result').innerHTML = ` ${result} `;
});