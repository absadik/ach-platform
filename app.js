const supabaseUrl = 'https://xiqdygzcotzhqfxjrumr.supabase.co';
const supabaseKey = 'sb_publishable_faOCdh8iXeuV6x64S5U25w_J-a7vpp2';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
    en: {
        navLogin: "Login", navSignup: "Sign Up", formTitle: "Join ACH", lblRole: "I am registering as:", lblName: "Full Name / Company", lblEmail: "Email", lblPhone: "Phone Number", lblCountry: "Country", lblPassword: "Password", lblConfirm: "Confirm Password", btnSubmit: "Create Account & Verify", otpTitle: "Verify Account", btnVerify: "Go to Login", loginTitle: "Login to ACH", btnLogin: "Login",
        phName: "Enter your name", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Create a password", phConfirm: "Repeat password",
        termsTitle: "Terms of Service & Privacy",
        termsContent: "<p><strong>1. Registration:</strong> Registration is free for all users.</p><p><strong>2. Commission:</strong> ACH charges a 10% commission on successful bookings.</p><p><strong>3. Payments:</strong> We do not hold your funds directly; all payments are processed via licensed providers (e.g., Paystack).</p><p><strong>4. Conduct:</strong> Users must respect each other.</p><p><strong>5. Off-Platform:</strong> ACH is not responsible for off-platform transactions.</p><p><strong>6. Privacy:</strong> Your data is safe with us and will never be sold.</p>",
        agreeText: "I agree to the", termsLink: "Terms of Service", andText: "and", privacyLink: "Privacy Policy",
        reqLength: "At least 8 characters", reqNumber: "At least 1 number", reqUpper: "At least 1 uppercase letter",
        matchSuccess: "✅ Passwords Match", matchFail: "❌ Passwords do not match"
    },
    ha: {
        navLogin: "Shiga", navSignup: "Yi Rajista", formTitle: "Shiga ACH", lblRole: "Ina yin rajista a matsayin:", lblName: "Cikakken Suna", lblEmail: "Imel", lblPhone: "Lambar Waya", lblCountry: "Ƙasa", lblPassword: "Kalmar Sirri", lblConfirm: "Tabbatar da Kalmar Sirri", btnSubmit: "Ƙirƙiri Asusu", otpTitle: "Tabbatar da Asusu", btnVerify: "Je Shiga", loginTitle: "Shiga ACH", btnLogin: "Shiga",
        phName: "Shigar da sunanka", phEmail: "imel@misali.com", phPhone: "800 000 0000", phPassword: "Ƙirƙiri kalmar sirri", phConfirm: "Maimaita kalmar sirri",
        termsTitle: "Sharuɗɗa & Sirri",
        termsContent: "<p><strong>1. Rajista:</strong> Rajista kyauta ce ga kowa.</p><p><strong>2. Kuɗi:</strong> ACH tana karɓar kashi 10% na kowace yarjejeniya.</p><p><strong>3. Biya:</strong> Ba mu riƙe kuɗin ku kai tsaye ba; ana biya ta hanyar kamfanoni masu lasisi.</p><p><strong>4. Halin:</strong> Masu amfani dole su girmama juna.</p><p><strong>5. Waje:</strong> ACH ba ta da alhakin cinikin da aka yi a wajen App.</p><p><strong>6. Sirri:</strong> Bayananku suna da tsaro.</p>",
        agreeText: "Na yarda da", termsLink: "Sharuɗɗan Sabis", andText: "da", privacyLink: "Manufar Sirri",
        reqLength: "Akalla haruffa 8", reqNumber: "Akalla lamba 1", reqUpper: "Akalla babban harafi 1",
        matchSuccess: "✅ Sun daidaita", matchFail: "❌ Ba su daidaita ba"
    },
    yo: {
        navLogin: "Wọlé", navSignup: "Forúkọ sílẹ̀", formTitle: "Darapọ̀ mọ́ ACH", lblRole: "Mo forúkọ sílẹ̀ gẹ́gẹ́ bí:", lblName: "Orúkọ Kíkún", lblEmail: "Íméèlì", lblPhone: "Nọ́mbà Fọ́nù", lblCountry: "Orílẹ̀-èdè", lblPassword: "Ọ̀rọ̀ Ìpamọ́", lblConfirm: "Jẹ́rìí Ọ̀rọ̀ Ìpamọ́", btnSubmit: "Ṣẹ̀dá Àkọsílẹ̀", otpTitle: "Rí Dájú Àkọsílẹ̀", btnVerify: "Lọ Wọlé", loginTitle: "Wọlé sí ACH", btnLogin: "Wọlé",
        phName: "Tẹ orúkọ rẹ", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Ṣẹ̀dá ọ̀rọ̀ ìpamọ́", phConfirm: "Tún ọ̀rọ̀ ìpamọ́ kọ",
        termsTitle: "Àwọn Ìlànà & Àṣírí",
        termsContent: "<p><strong>1. Ìforúkọsílẹ̀:</strong> Ìforúkọsílẹ̀ jẹ́ ọ̀fẹ́.</p><p><strong>2. Ìdá:</strong> ACH ń gba ìdá 10% lórí àwọn ìfìpamọ́.</p><p><strong>3. Ìsanwó:</strong> A kò gba owó rẹ mọ́ tààrà.</p><p><strong>4. Ìwà:</strong> Àwọn olùmúlò gbọdọ̀ bọ̀wọ̀ fún ara wọn.</p><p><strong>5. Ìta:</strong> ACH kò ní ojúṣe fún àwọn ìdúnàádúrà tí kò wà lórí ẹ̀rọ.</p><p><strong>6. Àṣírí:</strong> Àwọn dátà rẹ wà ní ààbò.</p>",
        agreeText: "Mo gbà pẹ̀lú", termsLink: "Àwọn Ìlànà Iṣẹ́", andText: "àti", privacyLink: "Ìlànà Àṣírí",
        reqLength: "Ó kéré tán lẹ́tà 8", reqNumber: "Ó kéré tán nọ́mbà 1", reqUpper: "Ó kéré tán lẹ́tà ńlá 1",
        matchSuccess: "✅ Wọ́n bára wọn", matchFail: "❌ Wọn kò bára wọn"
    },
    fr: {
        navLogin: "Connexion", navSignup: "S'inscrire", formTitle: "Rejoindre ACH", lblRole: "Je m'inscris en tant que :", lblName: "Nom / Entreprise", lblEmail: "Email", lblPhone: "Téléphone", lblCountry: "Pays", lblPassword: "Mot de passe", lblConfirm: "Confirmer", btnSubmit: "Créer un compte", otpTitle: "Vérifier", btnVerify: "Aller à la connexion", loginTitle: "Connexion", btnLogin: "Connexion",
        phName: "Entrez votre nom", phEmail: "vous@exemple.com", phPhone: "800 000 0000", phPassword: "Créer un mot de passe", phConfirm: "Répéter",
        termsTitle: "Conditions & Confidentialité",
        termsContent: "<p><strong>1. Inscription :</strong> L'inscription est gratuite.</p><p><strong>2. Commission :</strong> ACH prend une commission de 10%.</p><p><strong>3. Paiements :</strong> Nous ne détenons pas vos fonds.</p><p><strong>4. Conduite :</strong> Respectez les autres utilisateurs.</p><p><strong>5. Hors Plateforme :</strong> ACH n'est pas responsable des transactions hors plateforme.</p><p><strong>6. Confidentialité :</strong> Vos données sont en sécurité.</p>",
        agreeText: "J'accepte les", termsLink: "Conditions d'Utilisation", andText: "et la", privacyLink: "Politique de Confidentialité",
        reqLength: "Au moins 8 caractères", reqNumber: "Au moins 1 chiffre", reqUpper: "Au moins 1 majuscule",
        matchSuccess: "✅ Les mots de passe correspondent", matchFail: "❌ Les mots de passe ne correspondent pas"
    },
    ar: {
        navLogin: "دخول", navSignup: "اشترك", formTitle: "انضم إلى ACH", lblRole: "أنا أسجل كـ:", lblName: "الاسم / الشركة", lblEmail: "البريد", lblPhone: "الهاتف", lblCountry: "الدولة", lblPassword: "كلمة المرور", lblConfirm: "تأكيد", btnSubmit: "إنشاء حساب", otpTitle: "تحقق", btnVerify: "الذهاب للدخول", loginTitle: "تسجيل الدخول", btnLogin: "دخول",
        phName: "أدخل اسمك", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "إنشاء كلمة مرور", phConfirm: "إعادة كلمة المرور",
        termsTitle: "الشروط والخصوصية",
        termsContent: "<p><strong>1. التسجيل:</strong> التسجيل مجاني.</p><p><strong>2. العمولة:</strong> تتقاضى ACH عمولة 10٪.</p><p><strong>3. المدفوعات:</strong> نحن لا نحتفظ بأموالك.</p><p><strong>4. السلوك:</strong> احترم الآخرين.</p><p><strong>5. خارج المنصة:</strong> ACH ليست مسؤولة عن المعاملات الخارجية.</p><p><strong>6. الخصوصية:</strong> بياناتك آمنة.</p>",
        agreeText: "أوافق على", termsLink: "شروط الخدمة", andText: "و", privacyLink: "سياسة الخصوصية",
        reqLength: "8 أحرف على الأقل", reqNumber: "رقم واحد على الأقل", reqUpper: "حرف كبير واحد على الأقل",
        matchSuccess: "✅ كلمات المرور متطابقة", matchFail: "❌ كلمات المرور غير متطابقة"
    },
    es: {
        navLogin: "Iniciar sesión", navSignup: "Registrarse", formTitle: "Unirse a ACH", lblRole: "Me registro como:", lblName: "Nombre / Empresa", lblEmail: "Correo", lblPhone: "Teléfono", lblCountry: "País", lblPassword: "Contraseña", lblConfirm: "Confirmar", btnSubmit: "Crear Cuenta", otpTitle: "Verificar", btnVerify: "Ir a Iniciar Sesión", loginTitle: "Iniciar Sesión", btnLogin: "Entrar",
        phName: "Ingresa tu nombre", phEmail: "tu@ejemplo.com", phPhone: "800 000 0000", phPassword: "Crea una contraseña", phConfirm: "Repite",
        termsTitle: "Términos y Privacidad",
        termsContent: "<p><strong>1. Registro:</strong> El registro es gratuito.</p><p><strong>2. Comisión:</strong> ACH cobra una comisión del 10%.</p><p><strong>3. Pagos:</strong> No retenemos sus fondos.</p><p><strong>4. Conducta:</strong> Respete a los demás.</p><p><strong>5. Fuera de Plataforma:</strong> ACH no es responsable de transacciones externas.</p><p><strong>6. Privacidad:</strong> Sus datos están seguros.</p>",
        agreeText: "Acepto los", termsLink: "Términos de Servicio", andText: "y la", privacyLink: "Política de Privacidad",
        reqLength: "Al menos 8 caracteres", reqNumber: "Al menos 1 número", reqUpper: "Al menos 1 mayúscula",
        matchSuccess: "✅ Las contraseñas coinciden", matchFail: "❌ Las contraseñas no coinciden"
    },
    zh: {
        navLogin: "登录", navSignup: "注册", formTitle: "加入 ACH", lblRole: "我注册为:", lblName: "全名 / 公司", lblEmail: "电子邮件", lblPhone: "电话", lblCountry: "国家", lblPassword: "密码", lblConfirm: "确认密码", btnSubmit: "创建账户", otpTitle: "验证账户", btnVerify: "去登录", loginTitle: "登录 ACH", btnLogin: "登录",
        phName: "输入您的名字", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "创建密码", phConfirm: "再次输入密码",
        termsTitle: "条款与隐私",
        termsContent: "<p><strong>1. 注册：</strong> 注册免费。</p><p><strong>2. 佣金：</strong> ACH 收取 10% 的佣金。</p><p><strong>3. 支付：</strong> 我们不直接持有您的资金。</p><p><strong>4. 行为：</strong> 尊重他人。</p><p><strong>5. 平台外：</strong> ACH 不对平台外交易负责。</p><p><strong>6. 隐私：</strong> 您的数据是安全的。</p>",
        agreeText: "我同意", termsLink: "服务条款", andText: "和", privacyLink: "隐私政策",
        reqLength: "至少8个字符", reqNumber: "至少1个数字", reqUpper: "至少1个大写字母",
        matchSuccess: "✅ 密码匹配", matchFail: "❌ 密码不匹配"
    }
};

let currentLang = 'en';

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('theme-btn');
    if (document.body.classList.contains('light-mode')) {
        btn.innerText = "🌙"; 
    } else {
        btn.innerText = "☀️"; 
    }
}

let isPasswordSecure = false;
let isPasswordMatched = false;

function checkPasswordStrength() {
    const pass = document.getElementById('ph-password').value;
    const t = translations[currentLang];
    
    const hasLength = pass.length >= 8;
    const hasNumber = /\d/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);

    document.getElementById('req-length').innerHTML = hasLength ? `✅ <span class='text-green-500'>${t.reqLength}</span>` : `❌ ${t.reqLength}`;
    document.getElementById('req-number').innerHTML = hasNumber ? `✅ <span class='text-green-500'>${t.reqNumber}</span>` : `❌ ${t.reqNumber}`;
    document.getElementById('req-upper').innerHTML = hasUpper ? `✅ <span class='text-green-500'>${t.reqUpper}</span>` : `❌ ${t.reqUpper}`;

    isPasswordSecure = hasLength && hasNumber && hasUpper;
    checkFormStatus();
}

function checkPasswordMatch() {
    const pass = document.getElementById('ph-password').value;
    const confirm = document.getElementById('ph-confirm').value;
    const msg = document.getElementById('match-msg');
    const t = translations[currentLang];

    if (confirm.length === 0) {
        msg.classList.add('hidden');
        isPasswordMatched = false;
    } else if (pass === confirm) {
        msg.classList.remove('hidden');
        msg.classList.add('text-green-500');
        msg.classList.remove('text-red-500');
        msg.innerText = t.matchSuccess;
        isPasswordMatched = true;
    } else {
        msg.classList.remove('hidden');
        msg.classList.add('text-red-500');
        msg.classList.remove('text-green-500');
        msg.innerText = t.matchFail;
        isPasswordMatched = false;
    }
    checkFormStatus();
}

function checkFormStatus() {
    const btn = document.getElementById('btn-submit');
    if (isPasswordSecure && isPasswordMatched) {
        btn.disabled = false;
        btn.className = "w-full bg-electric hover:bg-blue-600 text-white font-bold py-3 rounded-md mt-4 transition cursor-pointer";
    } else {
        btn.disabled = true;
        btn.className = "w-full bg-gray-600 text-gray-400 font-bold py-3 rounded-md mt-4 cursor-not-allowed transition";
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if(!t) return;
    
    if(document.getElementById('nav-login')) document.getElementById('nav-login').innerText = t.navLogin;
    if(document.getElementById('nav-signup')) document.getElementById('nav-signup').innerText = t.navSignup;
    if(document.getElementById('form-title')) document.getElementById('form-title').innerText = t.formTitle;
    if(document.getElementById('lbl-role')) document.getElementById('lbl-role').innerText = t.lblRole;
    if(document.getElementById('lbl-name')) document.getElementById('lbl-name').innerText = t.lblName;
    if(document.getElementById('lbl-email')) document.getElementById('lbl-email').innerText = t.lblEmail;
    if(document.getElementById('lbl-phone')) document.getElementById('lbl-phone').innerText = t.lblPhone;
    if(document.getElementById('lbl-country')) document.getElementById('lbl-country').innerText = t.lblCountry;
    if(document.getElementById('lbl-password')) document.getElementById('lbl-password').innerText = t.lblPassword;
    if(document.getElementById('lbl-confirm')) document.getElementById('lbl-confirm').innerText = t.lblConfirm;
    if(document.getElementById('btn-submit')) document.getElementById('btn-submit').innerText = t.btnSubmit;
    if(document.getElementById('otp-title')) document.getElementById('otp-title').innerText = t.otpTitle;
    if(document.getElementById('btn-verify')) document.getElementById('btn-verify').innerText = t.btnVerify;
    if(document.getElementById('login-title')) document.getElementById('login-title').innerText = t.loginTitle;
    if(document.getElementById('btn-login')) document.getElementById('btn-login').innerText = t.btnLogin;

    if(document.getElementById('ph-name')) document.getElementById('ph-name').placeholder = t.phName;
    if(document.getElementById('ph-email')) document.getElementById('ph-email').placeholder = t.phEmail;
    if(document.getElementById('ph-phone')) document.getElementById('ph-phone').placeholder = t.phPhone;
    if(document.getElementById('ph-password')) document.getElementById('ph-password').placeholder = t.phPassword;
    if(document.getElementById('ph-confirm')) document.getElementById('ph-confirm').placeholder = t.phConfirm;

    if(document.getElementById('terms-page-title')) document.getElementById('terms-page-title').innerText = t.termsTitle;
    if(document.getElementById('terms-page-content')) document.getElementById('terms-page-content').innerHTML = t.termsContent; // Using innerHTML for formatted paragraphs

    if(document.getElementById('lbl-terms')) {
        document.getElementById('lbl-terms').innerHTML = `${t.agreeText} <a href="#" onclick="showPage('terms')" class="text-gold underline">${t.termsLink}</a> ${t.andText} <a href="#" onclick="showPage('terms')" class="text-gold underline">${t.privacyLink}</a>.`;
    }

    checkPasswordStrength();
    if(document.getElementById('ph-confirm').value.length > 0) checkPasswordMatch();

    if (lang === 'ar') { document.body.setAttribute('dir', 'rtl'); } else { document.body.removeAttribute('dir'); }
}

function showPage(pageId) {
    const pages = ['home', 'register', 'otp', 'login', 'terms'];
    pages.forEach(id => {
        const el = document.getElementById('page-' + id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function togglePassword(inputId, btnId) {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    if (input.type === "password") {
        input.type = "text";
        btn.innerText = "👁️"; 
    } else {
        input.type = "password";
        btn.innerText = "🚫"; 
    }
}

async function registerUser(event) {
    event.preventDefault(); 
    
    if (!isPasswordSecure || !isPasswordMatched) {
        alert("Please ensure your password meets all requirements and matches.");
        return;
    }

    const email = document.getElementById('ph-email').value; 
    const password = document.getElementById('ph-password').value;
    const fullName = document.getElementById('ph-name').value;
    const userRole = document.getElementById('user-role').value;
    const phoneCode = document.getElementById('phone-code').value;
    const phoneNumber = document.getElementById('ph-phone').value;
    const country = document.getElementById('user-country').value;
    
    const fullPhoneNumber = phoneCode + phoneNumber;

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        phone: fullPhoneNumber,
        options: {
            data: {
                full_name: fullName,
                country: country,
                account_type: userRole
            }
        }
    });

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! Please check your email for the verification link.");
        showPage('otp'); 
    }
}

async function loginUser() {
    window.location.href = 'dashboard.html';
        }
