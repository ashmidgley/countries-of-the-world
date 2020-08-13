export const getTimeString = (expired) => {
    var minutes = Math.floor(expired / 60);
    var seconds = expired % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
};
