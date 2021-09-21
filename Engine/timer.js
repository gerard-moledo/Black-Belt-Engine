class Timer {
    static waitAndRun(seconds, func, ...args) {
        setTimeout(func, seconds * 1000, ...args);
    }

    static waitAndRunLoop(seconds, func, ...args) {
        setInterval(func, seconds * 1000, ...args);
    }
}