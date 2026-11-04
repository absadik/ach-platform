const supabaseUrl = 'PASTE_YOUR_PROJECT_URL_HERE';
const supabaseKey = 'PASTE_YOUR_PUBLISHABLE_KEY_HERE';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
    en: {
        navLogin: "Login", navSignup: "Sign Up", heroTitle1: "Connect. Create.", heroTitle2: "Advertise Globally.", heroDesc: "The global marketplace.", heroBtn: "Get Started Free",
        formTitle: "Join ACH", lblName: "Full Name / Company", lblEmail: "Email", lblPhone: "Phone", btnSubmit: "Create Account",
        otpTitle: "Verify Account", btnVerify: "Verify", loginTitle: "Login to ACH", btnLogin: "Login",
        phName: "Enter your name", phEmail: "you@example.com", phPhone: "+234...", phLoginEmail: "Email Address", phLoginPass: "Password"
    },
    ha: {
        navLogin: "Shiga", navSignup: "Yi Rajista", heroTitle1: "Haɗa. Ƙirƙira.", heroTitle2: "Tallata a Duniya.", heroDesc: "Kasuwar duniya.", heroBtn: "Fara Kyauta",
        formTitle: "Shiga ACH", lblName: "Cikakken Suna", lblEmail: "Imel", lblPhone: "Waya", btnSubmit: "Ƙirƙiri Asusu",
        otpTitle: "Tabbatar da Asusu", btnVerify: "Tabbatar", loginTitle: "Shiga ACH", btnLogin: "Shiga",
        phName: "Shigar da sunanka", phEmail: "imel@misali.com", phPhone: "+234...", phLoginEmail: "Adireshin Imel", phLoginPass: "Kalmar Sirri"
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
    if(document.getElementById('btn-submit')) document.getElementById('btn-submit').innerText = t.btnSubmit;
    if(document.getElementById('otp-title')) document.getElementById('otp-title').innerText = t.otpTitle;
    if(document.getElementById('btn-verify')) document.getElementById('btn-verify').innerText = t.btnVerify;
    if(document.getElementById('login-title')) document.getElementById('login-title').innerText = t.loginTitle;
    if(document.getElementById('btn-login')) document.getElementById('btn-login').innerText = t.btnLogin;

    if(document.getElementById('ph-name')) document.getElementById('ph-name').placeholder = t.phName;
    if(document.getElementById('ph-email')) document.getElementById('ph-email').placeholder = t.phEmail;
    if(document.getElementById('ph-phone')) document.getElementById('ph-phone').placeholder = t.phPhone;
    if(document.getElementById('ph-login-email')) document.getElementById('ph-login-email').placeholder = t.phLoginEmail;
    if(document.getElementById('ph-login-pass')) document.getElementById('ph-login-pass').placeholder = t.phLoginPass;

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

async function registerUser(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('ph-email').value; 
    const password = document.getElementById('ph-login-pass').value;
    const fullName = document.getElementById('ph-name').value;
    
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                full_name: fullName,
                account_type: 'creator' 
            }
        }
    });

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! Please check your email for the OTP code.");
        showPage('otp'); 
    }
      }
