const LENG = 37;
let amiya_counter = 0;

let empty_string = (len) => {
    let ret = "";
    for (let i = 0; i < len; ++i) {
        ret += '&nbsp;';
    }
    return ret;
}

let random_gpa = () => (Math.random() * 5).toFixed(1);
let split_gpa = (str) => Number(str.substring(str.length - 3, str.length));
let split_info = (str) => {
    let info = {name: "", gpa: split_gpa(str)};
    for (let i = 0; i < str.length; ++i) {
        if (str.substring(i, i + 6) != "&nbsp;") {
            info.name += str[i];
        } else {
            break;
        }
    }
    return info;
}

let generate_info = (name, gpa) => {
    return `${name}` + empty_string(LENG - name.length) + `${gpa}`;
}

function add_new_person(name, gpa) {
    let users = document.getElementById("user-info");
    let new_person = document.createElement("p");
    new_person.className = "person";
    new_person.innerHTML = generate_info(name, gpa);
    users.append(new_person);
}

function add_a_student() {
    let haha = random_gpa();
    if (haha >= 3.9) {
        add_new_person("amiya" + `${amiya_counter}`, haha);
        ++amiya_counter;
    } else {
        (async () => {
            const res = await fetch("https://randomuser.me/api");
            const json = await res.json();
            let tit = json.results[0].name.title;
            let fir = json.results[0].name.first;
            let las = json.results[0].name.last;
            if ('A' > fir[0] || fir[0] > 'Z') {
                tit = "Mr";
                fir = "Gregory";
                las = "Travis";
            }
            add_new_person(`${tit}` + ". " + `${fir}` + ' ' + `${las}`, haha);
        })();
    }
}

function change_gpa(type) {
    let users = document.getElementById("user-info");
    let bag = users.querySelectorAll("p");
    for (let i = 0; i < bag.length; ++i) {
        let info = split_info(bag[i].innerHTML);
        if (type > 0) {
            info.gpa += Math.min(random_gpa(), (5 - info.gpa) * Math.random());
        } else {
            info.gpa -= Math.min(random_gpa(), info.gpa * Math.random());
        }
        info.gpa = info.gpa.toFixed(1);
        bag[i].innerHTML = generate_info(info.name, info.gpa);
    }
}

function sort() {
    let users = document.getElementById("user-info");
    let bag = users.querySelectorAll("p");
    for (let i = 0; i < bag.length; ++i) {
        for (let j = i + 1; j < bag.length; ++j) {
            let gpa_i = split_gpa(bag[i].innerHTML);
            let gpa_j = split_gpa(bag[j].innerHTML);
            if (gpa_i < gpa_j) {
                let temp = bag[i].innerHTML;
                bag[i].innerHTML = bag[j].innerHTML;
                bag[j].innerHTML = temp;
            }
        }
    }
}

function suspension() {
    let users = document.getElementById("user-info");
    let bag = users.querySelectorAll("p");
    for (let i = bag.length - 1; i >= 0; --i) {
        if (split_gpa(bag[i].innerHTML) < 1.5) {
            users.removeChild(users.childNodes[i]);
        }
    }
}

function average() {
    let users = document.getElementById("user-info");
    let bag = users.querySelectorAll("p");
    let sum = 0.0;
    for (let i = 0; i < bag.length; ++i) {
        sum += split_gpa(bag[i].innerHTML);
    }
    sum = (sum / bag.length).toFixed(2);
    let item = document.getElementById("average_front");
    item.style.opacity = 1;
    item = document.getElementById("average_number");
    item.innerHTML = `${sum}`;
}