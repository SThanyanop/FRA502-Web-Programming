function show_mainProfile() {
    const c1 = document.getElementById('main_profile');
    const c2 = document.getElementById('sub_profile');
    const c3 = document.getElementById('logo');

    c1.classList.add('show');
    c2.classList.remove('show');
    c3.classList.remove('show');
}

function show_subProfile() {
    const c1 = document.getElementById('main_profile');
    const c2 = document.getElementById('sub_profile');
    const c3 = document.getElementById('logo');

    c2.classList.add('show');
    c1.classList.remove('show');
    c3.classList.remove('show');
}

function show_logo() {
    const c1 = document.getElementById('main_profile');
    const c2 = document.getElementById('sub_profile');
    const c3 = document.getElementById('logo');

    c3.classList.add('show');
    c1.classList.remove('show');
    c2.classList.remove('show');
}

function swapCardtoright() {
    const c1 = document.getElementById('intro');
    const c2 = document.getElementById('contact');

    if (c1.classList.contains('show')) {
        c1.classList.remove('show');
        c2.classList.add('show');
    }
    else {
        c2.classList.remove('show');
        c1.classList.add('show');
    }
}

function swapCardtoleft() {
    const c1 = document.getElementById('intro');
    const c2 = document.getElementById('contact');

    if (c1.classList.contains('show')) {
        c1.classList.remove('show');
        c2.classList.add('show');
    }
    else {
        c2.classList.remove('show');
        c1.classList.add('show');
    }
}
