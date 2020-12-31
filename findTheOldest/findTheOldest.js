let findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // if oldest object is empty, then current person is oldest
        if (("name" in oldest) === false) {
            for (key in person) {
                oldest[key] = person[key];
            }
        }

        let date = new Date();
        currentYear = date.getFullYear();

        // if oldest has no death-date, set to this year
        let oldestYearOfDeath = oldest.yearOfDeath ? oldest.yearOfDeath : currentYear;

        // if person with no death-date, get their age as of today
        let personYearOfDeath = person.yearOfDeath ? person.yearOfDeath : currentYear;

        // replace existing oldest if current person is older than existing oldest
        if ((personYearOfDeath - person.yearOfBirth) > (oldestYearOfDeath - oldest.yearOfBirth)) {
            for (key in person) {
                oldest[key] = person[key];
            }
        }
        return oldest;
    }, {});
}

module.exports = findTheOldest