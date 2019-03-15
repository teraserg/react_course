export default function (data) {
    return new Promise((res, rej) => setTimeout(() => res(data), 100))
}
