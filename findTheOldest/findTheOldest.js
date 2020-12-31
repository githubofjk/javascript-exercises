let findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let currentYear = new Date().getFullYear();

        // if oldest has no death-date, get age as of this year
        let oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;

        // if person with no death-date, get their age as of today
        let personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;

        // replace existing oldest if current person is older than existing oldest
        if (personAge > oldestAge) {
            oldest = person;
        }

        return oldest;
    });
}

module.exports = findTheOldest