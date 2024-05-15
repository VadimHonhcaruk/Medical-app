export default function transformString(str) {
    let newStr = str.toLowerCase();
    newStr = newStr.replace(/-[а-яёїіъє]/g, (match) => match.toUpperCase());
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    return newStr;
}
