export function inc(x: string) {
    let a = parseInt((document.getElementById(x) as HTMLInputElement).value);
    (document.getElementById(x) as HTMLInputElement).value = (a + 1).toString();
}

export function dec(x: string) {
    let a = parseInt((document.getElementById(x) as HTMLInputElement).value);
    if (a > 1) {
        a -= 1;
    }
    (document.getElementById(x) as HTMLInputElement).value = a.toString();
}
