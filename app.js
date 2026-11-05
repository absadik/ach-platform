const supabaseUrl = 'https://xiqdygzcotzhqfxjrumr.supabase.co';
const supabaseKey = 'sb_publishable_faOCdh8iXeuV6x64S5U25w_J-a7vpp2';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
    en: {
        navLogin: "Login", navSignup: "Sign Up", heroTitle1: "Connect. Create.", heroTitle2: "Advertise Globally.", heroDesc: "The global marketplace connecting top creators, celebrities, companies, and media.", heroBtn: "Get Started Free",
        formTitle: "Join ACH", lblName: "Full Name / Company", lblEmail: "Email", lblPhone: "Phone Number", lblCountry: "Country", lblPassword: "Password", lblConfirm: "Confirm Password", btnSubmit: "Create Account & Verify",
        otpTitle: "Verify Account", btnVerify: "Go to Login", loginTitle: "Login to ACH", btnLogin: "Login",
        phName: "Enter your name", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Create a password", phConfirm: "Repeat password"
    },
    ha: {
        navLogin: "Shiga", navSignup: "Yi Rajista", heroTitle1: "Haɗa. Ƙirƙira.", heroTitle2: "Tallata a Duniya.", heroDesc: "Kasuwar duniya.", heroBtn: "Fara Kyauta",
        formTitle: "Shiga ACH", lblName: "Cikakken Suna", lblEmail: "Imel", lblPhone: "Lambar Waya", lblCountry: "Ƙasa", lblPassword: "Kalmar Sirri", lblConfirm: "Tabbatar da Kalmar Sirri", btnSubmit: "Ƙirƙiri Asusu",
        otpTitle: "Tabbatar da Asusu", btnVerify: "Je Shiga", loginTitle: "Shiga ACH", btnLogin: "Shiga",
        phName: "Shigar da sunanka", phEmail: "imel@misali.com", phPhone: "800 000 0000", phPassword: "Ƙirƙiri kalmar sirri", phConfirm: "Maimaita kalmar sirri"
    },
    yo: {
        navLogin: "Wọlé", navSignup: "Forúkọ sílẹ̀", heroTitle1: "So. Ṣẹ̀dá.", heroTitle2: "Polowo Káríayé.", heroDesc: "Ọjà káríayé.", heroBtn: "Bẹ̀rẹ̀ Ọ̀fẹ́",
        formTitle: "Darapọ̀ mọ́ ACH", lblName: "Orúkọ Kíkún", lblEmail: "Íméèlì", lblPhone: "Nọ́mbà Fọ́nù", lblCountry: "Orílẹ̀-èdè", lblPassword: "Ọ̀rọ̀ Ìpamọ́", lblConfirm: "Jẹ́rìí Ọ̀rọ̀ Ìpamọ́", btnSubmit: "Ṣẹ̀dá Àkọsílẹ̀",
        otpTitle: "Rí Dájú Àkọsílẹ̀", btnVerify: "Lọ Wọlé", loginTitle: "Wọlé sí ACH", btnLogin: "Wọlé",
        phName: "Tẹ orúkọ rẹ", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Ṣẹ̀dá ọ̀rọ̀ ìpamọ́", phConfirm: "Tún ọ̀rọ̀ ìpamọ́ kọ"
    },
    fr: {
        navLogin: "Connexion", navSignup: "S'inscrire", heroTitle1: "Connectez. Créez.", heroTitle2: "Annoncez.", heroDesc: "La place de marché mondiale.", heroBtn: "Commencer",
        formTitle: "Rejoindre ACH", lblName: "Nom / Entreprise", lblEmail: "Email", lblPhone: "Téléphone", lblCountry: "Pays", lblPassword: "Mot de passe", lblConfirm: "Confirmer le mot de passe", btnSubmit: "Créer un compte",
        otpTitle: "Vérifier", btnVerify: "Aller à la connexion", loginTitle: "Connexion", btnLogin: "Connexion",
        phName: "Entrez votre nom", phEmail: "vous@exemple.com", phPhone: "800 000 0000", phPassword: "Créer un mot de passe", phConfirm: "Répéter le mot de passe"
    },
    ar: {
        navLogin: "دخول", navSignup: "اشترك", heroTitle1: "تواصل. ابتكر.", heroTitle2: "أعلن.", heroDesc: "السوق العالمية.", heroBtn: "ابدأ",
        formTitle: "انضم إلى ACH", lblName: "الاسم / الشركة", lblEmail: "البريد", lblPhone: "رقم الهاتف", lblCountry: "الدولة", lblPassword: "كلمة المرور", lblConfirm: "تأكيد كلمة المرور", btnSubmit: "إنشاء حساب",
        otpTitle: "تحقق من الحساب", btnVerify: "الذهاب للدخول", loginTitle: "تسجيل الدخول", btnLogin: "دخول",
        phName: "أدخل اسمك", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "إنشاء كلمة مرور", phConfirm: "إعادة كلمة المرور"
    },
    es: {
        navLogin: "Iniciar sesión", navSignup: "Registrarse", heroTitle1: "Conecta. Crea.", heroTitle2: "Anuncia Globalmente.", heroDesc: "El mercado global.", heroBtn: "Empezar Gratis",
        formTitle: "Unirse a ACH", lblName: "Nombre / Empresa", lblEmail: "Correo", lblPhone: "Teléfono", lblCountry: "País", lblPassword: "Contraseña", lblConfirm: "Confirmar Contraseña", btnSubmit: "Crear Cuenta",
        otpTitle: "Verificar Cuenta", btnVerify: "Ir a Iniciar Sesión", loginTitle: "Iniciar Sesión", btnLogin: "Entrar",
        phName: "Ingresa tu nombre", phEmail: "tu@ejemplo.com", phPhone: "800 000 0000", phPassword: "Crea una contraseña", phConfirm: "Repite la contraseña"
    },
    zh: {
        navLogin: "登录", navSignup: "注册", heroTitle1: "连接。创造。", heroTitle2: "全球推广。", heroDesc: "全球市场。", heroBtn: "免费开始",
        formTitle: "加入 ACH", lblName: "全名 / 公司", lblEmail: "电子邮件", lblPhone: "电话", lblCountry: "国家", lblPassword: "密码", lblConfirm: "确认密码", btnSubmit: "创建账户",
        otpTitle: "验证账户", btnVerify: "去登录", loginTitle: "登录 ACH", btnLogin: "登录",
        phName: "输入您的名字", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "创建密码", phConfirm: "再次输入密码"
    }
};

function changeLanguage(lang) {
    const t = translations[lang];
    if(!t) return;
    
    if(document.getElementById('nav-login')) document.getElementById('nav-login').innerText = t.navLogin;
    if(document.getElementById('nav-signup')) document.getElementById('nav-signup').innerText = t.navSignup;
    if(document.getElementById('hero-title-1')) document.getElementById('hero-title-1').innerText = t.heroTitle1;
    if(document.getElementById('hero-title-2')) document.getElementById('hero-title-2').innerText = t.heroTitle2;
    if(document.getElementById('hero-desc')) document.getElementById('hero-desc').innerText = t.heroDesc;
    if(document.getElementById('hero-btn')) document.getElementById('hero-btn').innerText = t.heroBtn;
    if(document.getElementById('form-title')) document.getElementById('form-title').innerText = t.formTitle;
    
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

    // Placeholders
    if(document.getElementById('ph-name')) document.getElementById('ph-name').placeholder = t.phName;
    if(document.getElementById('ph-email')) document.getElementById('ph-email').placeholder = t.phEmail;
    if(document.getElementById('ph-phone')) document.getElementById('ph-phone').placeholder = t.phPhone;
    if(document.getElementById('ph-password')) document.getElementById('ph-password').placeholder = t.phPassword;
    if(document.getElementById('ph-confirm')) document.getElementById('ph-confirm').placeholder = t.phConfirm;

    if (lang === 'ar') { document.body.setAttribute('dir', 'rtl'); } else { document.body.removeAttribute('dir'); }
}

function showPage(pageId) {
    const pages = ['home', 'register', 'otp', 'login'];
    pages.forEach(id => {
        const el = document.getElementById('page-' + id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

async function registerUser(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('ph-email').value; 
    const password = document.getElementById('ph-password').value;
    const confirmPassword = document.getElementById('ph-confirm').value;
    const fullName = document.getElementById('ph-name').value;
    const phoneCode = document.getElementById('phone-code').value;
    const phoneNumber = document.getElementById('ph-phone').value;
    const country = document.getElementById('user-country').value;
    
    if (password !== confirmPassword) {
        alert("Error: Passwords do not match!");
        return; 
    }

    if (password.length < 6) {
        alert("Error: Password must be at least 6 characters.");
        return;
    }
    
    const fullPhoneNumber = phoneCode + phoneNumber;

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        phone: fullPhoneNumber,
        options: {
            data: {
                full_name: fullName,
                country: country,
                account_type: 'creator' 
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
