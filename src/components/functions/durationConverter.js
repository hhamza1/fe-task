const durationConverter = duration => {
    duration = duration.match(/[0-9]+/);
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    return `${hours}h ${minutes}min`;
}


export default durationConverter;