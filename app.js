const supabaseUrl = 'https://xiqdygzcotzhqfxjrumr.supabase.co';
const supabaseKey = 'sb_publishable_faOCdh8iXeuV6x64S5U25w_J-a7vpp2';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
    en: {
        navLogin: "Login", navSignup: "Sign Up", heroTitle1: "Connect. Create.", heroTitle2: "Advertise Globally.", heroDesc: "The global marketplace connecting top creators, celebrities, companies, and media.", heroBtn: "Get Started Free",
        formTitle: "Join ACH", lblRole: "I am registering as:", lblName: "Full Name / Company", lblEmail: "Email", lblPhone: "Phone Number", lblCountry: "Country", lblPassword: "Password", lblConfirm: "Confirm Password", lblTerms: "I agree to the Terms of Service.", btnSubmit: "Create Account & Verify",
        otpTitle: "Verify Account", btnVerify: "Go to Login", loginTitle: "Login to ACH", btnLogin: "Login",
        phName: "Enter your name", phEmail: "you@example.com", phPhone: "800 000 0000", phPassword: "Create a password", phConfirm: "Repeat password"
    },
    ha: {
        navLogin: "Shiga", navSignup: "Yi Rajista", heroTitle1: "Haɗa. Ƙirƙira.", heroTitle2: "Tallata a Duniya.", heroDesc: "Kasuwar duniya.", heroBtn: "Fara Kyauta",
        formTitle: "Shiga ACH", lblRole: "Ina yin rajista a matsayin:", lblName: "Cikakken Suna", lblEmail: "Imel", lblPhone: "Lambar Waya", lblCountry: "Ƙasa", lblPassword: "Kalmar Sirri", lblConfirm: "Tabbatar da Kalmar Sirri", lblTerms: "Na yarda da Sharuɗɗan Sabis.", btnSubmit: "Ƙirƙiri Asusu",
        otpTitle: "Tabbatar da Asusu", btnVerify: "Je Shiga", loginTitle: "Shiga ACH", btnLogin: "Shiga",
        phName: "Shigar da sunanka", phEmail: "imel@misali.com", phPhone: "800 000 0000", phPassword: "Ƙirƙiri kalmar sirri", phConfirm: "Maimaita kalmar sirri"
    },
    // (You can keep adding other languages here later)
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
    if(document.getElementById('lbl-role')) document.getElementById('lbl-role').innerText = t.lblRole;
    if(document.getElementById('lbl-name')) document.getElementById('lbl-name').innerText = t.lblName;
    if(document.getElementById('lbl-email')) document.getElementById('lbl-email').innerText = t.lblEmail;
    if(document.getElementById('lbl-phone')) document.getElementById('lbl-phone').innerText = t.lblPhone;
    if(document.getElementById('lbl-country')) document.getElementById('lbl-country').innerText = t.lblCountry;
    if(document.getElementById('lbl-password')) document.getElementById('lbl-password').innerText = t.lblPassword;
    if(document.getElementById('lbl-confirm')) document.getElementById('lbl-confirm').innerText = t.lblConfirm;
    if(document.getElementById('lbl-terms')) document.getElementById('lbl-terms').innerText = t.lblTerms;
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
    if (input.type === "password") { input.type = "text"; } else { input.type = "password"; }
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
    // Later, we will add real login logic here
    window.location.href = 'dashboard.html';
            }
