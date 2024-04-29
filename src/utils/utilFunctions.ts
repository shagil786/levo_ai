export function timeAgo(start_date: any) {
    const start = new Date(start_date);
    const now = new Date();

    const difference = now.getTime() - start.getTime();

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return years + (years === 1 ? " year ago" : " years ago");
    } else if (months > 0) {
        return months + (months === 1 ? " month ago" : " months ago");
    } else if (days > 0) {
        return days + (days === 1 ? " day ago" : " days ago");
    } else if (hours > 0) {
        return hours + (hours === 1 ? " hour ago" : " hours ago");
    } else if (minutes > 0) {
        return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
    } else {
        return seconds + (seconds === 1 ? " second ago" : " seconds ago");
    }
}

export function timeTaken(duration: any) {
    let seconds = duration;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let timeString = "";

    if (hours > 0) {
        timeString += hours < 10 ? "0" + hours + ":" : hours + ":";
    }

    timeString += minutes < 10 ? "0" + minutes : minutes;
    timeString +=
        ":" + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);

    return timeString;
}

export function getArray(data: any, type: string) {
    if (type === "failed") {
        return data.filter((item: any) => item.status === "FAILURE" || item.status === "ERROR");
    } else if (type === "success") {
        return data.filter((item: any) => item.status === "SUCCESS");
    } else {
        return [];
    }
}