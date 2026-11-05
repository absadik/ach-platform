const supabaseUrl = 'https://xiqdygzcotzhqfxjrumr.supabase.co';
const supabaseKey = 'sb_publishable_faOCdh8iXeuV6x64S5U25w_J-a7vpp2';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
    en: {
        navLogin: "Login", navSignup: "Sign Up", formTitle: "Join ACH", lblRole: "I am registering as:", lblName: "Full Name / Company", lblEmail: "Email", lblPhone: "Phone Number", lblCountry: "Country", lblPassword: "Password", lblConfirm: "Confirm Password", btnSubmit: "Create Account & Verify", otpTitle: "Verify Account", btnVerify: "Go to Login", loginTitle: "Login to ACH", btnLogin: "Login",
        phName: "Enter your name", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Create a password", phConfirm: "Repeat password",
        termsTitle: "Terms of Service & Privacy",
        termsContent: "1. Registration is free. 2. ACH charges a 10% commission on successful bookings. 3. We do not hold your funds directly; all payments are processed via licensed providers (e.g., Paystack). 4. Users must respect each other. 5. ACH is not responsible for off-platform transactions. 6. Your data is safe with us and will never be sold.",
        agreeText: "I agree to the", termsLink: "Terms of Service", andText: "and", privacyLink: "Privacy Policy"
    },
    ha: {
        navLogin: "Shiga", navSignup: "Yi Rajista", formTitle: "Shiga ACH", lblRole: "Ina yin rajista a matsayin:", lblName: "Cikakken Suna", lblEmail: "Imel", lblPhone: "Lambar Waya", lblCountry: "Ƙasa", lblPassword: "Kalmar Sirri", lblConfirm: "Tabbatar da Kalmar Sirri", btnSubmit: "Ƙirƙiri Asusu", otpTitle: "Tabbatar da Asusu", btnVerify: "Je Shiga", loginTitle: "Shiga ACH", btnLogin: "Shiga",
        phName: "Shigar da sunanka", phEmail: "imel@misali.com", phPhone: "800 000 0000", phPassword: "Ƙirƙiri kalmar sirri", phConfirm: "Maimaita kalmar sirri",
        termsTitle: "Sharuɗɗa & Sirri",
        termsContent: "1. Rajista kyauta ce. 2. ACH tana karɓar kashi 10% na kowace yarjejeniya. 3. Ba mu riƙe kuɗin ku kai tsaye ba; ana biya ta hanyar kamfanoni masu lasisi. 4. Masu amfani dole su girmama juna. 5. ACH ba ta da alhakin cinikin da aka yi a wajen App. 6. Bayananku suna da tsaro.",
        agreeText: "Na yarda da", termsLink: "Sharuɗɗan Sabis", andText: "da", privacyLink: "Manufar Sirri"
    },
    yo: {
        navLogin: "Wọlé", navSignup: "Forúkọ sílẹ̀", formTitle: "Darapọ̀ mọ́ ACH", lblRole: "Mo forúkọ sílẹ̀ gẹ́gẹ́ bí:", lblName: "Orúkọ Kíkún", lblEmail: "Íméèlì", lblPhone: "Nọ́mbà Fọ́nù", lblCountry: "Orílẹ̀-èdè", lblPassword: "Ọ̀rọ̀ Ìpamọ́", lblConfirm: "Jẹ́rìí Ọ̀rọ̀ Ìpamọ́", btnSubmit: "Ṣẹ̀dá Àkọsílẹ̀", otpTitle: "Rí Dájú Àkọsílẹ̀", btnVerify: "Lọ Wọlé", loginTitle: "Wọlé sí ACH", btnLogin: "Wọlé",
        phName: "Tẹ orúkọ rẹ", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Ṣẹ̀dá ọ̀rọ̀ ìpamọ́", phConfirm: "Tún ọ̀rọ̀ ìpamọ́ kọ",
        termsTitle: "Àwọn Ìlànà & Àṣírí",
        termsContent: "1. Ìforúkọsílẹ̀ jẹ́ ọ̀fẹ́. 2. ACH ń gba ìdá 10% lórí àwọn ìfìpamọ́. 3. A kò gba owó rẹ mọ́ tààrà; a ń gba owó nípasẹ̀ àwọn olùpèsè ìwé àṣẹ. 4. Àwọn olùmúlò gbọdọ̀ bọ̀wọ̀ fún ara wọn. 5. ACH kò ní ojúṣe fún àwọn ìdúnàádúrà tí kò wà lórí ẹ̀rọ. 6. Àwọn dátà rẹ wà ní ààbò.",
        agreeText: "Mo gbà pẹ̀lú", termsLink: "Àwọn Ìlànà Iṣẹ́", andText: "àti", privacyLink: "Ìlànà Àṣírí"
    },
    fr: {
        navLogin: "Connexion", navSignup: "S'inscrire", formTitle: "Rejoindre ACH", lblRole: "Je m'inscris en tant que :", lblName: "Nom / Entreprise", lblEmail: "Email", lblPhone: "Téléphone", lblCountry: "Pays", lblPassword: "Mot de passe", lblConfirm: "Confirmer", btnSubmit: "Créer un compte", otpTitle: "Vérifier", btnVerify: "Aller à la connexion", loginTitle: "Connexion", btnLogin: "Connexion",
        phName: "Entrez votre nom", phEmail: "vous@exemple.com", phPhone: "800 000 0000", phPassword: "Créer un mot de passe", phConfirm: "Répéter",
        termsTitle: "Conditions & Confidentialité",
        termsContent: "1. L'inscription est gratuite. 2. ACH prend une commission de 10% sur les réservations. 3. Nous ne détenons pas vos fonds. 4. Respectez les autres utilisateurs. 5. ACH n'est pas responsable des transactions hors plateforme. 6. Vos données sont en sécurité.",
        agreeText: "J'accepte les", termsLink: "Conditions d'Utilisation", andText: "et la", privacyLink: "Politique de Confidentialité"
    },
    ar: {
        navLogin: "دخول", navSignup: "اشترك", formTitle: "انضم إلى ACH", lblRole: "أنا أسجل كـ:", lblName: "الاسم / الشركة", lblEmail: "البريد", lblPhone: "الهاتف", lblCountry: "الدولة", lblPassword: "كلمة المرور", lblConfirm: "تأكيد", btnSubmit: "إنشاء حساب", otpTitle: "تحقق", btnVerify: "الذهاب للدخول", loginTitle: "تسجيل الدخول", btnLogin: "دخول",
        phName: "أدخل اسمك", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "إنشاء كلمة مرور", phConfirm: "إعادة كلمة المرور",
        termsTitle: "الشروط والخصوصية",
        termsContent: "1. التسجيل مجاني. 2. تتقاضى ACH عمولة 10٪ على الحجوزات. 3. نحن لا نحتفظ بأموالك. 4. احترم الآخرين. 5. ACH ليست مسؤولة عن المعاملات خارج المنصة. 6. بياناتك آمنة.",
        agreeText: "أوافق على", termsLink: "شروط الخدمة", andText: "و", privacyLink: "سياسة الخصوصية"
    },
    es: {
        navLogin: "Iniciar sesión", navSignup: "Registrarse", formTitle: "Unirse a ACH", lblRole: "Me registro como:", lblName: "Nombre / Empresa", lblEmail: "Correo", lblPhone: "Teléfono", lblCountry: "País", lblPassword: "Contraseña", lblConfirm: "Confirmar", btnSubmit: "Crear Cuenta", otpTitle: "Verificar", btnVerify: "Ir a Iniciar Sesión", loginTitle: "Iniciar Sesión", btnLogin: "Entrar",
        phName: "Ingresa tu nombre", phEmail: "tu@ejemplo.com", phPhone: "800 000 0000", phPassword: "Crea una contraseña", phConfirm: "Repite",
        termsTitle: "Términos y Privacidad",
        termsContent: "1. El registro es gratuito. 2. ACH cobra una comisión del 10%. 3. No retenemos sus fondos. 4. Respete a los demás. 5. ACH no es responsable de transacciones externas. 6. Sus datos están seguros.",
        agreeText: "Acepto los", termsLink: "Términos de Servicio", andText: "y la", privacyLink: "Política de Privacidad"
    },
    zh: {
        navLogin: "登录", navSignup: "注册", formTitle: "加入 ACH", lblRole: "我注册为:", lblName: "全名 / 公司", lblEmail: "电子邮件", lblPhone: "电话", lblCountry: "国家", lblPassword: "密码", lblConfirm: "确认密码", btnSubmit: "创建账户", otpTitle: "验证账户", btnVerify: "去登录", loginTitle: "登录 ACH", btnLogin: "登录",
        phName: "输入您的名字", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "创建密码", phConfirm: "再次输入密码",
        termsTitle: "条款与隐私",
        termsContent: "1. 注册免费。2. ACH 收取 10% 的佣金。3. 我们不直接持有您的资金。4. 尊重他人。5. ACH 不对平台外交易负责。6. 您的数据是安全的。",
        agreeText: "我同意", termsLink: "服务条款", andText: "和", privacyLink: "隐私政策"
    }
};

function changeLanguage(lang) {
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
    if(document.getElementById('terms-page-content')) document.getElementById('terms-page-content').innerText = t.termsContent;

    if(document.getElementById('lbl-terms')) {
        document.getElementById('lbl-terms').innerHTML = `${t.agreeText} <a href="#" onclick="showPage('terms')" class="text-gold underline">${t.termsLink}</a> ${t.andText} <a href="#" onclick="showPage('terms')" class="text-gold underline">${t.privacyLink}</a>.`;
    }

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
        btn.innerText = "🙈"; 
    } else {
        input.type = "password";
        btn.innerText = "👁️"; 
    }
}

async function registerUser(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('ph-email').value; 
    const password = document.getElementById('ph-password').value;
    const confirmPassword = document.getElementById('ph-confirm').value;
    const fullName = document.getElementById('ph-name').value;
    const userRole = document.getElementById('user-role').value;
    const phoneCode = document.getElementById('phone-code').value;
    const phoneNumber = document.getElementById('ph-phone').value;
    const country = document.getElementById('user-country').value;
    
    if (password !== confirmPassword) { alert("Error: Passwords do not match!"); return; }
    if (password.length < 6) { alert("Error: Password must be at least 6 characters."); return; }
    
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
